import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TradingSidebar } from "./TradingSidebar";
import { ReactNode } from "react";

interface TradingLayoutProps {
  children: ReactNode;
}

export function TradingLayout({ children }: TradingLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-dashboard">
        <TradingSidebar />
        <main className="flex-1 flex flex-col">
          {/* Header with trigger */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center px-6">
            <SidebarTrigger className="mr-4" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">Omni Trade Dash</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Sistema Activo</span>
            </div>
          </header>
          
          {/* Main Content */}
          <div className="flex-1 p-6">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}