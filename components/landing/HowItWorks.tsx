import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  CreditCard,
  Users,
  Zap,
  Phone,
  PhoneCall,
  MessageSquare,
  Brain,
  Mic,
  Volume2,
  BarChart3,
  TrendingUp,
  PieChart,
} from "lucide-react";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-brand-900 text-white hover:bg-brand-900">
            ⚡ Hvordan virker det?
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Fra opkald til indsigt på tre enkle trin
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            CallAI tager imod dine kunder, forstår deres behov og giver dig
            værdifuld data om din kundeservice - alt sammen automatisk.
          </p>
        </div>

        {/* Grid layout: 2 cards on top, 1 below */}
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Step 1: Call Received */}
            <Card className="relative overflow-hidden border-0 shadow-lg bg-white">
              <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-brand-900 to-brand-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                1
              </div>
              <CardHeader className="pt-16 pb-4">
                <CardTitle className="text-2xl">Din kunde ringer</CardTitle>
                <CardDescription className="text-lg">
                  Opkaldet dirigeres automatisk til CallAI
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
                  {/* Phone Animation */}
                  <div className="relative">
                    <div className="w-12 h-12 bg-brand-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-brand-300/30">
                      <PhoneCall className="w-6 h-6 text-brand-600 animate-pulse" />
                    </div>

                    {/* Animated rings */}
                    <div className="absolute inset-0 w-12 h-12 border-2 border-brand-300 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 w-12 h-12 border border-brand-200 rounded-full animate-ping animation-delay-300"></div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Opkald modtaget
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-2"></div>
                    AI-agent aktiveret
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2: AI Processing */}
            <Card className="relative overflow-hidden border-0 shadow-lg bg-white">
              <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-brand-900 to-brand-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
                2
              </div>
              <CardHeader className="pt-16 pb-4">
                <CardTitle className="text-2xl">
                  AI forarbejder og forstår
                </CardTitle>
                <CardDescription className="text-lg">
                  Naturlig sprogforståelse og intelligent respons
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6 min-h-[200px]">
                  {/* AI Brain Visualization */}
                  <div className="flex items-center justify-center h-full">
                    <div className="relative">
                      <div className="grid grid-cols-2 gap-3">
                        {/* Speech recognition */}
                        <div className="bg-brand-100/50 rounded-lg p-3 border border-brand-200/30">
                          <Mic className="w-4 h-4 text-brand-600" />
                          <span className="text-xs font-medium text-brand-700">
                            Lytter
                          </span>
                        </div>

                        {/* Processing */}
                        <div className="bg-blue-100/50 rounded-lg p-3 border border-blue-200/30">
                          <Brain className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-medium text-blue-700">
                            Tænker
                          </span>
                        </div>

                        {/* Understanding */}
                        <div className="bg-purple-100/50 rounded-lg p-3 border border-purple-200/30">
                          <MessageSquare className="w-4 h-4 text-purple-600" />
                          <span className="text-xs font-medium text-purple-700">
                            Forstår
                          </span>
                        </div>

                        {/* Response */}
                        <div className="bg-green-100/50 rounded-lg p-3 border border-green-200/30">
                          <Volume2 className="w-4 h-4 text-green-600" />
                          <span className="text-xs font-medium text-green-700">
                            Svarer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-brand-500 rounded-full mr-2"></div>
                    Naturlig samtale
                  </div>
                  <div className="flex items-center text-sm text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    Intelligent problemløsning
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 3: Analytics - Full width */}
          <Card className="relative overflow-hidden border-0 shadow-lg bg-white">
            <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-brand-900 to-brand-800 rounded-full flex items-center justify-center text-white font-bold text-sm">
              3
            </div>
            <CardHeader className="pt-16 pb-4">
              <CardTitle className="text-2xl">
                Du får værdifuld indsigt
              </CardTitle>
              <CardDescription className="text-lg">
                Detaljeret analyse og handlingsbare data fra hver samtale
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6">
                {/* Analytics Dashboard Mock */}
                <div className="grid md:grid-cols-3 gap-6">
                  {/* Metrics */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <BarChart3 className="w-5 h-5 text-brand-600" />
                      <span className="font-medium text-slate-800">
                        Opkald Metrics
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-600">Samlet opkald</span>
                        <span className="font-medium">247</span>
                      </div>
                      <div className="bg-brand-100/50 rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-brand-700">
                          92%
                        </div>
                        <div className="text-xs text-brand-600">
                          Løst ved første opkald
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Visual Chart */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <PieChart className="w-5 h-5 text-purple-600" />
                      <span className="font-medium text-slate-800">
                        Emne Fordeling
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-2 bg-brand-500 rounded-sm"></div>
                        <span className="text-xs text-slate-600">
                          Support (45%)
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-2 bg-blue-500 rounded-sm"></div>
                        <span className="text-xs text-slate-600">
                          Salg (32%)
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-2 bg-purple-500 rounded-sm"></div>
                        <span className="text-xs text-slate-600">
                          Info (23%)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Insights */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-slate-800">
                        Indsigter
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-green-100/50 rounded-lg p-3 text-xs">
                        <div className="font-medium text-green-800">
                          ↑ 23% stigning i kundetilfredshed
                        </div>
                      </div>
                      <div className="bg-blue-100/50 rounded-lg p-3 text-xs">
                        <div className="font-medium text-blue-800">
                          Produkter der ofte spørges om
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200">
                  <div className="flex items-center justify-center space-x-2 text-brand-600">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Automatisk rapportering hver uge
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-slate-600 mb-6">
            Klar til at transformere din kundeservice?
          </p>
          <button className="bg-brand-900 hover:bg-brand-800 text-white font-medium px-8 py-3 rounded-lg transition-colors">
            Tilmeld dig ventelisten
          </button>
        </div>
      </div>
    </section>
  );
}
