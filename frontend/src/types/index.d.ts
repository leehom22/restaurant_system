// Menu.tsx
type CategoryType = 'all' | 'burgers' | 'sides' | 'drinks' | 'desserts' | 'McNuggets' | 'breakfast' | 'combo_meals';

interface MenuItem {
  id: number;
  name: string;
  category: CategoryType;
  price: number;
  description: string;
  calories: number;
  image: string;
  isPopular?: boolean;
  isNew?: boolean;
  prepTime: number;
}

// OrderModal.tsx

type SizeType = 'regular' | 'medium' | 'large'

interface SizeAddonsProps {
  id:string,
  name: string,
  price: number
}

interface CustomizationProps {
  size: SizeType,
  addons?: SizeAddonsProps[],
  specialInstructions?: string 
}

interface OrderProps {
  item: MenuItem,
  quantity: number,
  customization: CustomizationProps
}

// OrderCart.tsx

interface OrderCartProps {
  orderItems: OrderProps[];
  onUpdateQuantity?: (itemId: number, newQuantity: number) => void;
  onRemoveItem?: (itemId: number) => void;
  onCheckout?: () => void;
}
