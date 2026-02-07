import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        // Attempt to connect to the database
        await prisma.$connect();

        // Optional: Run a simple query to ensure everything is working
        // e.g., await prisma.user.findFirst();

        res.status(200).json({ status: "ok", message: "Database connection successful" });
    } catch (error) {
        console.error("Health Check Error:", error);
        if (error instanceof Error) {
            res.status(500).json({ status: "error", message: error.message, stack: error.stack });
        } else {
            res.status(500).json({ status: "error", message: "Unknown database error" });
        }
    } finally {
        // In serverless, we usually rely on the singleton to keep connection open, 
        // but explicit disconnect logic is sometimes needed if we were testing specifically.
        // Here we just let it be.
    }
}
