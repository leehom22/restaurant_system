import React, { useState, useEffect } from 'react';
import { Search, Filter, ShoppingCart } from 'lucide-react';
import MenuHero from '../../components/MenuHero';
import { breakfast, burger, combo, desserts, drinks, fries, nuggets, popular, price } from '../../assets';
import FoodCard from '../../components/Menu/FoodCard';
import OrderModal from '../../components/Menu/OrderModal';
import { useNavigate } from 'react-router-dom';
import OrderCart from '../../components/OrderCart/OrderCart';

// Mock menu data
const menuItems: MenuItem[] = [
  {
    id: 1,
    name: 'Big Mac',
    category: 'burgers',
    price: 5.99,
    description: 'Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun',
    calories: 563,
    image: '🍔',
    isPopular: true,
    prepTime: 5
  },
  {
    id: 2,
    name: 'Quarter Pounder with Cheese',
    category: 'burgers',
    price: 6.49,
    description: 'Fresh beef, melted cheese, pickles, onions, ketchup and mustard',
    calories: 520,
    image: '🍔',
    isPopular: true,
    prepTime: 6
  },
  {
    id: 3,
    name: 'McChicken',
    category: 'burgers',
    price: 4.99,
    description: 'Crispy chicken, lettuce, and mayo on a toasted bun',
    calories: 400,
    image: '🍔',
    prepTime: 4
  },
  {
    id: 4,
    name: 'Filet-O-Fish',
    category: 'burgers',
    price: 5.49,
    description: 'Wild-caught Alaskan Pollock, tartar sauce, and cheese on a steamed bun',
    calories: 380,
    image: '🍔',
    prepTime: 5
  },
  {
    id: 5,
    name: 'Chicken McNuggets (10 pc)',
    category: 'McNuggets',
    price: 5.99,
    description: 'Tender, juicy chicken in a crispy tempura coating',
    calories: 420,
    image: '🍗',
    isPopular: true,
    prepTime: 3
  },
  {
    id: 6,
    name: 'Spicy McNuggets (10 pc)',
    category: 'McNuggets',
    price: 6.49,
    description: 'McNuggets with a spicy kick',
    calories: 430,
    image: '🍗',
    isNew: true,
    prepTime: 3
  },
  {
    id: 7,
    name: 'World Famous Fries (Large)',
    category: 'sides',
    price: 3.49,
    description: 'Golden, crispy fries with just the right amount of salt',
    calories: 510,
    image: '🍟',
    isPopular: true,
    prepTime: 2
  },
  {
    id: 8,
    name: 'Chicken McNuggets (6 pc)',
    category: 'McNuggets',
    price: 4.49,
    description: 'Perfect snack-sized portion',
    calories: 250,
    image: '🍗',
    prepTime: 3
  },
  {
    id: 9,
    name: 'Coca-Cola (Large)',
    category: 'drinks',
    price: 1.99,
    description: 'Ice-cold Coca-Cola',
    calories: 310,
    image: '🥤',
    prepTime: 1
  },
  {
    id: 10,
    name: 'McFlurry with Oreo',
    category: 'desserts',
    price: 3.99,
    description: 'Creamy vanilla soft serve mixed with Oreo cookie pieces',
    calories: 510,
    image: '🍦',
    isPopular: true,
    prepTime: 3
  },
  {
    id: 11,
    name: 'Apple Pie',
    category: 'desserts',
    price: 1.49,
    description: 'Warm apple pie in a crispy, flaky crust',
    calories: 230,
    image: '🥧',
    prepTime: 2
  },
  {
    id: 12,
    name: 'Egg McMuffin',
    category: 'breakfast',
    price: 4.49,
    description: 'Freshly cracked egg, Canadian bacon, American cheese on a toasted English muffin',
    calories: 300,
    image: '🥪',
    isPopular: true,
    prepTime: 4
  },
  {
    id: 13,
    name: 'Big Mac Meal',
    category: 'combo_meals',
    price: 9.99,
    description: 'Big Mac, medium fries, and medium drink',
    calories: 1080,
    image: '🍔',
    isPopular: true,
    prepTime: 6
  },
  {
    id: 14,
    name: 'Hash Browns',
    category: 'breakfast',
    price: 1.99,
    description: 'Crispy, golden hash browns',
    calories: 150,
    image: '🥔',
    prepTime: 2
  },
];

const categories = [
  { id: 'all', name: 'All Menu', icon: combo },
  { id: 'burgers', name: 'Burgers', icon: burger },
  { id: 'McNuggets', name: 'McNuggets', icon: nuggets },
  { id: 'sides', name: 'Sides', icon: fries },
  { id: 'drinks', name: 'Drinks', icon: drinks },
  { id: 'desserts', name: 'Desserts', icon: desserts },
  { id: 'breakfast', name: 'Breakfast', icon: breakfast },
  { id: 'combo_meals', name: 'Combo Meals', icon: combo },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState<{ [key: number]: number }>({});
  const [orderCart, setOrderCart] = useState<OrderProps[]>([])
  const [openModal, setOpenModal] = useState(false)
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'calories'>('popular');
  const navigate = useNavigate()

  const setOrder = (item: MenuItem) => {
    setSelectedItem(item)
    setOpenModal(true)
  }

  // Filter and sort menu items
  const filteredItems = menuItems
    .filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return (b.isPopular ? 1 : 0) - (a.isPopular ? 1 : 0);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'calories':
          return a.calories - b.calories;
        default:
          return 0;
      }
    });

  const addToCart = (item: MenuItem, quantity: number, { size, addons, specialInstructions }: CustomizationProps) => {

    const newItems: OrderProps = {
      item,
      quantity,
      customization: {
        addons,
        size,
        specialInstructions
      }
    }
    setOrderCart(prev => ([...prev, { ...newItems }]))

    setCart(prev => ({
      ...prev,
      [item.id]: (prev[item.id] || 0) + 1
    }));
  };

  const handleUpdateQuantity = (itemId: number, newQuantity: number, setOrderCart: (value: React.SetStateAction<OrderProps[]>) => void) => {
    setOrderCart(prev =>
      prev.map(item =>
        item.item.id === itemId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (itemId: number) => {
    setOrderCart(prev => prev.filter(item => item.item.id !== itemId));
  };

  const handleCheckout = () => {
    console.log('Proceeding to checkout with:', orderCart);
    // Navigate to checkout page
    navigate('/checkout', {state: orderCart})
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFF8E7] to-white">
      <MenuHero />

      {/* Search and Filter Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1 relative w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for your favorite meal..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-[#FFC72C] focus:outline-none font-semibold text-gray-700 transition-all"
              />
            </div>

            {/* Filter Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 bg-[#27251F] text-white rounded-full font-bold hover:bg-[#DA291C] transition-all shadow-lg"
            >
              <Filter className="w-5 h-5" />
              Sort & Filter
            </button>

            {/* Cart Button */}
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-4 p-4 bg-gray-50 rounded-2xl animate-slide-down">
              <div className="flex flex-wrap gap-3">
                <span className="text-sm font-bold text-gray-700">Sort by:</span>
                {[
                  { id: 'popular', label: 'Popular', icon: popular },
                  { id: 'price-low', label: 'Price: Low to High', icon: price },
                  { id: 'price-high', label: 'Price: High to Low', icon: price },
                  { id: 'calories', label: 'Calories: Low to High', icon: popular },
                ].map(option => (
                  <button
                    key={option.id}
                    onClick={() => setSortBy(option.id as any)}
                    className={`px-4 py-2 rounded-full text-sm font-bold transition-all flex gap-3 ${sortBy === option.id
                      ? 'bg-[#DA291C] text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                      }`}
                  >
                    <img src={option.icon} alt="icon" className='size-5' />
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id as CategoryType)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold whitespace-nowrap transition-all transform hover:scale-105 shadow-lg ${selectedCategory === category.id
                ? 'bg-[#DA291C] text-white scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
            >
              <img src={category.icon} alt="icon" className='size-7' />
              <span>{category.name}</span>
              {selectedCategory === category.id && (
                <span className="bg-white/30 px-2 py-0.5 rounded-full text-xs">
                  {filteredItems.length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className='flex p-3'>
        {/* Menu Grid */}
        <div className="container mx-auto px-6 pb-20">
          {filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-3xl font-black text-gray-800 mb-2">No items found</h3>
              <p className="text-gray-600 font-medium">Try adjusting your search or filters</p>
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-black text-gray-800">
                  {selectedCategory === 'all' ? 'All Items' : categories.find(c => c.id === selectedCategory)?.name}
                  <span className="text-[#DA291C] ml-2">({filteredItems.length})</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredItems.map((item, index) => (
                  <div>
                    <FoodCard
                      index={index}
                      item={item}
                      setOrder={setOrder}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
          {
            openModal && selectedItem &&
            <OrderModal
              item={selectedItem}
              onAddToCart={addToCart}
              onClose={() => setOpenModal(false)}
            />
          }
        </div>
        <OrderCart
          orderItems={orderCart}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onCheckout={handleCheckout}
        />
      </div>

      <style jsx>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-bounce-subtle {
          animation: bounce-subtle 2s ease-in-out infinite;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }

        .menu-card {
          animation: fade-in-up 0.5s ease-out backwards;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default Menu;