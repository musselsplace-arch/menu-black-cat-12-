import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cat, 
  ShoppingBag, 
  Check, 
  Plus, 
  Minus, 
  Trash2, 
  Settings, 
  X, 
  Lock, 
  Upload, 
  Languages, 
  Sparkles, 
  Wine, 
  Coffee, 
  UtensilsCrossed,
  Layers,
  ChevronRight,
  Info,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { 
  CategoryType, 
  WineSubCategoryType, 
  MenuItemWithStrings, 
  CartItem, 
  TranslationDictionary 
} from './types';
import { INITIAL_MENU_ITEMS, LOCAL_TRANSLATIONS } from './data';

export default function App() {
  // --- 1. STATE MANAGEMENT ---
  const [selectedLanguage, setSelectedLanguage] = useState<'ka' | 'en' | 'ru' | null>(() => {
    const saved = localStorage.getItem('bc_lang');
    return (saved as 'ka' | 'en' | 'ru') || null;
  });

  const [activeCategory, setActiveCategory] = useState<CategoryType>('oysters');
  const [activeWineSubCategory, setActiveWineSubCategory] = useState<WineSubCategoryType>('all');
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('bc_cart');
    return saved ? JSON.parse(saved) : [];
  });

  // Dynamic menu items loaded from default list + custom added items
  const [menuItems, setMenuItems] = useState<MenuItemWithStrings[]>(() => {
    const saved = localStorage.getItem('bc_custom_menu');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_MENU_ITEMS;
      }
    }
    return INITIAL_MENU_ITEMS;
  });

  // Stop list mapping (itemId -> isStopped)
  const [stopList, setStopList] = useState<Record<number, boolean>>(() => {
    const saved = localStorage.getItem('bc_stop_list');
    return saved ? JSON.parse(saved) : {};
  });

  // UI Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  
  // Custom Touchpad PIN Screen state
  const [isPinPadOpen, setIsPinPadOpen] = useState(false);
  const [pinTarget, setPinTarget] = useState<'reset' | 'admin' | null>(null);
  const [pinInput, setPinInput] = useState('');
  const [pinError, setPinError] = useState(false);

  // Admin New Item Form
  const [newItemForm, setNewItemForm] = useState({
    category: 'oysters' as CategoryType,
    subCategory: 'all' as WineSubCategoryType,
    icon: '🍽️',
    titleKa: '',
    titleEn: '',
    titleRu: '',
    descKa: '',
    descEn: '',
    descRu: '',
    isWine: false,
    price: 25,
    priceGlass: 15,
    priceBottle: 65,
    imageFile: null as File | null,
    imageUrl: ''
  });

  // Search in Admin
  const [adminSearch, setAdminSearch] = useState('');

  // Local state persistence
  useEffect(() => {
    if (selectedLanguage) {
      localStorage.setItem('bc_lang', selectedLanguage);
    } else {
      localStorage.removeItem('bc_lang');
    }
  }, [selectedLanguage]);

  useEffect(() => {
    localStorage.setItem('bc_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('bc_custom_menu', JSON.stringify(menuItems));
  }, [menuItems]);

  useEffect(() => {
    localStorage.setItem('bc_stop_list', JSON.stringify(stopList));
  }, [stopList]);

  // Translate dictionary helper
  const t = useMemo((): TranslationDictionary => {
    return LOCAL_TRANSLATIONS[selectedLanguage || 'en'];
  }, [selectedLanguage]);

  // --- 2. CART LOGIC ---
  const handleAddToCart = (item: MenuItemWithStrings, variant: 'standard' | 'glass' | 'bottle') => {
    if (stopList[item.id]) return; // Stop list item cannot be selected

    const cartId = `${item.id}-${variant}`;
    const price = variant === 'glass' ? (item.priceGlass || 0) : 
                  variant === 'bottle' ? (item.priceBottle || 0) : 
                  (item.price || 0);

    setCart(prevCart => {
      const existing = prevCart.find(i => i.cartId === cartId);
      if (existing) {
        return prevCart.map(i => i.cartId === cartId ? { ...i, quantity: i.quantity + 1 } : i);
      } else {
        return [...prevCart, {
          cartId,
          item,
          variant,
          price,
          quantity: 1
        }];
      }
    });
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCart(prevCart => {
      return prevCart.map(i => {
        if (i.cartId === cartId) {
          const newQty = i.quantity + delta;
          return newQty > 0 ? { ...i, quantity: newQty } : null;
        }
        return i;
      }).filter((i): i is CartItem => i !== null);
    });
  };

  const handleRemoveFromCart = (cartId: string) => {
    setCart(prevCart => prevCart.filter(i => i.cartId !== cartId));
  };

  const totalCartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart]);

  const totalCartPrice = useMemo(() => {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [cart]);

  // Helper to count quantities for custom badges on menu items
  const getItemQuantity = (itemId: number, variant: 'standard' | 'glass' | 'bottle') => {
    const found = cart.find(i => i.item.id === itemId && i.variant === variant);
    return found ? found.quantity : 0;
  };

  // --- 3. PIN CODE VERIFICATION (POS Style) ---
  const handlePinKeyPress = (val: string) => {
    setPinError(false);
    if (pinInput.length < 4) {
      const nextPin = pinInput + val;
      setPinInput(nextPin);

      // Verify immediately when 4 digits are completed
      if (nextPin === '5555') {
        setTimeout(() => {
          if (pinTarget === 'reset') {
            // Complete reset and return to Lang selection
            setCart([]);
            setSelectedLanguage(null);
            setIsCartOpen(false);
            setIsPinPadOpen(false);
          } else if (pinTarget === 'admin') {
            setIsAdminOpen(true);
            setIsPinPadOpen(false);
          }
          setPinInput('');
          setPinTarget(null);
        }, 150);
      } else if (nextPin.length === 4) {
        // Wrong PIN flash
        setTimeout(() => {
          setPinError(true);
          setPinInput('');
        }, 200);
      }
    }
  };

  const handlePinBackspace = () => {
    setPinInput(prev => prev.slice(0, -1));
    setPinError(false);
  };

  const triggerPinRequest = (target: 'reset' | 'admin') => {
    setPinTarget(target);
    setPinInput('');
    setPinError(false);
    setIsPinPadOpen(true);
  };

  // --- 4. ADMIN ACTIONS ---
  const handleToggleStopList = (itemId: number) => {
    setStopList(prev => {
      const updated = { ...prev, [itemId]: !prev[itemId] };
      // If we stop-list an item, remove it from the cart
      if (updated[itemId]) {
        setCart(prevCart => prevCart.filter(c => c.item.id !== itemId));
      }
      return updated;
    });
  };

  const handleAdminImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setNewItemForm(prev => ({
        ...prev,
        imageFile: file,
        imageUrl: url
      }));
    }
  };

  const handleSaveNewItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemForm.titleKa || !newItemForm.titleEn || !newItemForm.titleRu) {
      alert("Please fill in all titles");
      return;
    }

    const newId = menuItems.length > 0 ? Math.max(...menuItems.map(m => m.id)) + 1 : 1;

    const addedItem: MenuItemWithStrings = {
      id: newId,
      category: newItemForm.category,
      subCategory: newItemForm.isWine ? newItemForm.subCategory : undefined,
      icon: newItemForm.icon,
      image: newItemForm.imageUrl || undefined,
      price: newItemForm.isWine ? undefined : Number(newItemForm.price),
      priceGlass: newItemForm.isWine ? Number(newItemForm.priceGlass) : undefined,
      priceBottle: newItemForm.isWine ? Number(newItemForm.priceBottle) : undefined,
      strings: {
        ka: {
          title: newItemForm.titleKa,
          description: newItemForm.descKa || "საფირმო რეცეპტი",
          extra: newItemForm.category === 'oysters' ? "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე." : undefined
        },
        en: {
          title: newItemForm.titleEn,
          description: newItemForm.descEn || "Delicious chef custom preparation.",
          extra: newItemForm.category === 'oysters' ? "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate." : undefined
        },
        ru: {
          title: newItemForm.titleRu,
          description: newItemForm.descRu || "Фирменный рецепт от шеф-повара.",
          extra: newItemForm.category === 'oysters' ? "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке." : undefined
        }
      }
    };

    setMenuItems(prev => [...prev, addedItem]);

    // Reset Form
    setNewItemForm({
      category: 'oysters',
      subCategory: 'all',
      icon: '🍽️',
      titleKa: '',
      titleEn: '',
      titleRu: '',
      descKa: '',
      descEn: '',
      descRu: '',
      isWine: false,
      price: 25,
      priceGlass: 15,
      priceBottle: 65,
      imageFile: null,
      imageUrl: ''
    });
  };

  const handleResetToDefaultMenu = () => {
    if (window.confirm("Are you sure you want to reset the menu database to default?")) {
      setMenuItems(INITIAL_MENU_ITEMS);
      setStopList({});
      localStorage.removeItem('bc_custom_menu');
      localStorage.removeItem('bc_stop_list');
    }
  };

  // --- 5. DATA FILTERING ---
  const filteredMenuItems = useMemo(() => {
    return menuItems.filter(item => {
      // Filter by category
      if (item.category !== activeCategory) return false;
      // If wine, filter by subcategory
      if (activeCategory === 'wine') {
        if (activeWineSubCategory !== 'all' && item.subCategory !== activeWineSubCategory) {
          return false;
        }
      }
      return true;
    });
  }, [menuItems, activeCategory, activeWineSubCategory]);

  const sections = useMemo(() => {
    if (activeCategory === 'oysters') {
      const zone25 = filteredMenuItems.filter(item => item.price === 25);
      const sets = filteredMenuItems.filter(item => item.price !== 25);
      const list = [];
      if (zone25.length > 0) {
        list.push({
          id: 'oysters-25',
          title: {
            ka: "25 ლარიანი ზონა",
            en: "THE 25 GEL ZONE",
            ru: "ЗОНА 25 GEL"
          },
          subtitle: {
            ka: "ყველა ინდივიდუალური გამომცხვარი ხამანწკა • ნებისმიერი კერძი ამ სექციიდან არის ზუსტად 25 ₾",
            en: "All individual baked oysters • Any item in this section is exactly 25₾",
            ru: "Все запеченные устрицы по отдельности • Любое блюдо в этой секции ровно за 25₾"
          },
          badge: "25₾",
          items: zone25
        });
      }
      if (sets.length > 0) {
        list.push({
          id: 'oysters-sets',
          title: {
            ka: "ხამანწკების პრემიუმ სეტები",
            en: "THE GRAND SELECTIONS",
            ru: "УСТРИЧНЫЕ ПРЕМИУМ СЕТЫ"
          },
          subtitle: {
            ka: "საფირმო ასორტი და გრანდ სეტები განსაკუთრებული მომენტებისთვის",
            en: "Signature assortments and grand sets for special moments",
            ru: "Фирменные ассорти и гранд сеты для особых моментов"
          },
          badge: "SETS",
          items: sets
        });
      }
      return list;
    }

    if (activeCategory === 'brunch') {
      const zone25 = filteredMenuItems.filter(item => item.price === 25);
      const zone50 = filteredMenuItems.filter(item => item.price === 50);
      const other = filteredMenuItems.filter(item => item.price !== 25 && item.price !== 50);
      const list = [];
      if (zone25.length > 0) {
        list.push({
          id: 'brunch-25',
          title: {
            ka: "25 ლარიანი ზონა",
            en: "THE 25 GEL ZONE",
            ru: "ЗОНА 25 GEL"
          },
          subtitle: {
            ka: "ბრანჩები, სალათები და ბრუსკეტები • ნებისმიერი კერძი ამ სექციიდან არის ზუსტად 25 ₾",
            en: "Gourmet brunch, salads, and bruschettas • Any item in this section is exactly 25₾",
            ru: "Бранчи, салаты и брускетты • Любое блюдо в этой секции ровно за 25₾"
          },
          badge: "25₾",
          items: zone25
        });
      }
      if (zone50.length > 0) {
        list.push({
          id: 'brunch-50',
          title: {
            ka: "50 ლარიანი ზონა",
            en: "THE 50 GEL ZONE",
            ru: "ЗОНА 50 GEL"
          },
          subtitle: {
            ka: "პრემიუმ დაფები გასაზიარებლად • ნებისმიერი კერძი ამ სექციიდან არის ზუსტად 50 ₾",
            en: "Premium shared platters • Any item in this section is exactly 50₾",
            ru: "Премиальные плато для компании • Любое блюдо в этой секции ровно за 50₾"
          },
          badge: "50₾",
          items: zone50
        });
      }
      if (other.length > 0) {
        list.push({
          id: 'brunch-other',
          title: {
            ka: "სხვა კერძები",
            en: "OTHER DISHES",
            ru: "ДРУГИЕ БЛЮДА"
          },
          subtitle: {
            ka: "ბისტროს სხვა კერძები",
            en: "Other bistro specialties",
            ru: "Другие блюда бистро"
          },
          badge: "MENU",
          items: other
        });
      }
      return list;
    }

    if (activeCategory === 'drinks') {
      const desserts = filteredMenuItems.filter(item => item.id === 58 || item.id === 59 || item.icon === '🍰' || item.price === 15);
      const drinks = filteredMenuItems.filter(item => !(item.id === 58 || item.id === 59 || item.icon === '🍰' || item.price === 15));
      const list = [];
      if (drinks.length > 0) {
        list.push({
          id: 'drinks-list',
          title: {
            ka: "ყავა & ცივი სასმელები",
            en: "COFFEE & REFRESHMENTS",
            ru: "КОФЕ И НАПИТКИ"
          },
          subtitle: {
            ka: "ბარისტას საფირმო ცხელი და გამაგრილებელი სასმელები",
            en: "Bespoke hot and refreshing beverages crafted by our barista",
            ru: "Фирменные горячие и освежающие напитки от нашего бариста"
          },
          badge: "BAR",
          items: drinks
        });
      }
      if (desserts.length > 0) {
        list.push({
          id: 'drinks-desserts',
          title: {
            ka: "15 ლარიანი ზონა",
            en: "THE 15 GEL ZONE",
            ru: "ЗОНА 15 GEL"
          },
          subtitle: {
            ka: "საფირმო ხელნაკეთი დესერტები • ნებისმიერი დესერტი ამ სექციიდან არის ზუსტად 15 ₾",
            en: "Premium handcrafted desserts • Any dessert in this section is exactly 15₾",
            ru: "Фирменные десерты ручной работы • Любой десерт в этой секции ровно за 15₾"
          },
          badge: "15₾",
          items: desserts
        });
      }
      return list;
    }

    return [{
      id: 'all-items',
      title: null,
      subtitle: null,
      badge: null,
      items: filteredMenuItems
    }];
  }, [filteredMenuItems, activeCategory]);

  const adminFilteredItems = useMemo(() => {
    if (!adminSearch) return menuItems;
    const query = adminSearch.toLowerCase();
    return menuItems.filter(item => {
      return (
        item.strings.ka.title.toLowerCase().includes(query) ||
        item.strings.en.title.toLowerCase().includes(query) ||
        item.strings.ru.title.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    });
  }, [menuItems, adminSearch]);

  // --- 6. RENDER SCREEN: WELCOME / LANGUAGE SELECTOR ---
  if (!selectedLanguage) {
    return (
      <div id="welcome-screen" class="relative flex flex-col justify-between w-full h-full bg-[#0A0A0A] px-8 py-12 md:py-20 select-none overflow-hidden">
        {/* Glowing Ambient Background Circles for Frosted Glass Depth */}
        <div class="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/8 rounded-full blur-[140px] pointer-events-none animate-pulse" />
        <div class="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#D4AF37]/6 rounded-full blur-[140px] pointer-events-none" />
        <div class="absolute top-[40%] right-[30%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

        {/* Top Header Section */}
        <div class="flex flex-col items-center justify-center text-center mt-6 z-10">
          <div class="flex items-center justify-center w-24 h-24 mb-6 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md shadow-2xl shadow-black/40">
            <Cat class="w-12 h-12 text-[#D4AF37]" strokeWidth={1.5} />
          </div>
          <h1 class="font-serif text-5xl md:text-7xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-white mb-2 uppercase">
            Black Cat
          </h1>
          <p class="font-serif text-lg md:text-xl text-white/50 tracking-widest italic">
            ბისტრო • BISTRO • БИСТРО
          </p>
        </div>

        {/* Center Language Cards - Frosted Glass Panels */}
        <div class="max-w-4xl mx-auto w-full flex flex-col md:flex-row gap-6 justify-center items-center my-12 z-10">
          {/* GEORGIAN */}
          <button 
            id="lang-btn-ka"
            onClick={() => setSelectedLanguage('ka')}
            class="group relative flex flex-col items-center justify-center w-full md:w-64 h-44 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4AF37]/50 rounded-3xl shadow-2xl backdrop-blur-md transition-all duration-300 transform active:scale-95 cursor-pointer overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/0 via-[#D4AF37]/4 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span class="text-3xl font-medium text-white mb-2 font-sans tracking-wide">ქართული</span>
            <span class="text-xs text-white/40 font-sans tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors duration-300">ქართული მენიუ</span>
          </button>

          {/* ENGLISH */}
          <button 
            id="lang-btn-en"
            onClick={() => setSelectedLanguage('en')}
            class="group relative flex flex-col items-center justify-center w-full md:w-64 h-44 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4AF37]/50 rounded-3xl shadow-2xl backdrop-blur-md transition-all duration-300 transform active:scale-95 cursor-pointer overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/0 via-[#D4AF37]/4 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span class="text-3xl font-medium text-white mb-2 font-sans tracking-wide">English</span>
            <span class="text-xs text-white/40 font-sans tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors duration-300">English Menu</span>
          </button>

          {/* RUSSIAN */}
          <button 
            id="lang-btn-ru"
            onClick={() => setSelectedLanguage('ru')}
            class="group relative flex flex-col items-center justify-center w-full md:w-64 h-44 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4AF37]/50 rounded-3xl shadow-2xl backdrop-blur-md transition-all duration-300 transform active:scale-95 cursor-pointer overflow-hidden"
          >
            <div class="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/0 via-[#D4AF37]/4 to-[#D4AF37]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span class="text-3xl font-medium text-white mb-2 font-sans tracking-wide">Русский</span>
            <span class="text-xs text-white/40 font-sans tracking-wider uppercase group-hover:text-[#D4AF37] transition-colors duration-300">Русское меню</span>
          </button>
        </div>

        {/* Footer / Subtle Admin Access */}
        <div class="flex justify-between items-center px-4 z-10">
          <div class="text-xs text-white/30 font-mono tracking-wider">
            IPAD EXCLUSIVE TABLE VIEW
          </div>
          <button 
            onClick={() => triggerPinRequest('admin')}
            class="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs text-white/50 hover:text-[#D4AF37] font-mono transition-all duration-300 border border-white/5 hover:border-[#D4AF37]/30 bg-white/[0.02] hover:bg-white/[0.06] backdrop-blur-sm cursor-pointer"
          >
            <Lock class="w-3.5 h-3.5" />
            ADMIN PANEL
          </button>
        </div>

        {/* PIN PAD POPUP on welcome screen */}
        <AnimatePresence>
          {isPinPadOpen && (
            <div class="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50">
              <div class="w-80 bg-[#1E1E1E] border border-[#D4AF37]/30 rounded-3xl p-6 shadow-2xl relative">
                <button 
                  onClick={() => setIsPinPadOpen(false)}
                  class="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
                >
                  <X class="w-5 h-5" />
                </button>
                <div class="text-center mb-6">
                  <div class="w-12 h-12 bg-[#D4AF37]/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-[#D4AF37]/30">
                    <Lock class="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 class="text-lg font-serif text-[#D4AF37] font-medium">{t?.managerPin || "Manager PIN"}</h3>
                  <p class="text-xs text-gray-400 mt-1">{t?.enterPin || "Enter 4-digit PIN Code"}</p>
                </div>

                {/* PIN Code Circles */}
                <div class="flex justify-center gap-4 mb-6">
                  {[0, 1, 2, 3].map((idx) => (
                    <div 
                      key={idx} 
                      class={`w-4 h-4 rounded-full border-2 transition-all duration-150 ${
                        pinError ? 'border-red-500 bg-red-500' :
                        pinInput.length > idx ? 'border-[#D4AF37] bg-[#D4AF37]' : 'border-gray-600 bg-transparent'
                      }`}
                    />
                  ))}
                </div>

                {pinError && (
                  <p class="text-xs text-red-500 text-center mb-4 font-sans font-medium animate-bounce">
                    {t?.incorrectPin || "Incorrect PIN. Please try again."}
                  </p>
                )}

                {/* Custom Touchscreen Numpad */}
                <div class="grid grid-cols-3 gap-3">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                    <button
                      key={num}
                      onClick={() => handlePinKeyPress(num.toString())}
                      class="h-12 rounded-xl bg-white/5 hover:bg-white/10 active:bg-[#D4AF37]/20 border border-white/5 text-lg font-semibold text-white transition-all duration-100 cursor-pointer flex items-center justify-center font-mono"
                    >
                      {num}
                    </button>
                  ))}
                  <button
                    onClick={() => setIsPinPadOpen(false)}
                    class="h-12 rounded-xl bg-red-500/10 hover:bg-red-500/20 text-xs font-semibold text-red-400 transition-all duration-100 cursor-pointer flex items-center justify-center"
                  >
                    {t?.cancel || "Cancel"}
                  </button>
                  <button
                    onClick={() => handlePinKeyPress('0')}
                    class="h-12 rounded-xl bg-white/5 hover:bg-white/10 active:bg-[#D4AF37]/20 border border-white/5 text-lg font-semibold text-white transition-all duration-100 cursor-pointer flex items-center justify-center font-mono"
                  >
                    0
                  </button>
                  <button
                    onClick={handlePinBackspace}
                    class="h-12 rounded-xl bg-white/5 hover:bg-white/10 text-sm font-semibold text-gray-300 transition-all duration-100 cursor-pointer flex items-center justify-center"
                  >
                    ⌫
                  </button>
                </div>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // --- 7. RENDER SCREEN: MAIN MENU SCREEN (LOCALIZED & ANIMATED) ---
  return (
    <div class="w-full h-full flex flex-col bg-[#0A0A0A] select-none text-white relative font-sans overflow-hidden">
      {/* Premium Ambient Background Blobs for Glassmorphism Depth */}
      <div class="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#D4AF37]/4 rounded-full blur-[130px] pointer-events-none" />
      <div class="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-white/3 rounded-full blur-[130px] pointer-events-none" />
      <div class="absolute top-[35%] left-[25%] w-[40%] h-[40%] bg-[#D4AF37]/3 rounded-full blur-[110px] pointer-events-none" />

      {/* 7.1 TOP NAVIGATION HEADER - Frosted Glass Glassmorphism */}
      <header class="w-full h-20 border-b border-white/10 bg-white/[0.02] backdrop-blur-xl px-6 flex items-center justify-between shadow-lg relative z-10">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md flex items-center justify-center">
            <Cat class="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <h1 class="font-serif text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-[#D4AF37] uppercase">
              Black Cat
            </h1>
            <p class="text-[10px] font-serif text-white/40 tracking-widest uppercase italic">
              Bistro Interactive Table Menu
            </p>
          </div>
        </div>

        {/* Right Controls: Flags, Info, and Hidden Admin Zone */}
        <div class="flex items-center gap-4">
          
          {/* Quick Language Toggle */}
          <div class="flex items-center gap-1.5 bg-white/[0.03] backdrop-blur-sm border border-white/10 px-2.5 py-1.5 rounded-xl">
            <Languages class="w-3.5 h-3.5 text-white/50" />
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as 'ka' | 'en' | 'ru')}
              class="bg-transparent text-xs text-white/80 focus:outline-none border-none pr-1 font-medium cursor-pointer"
            >
              <option value="ka" class="bg-[#1E1E1E] text-white">ქართული</option>
              <option value="en" class="bg-[#1E1E1E] text-white">English</option>
              <option value="ru" class="bg-[#1E1E1E] text-white">Русский</option>
            </select>
          </div>

          {/* Quick Reset Back Button (Sends to Lang selection via Manager PIN) */}
          <button 
            onClick={() => triggerPinRequest('reset')}
            class="flex items-center gap-1 bg-white/[0.02] hover:bg-red-500/10 active:bg-red-500/20 border border-white/10 hover:border-red-500/30 px-3 py-2 rounded-xl text-xs text-white/70 hover:text-red-400 transition-all duration-200 backdrop-blur-sm cursor-pointer"
          >
            <Lock class="w-3 h-3" />
            <span class="font-medium">{t.clearMenu}</span>
          </button>

          {/* Subtle / Hidden Corner Zone for Admin Panel */}
          <button 
            onClick={() => triggerPinRequest('admin')}
            class="w-10 h-10 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/10 hover:border-[#D4AF37]/40 flex items-center justify-center transition-all duration-200 backdrop-blur-sm cursor-pointer text-white/60 hover:text-[#D4AF37]"
            title="Administrator Settings"
          >
            <Settings class="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* 7.2 SPLIT PANEL: LEFT SIDEBAR & RIGHT CONTENT */}
      <div class="flex-1 w-full flex overflow-hidden">
        
        {/* LEFT SIDEBAR (MAIN CATEGORIES) - Frosted Glass Navigation */}
        <nav class="w-64 border-r border-white/10 bg-white/[0.02] backdrop-blur-xl py-6 flex flex-col justify-between overflow-y-auto z-10">
          <div class="flex flex-col gap-2.5 px-4">
            
            {/* Category: Oysters */}
            <button
              onClick={() => { setActiveCategory('oysters'); setActiveWineSubCategory('all'); }}
              class={`flex items-center gap-3.5 w-full px-4 py-3.5 rounded-2xl transition-all duration-250 cursor-pointer ${
                activeCategory === 'oysters' 
                ? 'bg-white/[0.06] border border-[#D4AF37]/40 text-[#D4AF37] shadow-lg shadow-black/20 backdrop-blur-md font-bold' 
                : 'bg-transparent border border-transparent text-white/50 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <div class={`p-1.5 rounded-lg ${activeCategory === 'oysters' ? 'bg-[#D4AF37]/10' : 'bg-transparent'}`}>
                <UtensilsCrossed class="w-5 h-5" />
              </div>
              <span class="font-medium text-sm tracking-wide font-serif">{t.oysters}</span>
            </button>

            {/* Category: Brunch & Salads */}
            <button
              onClick={() => { setActiveCategory('brunch'); setActiveWineSubCategory('all'); }}
              class={`flex items-center gap-3.5 w-full px-4 py-3.5 rounded-2xl transition-all duration-250 cursor-pointer ${
                activeCategory === 'brunch' 
                ? 'bg-white/[0.06] border border-[#D4AF37]/40 text-[#D4AF37] shadow-lg shadow-black/20 backdrop-blur-md font-bold' 
                : 'bg-transparent border border-transparent text-white/50 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <div class={`p-1.5 rounded-lg ${activeCategory === 'brunch' ? 'bg-[#D4AF37]/10' : 'bg-transparent'}`}>
                <Layers class="w-5 h-5" />
              </div>
              <span class="font-medium text-sm tracking-wide font-serif">{t.brunch}</span>
            </button>

            {/* Category: Wine Menu */}
            <button
              onClick={() => { setActiveCategory('wine'); }}
              class={`flex items-center gap-3.5 w-full px-4 py-3.5 rounded-2xl transition-all duration-250 cursor-pointer ${
                activeCategory === 'wine' 
                ? 'bg-white/[0.06] border border-[#D4AF37]/40 text-[#D4AF37] shadow-lg shadow-black/20 backdrop-blur-md font-bold' 
                : 'bg-transparent border border-transparent text-white/50 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <div class={`p-1.5 rounded-lg ${activeCategory === 'wine' ? 'bg-[#D4AF37]/10' : 'bg-transparent'}`}>
                <Wine class="w-5 h-5" />
              </div>
              <span class="font-medium text-sm tracking-wide font-serif">{t.wine}</span>
            </button>

            {/* Category: Drinks & Sweets */}
            <button
              onClick={() => { setActiveCategory('drinks'); setActiveWineSubCategory('all'); }}
              class={`flex items-center gap-3.5 w-full px-4 py-3.5 rounded-2xl transition-all duration-250 cursor-pointer ${
                activeCategory === 'drinks' 
                ? 'bg-white/[0.06] border border-[#D4AF37]/40 text-[#D4AF37] shadow-lg shadow-black/20 backdrop-blur-md font-bold' 
                : 'bg-transparent border border-transparent text-white/50 hover:text-white hover:bg-white/[0.04]'
              }`}
            >
              <div class={`p-1.5 rounded-lg ${activeCategory === 'drinks' ? 'bg-[#D4AF37]/10' : 'bg-transparent'}`}>
                <Coffee class="w-5 h-5" />
              </div>
              <span class="font-medium text-sm tracking-wide font-serif">{t.drinks}</span>
            </button>

          </div>

          {/* Sidebar Footer */}
          <div class="px-6 py-4 border-t border-white/10 text-center flex flex-col items-center">
            <Cat class="w-6 h-6 text-[#D4AF37]/30 mb-2" />
            <span class="text-[10px] text-white/30 font-mono tracking-wider">
              TABLE MENU V1.2
            </span>
          </div>
        </nav>

        {/* RIGHT CONTENT AREA */}
        <main class="flex-1 flex flex-col bg-transparent overflow-hidden relative z-10">
          
          {/* Active Category Header */}
          <div class="px-8 pt-6 pb-4 flex flex-col gap-1 shrink-0">
            <div class="flex items-center gap-2 text-xs font-serif text-[#D4AF37] tracking-wider uppercase">
              <Sparkles class="w-3.5 h-3.5" />
              <span>{t.welcome}</span>
            </div>
            <h2 class="font-serif text-3xl font-bold tracking-tight text-white capitalize">
              {activeCategory === 'oysters' ? t.oysters : 
               activeCategory === 'brunch' ? t.brunch : 
               activeCategory === 'wine' ? t.wine : t.drinks}
            </h2>
          </div>

          {/* TWO-LEVEL CATEGORY NAVIGATION (Wine Subcategories filter bar) */}
          <AnimatePresence mode="wait">
            {activeCategory === 'wine' && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                class="px-8 pb-4 flex items-center gap-2 overflow-x-auto shrink-0 no-scrollbar"
              >
                {(Object.keys(t.subCategories) as WineSubCategoryType[]).map((subKey) => (
                  <button
                    key={subKey}
                    onClick={() => setActiveWineSubCategory(subKey)}
                    class={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide whitespace-nowrap border transition-all duration-200 cursor-pointer ${
                      activeWineSubCategory === subKey
                      ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-semibold shadow-md shadow-[#D4AF37]/20'
                      : 'bg-white/[0.04] border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08]'
                    }`}
                  >
                    {t.subCategories[subKey]}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* GRID OF ITEM CARDS */}
          <div class="flex-1 overflow-y-auto px-8 pb-32">
            {sections.map((section) => (
              <div key={section.id} class="mb-12 last:mb-0">
                {section.title && (
                  <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-6 border-b border-white/10 relative">
                    <div class="flex items-center gap-4">
                      {/* Glowing Golden Badge */}
                      <div class="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/50 shadow-lg shadow-[#D4AF37]/10 flex items-center justify-center shrink-0">
                        <span class="font-mono text-xs font-bold text-[#D4AF37] tracking-wider uppercase">
                          {section.badge}
                        </span>
                      </div>
                      <div>
                        <h3 class="font-serif text-xl md:text-2xl font-bold tracking-wide text-white">
                          {section.title[selectedLanguage || 'en']}
                        </h3>
                        <p class="text-xs text-white/50 mt-1 max-w-2xl leading-relaxed">
                          {section.subtitle[selectedLanguage || 'en']}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                  <AnimatePresence>
                    {section.items.map((item) => {
                      const isStopped = stopList[item.id];
                      const hasStandardInCart = getItemQuantity(item.id, 'standard') > 0;
                      const qtyStandard = getItemQuantity(item.id, 'standard');

                      return (
                        <motion.div
                          layout
                          key={item.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                          class={`relative rounded-3xl bg-white/[0.04] backdrop-blur-md border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl shadow-black/20 ${
                            isStopped ? 'opacity-40 border-transparent select-none' :
                            (hasStandardInCart || getItemQuantity(item.id, 'glass') > 0 || getItemQuantity(item.id, 'bottle') > 0)
                            ? 'border-[#D4AF37] shadow-lg shadow-[#D4AF37]/5 bg-white/[0.07]'
                            : 'border-white/10 hover:border-white/20 hover:bg-white/[0.08]'
                          }`}
                        >
                          {/* Image or Premium Emoji Background */}
                          <div class="h-44 w-full relative bg-black/40 overflow-hidden shrink-0 flex items-center justify-center">
                            {item.image ? (
                              <img 
                                src={item.image} 
                                alt={item.strings[selectedLanguage].title} 
                                class="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div class="w-full h-full flex items-center justify-center bg-gradient-to-tr from-white/[0.01] to-white/[0.06]">
                                <span class="text-6xl select-none filter drop-shadow-lg">{item.icon}</span>
                              </div>
                            )}
                            <div class="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 via-transparent to-transparent" />
                            
                            {/* Selected Indicator Badge */}
                            {(qtyStandard > 0 || getItemQuantity(item.id, 'glass') > 0 || getItemQuantity(item.id, 'bottle') > 0) && (
                              <div class="absolute top-3 right-3 bg-[#D4AF37] text-black w-7 h-7 rounded-full flex items-center justify-center font-bold font-sans text-xs shadow-md shadow-[#D4AF37]/20 animate-scale">
                                <Check class="w-4 h-4 text-black" strokeWidth={3} />
                              </div>
                            )}
                          </div>

                          {/* Content details */}
                          <div class="p-5 flex-1 flex flex-col justify-between">
                            <div>
                              <div class="flex items-start justify-between gap-2 mb-2">
                                <h3 class="font-serif text-lg font-bold text-white whitespace-normal group-hover:text-[#D4AF37] transition-colors duration-200 leading-snug">
                                  {item.strings[selectedLanguage].title}
                                </h3>
                                {/* Standard Price Display for Non-Wine */}
                                {item.price && (
                                  <span class="font-serif text-lg font-semibold text-[#D4AF37] shrink-0 font-mono">
                                    {item.price}₾
                                  </span>
                                )}
                              </div>
                              
                              <p class="text-xs text-white/50 line-clamp-2 leading-relaxed mb-4">
                                {item.strings[selectedLanguage].description}
                              </p>

                              {/* Oyster serving includes text */}
                              {item.category === 'oysters' && (
                                <div class="bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-3 mb-4 flex items-start gap-2">
                                  <Info class="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                                  <p class="text-[10px] text-white/40 italic font-sans leading-tight">
                                    {item.strings[selectedLanguage].extra}
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* Actions block */}
                            <div class="mt-auto pt-2">
                              {isStopped ? (
                                <div class="w-full py-2.5 bg-red-950/20 border border-red-500/20 text-red-400 text-center text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 uppercase font-sans">
                                  <AlertTriangle class="w-4 h-4" />
                                  {t.currentlyUnavailable}
                                </div>
                              ) : item.category === 'wine' ? (
                                /* WINE ACTION PANEL: GLASS / BOTTLE SELECTORS */
                                <div class="flex gap-2.5">
                                  {/* Glass Button */}
                                  <div class="flex-1 flex flex-col gap-1">
                                    <button
                                      onClick={() => handleAddToCart(item, 'glass')}
                                      class={`py-2 px-1 rounded-xl text-xs font-semibold text-center border transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                                        getItemQuantity(item.id, 'glass') > 0
                                        ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20'
                                        : 'bg-white/[0.04] border-white/10 text-white/70 hover:text-white hover:bg-white/[0.08]'
                                      }`}
                                    >
                                      <span class="text-[10px] uppercase tracking-wide opacity-80">{t.glass}</span>
                                      <span class="font-mono text-sm font-bold">{item.priceGlass}₾</span>
                                    </button>
                                    {/* Wine Glass Counter Controls */}
                                    {getItemQuantity(item.id, 'glass') > 0 && (
                                      <div class="flex items-center justify-between bg-black/30 backdrop-blur-sm border border-white/15 rounded-lg p-1 animate-fadeIn mt-1">
                                        <button 
                                          onClick={() => handleUpdateQuantity(`${item.id}-glass`, -1)}
                                          class="p-1 hover:text-red-400 text-gray-400 cursor-pointer"
                                        >
                                          <Minus class="w-3.5 h-3.5" />
                                        </button>
                                        <span class="text-xs font-mono font-bold text-[#D4AF37]">{getItemQuantity(item.id, 'glass')}</span>
                                        <button 
                                          onClick={() => handleAddToCart(item, 'glass')}
                                          class="p-1 hover:text-[#D4AF37] text-gray-400 cursor-pointer"
                                        >
                                          <Plus class="w-3.5 h-3.5" />
                                        </button>
                                      </div>
                                    )}
                                  </div>

                                  {/* Bottle Button */}
                                  <div class="flex-1 flex flex-col gap-1">
                                    <button
                                      onClick={() => handleAddToCart(item, 'bottle')}
                                      class={`py-2 px-1 rounded-xl text-xs font-semibold text-center border transition-all duration-200 cursor-pointer flex flex-col items-center justify-center gap-0.5 ${
                                        getItemQuantity(item.id, 'bottle') > 0
                                        ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/20'
                                        : 'bg-white/[0.04] border-white/10 text-white/70 hover:text-white hover:bg-white/[0.08]'
                                      }`}
                                    >
                                      <span class="text-[10px] uppercase tracking-wide opacity-80">{t.bottle}</span>
                                      <span class="font-mono text-sm font-bold">{item.priceBottle}₾</span>
                                    </button>
                                    {/* Wine Bottle Counter Controls */}
                                    {getItemQuantity(item.id, 'bottle') > 0 && (
                                      <div class="flex items-center justify-between bg-black/30 backdrop-blur-sm border border-white/15 rounded-lg p-1 animate-fadeIn mt-1">
                                        <button 
                                          onClick={() => handleUpdateQuantity(`${item.id}-bottle`, -1)}
                                          class="p-1 hover:text-red-400 text-gray-400 cursor-pointer"
                                        >
                                          <Minus class="w-3.5 h-3.5" />
                                        </button>
                                        <span class="text-xs font-mono font-bold text-[#D4AF37]">{getItemQuantity(item.id, 'bottle')}</span>
                                        <button 
                                          onClick={() => handleAddToCart(item, 'bottle')}
                                          class="p-1 hover:text-[#D4AF37] text-gray-400 cursor-pointer"
                                        >
                                          <Plus class="w-3.5 h-3.5" />
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ) : (
                                /* STANDARD ITEM ACTIONS: ADD TO SELECTION / QUANTITY ADJUSTER */
                                <div class="w-full">
                                  {hasStandardInCart ? (
                                    <div class="flex items-center justify-between w-full bg-black/30 backdrop-blur-sm border border-white/15 rounded-xl p-1 animate-fadeIn">
                                      <button
                                        onClick={() => handleUpdateQuantity(`${item.id}-standard`, -1)}
                                        class="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/5 active:bg-white/10 text-gray-400 hover:text-red-400 transition-colors duration-150 cursor-pointer"
                                      >
                                        <Minus class="w-4 h-4" />
                                      </button>
                                      <span class="font-mono font-bold text-base text-white">
                                        {qtyStandard}
                                      </span>
                                      <button
                                        onClick={() => handleAddToCart(item, 'standard')}
                                        class="w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/5 active:bg-white/10 text-gray-400 hover:text-[#D4AF37] transition-colors duration-150 cursor-pointer"
                                      >
                                        <Plus class="w-4 h-4" />
                                      </button>
                                    </div>
                                  ) : (
                                    <button
                                      onClick={() => handleAddToCart(item, 'standard')}
                                      class="w-full py-2.5 px-4 bg-white/[0.04] hover:bg-[#D4AF37] border border-white/10 hover:border-[#D4AF37] text-white/90 hover:text-black font-semibold text-xs rounded-xl flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                                    >
                                      <Plus class="w-4 h-4" />
                                      <span>{t.addNewItem ? "დამატება / Add to Selection" : "Add to Selection"}</span>
                                    </button>
                                  )}
                                </div>
                              )}
                            </div>

                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* 7.3 STICKY FLOATING CART BAR (ANIMATED) */}
          <AnimatePresence>
            {totalCartCount > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                class="absolute bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-2xl bg-white/[0.04] backdrop-blur-xl border border-[#D4AF37]/60 rounded-3xl shadow-2xl shadow-black/40 p-4 flex items-center justify-between z-20 cursor-pointer"
                onClick={() => setIsCartOpen(true)}
              >
                {/* Left details */}
                <div class="flex items-center gap-4">
                  <div class="w-12 h-12 rounded-xl bg-[#D4AF37] text-black flex items-center justify-center shadow-lg shadow-[#D4AF37]/20">
                    <ShoppingBag class="w-6 h-6 text-black" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 class="text-sm font-semibold tracking-wide text-white uppercase">
                      {selectedLanguage === 'ka' ? "მონიშნულია: " : 
                       selectedLanguage === 'ru' ? "Выбрано: " : "Selected: "}
                      <span class="font-mono font-bold text-[#D4AF37]">{totalCartCount}</span>
                    </h4>
                    <p class="text-xs text-white/50">
                      {selectedLanguage === 'ka' ? "დააჭირეთ დეტალების სანახავად" : 
                       selectedLanguage === 'ru' ? "Нажмите для просмотра заказа" : "Tap to review selection"}
                    </p>
                  </div>
                </div>

                {/* Right price and click */}
                <div class="flex items-center gap-3">
                  <span class="font-serif text-2xl font-bold text-[#D4AF37] font-mono shrink-0">
                    {totalCartPrice}₾
                  </span>
                  <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#D4AF37]">
                    <ChevronRight class="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </main>
      </div>

      {/* --- 8. FULL-SCREEN ORDER SUMMARY MODAL --- */}
      <AnimatePresence>
        {isCartOpen && (
          <div class="fixed inset-0 bg-black/80 backdrop-blur-md z-40 flex justify-end animate-fadeIn">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 220 }}
              class="w-full max-w-xl h-full bg-[#0F0F0F]/80 backdrop-blur-2xl border-l border-white/10 flex flex-col justify-between shadow-2xl z-50"
            >
              {/* Modal Header */}
              <div class="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02] backdrop-blur-md">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    <ShoppingBag class="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 class="font-serif text-xl font-bold text-white tracking-wide">
                    {t.orderSummary}
                  </h3>
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <X class="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div class="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
                {cart.length === 0 ? (
                  <div class="flex-1 flex flex-col items-center justify-center text-center py-20 text-white/40">
                    <ShoppingBag class="w-16 h-16 text-white/20 mb-4" strokeWidth={1} />
                    <p class="text-sm font-medium">{t.noItemsSelected}</p>
                  </div>
                ) : (
                  cart.map((cartItem) => (
                    <div 
                      key={cartItem.cartId}
                      class="bg-white/[0.03] backdrop-blur-md border border-white/10 p-4 rounded-3xl flex items-center justify-between gap-4 shadow-md transition-all duration-200"
                    >
                      {/* Left: icon and basic name */}
                      <div class="flex items-center gap-3.5 flex-1 min-w-0">
                        {cartItem.item.image ? (
                          <img 
                            src={cartItem.item.image} 
                            alt={cartItem.item.strings[selectedLanguage].title} 
                            class="w-12 h-12 rounded-xl object-cover border border-white/10"
                          />
                        ) : (
                          <span class="text-3xl p-1 shrink-0">{cartItem.item.icon}</span>
                        )}
                        <div class="min-w-0 flex-1">
                          <h4 class="font-serif text-sm font-semibold text-white whitespace-normal leading-snug">
                            {cartItem.item.strings[selectedLanguage].title}
                          </h4>
                          <span class="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37] flex items-center gap-1 mt-0.5">
                            {cartItem.variant === 'glass' && `🍷 ${t.glass}`}
                            {cartItem.variant === 'bottle' && `🍾 ${t.bottle}`}
                            {cartItem.variant === 'standard' && `🍽️ `}
                            <span class="text-gray-400 font-mono text-[11px] font-normal ml-1">({cartItem.price}₾)</span>
                          </span>
                        </div>
                      </div>

                      {/* Right: Quantity modifiers & Total */}
                      <div class="flex items-center gap-4 shrink-0">
                        
                        {/* Quantity Adjuster */}
                        <div class="flex items-center bg-black/30 backdrop-blur-sm border border-white/10 rounded-xl p-1 gap-1">
                          <button
                            onClick={() => handleUpdateQuantity(cartItem.cartId, -1)}
                            class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 text-gray-400 hover:text-red-400 transition-colors duration-150 cursor-pointer"
                          >
                            <Minus class="w-3.5 h-3.5" />
                          </button>
                          <span class="font-mono font-bold text-sm text-white px-1">
                            {cartItem.quantity}
                          </span>
                          <button
                            onClick={() => handleUpdateQuantity(cartItem.cartId, 1)}
                            class="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-white/5 text-gray-400 hover:text-[#D4AF37] transition-colors duration-150 cursor-pointer"
                          >
                            <Plus class="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Line Item Total */}
                        <span class="font-serif text-lg font-bold text-[#D4AF37] font-mono w-14 text-right">
                          {cartItem.price * cartItem.quantity}₾
                        </span>

                        {/* Trash button */}
                        <button
                          onClick={() => handleRemoveFromCart(cartItem.cartId)}
                          class="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors duration-150 cursor-pointer"
                        >
                          <Trash2 class="w-4 h-4" />
                        </button>

                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Sticky Summary Bottom Box */}
              <div class="p-6 border-t border-white/10 bg-white/[0.02] backdrop-blur-md flex flex-col gap-5">
                <div class="flex items-center justify-between">
                  <span class="font-serif text-lg text-white/50 font-medium uppercase tracking-wide">
                    {t.total}
                  </span>
                  <span class="font-serif text-3xl font-bold text-[#D4AF37] font-mono tracking-tight">
                    {totalCartPrice}₾
                  </span>
                </div>

                <div class="flex gap-3">
                  {/* Cancel / Close button */}
                  <button
                    onClick={() => setIsCartOpen(false)}
                    class="flex-1 py-3.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white/90 font-semibold text-sm rounded-xl transition-all duration-150 backdrop-blur-sm cursor-pointer"
                  >
                    {selectedLanguage === 'ka' ? "დახურვა" : 
                     selectedLanguage === 'ru' ? "Закрыть" : "Close"}
                  </button>

                  {/* Clear Menu & Send back button (Waiters code action) */}
                  <button
                    onClick={() => triggerPinRequest('reset')}
                    class="py-3.5 px-5 bg-red-500/[0.04] hover:bg-red-500/[0.12] active:bg-red-500/[0.18] border border-red-500/30 text-red-400 font-semibold text-sm rounded-xl flex items-center gap-2 transition-all duration-150 backdrop-blur-sm cursor-pointer"
                  >
                    <Trash2 class="w-4 h-4" />
                    <span>{t.clearMenu}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- 9. POS-STYLE PIN INPUT POPUP (Universal Overlay) --- */}
      <AnimatePresence>
        {isPinPadOpen && (
          <div class="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-md z-50 animate-fadeIn">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              class="w-80 bg-white/[0.04] backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl relative"
            >
              <button 
                onClick={() => { setIsPinPadOpen(false); setPinTarget(null); }}
                class="absolute top-4 right-4 text-white/50 hover:text-white cursor-pointer"
              >
                <X class="w-5 h-5" />
              </button>
              
              <div class="text-center mb-6">
                <div class="w-12 h-12 bg-white/[0.03] rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10">
                  <Lock class="w-5 h-5 text-[#D4AF37]" />
                </div>
                <h3 class="text-lg font-serif text-[#D4AF37] font-medium">
                  {pinTarget === 'reset' ? t.clearMenu : t.adminPanel}
                </h3>
                <p class="text-xs text-white/50 mt-1 max-w-[200px] mx-auto leading-relaxed">
                  {pinTarget === 'reset' 
                    ? t.resetConfirmMessage
                    : (t.enterPin || "Enter 4-digit PIN Code")
                  }
                </p>
              </div>

              {/* PIN Code Circles */}
              <div class="flex justify-center gap-4 mb-6">
                {[0, 1, 2, 3].map((idx) => (
                  <div 
                    key={idx} 
                    class={`w-4.5 h-4.5 rounded-full border-2 transition-all duration-150 ${
                      pinError ? 'border-red-500 bg-red-500' :
                      pinInput.length > idx ? 'border-[#D4AF37] bg-[#D4AF37]' : 'border-white/20 bg-transparent'
                    }`}
                  />
                ))}
              </div>

              {pinError && (
                <p class="text-xs text-red-500 text-center mb-4 font-sans font-medium animate-bounce">
                  {t.incorrectPin}
                </p>
              )}

              {/* Custom Touchscreen Numpad */}
              <div class="grid grid-cols-3 gap-3">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                  <button
                    key={num}
                    onClick={() => handlePinKeyPress(num.toString())}
                    class="h-12 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] active:bg-[#D4AF37]/25 border border-white/10 text-lg font-semibold text-white transition-all duration-100 cursor-pointer flex items-center justify-center font-mono backdrop-blur-sm"
                  >
                    {num}
                  </button>
                ))}
                <button
                  onClick={() => { setIsPinPadOpen(false); setPinTarget(null); }}
                  class="h-12 rounded-2xl bg-red-500/[0.05] hover:bg-red-500/[0.12] text-xs font-semibold text-red-400 border border-red-500/20 transition-all duration-100 backdrop-blur-sm cursor-pointer flex items-center justify-center"
                >
                  {t.cancel}
                </button>
                <button
                  onClick={() => handlePinKeyPress('0')}
                  class="h-12 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] active:bg-[#D4AF37]/25 border border-white/10 text-lg font-semibold text-white transition-all duration-100 cursor-pointer flex items-center justify-center font-mono backdrop-blur-sm"
                >
                  0
                </button>
                <button
                  onClick={handlePinBackspace}
                  class="h-12 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] text-sm font-semibold text-white/70 border border-white/10 transition-all duration-100 backdrop-blur-sm cursor-pointer flex items-center justify-center"
                >
                  ⌫
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- 10. HIDDEN / POPUP MANAGER ADMINISTRATIVE PANEL --- */}
      <AnimatePresence>
        {isAdminOpen && (
          <div class="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8 overflow-hidden animate-fadeIn">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              class="w-full max-w-5xl h-full max-h-[90vh] bg-[#0F0F0F]/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              
              {/* Admin Panel Header */}
              <div class="px-6 py-4 border-b border-white/10 bg-white/[0.02] backdrop-blur-md flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center">
                    <Settings class="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 class="font-serif text-lg font-bold text-white tracking-wide">
                      {t.adminPanel}
                    </h3>
                    <p class="text-[10px] text-white/40 font-mono uppercase tracking-widest mt-0.5">
                      Bistro Black Cat Manager Portal
                    </p>
                  </div>
                </div>
                <div class="flex items-center gap-3">
                  <button
                    onClick={handleResetToDefaultMenu}
                    class="px-4 py-2 bg-red-500/[0.04] hover:bg-red-500/[0.12] border border-red-500/25 text-red-400 text-xs font-semibold rounded-xl transition-all duration-150 backdrop-blur-sm cursor-pointer uppercase"
                  >
                    Reset Database
                  </button>
                  <button
                    onClick={() => setIsAdminOpen(false)}
                    class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                  >
                    <X class="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Admin Main Split Layout */}
              <div class="flex-1 flex flex-col md:flex-row overflow-hidden">
                
                {/* Left Side: Stop List & Quick Search */}
                <div class="flex-1 border-r border-white/10 flex flex-col justify-between overflow-hidden bg-transparent">
                  
                  {/* Search bar */}
                  <div class="p-4 border-b border-white/10 shrink-0 bg-white/[0.01] backdrop-blur-sm">
                    <div class="text-xs text-[#D4AF37] font-bold uppercase mb-2">Stop-List Management ({menuItems.length} items)</div>
                    <input
                      type="text"
                      placeholder="Search items to toggle..."
                      value={adminSearch}
                      onChange={(e) => setAdminSearch(e.target.value)}
                      class="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-all duration-150"
                    />
                  </div>

                  {/* Scrollable list of items to toggle availability */}
                  <div class="flex-1 overflow-y-auto p-4 flex flex-col gap-2 bg-transparent">
                    {adminFilteredItems.map((item) => {
                      const isStopped = stopList[item.id];
                      return (
                        <div 
                          key={item.id}
                          class="flex items-center justify-between p-3 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.06] transition-colors duration-150"
                        >
                          <div class="flex items-center gap-3 min-w-0">
                            <span class="text-2xl shrink-0 p-1 bg-white/[0.05] rounded-lg">{item.icon}</span>
                            <div class="min-w-0 flex-1">
                              <h4 class="text-sm font-semibold text-white whitespace-normal leading-snug">
                                {item.strings[selectedLanguage || 'en'].title}
                              </h4>
                              <span class="text-[10px] text-white/40 uppercase font-mono tracking-wider">
                                {item.category} {item.price ? `• ${item.price}₾` : `• ${item.priceGlass}₾/${item.priceBottle}₾`}
                              </span>
                            </div>
                          </div>

                          {/* Toggle switch for Stop-List */}
                          <div class="flex items-center gap-3 shrink-0">
                            <span class={`text-[10px] font-bold uppercase tracking-wider font-mono ${isStopped ? 'text-red-400' : 'text-emerald-400'}`}>
                              {isStopped ? t.unavailable : t.available}
                            </span>
                            <button
                              onClick={() => handleToggleStopList(item.id)}
                              class={`w-14 h-8 rounded-full p-1 transition-all duration-200 cursor-pointer flex items-center ${
                                isStopped ? 'bg-red-500/20 border border-red-500/40 justify-end' : 'bg-emerald-500/20 border border-emerald-500/40 justify-start'
                              }`}
                            >
                              <div class={`w-5.5 h-5.5 rounded-full transition-all duration-200 ${
                                isStopped ? 'bg-red-500' : 'bg-emerald-500'
                              }`} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Right Side: Form to Add New Items / Categories */}
                <div class="w-full md:w-96 p-6 overflow-y-auto bg-white/[0.01] backdrop-blur-sm flex flex-col gap-5">
                  <div class="flex items-center gap-2 text-[#D4AF37] border-b border-[#D4AF37]/20 pb-2 mb-1">
                    <Plus class="w-5 h-5" />
                    <h4 class="font-serif text-base font-bold uppercase tracking-wide">
                      {t.addNewItem}
                    </h4>
                  </div>

                  <form onSubmit={handleSaveNewItem} class="flex flex-col gap-4">
                    
                    {/* Category Selector */}
                    <div class="flex flex-col gap-1.5">
                      <label class="text-[10px] uppercase font-bold tracking-wider text-gray-400">Category</label>
                      <select
                        value={newItemForm.category}
                        onChange={(e) => setNewItemForm(prev => ({ ...prev, category: e.target.value as CategoryType }))}
                        class="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                      >
                        <option value="oysters">Oysters</option>
                        <option value="brunch">Brunch & Platters</option>
                        <option value="wine">Wine Menu</option>
                        <option value="drinks">Coffee, Drinks & Desserts</option>
                      </select>
                    </div>

                    {/* Wine Subcategory if Wine */}
                    <div class="flex flex-col gap-1.5 bg-[#1A1A1A]/40 p-3 rounded-xl border border-white/5">
                      <label class="flex items-center gap-2 text-[10px] uppercase font-bold tracking-wider text-gray-300">
                        <input
                          type="checkbox"
                          checked={newItemForm.isWine}
                          onChange={(e) => setNewItemForm(prev => ({ ...prev, isWine: e.target.checked }))}
                          class="accent-[#D4AF37]"
                        />
                        <span>Is Wine Product? (Enables Glass/Bottle Variant prices)</span>
                      </label>

                      {newItemForm.isWine && (
                        <div class="flex flex-col gap-1.5 mt-2.5 animate-fadeIn">
                          <label class="text-[10px] uppercase font-bold tracking-wider text-gray-400">Wine Sub-Category</label>
                          <select
                            value={newItemForm.subCategory}
                            onChange={(e) => setNewItemForm(prev => ({ ...prev, subCategory: e.target.value as WineSubCategoryType }))}
                            class="w-full bg-[#1A1A1A] border border-white/5 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                          >
                            <option value="all">All</option>
                            <option value="classic_white">Classic White</option>
                            <option value="red_wines">Red Wines</option>
                            <option value="qvevri_amber">Qvevri & Amber</option>
                            <option value="rose">Rosé</option>
                            <option value="sparkling_petnat">Sparkling & Pet-Nat</option>
                          </select>
                        </div>
                      )}
                    </div>

                    {/* Pricing input fields */}
                    {!newItemForm.isWine ? (
                      <div class="flex flex-col gap-1.5">
                        <label class="text-[10px] uppercase font-bold tracking-wider text-white/50">{t.itemPrice}</label>
                        <input
                          type="number"
                          placeholder="Standard price (GEL)"
                          value={newItemForm.price}
                          onChange={(e) => setNewItemForm(prev => ({ ...prev, price: Number(e.target.value) }))}
                          class="w-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37] font-mono"
                          required
                        />
                      </div>
                    ) : (
                      <div class="grid grid-cols-2 gap-3">
                        <div class="flex flex-col gap-1.5">
                          <label class="text-[10px] uppercase font-bold tracking-wider text-white/50">Glass Price (₾)</label>
                          <input
                            type="number"
                            value={newItemForm.priceGlass}
                            onChange={(e) => setNewItemForm(prev => ({ ...prev, priceGlass: Number(e.target.value) }))}
                            class="w-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37] font-mono"
                            required
                          />
                        </div>
                        <div class="flex flex-col gap-1.5">
                          <label class="text-[10px] uppercase font-bold tracking-wider text-white/50">Bottle Price (₾)</label>
                          <input
                            type="number"
                            value={newItemForm.priceBottle}
                            onChange={(e) => setNewItemForm(prev => ({ ...prev, priceBottle: Number(e.target.value) }))}
                            class="w-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37] font-mono"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Icon Emoji input */}
                    <div class="flex flex-col gap-1.5">
                      <label class="text-[10px] uppercase font-bold tracking-wider text-white/50">Visual Emoji Icon</label>
                      <input
                        type="text"
                        placeholder="e.g. 🍷, 🦪, 🍳"
                        value={newItemForm.icon}
                        onChange={(e) => setNewItemForm(prev => ({ ...prev, icon: e.target.value }))}
                        class="w-full bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
                        required
                      />
                    </div>

                    {/* Local Image Upload */}
                    <div class="flex flex-col gap-1.5">
                      <label class="text-[10px] uppercase font-bold tracking-wider text-white/50">{t.uploadImage}</label>
                      <div class="relative w-full h-11 bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/[0.08] transition-colors duration-150 cursor-pointer">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleAdminImageUpload}
                          class="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div class="flex items-center gap-2 text-xs text-white/50 font-semibold">
                          <Upload class="w-4 h-4 text-[#D4AF37]" />
                          <span>{newItemForm.imageFile ? newItemForm.imageFile.name : "Select JPG / PNG"}</span>
                        </div>
                      </div>
                    </div>

                    {/* Localized titles input */}
                    <div class="flex flex-col gap-3 bg-white/[0.02] backdrop-blur-sm p-3.5 rounded-2xl border border-white/10">
                      <div class="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37]">Multilingual Titles (Required)</div>
                      
                      <div class="flex flex-col gap-1">
                        <label class="text-[9px] uppercase tracking-wider text-white/40">Georgian Title</label>
                        <input
                          type="text"
                          placeholder="ხამანწკა ნაღებით"
                          value={newItemForm.titleKa}
                          onChange={(e) => setNewItemForm(prev => ({ ...prev, titleKa: e.target.value }))}
                          class="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                          required
                        />
                      </div>

                      <div class="flex flex-col gap-1">
                        <label class="text-[9px] uppercase tracking-wider text-white/40">English Title</label>
                        <input
                          type="text"
                          placeholder="Oyster and Cream"
                          value={newItemForm.titleEn}
                          onChange={(e) => setNewItemForm(prev => ({ ...prev, titleEn: e.target.value }))}
                          class="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                          required
                        />
                      </div>

                      <div class="flex flex-col gap-1">
                        <label class="text-[9px] uppercase tracking-wider text-white/40">Russian Title</label>
                        <input
                          type="text"
                          placeholder="Устрица со сливками"
                          value={newItemForm.titleRu}
                          onChange={(e) => setNewItemForm(prev => ({ ...prev, titleRu: e.target.value }))}
                          class="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
                          required
                        />
                      </div>
                    </div>

                    {/* Localized Descriptions */}
                    <div class="flex flex-col gap-3 bg-white/[0.02] backdrop-blur-sm p-3.5 rounded-2xl border border-white/10">
                      <div class="text-[10px] uppercase font-bold tracking-wider text-[#D4AF37]">Multilingual Descriptions (Optional)</div>
                      
                      <div class="flex flex-col gap-1">
                        <label class="text-[9px] uppercase tracking-wider text-white/40">Georgian Description</label>
                        <textarea
                          placeholder="გამომცხვარი ხამანწკა..."
                          value={newItemForm.descKa}
                          onChange={(e) => setNewItemForm(prev => ({ ...prev, descKa: e.target.value }))}
                          class="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] h-12 resize-none"
                        />
                      </div>

                      <div class="flex flex-col gap-1">
                        <label class="text-[9px] uppercase tracking-wider text-white/40">English Description</label>
                        <textarea
                          placeholder="Baked gourmet oyster..."
                          value={newItemForm.descEn}
                          onChange={(e) => setNewItemForm(prev => ({ ...prev, descEn: e.target.value }))}
                          class="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] h-12 resize-none"
                        />
                      </div>

                      <div class="flex flex-col gap-1">
                        <label class="text-[9px] uppercase tracking-wider text-white/40">Russian Description</label>
                        <textarea
                          placeholder="Запеченная устрица..."
                          value={newItemForm.descRu}
                          onChange={(e) => setNewItemForm(prev => ({ ...prev, descRu: e.target.value }))}
                          class="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] h-12 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      class="w-full py-3 bg-[#D4AF37] hover:bg-[#c59b27] text-black font-bold text-sm rounded-xl transition-all duration-150 cursor-pointer shadow-lg shadow-[#D4AF37]/15 mt-2 flex items-center justify-center gap-1.5"
                    >
                      <CheckCircle2 class="w-4 h-4" />
                      <span>{t.save}</span>
                    </button>

                  </form>
                </div>

              </div>

              {/* Admin Footer Controls */}
              <div class="px-6 py-4 border-t border-white/10 bg-white/[0.02] backdrop-blur-md flex justify-end">
                <button
                  onClick={() => setIsAdminOpen(false)}
                  class="px-5 py-2.5 bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white/90 font-semibold text-xs rounded-xl transition-all duration-150 backdrop-blur-sm cursor-pointer"
                >
                  Close Admin Settings
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
