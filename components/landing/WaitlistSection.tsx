import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 bg-emerald-600">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Be Among the First to Try CallAI
        </h2>
        <p className="text-xl text-emerald-100 mb-8">
          Join our exclusive waitlist and get early access when we launch. Plus,
          early adopters get special pricing and priority support.
        </p>

        <Card className="max-w-md mx-auto bg-white">
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Your store name (optional)"
                  className="w-full"
                />
              </div>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
            <p className="text-xs text-slate-500 mt-4">
              We'll never spam you. Unsubscribe at any time.
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-emerald-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Early Access</div>
            <div className="text-sm">Be first to try CallAI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Special Pricing</div>
            <div className="text-sm">Exclusive launch discounts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              Priority Support
            </div>
            <div className="text-sm">Direct line to our team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
