import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingCart, Flame, Clock, Check } from 'lucide-react';

interface OrderModalProps {
  item: MenuItem
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, { size, addons, specialInstructions }: CustomizationProps) => void
}



const OrderModal: React.FC<OrderModalProps> = ({ item, onClose, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<SizeType>('regular');
  const [selectedAddons, setSelectedAddons] = useState<SizeAddonsProps[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');

  const sizes = [
    { id: 'regular', name: 'Regular', price: 0 },
    { id: 'medium', name: 'Medium', price: 1.50 },
    { id: 'large', name: 'Large', price: 2.50 },
  ];

  const addons = [
    { id: 'extra-cheese', name: 'Extra Cheese', price: 0.50 },
    { id: 'bacon', name: 'Bacon', price: 1.50 },
    { id: 'extra-patty', name: 'Extra Patty', price: 2.00 },
    { id: 'no-pickles', name: 'No Pickles', price: 0 },
    { id: 'extra-sauce', name: 'Extra Sauce', price: 0.30 },
  ];

  const toggleAddon = (addon: SizeAddonsProps) => {
    setSelectedAddons(prev => {
      if (prev.some(a => a.id === addon.id)) {
        return prev.filter(a => a.id !== addon.id);
      } else {
        return [...prev, addon];
      }
    });
  };

  const calculateTotal = () => {
    const sizePrice = sizes.find(s => s.id === selectedSize)?.price || 0;
    const addonsPrice = addons
      .filter(addon => selectedAddons.some(a => a.id === addon.id))
      .reduce((sum, addon) => sum + addon.price, 0);
    return (item.price + sizePrice + addonsPrice) * quantity;
  };

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();
    onAddToCart(item, quantity, {
      size: selectedSize,
      addons: selectedAddons,
      specialInstructions: specialInstructions,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-gray-100 transition-all hover:scale-110"
        >
          <X className="w-5 h-5 text-gray-700" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[90vh] scrollbar-custom">
          {/* Header with Image */}
          <div className="relative bg-gradient-to-br from-[#FFC72C] via-[#f0b91c] to-[#DA291C] p-12 flex flex-col items-center">
            {/* Item Image */}
            <div className="text-9xl mb-4 transform hover:scale-110 transition-transform duration-300">
              {item.image}
            </div>

            {/* Item Stats */}
            <div className="flex gap-4 mb-4">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#DA291C]" />
                <span className="text-sm font-bold text-gray-700">{item.prepTime} min</span>
              </div>
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-bold text-gray-700">{item.calories} cal</span>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6">
            {/* Title & Description */}
            <div>
              <h2 className="text-4xl font-black text-gray-900 mb-3">
                {item.name}
              </h2>
              <p className="text-gray-600 font-medium leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 text-3xl font-black text-[#DA291C]">
                ${item.price.toFixed(2)}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <label className="block text-lg font-black text-gray-900 mb-3">
                Choose Size
              </label>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map(size => (
                  <button
                    key={size.id}
                    type="button"
                    onClick={() => setSelectedSize(size.id as any)}
                    className={`relative p-4 rounded-2xl border-2 transition-all font-bold ${selectedSize === size.id
                        ? 'border-[#DA291C] bg-[#DA291C]/5 shadow-lg scale-105'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    {selectedSize === size.id && (
                      <div className="absolute top-2 right-2 w-6 h-6 bg-[#DA291C] rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="text-gray-900 mb-1">{size.name}</div>
                    {size.price > 0 && (
                      <div className="text-sm text-[#DA291C]">+${size.price.toFixed(2)}</div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <label className="block text-lg font-black text-gray-900 mb-3">
                Customize Your Order
              </label>
              <div className="space-y-2">
                {addons.map(addon => (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon)}
                    className={`w-full p-4 rounded-2xl border-2 transition-all flex items-center justify-between ${selectedAddons?.some(a => a.id === addon.id)
                        ? 'border-[#DA291C] bg-[#DA291C]/5 shadow-md'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                      }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${selectedAddons?.some(a => a.id === addon.id)
                            ? 'border-[#DA291C] bg-[#DA291C]'
                            : 'border-gray-300'
                          }`}
                      >
                        {selectedAddons?.some(a => a.id === addon.id) && (
                          <Check className="w-4 h-4 text-white" />
                        )}
                      </div>
                      <span className="font-bold text-gray-900">{addon.name}</span>
                    </div>
                    {addon.price > 0 && (
                      <span className="font-bold text-[#DA291C]">
                        +${addon.price.toFixed(2)}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Special Instructions */}
            <div>
              <label className="block text-lg font-black text-gray-900 mb-3">
                Special Instructions (Optional)
              </label>
              <textarea
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="Any special requests? (e.g., no onions, extra napkins)"
                className="w-full p-4 border-2 border-gray-200 rounded-2xl focus:border-[#FFC72C] focus:outline-none resize-none font-medium text-gray-700 placeholder:text-gray-400"
                rows={3}
              />
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="block text-lg font-black text-gray-900 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                  className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-bold text-gray-700 transition-all hover:scale-110"
                >
                  <Minus className="w-5 h-5" />
                </button>

                <div className="flex-1 text-center">
                  <div className="text-4xl font-black text-gray-900">{quantity}</div>
                </div>

                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 rounded-full bg-[#FFC72C] hover:bg-[#f0b91c] flex items-center justify-center font-bold text-gray-900 transition-all hover:scale-110 shadow-lg"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Total Price Display */}
            <div className="bg-gradient-to-r from-[#FFC72C]/20 to-[#DA291C]/20 p-6 rounded-2xl">
              <div className="flex justify-between items-center">
                <span className="text-xl font-black text-gray-900">Total</span>
                <span className="text-4xl font-black text-[#DA291C]">
                  ${calculateTotal().toFixed(2)}
                </span>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#DA291C] to-[#b91d14] hover:from-[#b91d14] hover:to-[#DA291C] text-white py-5 rounded-full font-black text-xl shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 group"
            >
              <ShoppingCart className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Add to Cart - ${calculateTotal().toFixed(2)}
            </button>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }

        .scrollbar-custom::-webkit-scrollbar {
          width: 8px;
        }

        .scrollbar-custom::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #DA291C;
          border-radius: 10px;
        }

        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #b91d14;
        }
      `}</style>
    </div>
  );
};

export default OrderModal;