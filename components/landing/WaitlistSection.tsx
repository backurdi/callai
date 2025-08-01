import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function WaitlistSection() {
  return (
    <section id="waitlist" className="py-20 bg-brand-700">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Vær blandt de første til at prøve CallAI
        </h2>
        <p className="text-xl text-accent-100 mb-8">
          Tilmeld dig vores eksklusive venteliste og få tidlig adgang når vi
          lancerer. Derudover får tidlige brugere særlige priser og prioriteret
          support.
        </p>

        <Card className="max-w-md mx-auto bg-white">
          <CardContent className="pt-6">
            <form className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Indtast din e-mailadresse"
                  className="w-full"
                />
              </div>
              <div>
                <Input
                  type="text"
                  placeholder="Dit butiksnavn (valgfri)"
                  className="w-full"
                />
              </div>
              <Button className="w-full bg-brand-500 hover:bg-brand-600 text-lg py-3">
                Tilmeld dig ventelisten
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
            <p className="text-xs text-slate-500 mt-4">
              Vi sender aldrig spam. Afmeld til enhver tid.
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-accent-100">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Tidlig adgang</div>
            <div className="text-sm">Vær først til at prøve CallAI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Særlige priser</div>
            <div className="text-sm">Eksklusive lanceringsrabatter</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">
              Prioriteret support
            </div>
            <div className="text-sm">Direkte linje til vores team</div>
          </div>
        </div>
      </div>
    </section>
  );
}
