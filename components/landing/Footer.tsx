import { Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">CallAI</span>
            </div>
            <p className="text-slate-400">
              One phone number. Infinite customer care.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <div className="space-y-2 text-slate-400">
              <div>
                <Link
                  href="#how-it-works"
                  className="hover:text-white transition-colors"
                >
                  How It Works
                </Link>
              </div>
              <div>
                <Link
                  href="#pain-points"
                  className="hover:text-white transition-colors"
                >
                  The Problem
                </Link>
              </div>
              <div>
                <Link
                  href="#waitlist"
                  className="hover:text-white transition-colors"
                >
                  Early Access
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <div className="space-y-2 text-slate-400">
              <div>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2 text-slate-400">
              <div>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </div>
              <div>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 CallAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
