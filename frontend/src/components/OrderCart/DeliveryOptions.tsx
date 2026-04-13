import React, { useState } from 'react'
import { Calendar, Clock, Users, MapPin, Home, ShoppingBag } from 'lucide-react'
import { MCD_RED, MCD_YELLOW } from '../../constant/constant'

type DeliveryType = 'dineIn' | 'delivery' | 'pickUp'

const DeliveryOptions = () => {
    const [deliveryOption, setDeliveryOption] = useState<DeliveryType>('dineIn')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [pax, setPax] = useState(2)

    const deliveryTypes = [
        { value: 'dineIn', label: 'Dine In', icon: Home },
        { value: 'delivery', label: 'Delivery', icon: ShoppingBag },
        { value: 'pickUp', label: 'Pick Up', icon: MapPin }
    ]

    return (
        <div className="bg-linear-to-br from-orange-50 to-amber-50 p-8 ">
            <div className=" bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Header */}
                <div className="bg-linear-to-r from-mcdRed to-red-500 p-6">
                    <h1 className="text-2xl font-bold text-white">Order Options</h1>
                    <p className="text-orange-50 mt-1">Choose how you'd like to enjoy your meal</p>
                </div>

                <div className="p-8">
                    {/* Delivery Type Selection */}

                    <div className="grid grid-cols-3 gap-4 mb-8">
                        {deliveryTypes.map(({ value, label, icon: Icon }) => (
                            <button
                                key={value}
                                onClick={() => setDeliveryOption(value as DeliveryType)}
                                className={`p-4 rounded-xl border-2 transition-all duration-200 ${deliveryOption === value
                                        ? `border-mcdRed bg-orange-50 shadow-md`
                                        : `border-gray-200 hover:border-mcdYellow hover:bg-orange-50/50`
                                    }`}
                            >
                                <Icon
                                    className={`mx-auto mb-2 ${deliveryOption === value ? 'text-mcdRed' : 'text-gray-400'
                                        }`}
                                    size={32}
                                />
                                <span className={`block text-sm font-medium ${deliveryOption === value ? 'text-mcdRed' : 'text-gray-600'
                                    }`}>
                                    {label}
                                </span>
                            </button>
                        ))}
                    </div>

                    {/* Conditional Content */}
                    <div className="mt-8">
                        {/* Delivery Option */}
                        {deliveryOption === 'delivery' && (
                            <div className="space-y-6 animate-fadeIn">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Delivery Details</h2>

                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                        <MapPin size={18} className="mr-2 text-orange-500" />
                                        Delivery Address
                                    </label>
                                    <input
                                        type="text"
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        placeholder="Enter your delivery address"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                                    />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                            <Calendar size={18} className="mr-2 text-orange-500" />
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                            <Clock size={18} className="mr-2 text-orange-500" />
                                            Time
                                        </label>
                                        <input
                                            type="time"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
                                    <p className="text-sm text-orange-800">
                                        🚚 Estimated delivery: 30-45 minutes
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Dine In Option */}
                        {deliveryOption === 'dineIn' && (
                            <div className="space-y-6 animate-fadeIn">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Reservation Details</h2>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                            <Calendar size={18} className="mr-2 text-orange-500" />
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                            <Clock size={18} className="mr-2 text-orange-500" />
                                            Time
                                        </label>
                                        <input
                                            type="time"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                        <Users size={18} className="mr-2 text-orange-500" />
                                        Number of Guests
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <button
                                            onClick={() => setPax(Math.max(1, pax - 1))}
                                            className="w-12 h-12 rounded-lg border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all font-bold text-gray-700"
                                        >
                                            −
                                        </button>
                                        <span className="text-xl font-semibold text-gray-800 w-16 text-center">
                                            {pax}
                                        </span>
                                        <button
                                            onClick={() => setPax(Math.min(20, pax + 1))}
                                            className="w-12 h-12 rounded-lg border-2 border-gray-200 hover:border-orange-500 hover:bg-orange-50 transition-all font-bold text-gray-700"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4">
                                    <p className="text-sm text-orange-800">
                                        🍽️ Table will be held for 15 minutes after reservation time
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Pick Up Option */}
                        {deliveryOption === 'pickUp' && (
                            <div className="space-y-6 animate-fadeIn">
                                <h2 className="text-lg font-semibold text-gray-800 mb-4">Pick Up Details</h2>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                            <Calendar size={18} className="mr-2 text-orange-500" />
                                            Date
                                        </label>
                                        <input
                                            type="date"
                                            value={date}
                                            onChange={(e) => setDate(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
                                            <Clock size={18} className="mr-2 text-orange-500" />
                                            Time
                                        </label>
                                        <input
                                            type="time"
                                            value={time}
                                            onChange={(e) => setTime(e.target.value)}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                    <p className="text-sm font-medium text-orange-900 mb-2">📍 Pick Up Location</p>
                                    <p className="text-sm text-orange-800">
                                        123 Main Street, Muar, Johor<br />
                                        Tel: +60 12-345 6789
                                    </p>
                                </div>

                                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                                    <p className="text-sm text-orange-800">
                                        ⏱️ Your order will be ready in approximately 20-30 minutes
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeliveryOptions