export interface MenuItem {
  id: string;
  nameEn: string;
  nameVi: string;
  descEn: string;
  descVi: string;
  price: number;
  category: 'main' | 'drinks' | 'combo' | 'toppings';
  image: string;
  popular?: boolean;
}

export const menuItems: MenuItem[] = [
  // MAIN COURSES
  {
    id: 'com-tam',
    nameEn: 'Broken Rice',
    nameVi: 'Cơm Tấm',
    descEn: 'Classic Vietnamese broken rice served with savory accompaniments.',
    descVi: 'Cơm tấm Việt Nam cổ điển phục vụ kèm các món ăn đặc trưng.',
    price: 25000,
    category: 'main',
    image: '/menu_img/Broken_Rice.png',
    popular: true,
  },
  {
    id: 'com-tam-suon-bi-cha',
    nameEn: 'Broken Rice Combination Plate',
    nameVi: 'Cơm Tấm Sườn Bì Chả',
    descEn: 'Broken rice with grilled pork ribs, shredded pork skin, and steamed egg meatloaf.',
    descVi: 'Cơm tấm với sườn nướng, bì heo, và chả trứng hấp.',
    price: 39000,
    category: 'main',
    image: '/menu_img/Broken_Rice_with_the_Combination_Plate.jpg',
    popular: true,
  },
  {
    id: 'bun-thit-nuong',
    nameEn: 'Grilled Pork Vermicelli',
    nameVi: 'Bún Thịt Nướng',
    descEn: 'Fresh vermicelli noodles topped with fragrant grilled pork and fresh herbs.',
    descVi: 'Bún tươi với thịt heo nướng thơm và rau sống tươi mát.',
    price: 25000,
    category: 'main',
    image: '/menu_img/Grilled_Pork_Vermicelli.jpg',
    popular: true,
  },
  {
    id: 'banh-mi-thit-nuong',
    nameEn: 'Grilled Pork Baguette',
    nameVi: 'Bánh Mì Thịt Nướng',
    descEn: 'Crispy Vietnamese baguette filled with savory grilled pork and fresh vegetables.',
    descVi: 'Bánh mì giòn với thịt heo nướng đậm đà và rau tươi.',
    price: 20000,
    category: 'main',
    image: '/menu_img/Grilled_Pork_Baguette.jpg',
  },
  {
    id: 'banh-mi-trung',
    nameEn: 'Fried Egg Baguette',
    nameVi: 'Bánh Mì Trứng',
    descEn: 'Crispy baguette with perfectly fried egg, sauces, and fresh toppings.',
    descVi: 'Bánh mì giòn với trứng ốp la, sốt và các loại rau tươi.',
    price: 17000,
    category: 'main',
    image: '/menu_img/Fried_Egg_Baguette.jpg',
  },
  {
    id: 'canh-rong-bien',
    nameEn: 'Seaweed Soup',
    nameVi: 'Canh Rong Biển',
    descEn: 'Light and nutritious seaweed soup with a delicate savory broth.',
    descVi: 'Canh rong biển thanh mát và bổ dưỡng với nước dùng đậm đà.',
    price: 15000,
    category: 'main',
    image: '/menu_img/Canh_Rong_Bien.webp',
  },
  // DRINKS
  {
    id: 'tra-da',
    nameEn: 'Iced Tea',
    nameVi: 'Trà Đá',
    descEn: 'Refreshing Vietnamese iced tea, the perfect complement to any meal.',
    descVi: 'Trà đá mát lạnh, món uống hoàn hảo kèm theo bữa ăn.',
    price: 2000,
    category: 'drinks',
    image: '/menu_img/Iced_Tea.jpg',
  },
  {
    id: 'sua-dau-nanh',
    nameEn: 'Soy Milk',
    nameVi: 'Sữa Đậu Nành',
    descEn: 'Fresh homemade soy milk, smooth and naturally sweet.',
    descVi: 'Sữa đậu nành tươi tự làm, mịn màng và ngọt tự nhiên.',
    price: 5000,
    category: 'drinks',
    image: '/menu_img/Soy_Milk.jpg',
  },
  // COMBO
  {
    id: 'combo-com-tam-canh',
    nameEn: 'Broken Rice + Seaweed Soup',
    nameVi: 'Cơm Tấm + Canh Rong Biển',
    descEn: 'Value combo: Broken rice with a bowl of our nutritious seaweed soup.',
    descVi: 'Combo tiết kiệm: Cơm tấm kèm canh rong biển bổ dưỡng.',
    price: 38000,
    category: 'combo',
    image: '/menu_img/Broken_Rice_Seaweed_Soup_v2.png',
    popular: true,
  },
  {
    id: 'combo-bun-canh',
    nameEn: 'Vermicelli + Seaweed Soup',
    nameVi: 'Bún Thịt Nướng + Canh Rong Biển',
    descEn: 'Value combo: Grilled pork vermicelli paired with seaweed soup.',
    descVi: 'Combo tiết kiệm: Bún thịt nướng kèm canh rong biển.',
    price: 38000,
    category: 'combo',
    image: '/menu_img/Vermicelli_Seaweed_Soup_v2.jpg',
  },
  // TOPPINGS
  {
    id: 'cha-gio',
    nameEn: 'Spring Rolls',
    nameVi: 'Chả Giò',
    descEn: 'Crispy golden spring rolls with savory filling.',
    descVi: 'Chả giò vàng giòn với nhân đậm đà thơm ngon.',
    price: 6000,
    category: 'toppings',
    image: '/menu_img/Spring_Roll.jpg',
  },
  {
    id: 'cha-hap',
    nameEn: 'Steamed Egg Meatloaf',
    nameVi: 'Chả Hấp',
    descEn: 'Soft and flavorful Vietnamese steamed egg meatloaf.',
    descVi: 'Chả hấp mềm và thơm ngon theo phong cách Việt Nam.',
    price: 6000,
    category: 'toppings',
    image: '/menu_img/Steamed_Egg_Meatloaf.jpg',
  },
  {
    id: 'bi-heo',
    nameEn: 'Shredded Pork Skin',
    nameVi: 'Bì Heo',
    descEn: 'Traditional Vietnamese shredded pork skin with a unique texture.',
    descVi: 'Bì heo truyền thống Việt Nam với kết cấu độc đáo.',
    price: 5000,
    category: 'toppings',
    image: '/menu_img/Shredded_Pork_Skin.jpg',
  },
  {
    id: 'suon-nuong',
    nameEn: 'Grilled Pork Skewers',
    nameVi: 'Sườn Nướng',
    descEn: 'Tender grilled pork skewers marinated in house special sauce.',
    descVi: 'Sườn nướng mềm ướp sốt đặc biệt của nhà hàng.',
    price: 23000,
    category: 'toppings',
    image: '/menu_img/Grilled_Pork_Skewers.jpg',
  },
  {
    id: 'trung-op-la',
    nameEn: 'Omelet',
    nameVi: 'Trứng Ốp La',
    descEn: 'Classic Vietnamese fried egg, golden and perfectly cooked.',
    descVi: 'Trứng ốp la kiểu Việt Nam vàng ruộm và chín tới.',
    price: 6000,
    category: 'toppings',
    image: '/menu_img/Omelet.png',
  },
];

export const featuredDishes = menuItems.filter((item) => item.popular);

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN').format(price) + ' VND';
};
