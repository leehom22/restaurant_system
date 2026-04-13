import React, { useEffect, useRef } from 'react';
import { ArrowRight, MapPin, Clock } from 'lucide-react';
import { MCD_RED } from '../constant/constant';
import { halal, mcdBurgerPNG } from '../assets';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={heroRef} className="relative overflow-hidden bg-[#FFC72C]">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#DA291C] rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-[#27251F] rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-[#DA291C] rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path d="M 0 100 Q 50 50 100 100 T 200 100 T 300 100" stroke="#DA291C" strokeWidth="40" fill="none" opacity="0.3"/>
          <path d="M 0 150 Q 50 100 100 150 T 200 150 T 300 150" stroke="#DA291C" strokeWidth="40" fill="none" opacity="0.2"/>
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 pt-10 pb-10 lg:pt-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-4 fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#DA291C] text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg hover:scale-105 transition-transform cursor-pointer">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              NEW: McCrispy Deluxe
            </div>

            {/* Main heading */}
            <h1 className="text-6xl lg:text-8xl font-black text-[#27251F] leading-none tracking-tight z-10">
              <span className="block slide-in-left">Lovin'</span>
              <span className={`block slide-in-left animation-delay-200 text-[${MCD_RED}]`}>Every</span>
              <span className="block slide-in-left animation-delay-400">Bite.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-[#27251F] font-medium max-w-lg fade-in-up animation-delay-600">
              Flame-grilled perfection meets iconic flavor. 
              Your favorites are closer than you think.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 fade-in-up animation-delay-800">
              <button className="group bg-[#DA291C] hover:bg-[#b91d14] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-2xl transition-all hover:scale-105 hover:shadow-xl">
                Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white hover:bg-gray-50 text-[#27251F] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105 border-2 border-[#27251F]">
                View Menu
              </button>

              <button className="group bg-white hover:bg-gray-50 text-[#27251F] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl transition-all hover:scale-105 border-2 border-[#27251F]">
                Promotion!
              </button>
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap gap-6 pt-4 fade-in-up animation-delay-1000">
              <div className="flex items-center gap-2 text-[#27251F]">
                <MapPin className="w-5 h-5 text-[#DA291C]" />
                <span className="font-semibold">2,500+ Locations</span>
              </div>
              <div className="flex items-center gap-2 text-[#27251F]">
                <Clock className="w-5 h-5 text-[#DA291C]" />
                <span className="font-semibold">Open 24/7</span>
              </div>
            </div>
          </div>

          {/* Right content - Product showcase */}
          <div className="relative h-[600px] fade-in-right animation-delay-400">
            {/* halal */}
            <img src={halal} alt="" className='absolute size-20 right-1 top-0 animate-bounce-subtle'/>
            {/* Main product image container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Circular background accent */}
              <div className="absolute w-[500px] h-[500px] bg-white/30 rounded-full blur-2xl animate-pulse-slow"></div>
              
              {/* Product image placeholder - replace with actual image */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="w-[450px] h-[450px] bg-gradient-to-br from-[#DA291C] to-[#b91d14] rounded-full flex items-center justify-center shadow-2xl animate-float">
                  {/* Placeholder for burger image */}
                  <div className="text-white text-center">
                    <img src={mcdBurgerPNG} className='size-90' alt="" />
                    <p className="font-black text-2xl tracking-wider">BIG MAC</p>
                    <p className="text-sm font-medium mt-2">Two all-beef patties</p>
                  </div>
                </div>
              </div>

              {/* Floating price tag */}
              <div className="absolute top-30 right-10 bg-white text-[#27251F] px-6 py-3 rounded-2xl shadow-2xl font-black text-xl animate-bounce-subtle">
                $5.99
              </div>

              {/* Floating badge */}
              <div className="absolute bottom-32 left-10 bg-[#DA291C] text-white px-5 py-2 rounded-full shadow-xl font-bold rotate-[-12deg] animate-wiggle">
                🔥 HOT!
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes wiggle {
          0%, 100% { transform: rotate(-12deg); }
          25% { transform: rotate(-15deg); }
          75% { transform: rotate(-9deg); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
        }

        .fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default Hero;