import { MenuItemWithStrings, TranslationDictionary } from './types';

export const LOCAL_TRANSLATIONS: Record<'ka' | 'en' | 'ru', TranslationDictionary> = {
  ka: {
    welcome: "კეთილი იყოს თქვენი მობრძანება",
    selectLanguage: "გთხოვთ აირჩიოთ ენა",
    enterPin: "შეყვანეთ 4-ნიშნა PIN კოდი",
    incorrectPin: "PIN კოდი არასწორია. სცადეთ თავიდან.",
    adminPanel: "ადმინისტრატორის პანელი",
    managerPin: "მენეჯერის PIN კოდი",
    cancel: "გაუქმება",
    confirm: "დასტური",
    oysters: "ხამანწკები",
    brunch: "ბრანჩი & სალათები",
    wine: "ღვინის მენიუ",
    drinks: "სასმელები & დესერტები",
    oysterSets: "ხამანწკების სეტები",
    bakedOysters: "გამომცხვარი ხამანწკები",
    brunchSalads: "ბრანჩი & სალათები",
    premiumPlatters: "პრემიუმ დაფები",
    coffeeDrinks: "ყავა & ცივი სასმელები",
    sweetDesserts: "დესერტები",
    glass: "ჭიქა",
    bottle: "ბოთლი",
    markedItems: "მონიშნულია",
    noItemsSelected: "არჩეული კერძები არ არის",
    orderSummary: "შეკვეთის დეტალები",
    clearMenu: "მენიუს გასუფთავება",
    resetConfirmMessage: "მენიუს გასასუფთავებლად და ენის ასარჩევად დაბრუნებისთვის შეიყვანეთ მენეჯერის PIN:",
    total: "სულ",
    stopList: "სტოპ-ლისტი",
    available: "ხელმისაწვდომია",
    unavailable: "დროებით არ არის",
    currentlyUnavailable: "დროებით არ არის",
    addNewItem: "ახალი კერძის დამატება",
    itemTitleKa: "დასახელება (ქართულად)",
    itemTitleEn: "დასახელება (English)",
    itemTitleRu: "დასახელება (Русский)",
    itemDescKa: "აღწერა (ქართულად)",
    itemDescEn: "აღწერა (English)",
    itemDescRu: "აღწერა (Русский)",
    itemPrice: "ფასი (GEL)",
    uploadImage: "სურათის ატვირთვა",
    save: "შენახვა",
    subCategories: {
      all: "ყველა ღვინო",
      classic_white: "თეთრი კლასიკური",
      red_wines: "წითელი ღვინოები",
      qvevri_amber: "ქვევრი & ქარვისფერი",
      rose: "როზე",
      sparkling_petnat: "ცქრიალა & პეტნატი"
    }
  },
  en: {
    welcome: "Welcome",
    selectLanguage: "Please Select Language",
    enterPin: "Enter 4-digit PIN Code",
    incorrectPin: "Incorrect PIN. Please try again.",
    adminPanel: "Administrator Panel",
    managerPin: "Manager PIN",
    cancel: "Cancel",
    confirm: "Confirm",
    oysters: "Oysters",
    brunch: "Brunch & Salads",
    wine: "Wine Menu",
    drinks: "Drinks & Sweets",
    oysterSets: "Oyster Sets",
    bakedOysters: "Baked Oysters",
    brunchSalads: "Brunch & Salads",
    premiumPlatters: "Premium Platters",
    coffeeDrinks: "Coffee & Refreshments",
    sweetDesserts: "Sweet Desserts",
    glass: "Glass",
    bottle: "Bottle",
    markedItems: "Selected",
    noItemsSelected: "No items selected yet",
    orderSummary: "Order Details",
    clearMenu: "Clear Menu",
    resetConfirmMessage: "To clear the selections and return to language selector, enter manager PIN:",
    total: "Total",
    stopList: "Stop List",
    available: "Available",
    unavailable: "Unavailable",
    currentlyUnavailable: "Currently Unavailable",
    addNewItem: "Add New Menu Item",
    itemTitleKa: "Title (Georgian)",
    itemTitleEn: "Title (English)",
    itemTitleRu: "Title (Russian)",
    itemDescKa: "Description (Georgian)",
    itemDescEn: "Description (English)",
    itemDescRu: "Description (Russian)",
    itemPrice: "Price (GEL)",
    uploadImage: "Upload Image File",
    save: "Save Item",
    subCategories: {
      all: "All Wines",
      classic_white: "Classic White",
      red_wines: "Red Wines",
      qvevri_amber: "Qvevri & Amber",
      rose: "Rosé",
      sparkling_petnat: "Sparkling & Pet-Nat"
    }
  },
  ru: {
    welcome: "Добро пожаловать",
    selectLanguage: "Пожалуйста, выберите язык",
    enterPin: "Введите 4-значный PIN-код",
    incorrectPin: "Неверный PIN-код. Попробуйте еще раз.",
    adminPanel: "Панель администратора",
    managerPin: "PIN-код менеджера",
    cancel: "Отмена",
    confirm: "Подтвердить",
    oysters: "Устрицы",
    brunch: "Бранч и Салаты",
    wine: "Винная карта",
    drinks: "Напитки и Десерты",
    oysterSets: "Устричные сеты",
    bakedOysters: "Запеченные устрицы",
    brunchSalads: "Бранч и Салаты",
    premiumPlatters: "Премиальные плато",
    coffeeDrinks: "Кофе и напитки",
    sweetDesserts: "Сладкие десерты",
    glass: "Бокал",
    bottle: "Бутылка",
    markedItems: "Выбрано",
    noItemsSelected: "Блюда не выбраны",
    orderSummary: "Детали заказа",
    clearMenu: "Очистить меню",
    resetConfirmMessage: "Чтобы сбросить все выборы и вернуться к языковому экрану, введите PIN-код:",
    total: "Итого",
    stopList: "Стоп-лист",
    available: "Доступно",
    unavailable: "Временно нет",
    currentlyUnavailable: "Временно недоступно",
    addNewItem: "Добавить блюдо в меню",
    itemTitleKa: "Название (Грузинский)",
    itemTitleEn: "Название (English)",
    itemTitleRu: "Название (Русский)",
    itemDescKa: "Описание (Грузинский)",
    itemDescEn: "Описание (English)",
    itemDescRu: "Описание (Русский)",
    itemPrice: "Цена (GEL)",
    uploadImage: "Загрузить изображение",
    save: "Сохранить",
    subCategories: {
      all: "Все вина",
      classic_white: "Белое классическое",
      red_wines: "Красные вина",
      qvevri_amber: "Квеври и Янтарное",
      rose: "Розе",
      sparkling_petnat: "Игристое и Петнат"
    }
  }
};

export const INITIAL_MENU_ITEMS: MenuItemWithStrings[] = [
  // ----------------------------------------------------
  // OYSTERS (ITEMS 1-13)
  // ----------------------------------------------------
  // Baked Oysters (1-10) - Price: 25 GEL
  {
    id: 1,
    category: 'oysters',
    price: 25,
    icon: '🦪',
    strings: {
      ka: {
        title: "ხამანწკა ტრიუფელითა და პარმეზანით",
        description: "გამომცხვარი ხამანწკა შავი ტრიუფელის პასტით, ნაღებითა და ოქროსფერი პარმეზანის ქერქით.",
        extra: "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე."
      },
      en: {
        title: "Baked Oyster Truffle & Parmesan Luxury",
        description: "Baked oyster infused with aromatic black truffle paste, light cream, and a bubbly golden Parmesan crust.",
        extra: "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate."
      },
      ru: {
        title: "Запеченная устрица Трюфель и Пармезан",
        description: "Запеченная устрица с ароматной пастой из черного трюфеля, сливками и румяной корочкой сыра Пармезан.",
        extra: "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке."
      }
    }
  },
  {
    id: 2,
    category: 'oysters',
    price: 25,
    icon: '🦪',
    strings: {
      ka: {
        title: "ხამანწკა ხრაშუნა პროშუტოთი და პარმეზანით",
        description: "გამომცხვარი ხამანწკა ნაზი იტალიური პროშუტოს ნატეხებითა და მდნარი პარმეზანით.",
        extra: "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე."
      },
      en: {
        title: "Baked Oyster Crispy Prosciutto & Parmesan",
        description: "Oyster baked with crispy Italian prosciutto chips and bubbly, salty Parmesan flakes.",
        extra: "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate."
      },
      ru: {
        title: "Запеченная устрица Прошутто и Пармезан",
        description: "Устрица, запеченная с хрустящими чипсами итальянского прошутто и солоноватыми хлопьями Пармезана.",
        extra: "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке."
      }
    }
  },
  {
    id: 3,
    category: 'oysters',
    price: 25,
    icon: '🦪',
    strings: {
      ka: {
        title: "ხამანწკა გორგონძოლათი და ნაღებით",
        description: "ნაღების სოუსში ჩაფლული გამომცხვარი ხამანწკა პიკანტური გორგონძოლას ყველითა და მწვანილებით.",
        extra: "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე."
      },
      en: {
        title: "Baked Oyster Gorgonzola & Cream",
        description: "Rich baked oyster filled with gourmet blue Gorgonzola crumbles and smooth white cream.",
        extra: "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate."
      },
      ru: {
        title: "Запеченная устрица Горгонзола и Сливки",
        description: "Нежная устрица, запеченная с пикантным голубым сыром Горгонзола и густыми сливками.",
        extra: "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке."
      }
    }
  },
  {
    id: 4,
    category: 'oysters',
    price: 25,
    icon: '🦪',
    strings: {
      ka: {
        title: "ხამანწკა პესტოთი და პარმეზანის ინფუზიით",
        description: "ბაზილიკის არომატული პესტო, რომელიც იდეალურად ერწყმის გამომცხვარ ხამანწკასა და პარმეზანს.",
        extra: "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე."
      },
      en: {
        title: "Baked Oyster Pesto & Parmesan Infusion",
        description: "Fresh aromatic basil pesto layer blended beautifully over baked oyster and finished with a hot parmesan lid.",
        extra: "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate."
      },
      ru: {
        title: "Запеченная устрица Песто и Пармезан",
        description: "Ароматный базиликовый песто, запеченный на устрице под румяной шапочкой из сыра пармезан.",
        extra: "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке."
      }
    }
  },
  {
    id: 5,
    category: 'oysters',
    price: 25,
    icon: '🦪',
    strings: {
      ka: {
        title: "ხამანწკა შებოლილი ორაგულითა და კაპერსის კრემით",
        description: "ნაზი ცივად შებოლილი ორაგული კაპერსების ნაღების კრემთან ერთად, გამომცხვარი ხამანწკის ნაჭუჭში.",
        extra: "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე."
      },
      en: {
        title: "Baked Oyster Smoked Salmon & Capers Cream",
        description: "Delicate cold-smoked salmon flakes combined with house-spiced capers and white sour cream base.",
        extra: "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate."
      },
      ru: {
        title: "Запеченная устрица с Лососем и Каперсами",
        description: "Нежные кусочки подкопченного лосося с кремом из сливок и каперсов, запеченные в устричной раковине.",
        extra: "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке."
      }
    }
  },
  {
    id: 6,
    category: 'oysters',
    price: 25,
    icon: '🦪',
    strings: {
      ka: {
        title: "ხამანწკა ბლექ ანგუსითა და მდნარი ჩედერით",
        description: "ხელით დაკეპილი ბლექ ანგუსის ხორცი, არომატული სანელებლები და მდნარი ჩედერის გული.",
        extra: "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე."
      },
      en: {
        title: "Baked Oyster Black Angus & Cheddar Melt",
        description: "Finely shaved premium Black Angus beef layers topped with sharp, bubbly melted cheddar cheese.",
        extra: "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate."
      },
      ru: {
        title: "Запеченная устрица Блэк Ангус и Чеддер",
        description: "Мягкие волокна мраморной говядины Блэк Ангус под золотистой корочкой из сыра чеддер.",
        extra: "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке."
      }
    }
  },
  {
    id: 7,
    category: 'oysters',
    price: 25,
    icon: '🦪',
    strings: {
      ka: {
        title: "ხამანწკა სერფ ენდ ტერფი (Surf & Turf)",
        description: "ორი სამყაროს სინთეზი - ნაზი გრილზე მომზადებული კრევეტი და საქონლის რბილი ფილე ნივრით.",
        extra: "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე."
      },
      en: {
        title: "Baked Oyster Surf & Turf",
        description: "The ultimate pairing of juicy grilled tiger shrimp bits and tender premium beef steak crumbles with garlic butter.",
        extra: "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate."
      },
      ru: {
        title: "Запеченная устрица Серф энд Терф",
        description: "Премиальное сочетание тигровой креветки гриль и нежных кусочков стейка с чесночным маслом.",
        extra: "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке."
      }
    }
  },
  {
    id: 8,
    category: 'oysters',
    price: 25,
    icon: '🦪',
    strings: {
      ka: {
        title: "ხამანწკა პომიდვრით, ნივრითა და პროშუტოთი",
        description: "მზეზე გამომშრალი პომიდორი, გამომცხვარი ნიორი და იტალიური პროშუტოს თხელი ხრაშუნა ფირფიტები.",
        extra: "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე."
      },
      en: {
        title: "Baked Oyster Tomato Garlic & Prosciutto",
        description: "Sun-dried Italian tomatoes, rich roasted garlic purée, and light flakes of cured crispy prosciutto.",
        extra: "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate."
      },
      ru: {
        title: "Запеченная устрица Томат, Чеснок и Прошутто",
        description: "Вяленые томаты, нежное пюре из печеного чеснока и чипсы из прошутто.",
        extra: "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке."
      }
    }
  },
  {
    id: 9,
    category: 'oysters',
    price: 25,
    icon: '🦪',
    strings: {
      ka: {
        title: "ხამანწკა ნივრიანი კარაქით - ბისტრო ორიგინალი",
        description: "კლასიკური ფრანგული ბისტროს რეცეპტი: ხელით ათქვეფილი ნივრიანი კარაქი, ოხრახუში და პურის ხრაშუნა ნამცეცები.",
        extra: "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე."
      },
      en: {
        title: "Baked Oyster Garlic Butter Bistro Original",
        description: "Bistro heritage recipe with house-whipped premium garlic-herb butter and toasted gold breadcrumbs.",
        extra: "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate."
      },
      ru: {
        title: "Запеченная устрица с Чесночным Маслом",
        description: "Классический рецепт: устрица, запеченная с нежным чесночным маслом, петрушкой и золотистыми сухариками.",
        extra: "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке."
      }
    }
  },
  {
    id: 10,
    category: 'oysters',
    price: 25,
    icon: '🦪',
    strings: {
      ka: {
        title: "THE BLACK CAT MIX DUO • ბლექ ქეთის დუეტი",
        description: "შეარჩიეთ თქვენთვის სასურველი ნებისმიერი 2 გამომცხვარი ხამანწკა მენიუდან დასაგემოვნებლად.",
        extra: "მომსახურება მოიცავს: 2 ხამანწკას, 2 ნაჭერ გრილზე მომზადებულ ბაგეტს, ლაიმის ნაჭერს და საფირმო პესტოს ზეთს თეფშზე."
      },
      en: {
        title: "THE BLACK CAT MIX DUO",
        description: "Your personalized selection of any 2 premium baked oysters from our rich assortment.",
        extra: "Serving includes: 2 oysters, 2 slices of grilled baguette, a slice of lime, and signature pesto oil on the plate."
      },
      ru: {
        title: "THE BLACK CAT MIX DUO",
        description: "Ваш индивидуальный выбор любых двух запеченных устриц из нашего ассортимента.",
        extra: "Порция включает: 2 устрицы, 2 ломтика багета на гриле, дольку лайма и фирменное масло песто на тарелке."
      }
    }
  },
  // Oyster Sets (11-13)
  {
    id: 11,
    category: 'oysters',
    price: 100,
    icon: '🏆',
    strings: {
      ka: {
        title: "THE GRAND SELECTION SET • გრანდ სეტი",
        description: "უმაღლესი ხარისხის 10 გამომცხვარი ხამანწკის პრემიუმ პლატო. იდეალურია კომპანიისთვის.",
        extra: "მომსახურება მოიცავს: 10 ხამანწკას, გრილზე მომზადებულ ბაგეტებს, ლაიმის ნაჭრებს და პესტოს ზეთს."
      },
      en: {
        title: "THE GRAND SELECTION SET",
        description: "A luxury tasting platter of 10 assorted premium baked oysters. Perfect for sharing and celebrations.",
        extra: "Serving includes: 10 oysters, grilled baguettes, fresh lime wedges, and house pesto oil drops."
      },
      ru: {
        title: "THE GRAND SELECTION SET",
        description: "Премиальное дегустационное плато из 10 изысканных запеченных устриц. Идеально для компании.",
        extra: "Порция включает: 10 устриц, хрустящий багет, дольки сочного лайма и ароматное масло песто."
      }
    }
  },
  {
    id: 12,
    category: 'oysters',
    price: 45,
    icon: '🏆',
    strings: {
      ka: {
        title: "THE PREMIUM SEAFOOD MIX • ზღვის პრემიუმ მიქსი",
        description: "4 რჩეული ხამანწკა: შებოლილი ორაგულით, ტრიუფელითა და ლაიმის ნაზი სოუსებით.",
        extra: "მომსახურება მოიცავს: 4 ხამანწკას, გრილზე მომზადებულ ბაგეტებს, ლაიმს და პესტოს ზეთს."
      },
      en: {
        title: "THE PREMIUM SEAFOOD MIX",
        description: "A curated seafood-focused set of 4 premium oysters with smoked salmon, black truffle paste, and citrus highlights.",
        extra: "Serving includes: 4 oysters, grilled baguettes, fresh lime wedges, and house pesto oil."
      },
      ru: {
        title: "THE PREMIUM SEAFOOD MIX",
        description: "Изысканный морской сет из 4 устриц с копченым лососем, черным трюфелем и свежим цитрусовым соусом.",
        extra: "Порция включает: 4 устрицы, багет на гриле, дольки лайма и соус песто."
      }
    }
  },
  {
    id: 13,
    category: 'oysters',
    price: 45,
    icon: '🏆',
    strings: {
      ka: {
        title: "THE MEAT & RICH MIX • ხორცის მიქსი ბაზალტი",
        description: "4 ნოყიერი ხამანწკა: ბლექ ანგუსით, პროშუტოთი და გორგონძოლას მდიდარი ნაზავით.",
        extra: "მომსახურება მოიცავს: 4 ხამანწკას, გრილზე მომზადებულ ბაგეტებს, ლაიმს და პესტოს ზეთს."
      },
      en: {
        title: "THE MEAT & RICH MIX",
        description: "A robust, savory meat-lovers' set of 4 baked oysters featuring Black Angus, Crispy Prosciutto, and rich Gorgonzola crusts.",
        extra: "Serving includes: 4 oysters, grilled baguettes, fresh lime wedges, and house pesto oil."
      },
      ru: {
        title: "THE MEAT & RICH MIX",
        description: "Насыщенный мясной сет из 4 запеченных устриц с мраморным Блэк Ангусом, хрустящим прошутто и сыром горгонзола.",
        extra: "Порция включает: 4 устрицы, гренки из багета, лайм и соус песто."
      }
    }
  },

  // ----------------------------------------------------
  // BRUNCH & SALADS / PLATTERS (ITEMS 14-20 & 44-45)
  // ----------------------------------------------------
  // Brunch & Salads (14-20) - Price: 25 GEL
  {
    id: 14,
    category: 'brunch',
    price: 25,
    icon: '🍳',
    strings: {
      ka: {
        title: "საფირმო ტრიუფელის ომლეტი",
        description: "სამი ორგანული კვერცხი, ნატურალური შავი ტრიუფელის პასტა, სოკო და თბილი, ტოსტირებული საფუვრიანი პური.",
        extra: "მიირთვით ახლად მოხარშულ კლასიკურ ყავასთან ერთად."
      },
      en: {
        title: "Signature Truffle Omelette",
        description: "Three farm-fresh organic eggs, authentic black truffle paste, forest mushrooms, served with warm toasted sourdough bread.",
        extra: "Pairs beautifully with our house-brewed black coffee."
      },
      ru: {
        title: "Фирменный трюфельный омлет",
        description: "Три органических яйца, паста из натурального черного трюфеля, лесные грибы и теплый тост из ремесленного заквасочного хлеба.",
        extra: "Отлично сочетается со свежесваренным кофе."
      }
    }
  },
  {
    id: 15,
    category: 'brunch',
    price: 25,
    icon: '🥪',
    strings: {
      ka: {
        title: "ბლექ ანგუსის სენდვიჩი",
        description: "ნაზი, ნელა მომზადებული ბლექ ანგუსის საქონლის ხორცი, კარამელიზებული ხახვი, მდნარი ჩედერი და ბისტროს საიდუმლო სოუსი.",
        extra: "საფირმო რეცეპტი"
      },
      en: {
        title: "Black Angus Beef Sandwich",
        description: "Tender, slow-braised pulled Black Angus beef, sweet caramelized onions, melted cheddar cheese, and signature secret bistro dressing on crusty ciabatta.",
        extra: "Chef's special recipe"
      },
      ru: {
        title: "Сэндвич с говядиной Блэк Ангус",
        description: "Нежная, томленая рваная говядина Блэк Ангус, карамелизированный лук, сыр чеддер и секретный соус на хрустящей чиабатте.",
        extra: "Фирменный рецепт"
      }
    }
  },
  {
    id: 16,
    category: 'brunch',
    price: 25,
    icon: '🥪',
    strings: {
      ka: {
        title: "კლასიკური პროშუტოს სენდვიჩი",
        description: "იტალიური პროშუტო, ნედლი მოცარელა, მწიფე პომიდორი, ველური რუკოლა და ბალზამიკოს სოუსი.",
        extra: "იტალიური კლასიკა"
      },
      en: {
        title: "Classic Prosciutto Sandwich",
        description: "Fine Italian prosciutto, soft fresh mozzarella, ripe Roma tomatoes, wild baby arugula, and rich balsamic reduction glaze.",
        extra: "Mediterranean classic"
      },
      ru: {
        title: "Классический сэндвич с Прошутто",
        description: "Итальянское прошутто, свежая моцарелла, спелые томаты, дикая руккола и густой бальзамический крем.",
        extra: "Итальянская классика"
      }
    }
  },
  {
    id: 17,
    category: 'brunch',
    price: 25,
    icon: '🥪',
    strings: {
      ka: {
        title: "შებოლილი ორაგულის სენდვიჩი",
        description: "პრემიუმ კლასის შებოლილი ორაგული, მწვანილების კრემ-ყველი, ნედლი კიტრი, დამარინადებული წითელი ხახვი და კაპერსები.",
        extra: "ნაზი და არომატული"
      },
      en: {
        title: "Smoked Salmon Sandwich",
        description: "Premium cold-smoked salmon, organic herb cream cheese, crisp cucumber, pickled red onions, and nonpareil capers.",
        extra: "Fresh and flavorful"
      },
      ru: {
        title: "Сэндвич с копченым лососем",
        description: "Слабосоленый копченый лосось, нежный сливочный крем-сыр с зеленью, свежий огурец, маринованный лук и каперсы.",
        extra: "Легкий и нежный"
      }
    }
  },
  {
    id: 18,
    category: 'brunch',
    price: 25,
    icon: '🥗',
    strings: {
      ka: {
        title: "მწვანე სალათი ბურატათი",
        description: "კრემოვანი იტალიური ბურატა, პომიდვრის ასორტი, ნედლი სალათის ფოთლები, მოხალული ფიჭვის თხილი და პესტო.",
        extra: "ახალი და მსუბუქი"
      },
      en: {
        title: "Green Salad with Burrata",
        description: "Creamy Italian Burrata heart, heirloom cherry tomatoes, mixed field greens, toasted premium pine nuts, and house-made basil pesto oil.",
        extra: "Fresh and luxurious"
      },
      ru: {
        title: "Зеленый салат с Бурратой",
        description: "Сливочная итальянская Буррата, сочные фермерские томаты черри, микс зелени, обжаренные кедровые орешки и масло песто.",
        extra: "Свежий и изысканный"
      }
    }
  },
  {
    id: 19,
    category: 'brunch',
    price: 25,
    icon: '🧀',
    strings: {
      ka: {
        title: "გამომცხვარი კამამბერი",
        description: "მთლიანი ფრანგული კამამბერი, გამომცხვარი როზმარინით, თაფლით და ნიგვზით. მიირთმევა თბილ კროსტინებთან ერთად.",
        extra: "იდეალურია ღვინოსთან"
      },
      en: {
        title: "Baked Camembert Cheese",
        description: "Whole French Camembert wheel baked with fresh rosemary, natural mountain honey, and crunchy walnuts, served with crispy house crostini.",
        extra: "Perfect pairing with red wine"
      },
      ru: {
        title: "Запеченный Камамбер",
        description: "Целая головка французского камамбера, запеченная с розмарином, медом и грецкими орехами. Подается с теплыми кростини.",
        extra: "Идеально к вину"
      }
    }
  },
  {
    id: 20,
    category: 'brunch',
    price: 25,
    icon: '🥖',
    strings: {
      ka: {
        title: "ბრუსკეტების ასორტი",
        description: "სამი სხვადასხვა ბრუსკეტა: პომიდვრითა და ბაზილიკით, ორაგულითა და კრემით, სოკოთი და ტრიუფელით.",
        extra: "3 ცალი პორციაში"
      },
      en: {
        title: "Assorted Bistro Bruschetta",
        description: "Three pieces of toasted golden baguette: tomato-basil classic, salmon-herb cream, and mushroom-black truffle paste.",
        extra: "3 pieces per portion"
      },
      ru: {
        title: "Ассорти брускетт",
        description: "Три хрустящие брускетты на багете: классическая томат-базилик, нежная лосось-крем и изысканная грибы-трюфель.",
        extra: "3 штуки в порции"
      }
    }
  },

  // Premium Platters (44-45) - Price: 50 GEL (Displayed under Brunch category in its own section)
  {
    id: 44,
    category: 'brunch',
    price: 50,
    icon: '🧀',
    strings: {
      ka: {
        title: "ევროპული ყველის ასორტი",
        description: "პარმეზანი, გორგონძოლა, კამამბერი და პეკორინო. მიირთმევა თაფლით, ყურძნითა და ხრაშუნა კრეკერებით.",
        extra: "ყველის პლატო"
      },
      en: {
        title: "European Cheese Platter",
        description: "Curated selection of aged Parmigiano, creamy Gorgonzola, French Camembert, and Pecorino Romano. Served with mountain honey, fresh grapes, and salty crackers.",
        extra: "Deluxe cheese selection"
      },
      ru: {
        title: "Европейское сырное плато",
        description: "Изысканный выбор сыров: Пармезан, Горгонзола, Камамбер и Пекорино. Подается с медом, виноградом и хрустящими крекерами.",
        extra: "Сырная тарелка"
      }
    }
  },
  {
    id: 45,
    category: 'brunch',
    price: 50,
    icon: '🥩',
    strings: {
      ka: {
        title: "პრემიუმ ხორცის ასორტი",
        description: "ნაზი პროშუტო კრუდო, მილანო სალამი, პიკანტური ჩორიზო, საქონლის პასტრამი, ზეთისხილი და ხრაშუნა გრისინები.",
        extra: "ხორცის პლატო"
      },
      en: {
        title: "Premium Meat Platter",
        description: "Finest selection of Italian Prosciutto Crudo, Milano Salami, spicy Spanish Chorizo, shaved Beef Pastrami, cured olives, and crispy grissini sticks.",
        extra: "Deluxe charcuterie platter"
      },
      ru: {
        title: "Премиальное мясное плато",
        description: "Лучшие деликатесы: Прошутто Крудо, Салями Милано, острая Чоризо, нежная пастрами из говядины, оливки и палочки гриссини.",
        extra: "Мясная нарезка"
      }
    }
  },

  // ----------------------------------------------------
  // WINE MENU (ITEMS 21-43)
  // ----------------------------------------------------
  {
    id: 21,
    category: 'wine',
    subCategory: 'rose',
    priceGlass: 25,
    priceBottle: 108,
    icon: '🍷',
    strings: {
      ka: {
        title: "Antieri Rosé • ანტიერი როზე",
        description: "ელეგანტური ვარდისფერი ღვინო ნაზი ყვავილოვანი, კენკროვანი და მწიფე მარწყვის ნოტებით.",
        extra: "ნაზი და ხავერდოვანი"
      },
      en: {
        title: "Antieri Rosé",
        description: "A prestigious and elegant Italian-style Rosé, brimming with fresh summer berries, crisp cherries, and wild rose petal aromas.",
        extra: "Fresh & Balanced"
      },
      ru: {
        title: "Antieri Rosé",
        description: "Изысканное розовое вино премиум-класса с тонами свежих ягод, спелой вишни и легким цветочным ароматом.",
        extra: "Легкое и освежающее"
      }
    }
  },
  {
    id: 22,
    category: 'wine',
    subCategory: 'red_wines',
    priceGlass: 16,
    priceBottle: 72,
    icon: '🍷',
    strings: {
      ka: {
        title: "I Camponi Rosso Veronese",
        description: "მდიდარი იტალიური წითელი ღვინო მუქი ბლის, შოკოლადისა და რბილი ტანინების ხავერდოვანი სინთეზით.",
        extra: "მდიდარი და სხეულიანი"
      },
      en: {
        title: "I Camponi Rosso Veronese",
        description: "Bold and smooth Northern Italian red with aromatic layers of dark cherries, cocoa beans, and dry oak tannins.",
        extra: "Deep & Structured"
      },
      ru: {
        title: "I Camponi Rosso Veronese",
        description: "Насыщенное и мягкое красное вино из Вероны с ароматом спелой темной вишни, какао и дуба.",
        extra: "Глубокое и бархатистое"
      }
    }
  },
  {
    id: 23,
    category: 'wine',
    subCategory: 'red_wines',
    priceGlass: 16,
    priceBottle: 69,
    icon: '🍷',
    strings: {
      ka: {
        title: "Chiche • 4 გრაფინი",
        description: "დაბალანსებული, ხალისიანი წითელი ღვინო საოჯახო მარნიდან. ხასიათდება მწიფე კენკრის ინტენსიური ტონებით.",
        extra: "ადგილობრივი წარმოება"
      },
      en: {
        title: "Chiche • 4 Grafini",
        description: "Lively and balanced local red wine from a bespoke private estate. Rich in ripe blackberries and elegant wild plums.",
        extra: "Boutique Winery"
      },
      ru: {
        title: "Chiche • 4 Графини",
        description: "Яркое, сбалансированное красное вино от семейной винодельни с тонами ежевики и дикой сливы.",
        extra: "Семейная винодельня"
      }
    }
  },
  {
    id: 24,
    category: 'wine',
    subCategory: 'rose',
    priceGlass: 13,
    priceBottle: 54,
    icon: '🍷',
    strings: {
      ka: {
        title: "Chiche • შარდონე საფერავი",
        description: "უნიკალური, მსუბუქი კუპაჟი. აერთიანებს შარდონეს ყვავილოვან სიხალისესა და საფერავის კენკროვან სხეულს.",
        extra: "უნიკალური კუპაჟი"
      },
      en: {
        title: "Chiche • Chardonnay Saperavi",
        description: "A unique light blend highlighting the floral freshness of Chardonnay with a gentle, red berry splash of Saperavi.",
        extra: "Aromatic Blend"
      },
      ru: {
        title: "Chiche • Шардоне Саперави",
        description: "Необычный легкий купаж: цветочная свежесть Шардоне в сочетании с мягкими ягодными тонами Саперави.",
        extra: "Уникальный купаж"
      }
    }
  },
  {
    id: 25,
    category: 'wine',
    subCategory: 'red_wines',
    priceGlass: 17,
    priceBottle: 75,
    icon: '🍷',
    strings: {
      ka: {
        title: "Chiche • საფერავი",
        description: "პრემიუმ კლასის სხეულიანი საფერავი, მწიფე მაყვლის, ქლიავისა და კაკაოს მდიდარი არომატით.",
        extra: "კლასიკური წითელი"
      },
      en: {
        title: "Chiche • Saperavi",
        description: "Premium full-bodied authentic Georgian Saperavi, rich in wild black cherries, blue plums, and subtle vanilla spices.",
        extra: "Bold Red Classic"
      },
      ru: {
        title: "Chiche • Саперави",
        description: "Полнотелое грузинское Саперави с глубоким ароматом ежевики, черной вишни и нотами специй.",
        extra: "Классическое красное"
      }
    }
  },
  {
    id: 26,
    category: 'wine',
    subCategory: 'classic_white',
    priceGlass: 13,
    priceBottle: 54,
    icon: '🍷',
    strings: {
      ka: {
        title: "Chiche • წინანდალი",
        description: "კლასიკური წინანდალი. გამოირჩევა ნაზი მინდვრის ყვავილების, მწვანე ვაშლისა და ციტრუსის სიხალისით.",
        extra: "კლასიკური თეთრი"
      },
      en: {
        title: "Chiche • Tsinandali",
        description: "Classic dry white wine from Tsinandali micro-zone. Fresh aromas of green apple, white field flowers, and summer citrus.",
        extra: "Crisp Dry White"
      },
      ru: {
        title: "Chiche • Цинандали",
        description: "Классическое сухое белое вино с ароматом белых цветов, зеленого яблока и свежих цитрусовых.",
        extra: "Свежее белое"
      }
    }
  },
  {
    id: 27,
    category: 'wine',
    subCategory: 'classic_white',
    priceGlass: 19,
    priceBottle: 84,
    icon: '🍷',
    strings: {
      ka: {
        title: "Chiora • ლეჩხუმური ცოლიკოური",
        description: "ექსკლუზიური ლეჩხუმური ცოლიკოური, ხალისიანი მჟავიანობით, მსუბუქი მინერალებითა და თაფლის ნოტებით.",
        extra: "იშვიათი ტერუარი"
      },
      en: {
        title: "Chiora • Lechkhumuri Tsolikouri",
        description: "Exclusive crisp Tsolikouri from the mountain region of Lechkhumi. Offers intense mineral notes, white peach, and wild honey finish.",
        extra: "Premium Mountain White"
      },
      ru: {
        title: "Chiora • Лечхумский Цоликоури",
        description: "Эксклюзивный горный Цоликоури со свежей кислотностью, выраженной минеральностью и тонами белого персика.",
        extra: "Горное белое"
      }
    }
  },
  {
    id: 28,
    category: 'wine',
    subCategory: 'sparkling_petnat',
    priceGlass: 16,
    priceBottle: 72,
    icon: '🍷',
    strings: {
      ka: {
        title: "Corte Badin 1931",
        description: "იტალიური ცქრიალა ღვინო, გამოირჩევა სათუთი მუდმივი ბუშტუკებით, მშრალი გემოთი და ატმის ნაზი ნოტებით.",
        extra: "ცქრიალა კლასიკა"
      },
      en: {
        title: "Corte Badin 1931 Sparkling",
        description: "Fine Italian Spumante with persistent fine bubbles, dry, crisp palate, and dynamic white pear notes.",
        extra: "Classic Sparkling"
      },
      ru: {
        title: "Corte Badin 1931",
        description: "Итальянское игристое вино с деликатным перляжем, сухим вкусом и освежающими нотами спелой груши.",
        extra: "Игристое классическое"
      }
    }
  },
  {
    id: 29,
    category: 'wine',
    subCategory: 'red_wines',
    priceGlass: 18,
    priceBottle: 78,
    icon: '🍷',
    strings: {
      ka: {
        title: "Critera Primitivo • პრიმიტივო",
        description: "სამხრეთ იტალიური მდიდარი წითელი ღვინო შავი ქლიავის, ტკბილი სანელებლებისა და კაკაოს ინტენსიური ტონებით.",
        extra: "სამხრეთული ხასიათი"
      },
      en: {
        title: "Critera Primitivo",
        description: "Juicy, sunshine-filled Southern Italian red. Vibrant layers of ripe black plum, sweet clove, and dark chocolate crumbs.",
        extra: "Warm & Fruity"
      },
      ru: {
        title: "Critera Primitivo",
        description: "Насыщенное южноитальянское красное вино с ярким ароматом темной сливы, сладких специй и какао.",
        extra: "Теплое и бархатистое"
      }
    }
  },
  {
    id: 30,
    category: 'wine',
    subCategory: 'red_wines',
    priceGlass: 20,
    priceBottle: 87,
    icon: '🍷',
    strings: {
      ka: {
        title: "Damilie • ძელშავი",
        description: "იშვიათი და ნაზი ძელშავი, ტყის კენკრისა და მარწყვის დახვეწილი არომატებით. წითელი ღვინოების გურმანებისთვის.",
        extra: "იშვიათი ჯიში"
      },
      en: {
        title: "Damilie • Dzelshavi",
        description: "Extremely rare light-bodied ancient red grape variety, with wild red currants and delicate damp forest floor notes.",
        extra: "Exclusive Red"
      },
      ru: {
        title: "Damilie • Дзелшави",
        description: "Редкое автохтонное легкое красное вино с изящным ароматом лесной земляники и красной смородины.",
        extra: "Эксклюзивный автохтон"
      }
    }
  },
  {
    id: 31,
    category: 'wine',
    subCategory: 'classic_white',
    priceGlass: 17,
    priceBottle: 75,
    icon: '🍷',
    strings: {
      ka: {
        title: "Damilie • გორული მწვანე-ჩინური",
        description: "არომატული თეთრი ღვინო თეთრი ატმის, მინდვრის თაფლისა და ციტრუსის გამაჯანსაღებელი ნოტებით.",
        extra: "გამაჯანსაღებელი სიხალისე"
      },
      en: {
        title: "Damilie • Goruli Mtsvane-Chinuri",
        description: "Aromatic blend of Goruli Mtsvane and Chinuri. Bright notes of white peach skin, honey nectar, and fresh lemon zest.",
        extra: "Zesty & Floral"
      },
      ru: {
        title: "Damilie • Горули Мцване-Чинури",
        description: "Ароматный купаж белых сортов с тонами белого персика, лугового меда и бодрящей цедры лимона.",
        extra: "Свежее и фруктовое"
      }
    }
  },
  {
    id: 32,
    category: 'wine',
    subCategory: 'qvevri_amber',
    priceGlass: 18,
    priceBottle: 78,
    icon: '🍷',
    strings: {
      ka: {
        title: "Damilie • მადრასაული ქისი (ქვევრი)",
        description: "ტრადიციულ ქვევრში დაყენებული ქარვისფერი ღვინო, გამოკვეთილი ტანინებითა და გამომშრალი გარგარის ტონებით.",
        extra: "ქვევრის ქარვისფერი"
      },
      en: {
        title: "Damilie • Madrasauli Kisi Qvevri",
        description: "Traditional Qvevri-fermented amber wine, revealing rich structural tannins, dried apricot, and black tea complexity.",
        extra: "Authentic Amber"
      },
      ru: {
        title: "Damilie • Киси Квеври (Янтарное)",
        description: "Традиционное янтарное вино из квеври с выраженными танинами, тонами кураги и сухофруктов.",
        extra: "Аутентичное янтарное"
      }
    }
  },
  {
    id: 33,
    category: 'wine',
    subCategory: 'sparkling_petnat',
    priceGlass: 19,
    priceBottle: 81,
    icon: '🍷',
    strings: {
      ka: {
        title: "Damilie Pet-Nat • ცოლიკოური",
        description: "ნატურალური, გაუფილტრავი ცოცხალი პეტ-ნატი ცოლიკოურისგან, გამოხატული მსხლისა და ლიმონის ტონებით.",
        extra: "ნატურალური პეტ-ნატი"
      },
      en: {
        title: "Damilie Pet-Nat • Tsolikouri",
        description: "Lively, unfiltered natural sparkling Pet-Nat made from Tsolikouri. Notes of green pear, fresh yeast, and sourdough bread.",
        extra: "Natural Pet-Nat"
      },
      ru: {
        title: "Damilie Pet-Nat • Цоликоури",
        description: "Живой, нефильтрованный натуральный петнат из винограда Цоликоури с тонами зеленой груши и цитрусов.",
        extra: "Натуральный петнат"
      }
    }
  },
  {
    id: 34,
    category: 'wine',
    subCategory: 'classic_white',
    priceGlass: 17,
    priceBottle: 75,
    icon: '🍷',
    strings: {
      ka: {
        title: "First Winery Khikhvi Classic",
        description: "ევროპული სტილის თეთრი ღვინო ხიხვისგან. მინდვრის ყვავილებისა და ნუშის ნაზი არომატებით.",
        extra: "ევროპული თეთრი"
      },
      en: {
        title: "First Winery Khikhvi Classic",
        description: "European-style dry white Khikhvi. Clean bouquet of white meadow blossoms, citrus oil, and raw almond finish.",
        extra: "Elegant White"
      },
      ru: {
        title: "First Winery Khikhvi Classic",
        description: "Белое вино из сорта Хихви в европейском стиле. Тонкий букет луговых цветов и молодого миндаля.",
        extra: "Элегантное белое"
      }
    }
  },
  {
    id: 35,
    category: 'wine',
    subCategory: 'qvevri_amber',
    priceGlass: 19,
    priceBottle: 84,
    icon: '🍷',
    strings: {
      ka: {
        title: "First Winery Khikhvi Qvevri",
        description: "ქვევრში დაყენებული ხიხვი. გამოირჩევა ჩირის, ფორთოხლის ცედრისა და აღმოსავლური სანელებლების არომატით.",
        extra: "ქვევრის ქარვისფერი"
      },
      en: {
        title: "First Winery Khikhvi Qvevri",
        description: "Traditional Qvevri amber Khikhvi. Earthy and complex with dried tropical fruits, honeycomb, and mild winter spices.",
        extra: "Qvevri Amber Heritage"
      },
      ru: {
        title: "First Winery Khikhvi Qvevri",
        description: "Янтарное вино Хихви из квеври. Сложный вкус с тонами сухофруктов, меда и восточных пряностей.",
        extra: "Квеври янтарное"
      }
    }
  },
  {
    id: 36,
    category: 'wine',
    subCategory: 'classic_white',
    priceGlass: 21,
    priceBottle: 90,
    icon: '🍷',
    strings: {
      ka: {
        title: "First Winery Kisi Classic",
        description: "კლასიკური ევროპული წესით დაყენებული ქისი. მწვანე ვაშლის, მსხლისა და ნაზი მჟავიანობის სინთეზი.",
        extra: "კლასიკური თეთრი"
      },
      en: {
        title: "First Winery Kisi Classic",
        description: "Modern classic white Kisi, light and refreshing with hints of green apple, ripe Bosc pear, and spring jasmine.",
        extra: "Fresh European-Style White"
      },
      ru: {
        title: "First Winery Kisi Classic",
        description: "Свежее белое вино из сорта Киси в европейском стиле. Тона зеленого яблока, спелой груши и жасмина.",
        extra: "Освежающее белое"
      }
    }
  },
  {
    id: 37,
    category: 'wine',
    subCategory: 'qvevri_amber',
    priceGlass: 19,
    priceBottle: 84,
    icon: '🍷',
    strings: {
      ka: {
        title: "First Winery Kisi Qvevri",
        description: "ქვევრში მომწიფებული ქისი. გამოირჩევა თაფლის, მოხალული ნიგვზისა და მდიდარი ტანინების ხავერდოვნებით.",
        extra: "ქვევრის ქარვისფერი"
      },
      en: {
        title: "First Winery Kisi Qvevri",
        description: "Aged in traditional clay Qvevri, showing luxurious golden amber tones, roasted walnut, and orange marmalade skin.",
        extra: "Rich Amber Classic"
      },
      ru: {
        title: "First Winery Kisi Qvevri",
        description: "Янтарное вино Киси из квеври с глубоким вкусом, тонами грецкого ореха, меда и апельсинового джема.",
        extra: "Янтарное классическое"
      }
    }
  },
  {
    id: 38,
    category: 'wine',
    subCategory: 'red_wines',
    priceGlass: 15,
    priceBottle: 66,
    icon: '🍷',
    strings: {
      ka: {
        title: "First Winery Saperavi Classic",
        description: "ნაზი და დაბალანსებული საფერავი, მწიფე ალუბლის, შავი ქლიავისა და მუხის მსუბუქი არომატით.",
        extra: "კლასიკური წითელი"
      },
      en: {
        title: "First Winery Saperavi Classic",
        description: "Smooth and balanced medium-bodied classic Saperavi, presenting ripe red cherry, sweet plum, and delicate french oak.",
        extra: "Elegant Red"
      },
      ru: {
        title: "First Winery Saperavi Classic",
        description: "Сбалансированное красное Саперави средней плотности с ароматом спелой вишни, сливы и легким дубом.",
        extra: "Элегантное красное"
      }
    }
  },
  {
    id: 39,
    category: 'wine',
    subCategory: 'qvevri_amber', // Saperavi Qvevri is a deep red wine made in Qvevri, but can fit under Qvevri subcategory for Qvevri selection
    priceGlass: 21,
    priceBottle: 90,
    icon: '🍷',
    strings: {
      ka: {
        title: "First Winery Saperavi Qvevri",
        description: "მდიდარი, ძლიერი ქვევრის საფერავი, ტყავის, კვამლისა და შავი კენკრის ჩირის კომპლექსური თაიგულით.",
        extra: "ქვევრის წითელი"
      },
      en: {
        title: "First Winery Saperavi Qvevri",
        description: "Powerful and robust deep red Qvevri Saperavi, highlighting complex dry leather, tobacco smoke, and dark forest berries.",
        extra: "Complex Qvevri Red"
      },
      ru: {
        title: "First Winery Saperavi Qvevri",
        description: "Мощное красное вино Саперави из квеври со сложным букетом кожи, табака и спелых темных лесных ягод.",
        extra: "Мощное сухое красное"
      }
    }
  },
  {
    id: 40,
    category: 'wine',
    subCategory: 'classic_white',
    priceGlass: 21,
    priceBottle: 90,
    icon: '🍷',
    strings: {
      ka: {
        title: "Me&Wine Chardonnay Sauvignon Blanc",
        description: "ხალისიანი თეთრი კუპაჟი ტროპიკული ნესვის, ახლად გათიბული ბალახისა და ლაიმის მდიდარი არომატით.",
        extra: "ახალი და არომატული"
      },
      en: {
        title: "Me&Wine Chardonnay Sauvignon Blanc",
        description: "Zesty, tropical white blend. Bright crisp notes of honeydew melon, wild herbs, and fresh key lime juice.",
        extra: "Vibrant Summer Blend"
      },
      ru: {
        title: "Me&Wine Chardonnay Sauvignon Blanc",
        description: "Яркий белый бленд с нотами тропической дыни, луговых трав и бодрящего сока лайма.",
        extra: "Яркое белое"
      }
    }
  },
  {
    id: 41,
    category: 'wine',
    subCategory: 'sparkling_petnat',
    priceGlass: 16,
    priceBottle: 69,
    icon: '🍷',
    strings: {
      ka: {
        title: "Mille Bolle Spumante Rosé Brut",
        description: "ხალისიანი იტალიური ცქრიალა ვარდისფერი ღვინო, გამოირჩევა მარწყვისა და წითელი მოცხარის სიხალისით.",
        extra: "ცქრიალა როზე"
      },
      en: {
        title: "Mille Bolle Spumante Rosé Brut",
        description: "Joyful and bubbly Italian dry sparkling Rosé. Seduces with lively strawberry, raspberry, and dry mineral bubbles.",
        extra: "Sparkling Celebration"
      },
      ru: {
        title: "Mille Bolle Spumante Rosé Brut",
        description: "Игристое итальянское розовое брют с тонкими пузырьками, тонами земляники и спелой малины.",
        extra: "Игристое розовое"
      }
    }
  },
  {
    id: 42,
    category: 'wine',
    subCategory: 'sparkling_petnat',
    priceGlass: 21,
    priceBottle: 90,
    icon: '🍷',
    strings: {
      ka: {
        title: "Prosecco Fili Extra Dry",
        description: "უმაღლესი ხარისხის პროსეკო, ოქროსფერი ვაშლისა და თეთრი ატმის გამორჩეული ხილის არომატით.",
        extra: "პრემიუმ პროსეკო"
      },
      en: {
        title: "Prosecco Fili Extra Dry",
        description: "Premium class Prosecco from Veneto, revealing fresh floral aromas and crisp golden apples with a mineral texture.",
        extra: "Premium Italian Bubbles"
      },
      ru: {
        title: "Prosecco Fili Extra Dry",
        description: "Премиальное просекко с ароматом золотистых яблок, белого персика и освежающим минеральным послевкусием.",
        extra: "Итальянское игристое"
      }
    }
  },
  {
    id: 43,
    category: 'wine',
    subCategory: 'qvevri_amber',
    priceGlass: 18,
    priceBottle: 78,
    icon: '🍷',
    strings: {
      ka: {
        title: "Tevza • ჩინური (ქვევრი)",
        description: "ტრადიციული ქვევრის ჩინური, გამხმარი მწვანილებისა და ყვითელი ქლიავის მდიდარი არომატებით.",
        extra: "ქვევრის ქარვისფერი"
      },
      en: {
        title: "Tevza • Chinuri Qvevri",
        description: "Authentic Qvevri Chinuri. Earthy and aromatic with wild dried herbs, golden plums, and a rich tea-like tannic finish.",
        extra: "Traditional Amber"
      },
      ru: {
        title: "Tevza • Чинури Квеври (Янтарное)",
        description: "Аутентичное Чинури из квеври с тонами сухих луговых трав, желтой сливы и легким чайным танином.",
        extra: "Янтарное традиционное"
      }
    }
  },

  // ----------------------------------------------------
  // COFFEE & DRINKS (ITEMS 46-57)
  // ----------------------------------------------------
  {
    id: 46,
    category: 'drinks',
    price: 7,
    icon: '☕',
    strings: {
      ka: {
        title: "ამერიკანო",
        description: "ორმაგი ესპრესო ცხელი წყლითა და თხელი ნაზი ქაფით.",
        extra: "ცხელი სასმელი"
      },
      en: {
        title: "Americano Coffee",
        description: "Double shot of premium espresso stretched with hot mineral water, light crema.",
        extra: "Hot Beverage"
      },
      ru: {
        title: "Американо",
        description: "Двойной эспрессо с горячей водой и нежной кофейной пенкой."
      }
    }
  },
  {
    id: 47,
    category: 'drinks',
    price: 10,
    icon: '☕',
    strings: {
      ka: {
        title: "კაპუჩინო დიდი",
        description: "ინტენსიური ესპრესო, ბევრი ათქვეფილი რძითა და სქელი ქაფით.",
        extra: "ცხელი სასმელი"
      },
      en: {
        title: "Cappuccino Large",
        description: "Intense shot of espresso blended with generous velvety steamed milk and thick microfoam.",
        extra: "Creamy Hot Cup"
      },
      ru: {
        title: "Капучино Большой",
        description: "Двойной эспрессо со вспененным молоком и плотной молочной пенкой."
      }
    }
  },
  {
    id: 48,
    category: 'drinks',
    price: 9,
    icon: '☕',
    strings: {
      ka: {
        title: "კაპუჩინო პატარა",
        description: "კლასიკური კაპუჩინო, დაბალანსებული ესპრესოთი და ჰაეროვანი რძით.",
        extra: "ცხელი სასმელი"
      },
      en: {
        title: "Cappuccino Small",
        description: "Bespoke single shot espresso with perfectly balanced steamed milk and microfoam.",
        extra: "Classic Cup"
      },
      ru: {
        title: "Капучино Маленький",
        description: "Классический одинарный эспрессо с молочной пенкой."
      }
    }
  },
  {
    id: 49,
    category: 'drinks',
    price: 6,
    icon: '☕',
    strings: {
      ka: {
        title: "ესპრესო",
        description: "ინტენსიური და არომატული ყავის კლასიკური პორცია.",
        extra: "ცხელი სასმელი"
      },
      en: {
        title: "Espresso Single",
        description: "Intense and aromatic single shot of our signature roasted house espresso blend.",
        extra: "Pure Coffee Energy"
      },
      ru: {
        title: "Эспрессо",
        description: "Интенсивная порция классического ароматного черного кофе."
      }
    }
  },
  {
    id: 50,
    category: 'drinks',
    price: 10,
    icon: '☕',
    strings: {
      ka: {
        title: "ფლეტ ვაითი",
        description: "ორმაგი ესპრესო ნაზი ათქვეფილი რძის თხელი ფენით.",
        extra: "ცხელი სასმელი"
      },
      en: {
        title: "Flat White",
        description: "Double shot of espresso topped with a thin, silky layer of microfoamed hot milk.",
        extra: "Strong & Milky"
      },
      ru: {
        title: "Флэт Уайт",
        description: "Двойной эспрессо с тонким бархатистым слоем вспененного молока."
      }
    }
  },
  {
    id: 51,
    category: 'drinks',
    price: 8,
    icon: '🥤',
    strings: {
      ka: {
        title: "აის ამერიკანო",
        description: "გაციებული ორმაგი ესპრესო ყინულითა და ცივი წყლით.",
        extra: "ცივი სასმელი"
      },
      en: {
        title: "Iced Americano",
        description: "Double shot espresso chilled over ice cubes with cool mountain water. Extremely refreshing.",
        extra: "Chilled Refresher"
      },
      ru: {
        title: "Айс Американо",
        description: "Двойной эспрессо со льдом и холодной водой. Прекрасно освежает в жаркий день."
      }
    }
  },
  {
    id: 52,
    category: 'drinks',
    price: 12,
    icon: '🥤',
    strings: {
      ka: {
        title: "აის ლატე",
        description: "მდიდარი ესპრესო, ცივი რძე და ყინულები. ნაზი და გრილი.",
        extra: "ცივი სასმელი"
      },
      en: {
        title: "Iced Latte",
        description: "Smooth espresso shots mixed with creamy cold milk and poured over ice.",
        extra: "Cold Coffee Classic"
      },
      ru: {
        title: "Айс Латте",
        description: "Порция эспрессо с холодным молоком и кубиками льда. Нежный и сливочный."
      }
    }
  },
  {
    id: 53,
    category: 'drinks',
    price: 15,
    icon: '🍵',
    strings: {
      ka: {
        title: "მატჩა კენკრის მიქსით",
        description: "უმაღლესი ხარისხის მწვანე მატჩა, ახალი კენკრის პიურე და რძე.",
        extra: "ცივი ან ცხელი"
      },
      en: {
        title: "Matcha with Berry Mix",
        description: "Ceremonial grade green Japanese matcha layered with fresh mixed berry compote and milk.",
        extra: "Exotic Fusion"
      },
      ru: {
        title: "Матча с лесными ягодами",
        description: "Церемониальная зеленая матча с пюре из лесных ягод и молоком на ваш выбор."
      }
    }
  },
  {
    id: 54,
    category: 'drinks',
    price: 12,
    icon: '🍵',
    strings: {
      ka: {
        title: "მატჩა რძით",
        description: "იაპონური პრემიუმ მწვანე მატჩა ნაზი ათქვეფილი რძით.",
        extra: "ცხელი სასმელი"
      },
      en: {
        title: "Matcha Latte",
        description: "Premium ceremonial-grade Japanese green matcha whisked with creamy steamed milk.",
        extra: "Zen Tea"
      },
      ru: {
        title: "Матча Латте",
        description: "Японский чай матча со вспененным молоком. Сбалансированный и мягкий вкус."
      }
    }
  },
  {
    id: 55,
    category: 'drinks',
    price: 13,
    icon: '🍹',
    strings: {
      ka: {
        title: "ლიმონათი კენკრის მიქსით",
        description: "სახლში მომზადებული ლიმონათი ველური კენკრის სიროფით, პიტნითა და სოდით.",
        extra: "გამაგრილებელი სასმელი"
      },
      en: {
        title: "Berry Mix Lemonade",
        description: "Refreshing house-made lemonade mixed with wild berries syrup, fresh mint leaves, and bubbly soda.",
        extra: "Ice Cold Refresher"
      },
      ru: {
        title: "Лимонад Лесные Ягоды",
        description: "Освежающий домашний лимонад с сиропом из диких лесных ягод, мятой и содовой."
      }
    }
  },
  {
    id: 56,
    category: 'drinks',
    price: 12,
    icon: '☕',
    strings: {
      ka: {
        title: "ლატე",
        description: "ესპრესო და ბევრი კრემოვანი ორთქლზე ათქვეფილი რძე.",
        extra: "ცხელი სასმელი"
      },
      en: {
        title: "Latte Coffee",
        description: "Velvety espresso mixed with a generous serving of hot steam-stretched milk, light foam.",
        extra: "Smooth & Milky"
      },
      ru: {
        title: "Латте",
        description: "Классический мягкий кофе с добавлением нежного подогретого молока."
      }
    }
  },
  {
    id: 57,
    category: 'drinks',
    price: 2,
    icon: '🥛',
    strings: {
      ka: {
        title: "დამატებითი რძე",
        description: "ორგანული რძის დამატებითი პორცია (ალტერნატიული რძე ხელმისაწვდომია).",
        extra: "დანამატი"
      },
      en: {
        title: "Extra Portion of Milk",
        description: "Organic milk portion. Soy, oat, and almond milks are also happily available.",
        extra: "Add-on"
      },
      ru: {
        title: "Дополнительное молоко",
        description: "Порция молока. На выбор: коровье, кокосовое, овсяное или миндальное."
      }
    }
  },

  // ----------------------------------------------------
  // SWEET DESSERTS (ITEMS 58-59) - Price: 15 GEL (Displayed under Drinks)
  // ----------------------------------------------------
  {
    id: 58,
    category: 'drinks',
    price: 15,
    icon: '🍰',
    strings: {
      ka: {
        title: "ჩიზქეიქი",
        description: "კლასიკური გამომცხვარი ნიუ-იორკ ჩიზქეიქი ჟოლოს ნაზი კულისით.",
        extra: "დესერტები"
      },
      en: {
        title: "New York Cheesecake",
        description: "Classic creamy baked New York style cheesecake on a crunchy graham cracker crust, finished with sweet raspberry coulis.",
        extra: "House Dessert"
      },
      ru: {
        title: "Чизкейк Нью-Йорк",
        description: "Классический запеченный чизкейк со сливочной текстурой и малиновым топпингом."
      }
    }
  },
  {
    id: 59,
    category: 'drinks',
    price: 15,
    icon: '🍰',
    strings: {
      ka: {
        title: "ტირამისუ",
        description: "სახლში მომზადებული იტალიური ტირამისუ ესპრესოთი, მასკარპონეს კრემითა და კაკაოთი.",
        extra: "დესერტები"
      },
      en: {
        title: "Bespoke Tiramisu",
        description: "Delicate Italian ladyfinger biscuits soaked in espresso, layered with premium whipped mascarpone cream and dusted with fine cocoa powder.",
        extra: "Chef's Delight"
      },
      ru: {
        title: "Тирамису",
        description: "Традиционный итальянский десерт из печенья савоярди, пропитанного эспрессо, со сливочным кремом маскарпоне."
      }
    }
  }
];
