import { Card, CardContent } from "@/components/ui/card";

export function PainPoints() {
  return (
    <section id="pain-points" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Virkeligheden ved Kundeservice I Dag
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hvert mistede opkald og forsinkede svar koster din virksomhed penge
            og kundetillid
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-red-50/50 border-red-100">
            <CardContent className="pt-8">
              <div className="text-5xl font-bold text-red-700 mb-4">38%</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Opkald Går Ubesvarede
              </h3>
              <p className="text-slate-600">
                Over en tredjedel af kundeopkald bliver mistet under travle
                forretningsperioder, hvilket fører til frustrerede kunder og
                tabt omsætning.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-red-50/50 border-red-100">
            <CardContent className="pt-8">
              <div className="text-5xl font-bold text-red-700 mb-4">2min</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Før Kunder Lægger På
              </h3>
              <p className="text-slate-600">
                De fleste kunder lægger på efter blot 2 minutter i
                venteposition, og 34% af dem ringer aldrig tilbage.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center bg-red-50/50 border-red-100">
            <CardContent className="pt-8">
              <div className="text-5xl font-bold text-red-700 mb-4">22%</div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Tid Tabt på Administration
              </h3>
              <p className="text-slate-600">
                Virksomhedsejere mister over 22% af deres arbejdsuge til
                administrative opgaver og rutineopkald, der kunne automatiseres.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
