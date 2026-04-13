import { Clock, Flame } from 'lucide-react'
import React from 'react'
import ImageCarousel from './ImageCarousel'

const MenuHero = () => {
    return (
            <ImageCarousel/>
        // <div className="relative bg-gradient-to-br from-[#DA291C] via-[#c41f12] to-[rgb(39,37,31)] text-white py-20 overflow-hidden">
        //     <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFC72C] rounded-full blur-3xl opacity-20"></div>
        //     <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFC72C] rounded-full blur-3xl opacity-10"></div>

        //     <div className="container mx-auto px-6 relative z-10">
        //         <div className="max-w-3xl">
        //             <div className="inline-block bg-[#FFC72C] text-[#27251F] px-4 py-2 rounded-full text-sm font-bold mb-6 animate-bounce-subtle">
        //                 🔥 HOT & READY
        //             </div>
        //             <h1 className="text-6xl lg:text-7xl font-black mb-4 leading-tight">
        //                 Our Full
        //                 <br />
        //                 <span className="text-[#FFC72C]">Menu</span>
        //             </h1>
        //             <p className="text-xl text-gray-100 font-medium mb-8">
        //                 Explore our legendary classics and discover new favorites. Every bite is worth it.
        //             </p>
        //             <div className="flex gap-6">
        //                 <div className="flex items-center gap-2">
        //                     <Clock className="w-5 h-5 text-[#FFC72C]" />
        //                     <span className="font-semibold">Fast Prep</span>
        //                 </div>
        //                 <div className="flex items-center gap-2">
        //                     <Flame className="w-5 h-5 text-[#FFC72C]" />
        //                     <span className="font-semibold">Fresh Daily</span>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default MenuHero