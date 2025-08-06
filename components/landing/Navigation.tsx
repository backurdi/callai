import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Link from "next/link";

export function Navigation() {
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-brand-900 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">CallAI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#how-it-works"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#pain-points"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              The Problem
            </Link>
            <Link
              href="#waitlist"
              className="text-slate-600 hover:text-slate-900 transition-colors"
            >
              Early Access
            </Link>
            <Button
              asChild
              size="sm"
              className="bg-brand-500 hover:bg-brand-700"
            >
              <Link href="#waitlist">Join Waitlist</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
