import { Card, CardContent } from "@/components/ui/card";
import { WaitlistForm } from "@/components/WaitlistForm";

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
            <WaitlistForm
              layout="full"
              emailLabel="Indtast din e-mailadresse"
              firstNameLabel="Fornavn"
              lastNameLabel="Efternavn"
              buttonText="Tilmeld dig ventelisten"
              showNames={true}
            />
            <p className="text-xs text-slate-500 mt-4">
              Vi sender aldrig spam. Afmeld til enhver tid.
            </p>
          </CardContent>
        </Card>

        <div className="mt-12 grid md:grid-cols-3 gap-8 text-accent-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-200/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Tidlig adgang</h3>
            <p className="text-sm opacity-90">
              Vær blandt de første til at teste CallAI og påvirk produktets
              udvikling
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-200/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Særlige priser</h3>
            <p className="text-sm opacity-90">
              Eksklusiv rabat på alle vores plans når du tilmelder dig
              ventelisten
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-200/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Prioriteret support</h3>
            <p className="text-sm opacity-90">
              Få dedikeret support og hjælp til at komme i gang med CallAI
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
