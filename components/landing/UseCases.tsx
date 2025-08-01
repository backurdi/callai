import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users } from "lucide-react";

export function UseCases() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Perfect For These Common Scenarios
          </h2>
          <p className="text-xl text-slate-600">
            See how CallAI handles typical customer service situations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Order Status Inquiries
                    </h3>
                    <p className="text-slate-600 text-sm">
                      "Where is my order?" → AI provides tracking info instantly
                      or creates a task if the order needs investigation.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Store Hours & Location
                    </h3>
                    <p className="text-slate-600 text-sm">
                      "When are you open?" → AI provides immediate answers about
                      hours, location, and contact info.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Return & Exchange Policy
                    </h3>
                    <p className="text-slate-600 text-sm">
                      "Can I return this?" → AI explains your return policy and
                      guides customers through the process.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Complex Product Issues
                    </h3>
                    <p className="text-slate-600 text-sm">
                      "My product is broken" → AI gathers details and
                      immediately connects customer to your support team.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Billing Questions
                    </h3>
                    <p className="text-slate-600 text-sm">
                      "I was charged twice" → AI recognizes sensitive issue and
                      transfers to human with full context.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Custom Requests
                    </h3>
                    <p className="text-slate-600 text-sm">
                      "Can you make this in blue?" → AI creates a detailed task
                      for your team to follow up personally.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
