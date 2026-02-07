"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Package, Home, BarChart2, FileText, Activity, LogOut } from "react-icons/fi";
import { useAuth } from "../authContext";
import { ModeToggle } from "./ModeToggle";

export default function AppHeader() {
  const { logout, user } = useAuth();
  const router = useRouter();
  const { toast } = useToast();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);

    try {
      await logout();

      toast({
        title: "Logout Successful!",
        description: "You have been logged out successfully.",
      });

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error) {
      toast({
        title: "Logout Failed",
        description: "Failed to logout. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoggingOut(false);
    }
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="glass-navbar sticky top-0 z-50 animate-slide-down">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo and Welcome Section */}
          <div className="flex items-center gap-4">
            <div
              className="flex aspect-square size-12 items-center justify-center rounded-xl gradient-primary shadow-lg cursor-pointer hover-lift"
              onClick={() => handleNavigation("/")}
            >
              <Package className="text-2xl text-white" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-xl font-bold gradient-text">
                Welcome, {user?.name}!
              </h1>
              <p className="text-xs text-muted-foreground">{user?.email}</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center flex-wrap justify-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation("/")}
              className="hover:bg-primary/10 transition-all"
            >
              <Home className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation("/business-insights")}
              className="hover:bg-primary/10 transition-all"
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Insights</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation("/api-docs")}
              className="hover:bg-primary/10 transition-all"
            >
              <FileText className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">API Docs</span>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => handleNavigation("/api-status")}
              className="hover:bg-primary/10 transition-all"
            >
              <Activity className="mr-2 h-4 w-4" />
              <span className="hidden sm:inline">Status</span>
            </Button>

            <div className="h-6 w-px bg-border mx-1" />

            <ModeToggle />

            <Button
              onClick={handleLogout}
              disabled={isLoggingOut}
              size="sm"
              className="gradient-primary hover:opacity-90 transition-all shadow-md hover-lift text-white"
            >
              {isLoggingOut ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="hidden sm:inline">Logging Out...</span>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:inline">Logout</span>
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
