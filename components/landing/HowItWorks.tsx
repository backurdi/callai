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
    <section id="how-it-works" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
            ⚡ How it Works
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
            {/* Step 1 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-6xl font-bold text-slate-200">01</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Tag imod kunder lige når de ringer
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Vi tager imod alle dine kunder med det samme de ringer. De
                      bliver mødt af en varm og professionel stemme, der sikrer
                      at dine kunder får den bedste start på kontakten med din
                      virksomhed.
                    </p>
                  </div>

                  {/* Incoming Call Mockup */}
                  <div className="bg-slate-100 rounded-lg p-4 border">
                    <div className="bg-white/20 backdrop-blur-lg border border-white/30 text-slate-900 rounded-lg p-4 shadow-lg relative">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-emerald-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-emerald-300/30">
                          <PhoneCall className="w-6 h-6 text-emerald-600 animate-pulse" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-slate-600">
                            Indgående opkald
                          </div>
                          <div className="text-lg font-semibold text-slate-900">
                            Ny kunde
                          </div>
                          <div className="text-xs text-slate-500">
                            +45 XX XX XX XX
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between mt-4 space-x-3">
                        <button className="flex-1 bg-red-500/80 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-sm font-medium border border-red-400/30">
                          Afvis
                        </button>
                        <button className="flex-1 bg-green-500/80 backdrop-blur-sm text-white py-2 px-4 rounded-lg text-sm font-medium border border-green-400/30">
                          Svar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-6xl font-bold text-slate-200">02</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Vi finder ud af hvordan vi bedst kan hjælpe kunden
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Gennem en naturlig samtale vil vi forstå kundens behov,
                      give dem den ønskede information eller sikre at den
                      handling de ønsker klaret bliver klaret.
                    </p>
                  </div>

                  {/* Voice Analysis Mockup */}
                  <div className="bg-slate-100 rounded-lg p-4 border">
                    <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-4 shadow-lg space-y-3">
                      {/* Live Call Status */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-xs text-slate-600">
                            Live opkald
                          </span>
                        </div>
                        <div className="text-xs text-slate-500">02:34</div>
                      </div>

                      {/* Audio Waveform */}
                      <div className="bg-slate-50/50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <Mic className="w-4 h-4 text-blue-600" />
                          <span className="text-xs text-slate-600">
                            Kunde taler...
                          </span>
                        </div>
                        <div className="flex items-center space-x-1 h-8">
                          {[2, 5, 3, 8, 4, 6, 2, 7, 3, 5, 4, 9, 3, 6, 2, 4].map(
                            (height, i) => (
                              <div
                                key={i}
                                className={`bg-blue-500 rounded-sm animate-pulse`}
                                style={{
                                  width: "3px",
                                  height: `${height * 2}px`,
                                  animationDelay: `${i * 0.1}s`,
                                }}
                              />
                            )
                          )}
                        </div>
                      </div>

                      {/* AI Analysis */}
                      <div className="bg-emerald-100/50 rounded-lg p-3 border border-emerald-200/30">
                        <div className="flex items-center space-x-2 mb-2">
                          <Brain className="w-4 h-4 text-emerald-600" />
                          <span className="text-xs font-medium text-emerald-700">
                            AI Lytter & Analyserer
                          </span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-slate-600">
                              Detecteret: Ordre problem
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-xs text-slate-600">
                              Foreslået handling: Find ordre
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-xs text-slate-600">
                              Kunde følelse: Bekymret
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Step 3 - Full width below */}
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="text-6xl font-bold text-slate-200">03</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      Få værdifuld indsigt i dine kunder
                    </h3>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                      Vi analyserer alle samtaler og giver dig dyb indsigt i
                      dine kunder. Se hvilke problemer der opstår mest, hvad
                      kunderne spørger om, og få data der hjælper dig med at
                      forbedre din forretning.
                    </p>
                  </div>

                  {/* Analytics Dashboard */}
                  <div className="bg-slate-100 rounded-lg p-4 border max-w-3xl mx-auto">
                    <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg p-4 shadow-lg space-y-4">
                      {/* Dashboard Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <BarChart3 className="w-5 h-5 text-emerald-600" />
                          <span className="text-sm font-medium text-slate-900">
                            Kunde Indsigter
                          </span>
                        </div>
                        <div className="text-xs text-slate-500">
                          Sidste 30 dage
                        </div>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-emerald-100/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-emerald-700">
                            247
                          </div>
                          <div className="text-xs text-slate-600">Samtaler</div>
                        </div>
                        <div className="bg-blue-100/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-blue-700">
                            4.8★
                          </div>
                          <div className="text-xs text-slate-600">
                            Tilfredshed
                          </div>
                        </div>
                        <div className="bg-orange-100/50 rounded-lg p-3 text-center">
                          <div className="text-lg font-bold text-orange-700">
                            92%
                          </div>
                          <div className="text-xs text-slate-600">
                            Løst automatisk
                          </div>
                        </div>
                      </div>

                      {/* Top Issues */}
                      <div className="bg-slate-50/50 rounded-lg p-3">
                        <div className="flex items-center space-x-2 mb-2">
                          <PieChart className="w-4 h-4 text-slate-600" />
                          <span className="text-xs font-medium text-slate-700">
                            Mest almindelige emner
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-2 bg-emerald-500 rounded-sm"></div>
                              <span className="text-xs text-slate-600">
                                Ordre status
                              </span>
                            </div>
                            <span className="text-xs text-slate-500">34%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-2 bg-blue-500 rounded-sm"></div>
                              <span className="text-xs text-slate-600">
                                Returer
                              </span>
                            </div>
                            <span className="text-xs text-slate-500">28%</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-2 bg-orange-500 rounded-sm"></div>
                              <span className="text-xs text-slate-600">
                                Produktinfo
                              </span>
                            </div>
                            <span className="text-xs text-slate-500">22%</span>
                          </div>
                        </div>
                      </div>

                      {/* Trend Indicator */}
                      <div className="flex items-center justify-center space-x-2 text-emerald-600">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs">
                          +15% forbedring i kundetilfredshed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
