import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  CheckCircle,
  Phone,
  MessageSquare,
  Clock,
  Users,
  ArrowRight,
  Play,
  Zap,
  HeadphonesIcon,
  BrainCircuit,
  Star,
} from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">CallAI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#how-it-works" className="text-slate-600 hover:text-slate-900 transition-colors">
                How It Works
              </Link>
              <Link href="#pain-points" className="text-slate-600 hover:text-slate-900 transition-colors">
                The Problem
              </Link>
              <Link href="#waitlist" className="text-slate-600 hover:text-slate-900 transition-colors">
                Early Access
              </Link>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
                  🚀 Coming Soon - Join the Waitlist
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  One Phone Number. Infinite Customer Care.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  Simply add our phone number to your website. Our AI handles every customer call with warmth,
                  intelligence, and precision - so you can focus on growing your business.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-3">
                  Join Early Access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
                  <Play className="mr-2 w-5 h-5" />
                  See Demo
                </Button>
              </div>

              <div className="bg-slate-100 rounded-lg p-6">
                <p className="text-sm text-slate-600 mb-2">It's as simple as:</p>
                <div className="font-mono text-slate-800 bg-white p-3 rounded border">{"Call us: (555) 123-HELP"}</div>
                <p className="text-xs text-slate-500 mt-2">Add this number to your website and you're done!</p>
              </div>
            </div>

            <div className="relative">
              {/* Flowing Icons */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Phone icons */}
                <Phone
                  className="absolute top-10 left-10 w-6 h-6 text-emerald-300 animate-bounce"
                  style={{ animationDelay: "0s", animationDuration: "3s" }}
                />
                <Phone
                  className="absolute top-32 right-16 w-5 h-5 text-emerald-400 animate-bounce"
                  style={{ animationDelay: "1s", animationDuration: "4s" }}
                />

                {/* Message bubbles */}
                <MessageSquare
                  className="absolute top-20 right-8 w-7 h-7 text-emerald-300 animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <MessageSquare
                  className="absolute bottom-32 left-8 w-5 h-5 text-emerald-400 animate-pulse"
                  style={{ animationDelay: "2s" }}
                />

                {/* Stars for satisfaction */}
                <Star
                  className="absolute top-16 left-1/3 w-4 h-4 text-yellow-300 animate-ping"
                  style={{ animationDelay: "1.5s", animationDuration: "2s" }}
                />
                <Star
                  className="absolute bottom-20 right-1/4 w-6 h-6 text-yellow-400 animate-ping"
                  style={{ animationDelay: "0.8s", animationDuration: "3s" }}
                />
                <Star
                  className="absolute top-1/2 left-12 w-5 h-5 text-yellow-300 animate-ping"
                  style={{ animationDelay: "2.5s", animationDuration: "2.5s" }}
                />

                {/* Check marks for success */}
                <CheckCircle
                  className="absolute top-24 right-1/3 w-5 h-5 text-green-300 animate-bounce"
                  style={{ animationDelay: "1.2s", animationDuration: "3.5s" }}
                />
                <CheckCircle
                  className="absolute bottom-16 left-1/4 w-6 h-6 text-green-400 animate-bounce"
                  style={{ animationDelay: "0.3s", animationDuration: "4s" }}
                />

                {/* Clock for 24/7 */}
                <Clock
                  className="absolute top-1/3 right-12 w-5 h-5 text-emerald-300 animate-spin"
                  style={{ animationDuration: "8s" }}
                />
                <Clock
                  className="absolute bottom-1/3 left-16 w-4 h-4 text-emerald-400 animate-spin"
                  style={{ animationDuration: "10s" }}
                />

                {/* Headphones for support */}
                <HeadphonesIcon
                  className="absolute top-40 left-1/2 w-6 h-6 text-emerald-300 animate-pulse"
                  style={{ animationDelay: "1.8s" }}
                />

                {/* Brain circuit for AI */}
                <BrainCircuit
                  className="absolute bottom-24 right-1/3 w-7 h-7 text-emerald-400 animate-pulse"
                  style={{ animationDelay: "0.7s" }}
                />

                {/* Zap for instant */}
                <Zap
                  className="absolute top-1/4 left-20 w-5 h-5 text-yellow-300 animate-bounce"
                  style={{ animationDelay: "2.2s", animationDuration: "2s" }}
                />
                <Zap
                  className="absolute bottom-1/4 right-20 w-4 h-4 text-yellow-400 animate-bounce"
                  style={{ animationDelay: "0.9s", animationDuration: "3s" }}
                />
              </div>

              {/* Main hero image */}
              <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-8 shadow-2xl relative z-10">
                {/* Flowing icons on top of image */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
                  {/* Phone icons */}
                  <Phone
                    className="absolute top-8 left-12 w-6 h-6 text-white/60 animate-bounce"
                    style={{ animationDelay: "0s", animationDuration: "3s" }}
                  />
                  <Phone
                    className="absolute top-20 right-16 w-5 h-5 text-white/40 animate-bounce"
                    style={{ animationDelay: "1.5s", animationDuration: "4s" }}
                  />

                  {/* Message bubbles */}
                  <MessageSquare
                    className="absolute top-16 right-8 w-7 h-7 text-white/50 animate-pulse"
                    style={{ animationDelay: "0.8s" }}
                  />
                  <MessageSquare
                    className="absolute bottom-24 left-8 w-5 h-5 text-white/60 animate-pulse"
                    style={{ animationDelay: "2.2s" }}
                  />

                  {/* Stars */}
                  <Star
                    className="absolute top-12 left-1/3 w-4 h-4 text-yellow-200/70 animate-ping"
                    style={{ animationDelay: "1s", animationDuration: "2.5s" }}
                  />
                  <Star
                    className="absolute bottom-16 right-1/4 w-6 h-6 text-yellow-100/60 animate-ping"
                    style={{ animationDelay: "0.3s", animationDuration: "3s" }}
                  />

                  {/* Check marks */}
                  <CheckCircle
                    className="absolute top-24 right-1/3 w-5 h-5 text-green-200/70 animate-bounce"
                    style={{ animationDelay: "1.8s", animationDuration: "3.5s" }}
                  />
                  <CheckCircle
                    className="absolute bottom-12 left-1/4 w-6 h-6 text-green-100/60 animate-bounce"
                    style={{ animationDelay: "0.5s", animationDuration: "4s" }}
                  />

                  {/* Headphones */}
                  <HeadphonesIcon
                    className="absolute top-1/3 left-16 w-6 h-6 text-white/50 animate-pulse"
                    style={{ animationDelay: "2s" }}
                  />

                  {/* Zap for instant */}
                  <Zap
                    className="absolute top-1/4 right-12 w-5 h-5 text-yellow-200/60 animate-bounce"
                    style={{ animationDelay: "1.2s", animationDuration: "2.8s" }}
                  />
                  <Zap
                    className="absolute bottom-1/3 left-20 w-4 h-4 text-yellow-100/70 animate-bounce"
                    style={{ animationDelay: "0.7s", animationDuration: "3.2s" }}
                  />
                </div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="AI Customer Service Phone Interface"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>

              {/* Status indicator */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 border z-20">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-slate-700">AI Ready to Help</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">How CallAI Works</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every customer call follows our intelligent 4-step process to ensure the best possible experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HeadphonesIcon className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">1. Warm Welcome</CardTitle>
                <CardDescription>
                  Our AI greets every customer with a friendly, personalized welcome that makes them feel valued and
                  heard.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BrainCircuit className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">2. Smart Assessment</CardTitle>
                <CardDescription>
                  AI quickly understands the customer's inquiry and determines whether it can be resolved automatically
                  or needs human attention.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">3. Instant Action</CardTitle>
                <CardDescription>
                  For simple inquiries, AI provides immediate answers or creates tasks for your team. Complex issues get
                  flagged for human review.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">4. Human Handoff</CardTitle>
                <CardDescription>
                  When needed, customers are seamlessly transferred to your team with full context, ensuring no
                  information is lost.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section id="pain-points" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">The Reality of Customer Service Today</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Every missed call and delayed response costs your business money and customer trust
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-red-500 mb-4">47%</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Calls Go Unanswered</h3>
                <p className="text-slate-600">
                  Nearly half of customer calls are missed during busy periods, leading to frustrated customers and lost
                  sales.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-red-500 mb-4">8min</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Average Wait Time</h3>
                <p className="text-slate-600">
                  Customers wait an average of 8 minutes on hold, with 60% hanging up before getting help.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow text-center">
              <CardContent className="pt-8">
                <div className="text-5xl font-bold text-red-500 mb-4">3hrs</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Daily Interruptions</h3>
                <p className="text-slate-600">
                  Store owners spend 3+ hours daily handling routine calls that could be automated.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Early Adopter Incentives */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Early Adopter Benefits</h2>
            <p className="text-xl text-slate-600">Join now and get exclusive perks that won't be available later</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-emerald-200 bg-gradient-to-br from-emerald-50 to-white shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Start Free Forever</h3>
                <p className="text-slate-600 mb-6">
                  Early adopters get our Starter plan completely free for the first 6 months - no credit card required.
                </p>
                <Badge className="bg-emerald-100 text-emerald-800">$99/month value</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-white shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Lifetime 50% Off</h3>
                <p className="text-slate-600 mb-6">
                  Lock in 50% discount on any paid plan for life. This pricing will never be available again after
                  launch.
                </p>
                <Badge className="bg-yellow-100 text-yellow-800">Exclusive pricing</Badge>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">VIP Support</h3>
                <p className="text-slate-600 mb-6">
                  Direct access to our founding team, priority feature requests, and exclusive beta access to new
                  features.
                </p>
                <Badge className="bg-purple-100 text-purple-800">Founder access</Badge>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-500 text-sm">
              ⏰ Limited time offer - Only available to the first 100 early adopters
            </p>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Perfect For These Common Scenarios</h2>
            <p className="text-xl text-slate-600">See how CallAI handles typical customer service situations</p>
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
                      <h3 className="font-semibold text-slate-900">Order Status Inquiries</h3>
                      <p className="text-slate-600 text-sm">
                        "Where is my order?" → AI provides tracking info instantly or creates a task if the order needs
                        investigation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Store Hours & Location</h3>
                      <p className="text-slate-600 text-sm">
                        "When are you open?" → AI provides immediate answers about hours, location, and contact info.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Return & Exchange Policy</h3>
                      <p className="text-slate-600 text-sm">
                        "Can I return this?" → AI explains your return policy and guides customers through the process.
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
                      <h3 className="font-semibold text-slate-900">Complex Product Issues</h3>
                      <p className="text-slate-600 text-sm">
                        "My product is broken" → AI gathers details and immediately connects customer to your support
                        team.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Billing Questions</h3>
                      <p className="text-slate-600 text-sm">
                        "I was charged twice" → AI recognizes sensitive issue and transfers to human with full context.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">Custom Requests</h3>
                      <p className="text-slate-600 text-sm">
                        "Can you make this in blue?" → AI creates a detailed task for your team to follow up personally.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 bg-emerald-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Be Among the First to Try CallAI</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Join our exclusive waitlist and get early access when we launch. Plus, early adopters get special pricing
            and priority support.
          </p>

          <Card className="max-w-md mx-auto bg-white">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <Input type="email" placeholder="Enter your email address" className="w-full" />
                </div>
                <div>
                  <Input type="text" placeholder="Your store name (optional)" className="w-full" />
                </div>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-lg py-3">
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
              <p className="text-xs text-slate-500 mt-4">We'll never spam you. Unsubscribe at any time.</p>
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
              <div className="text-2xl font-bold text-white">Priority Support</div>
              <div className="text-sm">Direct line to our team</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-slate-900 mb-2">How does setup work?</h3>
                <p className="text-slate-600">
                  We provide you with a phone number. You add it to your website wherever customers might want to call
                  for support. That's it! Our AI handles everything else.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-slate-900 mb-2">What if the AI can't help a customer?</h3>
                <p className="text-slate-600">
                  Our AI is smart about knowing its limits. When it encounters something complex or sensitive, it
                  immediately transfers the customer to your team with full context about what the customer needs.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-slate-900 mb-2">Do I need to integrate with my existing systems?</h3>
                <p className="text-slate-600">
                  Not initially! CallAI works independently and creates tasks for your team when needed. Advanced
                  integrations will be available later for stores that want deeper automation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-slate-900 mb-2">When will CallAI be available?</h3>
                <p className="text-slate-600">
                  We're currently in development and planning to launch in early 2024. Join our waitlist to be notified
                  as soon as we're ready for beta testing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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
              <p className="text-slate-400">One phone number. Infinite customer care.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-slate-400">
                <div>
                  <Link href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </Link>
                </div>
                <div>
                  <Link href="#pain-points" className="hover:text-white transition-colors">
                    The Problem
                  </Link>
                </div>
                <div>
                  <Link href="#waitlist" className="hover:text-white transition-colors">
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
    </div>
  )
}
