"use client";

import { useState, useCallback, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  Play,
  Phone,
  Check,
  Heart,
  Star,
  MessageCircle,
  Users,
  Zap,
  Shield,
} from "lucide-react";

interface AnimationData {
  id: number;
  x: number;
  y: number;
  lineHeight: number;
  delay: number;
  visible: boolean;
}

export function HeroSection() {
  // const [animations, setAnimations] = useState<AnimationData[]>([]);

  // const generateRandomAnimations = useCallback(() => {
  //   const newAnimations: AnimationData[] = [];
  //   const animationCount = 5;
  //   const lineHeights = [120, 100, 140, 80, 110];

  //   for (let i = 0; i < animationCount; i++) {
  //     newAnimations.push({
  //       id: i + 1,
  //       x: Math.random() * 80 + 10, // Random x position between 10% and 90%
  //       y: Math.random() * 40 + 10, // Random y position between 10% and 50% from bottom
  //       lineHeight: lineHeights[i],
  //       delay: Math.random() * 3, // Random delay between 0-3 seconds
  //       visible: true,
  //     });
  //   }

  //   setAnimations(newAnimations);
  // }, []);

  // // Auto-start animations when component mounts
  // useEffect(() => {
  //   generateRandomAnimations();

  //   // Regenerate animations every 15 seconds to keep them fresh
  //   const interval = setInterval(() => {
  //     generateRandomAnimations();
  //   }, 15000);

  //   return () => clearInterval(interval);
  // }, [generateRandomAnimations]);

  return (
    <section className="py-48 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Heart Icon - Top Left of Text */}
        <div className="absolute top-[25%] left-[25%] animate-float-1">
          <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-pink-200">
            <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
          </div>
        </div>

        {/* Phone Icon - Top Center */}
        <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 animate-float-2">
          <div className="w-18 h-18 bg-emerald-100 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-emerald-200">
            <Phone className="w-9 h-9 text-emerald-600" />
          </div>
        </div>

        {/* Happy People Placeholder - Left Side */}
        <div className="absolute top-[40%] left-[20%] animate-float-3">
          <div className="w-20 h-20 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-blue-200">
            <div className="text-center">
              <Users className="w-10 h-10 text-blue-600 mx-auto mb-1" />
              <div className="text-sm text-blue-600 font-semibold">Happy</div>
            </div>
          </div>
        </div>

        {/* Star Rating - Top Right of Text */}
        <div className="absolute top-[25%] right-[25%] animate-float-4">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-yellow-200">
            <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
          </div>
        </div>

        {/* Chat Bubble - Right Side */}
        <div className="absolute top-[40%] right-[20%] animate-float-5">
          <div className="w-17 h-17 bg-purple-100 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-purple-200">
            <MessageCircle className="w-8 h-8 text-purple-600" />
          </div>
        </div>

        {/* Lightning/Speed Icon - Right Side Lower */}
        <div className="absolute top-[55%] right-[22%] animate-float-6">
          <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-orange-200">
            <Zap className="w-8 h-8 text-orange-500 fill-orange-500" />
          </div>
        </div>
      </div>

      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* {animations.map((animation) => (
          <div
            key={animation.id}
            className={`absolute animate-call-flow-${animation.id}`}
            style={{
              left: `${animation.x}%`,
              bottom: `${animation.y}%`,
              opacity: animation.visible ? 1 : 0,
            }}
          >
            <div
              className={`w-0.5 bg-emerald-500 animate-line-grow-${animation.id}`}
              style={
                {
                  "--line-height": `${animation.lineHeight}px`,
                  "--animation-delay": `${animation.delay}s`,
                } as React.CSSProperties
              }
            ></div>
            <div
              className={`absolute -top-4 left-1/2 transform -translate-x-1/2 animate-icon-appear-${animation.id}`}
            >
              <div
                className={`w-8 h-8 bg-slate-300 rounded-full flex items-center justify-center shadow-lg animate-circle-bg-${animation.id}`}
              >
                <Phone
                  className={`w-4 h-4 text-emerald-500 animate-phone-to-check-${animation.id}`}
                />
                <Check
                  className={`w-4 h-4 text-white absolute opacity-0 animate-check-appear-${animation.id}`}
                />
              </div>
            </div>
          </div>
        ))} */}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">
              🚀 Coming Soon - Join the Waitlist
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              One Phone Number. Infinite Customer Care.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Simply add our phone number to your website. Our AI handles every
              customer call with warmth, intelligence, and precision - so you
              can focus on growing your business.
            </p>
          </div>

          {/* Join Waitlist Form */}
          <div className="max-w-md mx-auto space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Join the Waitlist
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="bg-emerald-600 hover:bg-emerald-700 whitespace-nowrap">
                Join Waitlist
              </Button>
            </div>
            <p className="text-sm text-slate-500">
              Be the first to know when we launch. No spam, ever.
            </p>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float1 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(2deg);
          }
        }

        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-12px) rotate(-2deg);
          }
          66% {
            transform: translateY(-8px) rotate(1deg);
          }
        }

        @keyframes float3 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          40% {
            transform: translateY(-18px) rotate(1deg);
          }
          80% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }

        @keyframes float4 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(2deg);
          }
          75% {
            transform: translateY(-20px) rotate(-1deg);
          }
        }

        @keyframes float5 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          60% {
            transform: translateY(-14px) rotate(-2deg);
          }
        }

        @keyframes float6 {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          30% {
            transform: translateY(-16px) rotate(1deg);
          }
          70% {
            transform: translateY(-8px) rotate(2deg);
          }
        }

        .animate-float-1 {
          animation: float1 6s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float2 7s ease-in-out infinite;
          animation-delay: 0.5s;
        }

        .animate-float-3 {
          animation: float3 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-float-4 {
          animation: float4 5.5s ease-in-out infinite;
          animation-delay: 1.5s;
        }

        .animate-float-5 {
          animation: float5 6.5s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-6 {
          animation: float6 7.5s ease-in-out infinite;
          animation-delay: 0.8s;
        }

        @keyframes lineGrowDynamic {
          0%,
          5% {
            height: 0;
          }
          25% {
            height: var(--line-height);
          }
          85%,
          100% {
            height: var(--line-height);
            opacity: 0;
          }
        }

        @keyframes iconAppear {
          0%,
          25% {
            opacity: 0;
            transform: translateY(10px) scale(0.5);
          }
          30% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          85%,
          100% {
            opacity: 0;
          }
        }

        @keyframes circleBg {
          0%,
          50% {
            background-color: #cbd5e1;
          }
          55%,
          85% {
            background-color: #10b981;
          }
          100% {
            background-color: #cbd5e1;
          }
        }

        @keyframes phoneToCheck {
          0%,
          50% {
            opacity: 1;
            transform: scale(1);
          }
          55%,
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        @keyframes checkAppear {
          0%,
          50% {
            opacity: 0;
            transform: scale(0.5);
          }
          55% {
            opacity: 1;
            transform: scale(1);
          }
          85%,
          100% {
            opacity: 0;
          }
        }

        /* Dynamic animation classes that use CSS variables for delays */
        .animate-line-grow-1,
        .animate-line-grow-2,
        .animate-line-grow-3,
        .animate-line-grow-4,
        .animate-line-grow-5 {
          animation: lineGrowDynamic 10s infinite;
          animation-delay: var(--animation-delay);
        }

        .animate-icon-appear-1,
        .animate-icon-appear-2,
        .animate-icon-appear-3,
        .animate-icon-appear-4,
        .animate-icon-appear-5 {
          animation: iconAppear 10s infinite;
          animation-delay: var(--animation-delay);
        }

        .animate-circle-bg-1,
        .animate-circle-bg-2,
        .animate-circle-bg-3,
        .animate-circle-bg-4,
        .animate-circle-bg-5 {
          animation: circleBg 10s infinite;
          animation-delay: var(--animation-delay);
        }

        .animate-phone-to-check-1,
        .animate-phone-to-check-2,
        .animate-phone-to-check-3,
        .animate-phone-to-check-4,
        .animate-phone-to-check-5 {
          animation: phoneToCheck 10s infinite;
          animation-delay: var(--animation-delay);
        }

        .animate-check-appear-1,
        .animate-check-appear-2,
        .animate-check-appear-3,
        .animate-check-appear-4,
        .animate-check-appear-5 {
          animation: checkAppear 10s infinite;
          animation-delay: var(--animation-delay);
        }
      `}</style>
    </section>
  );
}
