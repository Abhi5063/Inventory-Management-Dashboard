import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { z } from "zod";
import bcrypt from "bcryptjs";
import { MongoClient } from "mongodb";

// const prisma = new PrismaClient();

const registerSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(6),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { name, email, password } = registerSchema.parse(req.body);

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate unique username using Prisma
    const baseUsername = email.split('@')[0];
    let username = baseUsername;
    let counter = 1;

    // Check if username exists and generate a unique one
    while (await prisma.user.findUnique({ where: { username } })) {
      username = `${baseUsername}${counter}`;
      counter++;
    }

    const createdUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        username,
        createdAt: new Date(),
      },
    });

    res.status(201).json({ id: createdUser.id, name: createdUser.name, email: createdUser.email });
    // Log the error for debugging
    console.error("Registration Error:", error);
    if (error instanceof Error) {
      console.error("Error message:", error.message);
      console.error("Error stack:", error.stack);
      res.status(500).json({ error: error.message, stack: error.stack });
    } else {
      console.error("Unknown error:", error);
      res.status(500).json({ error: "An unknown error occurred" });
    }
  }
}
