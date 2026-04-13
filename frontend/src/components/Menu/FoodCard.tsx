import { Clock, Flame, ShoppingCart, Star } from 'lucide-react'
import React from 'react'

interface CategoriesInterface {
    id: string;
    name: string;
    icon: string;
}

interface FoodCardType {
    item: MenuItem,
    index: number,
    setOrder: (item: MenuItem) => void
}

const FoodCard = ({ item, index, setOrder }: FoodCardType) => {
    return (

        <div
            key={item.id}
            className="menu-card bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer transform hover:-translate-y-2"
            style={{ animationDelay: `${index * 50}ms` }}
        >
            {/* Image Area */}
            <div className="relative bg-gradient-to-br from-[#FFC72C] to-[#f0b91c] p-8 flex items-center justify-center h-48">
                <div className="text-8xl transform group-hover:scale-110 transition-transform duration-300">
                    {item.image}
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {item.isPopular && (
                        <span className="bg-[#DA291C] text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                            <Star className="w-3 h-3" />
                            Popular
                        </span>
                    )}
                    {item.isNew && (
                        <span className="bg-[#27251F] text-[#FFC72C] px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            NEW
                        </span>
                    )}
                </div>

                {/* Prep Time */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#DA291C]" />
                    <span className="text-xs font-bold text-gray-700">{item.prepTime} min</span>
                </div>
            </div>

            {/* Content Area */}
            <div className="p-6">
                <h3 className="text-xl font-black text-gray-800 mb-2 group-hover:text-[#DA291C] transition-colors">
                    {item.name}
                </h3>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                    {item.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                        <Flame className="w-4 h-4 text-orange-500" />
                        {item.calories} cal
                    </span>
                </div>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                    <div className="text-3xl font-black text-[#DA291C]">
                        ${item.price.toFixed(2)}
                    </div>

                    <button
                        onClick={() => setOrder(item)}
                        className="bg-[#DA291C] hover:bg-[#b91d14] text-white px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105 shadow-lg flex items-center gap-2"
                    >
                        <ShoppingCart className="w-4 h-4" />
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard