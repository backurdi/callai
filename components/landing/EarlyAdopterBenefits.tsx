import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Star, Users } from "lucide-react";

export function EarlyAdopterBenefits() {
  return (
    <section className="py-20 bg-accent-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Fordele for Tidlige Brugere
          </h2>
          <p className="text-xl text-slate-600">
            Tilmeld dig nu og få eksklusive fordele, der ikke vil være
            tilgængelige senere
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Start Gratis For Altid
              </h3>
              <p className="text-slate-600 mb-6">
                Tidlige brugere får vores Starter-plan helt gratis i de første 6
                måneder - intet kreditkort påkrævet.
              </p>
              <Badge className="bg-brand-100 text-brand-800">
                899 kr/måned værdi
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-brand-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-brand-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Livstid 50% Rabat
              </h3>
              <p className="text-slate-600 mb-6">
                Lås 50% rabat på enhver betalt plan for livet. Denne prissætning
                vil aldrig være tilgængelig igen efter lanceringen.
              </p>
              <Badge className="bg-brand-100 text-brand-800">
                Eksklusiv prissætning
              </Badge>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-8 text-center">
              <div className="w-16 h-16 bg-brand-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                VIP Support
              </h3>
              <p className="text-slate-600 mb-6">
                Direkte adgang til vores grundlæggerteam, prioriterede
                funktionsanmodninger og eksklusiv beta-adgang til nye
                funktioner.
              </p>
              <Badge className="bg-brand-100 text-brand-800">
                Grundlægger adgang
              </Badge>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            ⏰ Begrænset tilbud - Kun tilgængeligt for de første 100 tidlige
            brugere
          </p>
        </div>
      </div>
    </section>
  );
}
