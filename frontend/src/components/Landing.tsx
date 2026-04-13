import React, { useEffect, useRef } from 'react';
import { delivery, grills, ingredients } from '../assets';

const Landing = () => {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-white via-[#FFF8E7] to-white">
      {/* Section 1 - Delivery */}
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className="landing-section min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFC72C] rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#DA291C] rounded-full blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 lg:order-1 order-2 slide-in-left">
              <div className="inline-block">
                <span className="bg-[#DA291C] text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                  🚀 FAST DELIVERY
                </span>
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-black text-[#27251F] leading-tight">
                Iconic
                <br />
                <span className="text-[#DA291C]">Cravings,</span>
                <br />
                Delivered.
              </h2>
              
              <p className="text-2xl text-gray-700 font-medium max-w-lg">
                Hot, fresh, and ready when you are.
              </p>

              <div className="flex gap-4 pt-4">
                <button className="bg-[#DA291C] hover:bg-[#b91d14] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
                  Order Now
                </button>
                <button className="bg-white hover:bg-gray-50 text-[#27251F] px-8 py-4 rounded-full font-bold text-lg shadow-lg transition-all hover:scale-105 border-2 border-[#27251F]">
                  See Menu
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-8">
                <div>
                  <div className="text-4xl font-black text-[#DA291C]">15min</div>
                  <div className="text-sm text-gray-600 font-semibold">Avg Delivery</div>
                </div>
                <div className="border-l-2 border-gray-300"></div>
                <div>
                  <div className="text-4xl font-black text-[#DA291C]">100%</div>
                  <div className="text-sm text-gray-600 font-semibold">Hot & Fresh</div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="lg:order-2 order-1 relative slide-in-right">
              <div className="relative z-10">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFC72C] rounded-full animate-pulse-slow"></div>
                <img
                  src={delivery}
                  alt="McDonald's Delivery"
                  className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -bottom-8 -left-8 bg-white px-6 py-4 rounded-2xl shadow-2xl rotate-[-6deg] hover:rotate-0 transition-transform">
                  <div className="text-3xl font-black text-[#27251F]">$0</div>
                  <div className="text-xs text-gray-600 font-semibold">Delivery Fee</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 - Grills (Reversed Layout) */}
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className="landing-section min-h-screen flex items-center relative overflow-hidden bg-[#27251F]"
      >
        {/* Texture overlay */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image (Left on desktop) */}
            <div className="relative slide-in-left">
              <div className="relative">
                <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#FFC72C] rounded-full blur-2xl opacity-30"></div>
                <img
                  src={grills}
                  alt="McDonald's Grills"
                  className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 relative z-10"
                />
                {/* Floating badges */}
                <div className="absolute top-10 -right-6 bg-[#FFC72C] text-[#27251F] px-6 py-3 rounded-full shadow-2xl font-black text-lg rotate-12 animate-bounce-subtle">
                  100% Beef
                </div>
              </div>
            </div>

            {/* Text Content (Right on desktop) */}
            <div className="space-y-8 slide-in-right">
              <div className="inline-block">
                <span className="bg-[#FFC72C] text-[#27251F] px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                  🔥 FRESH OFF THE GRILL
                </span>
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-black text-white leading-tight">
                Your Favorites,
                <br />
                <span className="text-[#FFC72C]">Just a Tap</span>
                <br />
                Away.
              </h2>
              
              <p className="text-2xl text-gray-300 font-medium max-w-lg">
                From our grill to your door, sizzling hot every time.
              </p>

              <div className="flex gap-4 pt-4">
                <button className="bg-[#FFC72C] hover:bg-[#f0b91c] text-[#27251F] px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105">
                  Browse Menu
                </button>
              </div>

              {/* Feature list */}
              <div className="space-y-4 pt-4">
                {['Flame-grilled perfection', 'Made to order', 'Quality ingredients'].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#FFC72C] rounded-full"></div>
                    <span className="text-white font-semibold text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 - Ingredients */}
      <div
        ref={(el) => (sectionRefs.current[2] = el)}
        className="landing-section min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-4 border-[#DA291C] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border-4 border-[#FFC72C] rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 slide-in-left">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-[#DA291C] to-[#FFC72C] text-white px-5 py-2 rounded-full text-sm font-bold tracking-wide shadow-lg">
                  ✨ QUALITY FIRST
                </span>
              </div>
              
              <h2 className="text-6xl lg:text-7xl font-black text-[#27251F] leading-tight">
                There's a
                <br />
                <span className="text-[#DA291C]">Seat at Our</span>
                <br />
                Table.
              </h2>
              
              <p className="text-2xl text-gray-700 font-medium max-w-lg">
                Simple ingredients, legendary taste, timeless memories.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-2">🥬</div>
                  <div className="font-bold text-[#27251F]">Fresh Daily</div>
                  <div className="text-sm text-gray-600">Crisp lettuce</div>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-3xl mb-2">🥩</div>
                  <div className="font-bold text-[#27251F]">100% Beef</div>
                  <div className="text-sm text-gray-600">No fillers</div>
                </div>
              </div>

              <button className="bg-[#DA291C] hover:bg-[#b91d14] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 mt-4">
                Our Story
              </button>
            </div>

            {/* Image with artistic framing */}
            <div className="relative slide-in-right">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={ingredients}
                  alt="McDonald's Fresh Ingredients"
                  className="w-full h-[600px] object-cover transform hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#27251F]/60 via-transparent to-transparent"></div>
                
                {/* Bottom badge */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-600 font-semibold">Since 1940</div>
                      <div className="text-2xl font-black text-[#27251F]">Trusted Quality</div>
                    </div>
                    <div className="text-5xl">🌟</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0) rotate(12deg); }
          50% { transform: translateY(-8px) rotate(12deg); }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(60px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .landing-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 1s ease-out;
        }

        .landing-section.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-left {
          animation: slide-in-left 1s ease-out;
        }

        .slide-in-right {
          animation: slide-in-right 1s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Landing;