import { Card, CardContent } from "@/components/ui/card";

export function FAQ() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-6">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                How does setup work?
              </h3>
              <p className="text-slate-600">
                We provide you with a phone number. You add it to your website
                wherever customers might want to call for support. That's it!
                Our AI handles everything else.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                What if the AI can't help a customer?
              </h3>
              <p className="text-slate-600">
                Our AI is smart about knowing its limits. When it encounters
                something complex or sensitive, it immediately transfers the
                customer to your team with full context about what the customer
                needs.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                Do I need to integrate with my existing systems?
              </h3>
              <p className="text-slate-600">
                Not initially! CallAI works independently and creates tasks for
                your team when needed. Advanced integrations will be available
                later for stores that want deeper automation.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <h3 className="font-semibold text-slate-900 mb-2">
                When will CallAI be available?
              </h3>
              <p className="text-slate-600">
                We're currently in development and planning to launch in early
                2024. Join our waitlist to be notified as soon as we're ready
                for beta testing.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
