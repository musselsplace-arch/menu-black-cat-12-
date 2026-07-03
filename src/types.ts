export type CategoryType = 'oysters' | 'brunch' | 'wine' | 'drinks';

export type WineSubCategoryType = 'all' | 'classic_white' | 'red_wines' | 'qvevri_amber' | 'rose' | 'sparkling_petnat';

export interface LocalizedString {
  title: string;
  description: string;
  extra?: string; // e.g. Serving details for oysters
}

export interface MenuItem {
  id: number;
  category: CategoryType;
  subCategory?: WineSubCategoryType;
  price?: number; // Standard price for non-wines
  priceGlass?: number; // Wine price per glass
  priceBottle?: number; // Wine price per bottle
  icon: string; // Emoji
  image?: string; // Local image uploaded via admin panel
}

export interface MenuItemWithStrings extends MenuItem {
  strings: {
    ka: LocalizedString;
    en: LocalizedString;
    ru: LocalizedString;
  };
}

export interface CartItem {
  cartId: string; // Unique ID (e.g., "item-1" or "item-21-glass")
  item: MenuItemWithStrings;
  variant: 'standard' | 'glass' | 'bottle';
  price: number;
  quantity: number;
}

export interface TranslationDictionary {
  welcome: string;
  selectLanguage: string;
  enterPin: string;
  incorrectPin: string;
  adminPanel: string;
  managerPin: string;
  cancel: string;
  confirm: string;
  oysters: string;
  brunch: string;
  wine: string;
  drinks: string;
  oysterSets: string;
  bakedOysters: string;
  brunchSalads: string;
  premiumPlatters: string;
  coffeeDrinks: string;
  sweetDesserts: string;
  glass: string;
  bottle: string;
  markedItems: string;
  noItemsSelected: string;
  orderSummary: string;
  clearMenu: string;
  resetConfirmMessage: string;
  total: string;
  stopList: string;
  available: string;
  unavailable: string;
  currentlyUnavailable: string;
  addNewItem: string;
  itemTitleKa: string;
  itemTitleEn: string;
  itemTitleRu: string;
  itemDescKa: string;
  itemDescEn: string;
  itemDescRu: string;
  itemPrice: string;
  uploadImage: string;
  save: string;
  subCategories: {
    all: string;
    classic_white: string;
    red_wines: string;
    qvevri_amber: string;
    rose: string;
    sparkling_petnat: string;
  };
}
