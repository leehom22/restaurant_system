import { ChevronLeft, ChevronRight, Dot } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { MCD_RED } from '../constant/constant';
import { AnimatePresence, motion } from 'framer-motion';

const ImageCarousel = () => {
    const slides = [
        { url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e', title: 'Forest' },
        { url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470', title: 'Mountains' },
        { url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05', title: 'Fog' },
    ];

    const dayLeft = [
        3, 2, 1
    ]

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    }

    useEffect(() => {
        const slideInterval = setInterval(() => {
            nextSlide()
        }, 3000)

        return () => clearInterval(slideInterval)
    }, [currentIndex])

    return (
        <div className="w-full m-auto  px-4 relative group">

            <div className="relative h-145 w-full overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex} // Key is vital: it tells Framer this is a "new" element
                        src={slides[currentIndex].url}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 1.0 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 h-full w-full object-cover shadow-xl"
                    />
                </AnimatePresence>

                {/* Overlay Text */}
                <div className="absolute left-20 bottom-10 z-20 py-2 px-4 bg-red-600 rounded-xl">
                    <p className='font-bold text-2xl text-white'>{dayLeft[currentIndex]} Days Left</p>
                </div>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all'>
                <button onClick={() => prevSlide()}>
                    <ChevronLeft size={30} />
                </button>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-8 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/50 transition-all'>
                <button onClick={() => nextSlide()}>
                    <ChevronRight size={30} />
                </button>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    slides.map((slide, slideIndex) => (
                        <div
                            key={slideIndex}
                            onClick={() => setCurrentIndex(slideIndex)}
                            className={`text-2xl cursor-pointer mx-1 transition-all ${currentIndex === slideIndex ? 'text-blue-500 scale-125' : 'text-gray-400'
                                }`}
                        >
                            <Dot size={50} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ImageCarousel