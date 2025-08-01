"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
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
    <section className="py-24 sm:py-32 lg:py-48 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Heart Icon - Top Left of Text */}
        <div className="absolute top-[15%] sm:top-[25%] left-[5%] sm:left-[25%] animate-float-1">
          <div className="w-12 h-12 sm:w-16 lg:w-20 sm:h-16 lg:h-20 bg-pink-100 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-pink-200">
            <Heart className="w-4 h-4 sm:w-6 lg:w-8 sm:h-6 lg:h-8 text-pink-500 fill-pink-500" />
          </div>
        </div>

        {/* Phone Icon - Top Center */}
        <div className="absolute top-[5%] sm:top-[10%] left-1/2 transform -translate-x-1/2 animate-float-2">
          <div className="w-12 h-12 sm:w-14 lg:w-18 sm:h-14 lg:h-18 bg-brand-100 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-brand-200">
            <Phone className="w-4 h-4 sm:w-6 lg:w-9 sm:h-6 lg:h-9 text-brand-600" />
          </div>
        </div>

        {/* Happy People Image - Left Side */}
        <div className="absolute top-[50%] sm:top-[40%] left-[5%] sm:left-[20%] animate-float-3">
          <div className="w-16 h-16 sm:w-20 lg:w-28 sm:h-20 lg:h-28 bg-blue-100 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-sm border border-blue-200 overflow-hidden">
            <Image
              src="/hero-person1.jpg"
              alt="Happy customer"
              width={112}
              height={112}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Happy People Image - Top Right of Text */}
        <div className="absolute top-[15%] sm:top-[25%] right-[5%] sm:right-[25%] animate-float-4">
          <div className="w-12 h-12 sm:w-16 lg:w-24 sm:h-16 lg:h-24 bg-yellow-100 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-yellow-200 overflow-hidden">
            <Image
              src="/hero-person2.jpg"
              alt="Satisfied customer"
              width={64}
              height={64}
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Chat Bubble - Right Side */}
        <div className="absolute top-[75%] sm:top-[40%] right-[5%] sm:right-[20%] animate-float-5">
          <div className="w-12 h-12 sm:w-14 lg:w-17 sm:h-14 lg:h-17 bg-purple-100 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-purple-200">
            <MessageCircle className="w-4 h-4 sm:w-6 lg:w-8 sm:h-6 lg:h-8 text-purple-600" />
          </div>
        </div>

        {/* Lightning/Speed Icon - Right Side Lower */}
        <div className="absolute top-[85%] sm:top-[55%] right-[15%] sm:right-[22%] animate-float-6">
          <div className="w-14 h-14 sm:w-18 lg:w-24 sm:h-18 lg:h-24 bg-orange-100 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border border-orange-200">
            <Zap className="w-5 h-5 sm:w-6 lg:w-8 sm:h-6 lg:h-8 text-orange-500 fill-orange-500" />
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
              className={`w-0.5 bg-brand-500 animate-line-grow-${animation.id}`}
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
                  className={`w-4 h-4 text-brand-500 animate-phone-to-check-${animation.id}`}
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
            <Badge className="bg-brand-900 text-white hover:bg-brand-900">
              🚀 Kommer snart - Tilmeld dig ventelisten
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Sørg for at dine kunder altid får hjælp.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Giv dine kunder den rigtige hjælp mens du fokuserer på at vokse
              din virksomhed.
            </p>
          </div>

          {/* Join Waitlist Form */}
          <div className="max-w-md mx-auto space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Tilmeld dig ventelisten
            </h3>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Indtast din email"
                className="flex-1"
              />
              <Button className="bg-brand-900 hover:bg-brand-800 whitespace-nowrap">
                Tilmeld dig ventelisten
              </Button>
            </div>
            <p className="text-sm text-slate-500">
              Vær den første til at høre om lanceringen. Ingen spam, nogensinde.
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
