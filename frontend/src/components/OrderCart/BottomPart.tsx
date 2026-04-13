import { Clock, ShoppingBag, Tag } from 'lucide-react'
import React from 'react'
import { calculateSubtotal, calculateTax, calculateTotal } from '../../utils/calculation'

interface BottomPartProps {
    orderItems: OrderProps[]
    onCheckout?: (() => void) | undefined
}

const BottomPart = ({ onCheckout, orderItems }: BottomPartProps) => {
    const isDisabled = orderItems.length === 0;

    // Logic separation
    const baseStyles = "w-full py-4 rounded-full font-black text-lg shadow-2xl flex items-center justify-center gap-3 group transition-all";
    const activeStyles = "bg-gradient-to-r from-[#DA291C] to-[#b91d14] hover:from-[#b91d14] hover:to-[#DA291C] text-white hover:scale-105 active:scale-95";
    const disabledStyles = "bg-gray-100 text-gray-400 cursor-not-allowed shadow-none";

    return (
        <>
            {/* Promo Code */}
            <div className="mb-4 p-4 bg-gradient-to-r from-[#FFC72C]/10 to-[#DA291C]/10 rounded-2xl border-2 border-dashed border-[#FFC72C]">
                <div className="flex items-center gap-3">
                    <Tag className="w-5 h-5 text-[#DA291C]" />
                    <input
                        type="text"
                        placeholder="Enter promo code"
                        className="flex-1 bg-transparent outline-none font-bold text-gray-700 placeholder:text-gray-400"
                    />
                    <button className="px-4 py-2 bg-[#DA291C] text-white rounded-full font-bold text-sm hover:bg-[#b91d14] transition-all">
                        Apply
                    </button>
                </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6 p-4 bg-gray-50 rounded-2xl">
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">Subtotal</span>
                    <span className="font-black text-gray-900">
                        ${calculateSubtotal(orderItems).toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">Tax (8%)</span>
                    <span className="font-black text-gray-900">
                        ${calculateTax(orderItems).toFixed(2)}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-600 font-semibold">Delivery Fee</span>
                    <span className="font-black text-[#27A745]">FREE</span>
                </div>
                <div className="border-t-2 border-gray-200 pt-3 flex justify-between items-center">
                    <span className="text-xl font-black text-gray-900">Total</span>
                    <span className="text-3xl font-black text-[#DA291C]">
                        ${calculateTotal(orderItems).toFixed(2)}
                    </span>
                </div>
            </div>

            {/* Estimated Time */}
            <div className="mb-4 p-3 bg-blue-50 border-2 border-blue-200 rounded-xl flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                    <p className="text-xs font-bold text-blue-900">Estimated Prep Time</p>
                    <p className="text-sm font-black text-blue-600">
                        {Math.max(...orderItems.map(o => o.item.prepTime))} - {Math.max(...orderItems.map(o => o.item.prepTime)) + 5} minutes
                    </p>
                </div>
            </div>

            {/* Checkout Button */}
            <button
                disabled={isDisabled}
                onClick={onCheckout}
                className={`${baseStyles} ${isDisabled ? disabledStyles : activeStyles}`}
            >
                <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Proceed to Checkout</span>
            </button>
        </>
    )
}

export default BottomPart