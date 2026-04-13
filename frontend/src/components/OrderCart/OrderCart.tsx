import { Trash2, Plus, Minus, ShoppingBag, Tag, Clock, X } from 'lucide-react';
import { calculateItemTotal, calculateTotal, getSizePrice, handleQuantityChange } from '../../utils/calculation';

const OrderCart = ({
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}: OrderCartProps) => {

  console.log("orderItems: ", orderItems)
  return (
    <div className="bg-white border-2 border-gray-200 rounded-3xl shadow-xl p-6 sticky top-24 max-h-[calc(100vh-120px)] flex flex-col ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#DA291C] to-[#b91d14] rounded-full flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-gray-900">Your Order</h2>
            <p className="text-sm text-gray-600 font-semibold">
              {orderItems.length} {orderItems.length === 1 ? 'item' : 'items'}
            </p>
          </div>
        </div>
      </div>

      {/* Order Items - Scrollable */}
      <div className="flex-1 overflow-y-auto mb-6 space-y-4 scrollbar-custom pr-2">
        {orderItems.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <p className="text-gray-500 font-semibold text-lg">Your cart is empty</p>
            <p className="text-gray-400 text-sm mt-2">Add some delicious items!</p>
          </div>
        ) : (
          orderItems.map((order, index) => (
            <div
              key={`${order.item.id}-${index}`}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border-2 border-gray-100 hover:border-[#FFC72C] transition-all group"
            >
              {/* Item Header */}
              <div className="flex gap-4 mb-3">
                {/* Item Image */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#FFC72C] to-[#f0b91c] rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <span className="text-4xl">{order.item.image}</span>
                </div>

                {/* Item Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-black text-gray-900 text-lg mb-1 truncate">
                    {order.item.name}
                  </h3>

                  {/* Size Badge */}
                  <div className="flex items-center gap-2 mb-2 ">
                    <span className="inline-flex items-center px-2 py-1 bg-[#DA291C]/10 text-[#DA291C] rounded-full text-xs font-bold">
                      {order.customization.size.charAt(0).toUpperCase() + order.customization.size.slice(1)}
                    </span>
                    {order.customization.addons && order.customization.addons.length > 0 && (
                      <span className="inline-flex items-center px-2 py-1 bg-[#FFC72C]/20 text-gray-700 rounded-full text-xs font-bold">
                        +{order.customization.addons.length} add-ons
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="text-xl font-black text-[#DA291C]">
                    ${order.item.price.toFixed(2)}
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => onRemoveItem?.(order.item.id)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 transition-all opacity-0 group-hover:opacity-100"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              {/* Customizations */}
              {order.customization.addons && order.customization.addons.length > 0 && (
                <div className="mb-3 pl-1">
                  <p className="text-xs font-bold text-gray-500 mb-1">Add-ons:</p>
                  <div className="flex flex-wrap gap-1">
                    {order.customization.addons.map((addon) => (
                      <span
                        key={addon.id}
                        className="inline-flex items-center gap-1 px-2 py-1 bg-white border border-gray-200 rounded-lg text-xs font-semibold text-gray-700"
                      >
                        <Plus className="w-3 h-3 text-[#DA291C]" />
                        {addon.name}
                        {addon.price > 0 && (
                          <span className="text-[#DA291C]">+${addon.price.toFixed(2)}</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Special Instructions */}
              {order.customization.specialInstructions && (
                <div className="mb-3 pl-1">
                  <p className="text-xs font-bold text-gray-500 mb-1">Special Instructions:</p>
                  <p className="text-xs text-gray-600 italic bg-yellow-50 border border-yellow-200 rounded-lg p-2">
                    "{order.customization.specialInstructions}"
                  </p>
                </div>
              )}

              {/* Quantity Controls & Item Total */}
              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                {/* Quantity Controls */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-full p-1">
                  <button
                    onClick={() => handleQuantityChange(order.item.id, -1,orderItems,onUpdateQuantity)}
                    disabled={order.quantity <= 1}
                    className="w-8 h-8 rounded-full bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center font-bold text-gray-700 transition-all shadow-sm"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <span className="w-8 text-center font-black text-gray-900">
                    {order.quantity}
                  </span>

                  <button
                    onClick={() => handleQuantityChange(order.item.id, 1,orderItems,onUpdateQuantity)}
                    className="w-8 h-8 rounded-full bg-[#FFC72C] hover:bg-[#f0b91c] flex items-center justify-center font-bold text-gray-900 transition-all shadow-sm"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Item Total */}
                <div className="text-right">
                  <p className="text-xs text-gray-500 font-semibold">Item Total</p>
                  <p className="text-2xl font-black text-gray-900">
                    ${calculateItemTotal(order).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {
        orderItems.length > 0 &&
        <div className='flex flex-col gap-3'>
          <div className="border-t-2 border-gray-200 pt-3 flex justify-between items-center">
            <span className="text-xl font-black text-gray-900">Total</span>
            <span className="text-3xl font-black text-[#DA291C]">
              ${calculateTotal(orderItems).toFixed(2)}
            </span>
          </div>
          <button
            onClick={onCheckout}
            className="w-full bg-gradient-to-r from-[#DA291C] to-[#b91d14] hover:from-[#b91d14] hover:to-[#DA291C] text-white py-4 rounded-full font-black text-lg shadow-2xl transition-all hover:scale-105 flex items-center justify-center gap-3 group"
          >
            <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            Checkout
          </button>
        </div>
      }

      <style jsx>{`
        .scrollbar-custom::-webkit-scrollbar {
          width: 6px;
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

export default OrderCart;