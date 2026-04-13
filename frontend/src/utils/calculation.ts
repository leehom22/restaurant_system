// Get size price modifier
export const getSizePrice = (size: SizeType) => {
    const sizePrices = {
        regular: 0,
        medium: 1.50,
        large: 2.50,
    };
    return sizePrices[size] || 0;
};

// Calculate item total (base price + size + addons) × quantity
export const calculateItemTotal = (order: OrderProps) => {
    const sizePrice = getSizePrice(order.customization.size);
    const addonsPrice = order.customization.addons?.reduce((sum, addon) => sum + addon.price, 0) || 0;
    return (order.item.price + sizePrice + addonsPrice) * order.quantity;
};

// Calculate subtotal
export const calculateSubtotal = (orderItems: OrderProps[]) => {
    return orderItems.reduce((sum, order) => sum + calculateItemTotal(order), 0);
};

// Calculate tax (example: 8%)
export const calculateTax = (orderItems: OrderProps[]) => {
    return calculateSubtotal(orderItems) * 0.08;
};

// Calculate total
export const calculateTotal = (orderItems: OrderProps[]) => {
    return calculateSubtotal(orderItems) + calculateTax(orderItems);
};

// Handle quantity change
export const handleQuantityChange = (itemId: number, delta: number, orderItems: OrderProps[], onUpdateQuantity: ((itemId: number, newQuantity: number) => void) | undefined) => {
    const item = orderItems.find(o => o.item.id === itemId);
    if (item && onUpdateQuantity) {
        const newQuantity = Math.max(1, item.quantity + delta);
        onUpdateQuantity(itemId, newQuantity);
    }
};
