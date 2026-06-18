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
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=500&q=80',
  },
  {
    id: 'banh-mi-trung',
    nameEn: 'Fried Egg Baguette',
    nameVi: 'Bánh Mì Trứng',
    descEn: 'Crispy baguette with perfectly fried egg, sauces, and fresh toppings.',
    descVi: 'Bánh mì giòn với trứng ốp la, sốt và các loại rau tươi.',
    price: 17000,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=500&q=80',
  },
  {
    id: 'canh-rong-bien',
    nameEn: 'Seaweed Soup',
    nameVi: 'Canh Rong Biển',
    descEn: 'Light and nutritious seaweed soup with a delicate savory broth.',
    descVi: 'Canh rong biển thanh mát và bổ dưỡng với nước dùng đậm đà.',
    price: 15000,
    category: 'main',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=500&q=80',
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
    image: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4853?w=500&q=80',
  },
  {
    id: 'cha-hap',
    nameEn: 'Steamed Egg Meatloaf',
    nameVi: 'Chả Hấp',
    descEn: 'Soft and flavorful Vietnamese steamed egg meatloaf.',
    descVi: 'Chả hấp mềm và thơm ngon theo phong cách Việt Nam.',
    price: 6000,
    category: 'toppings',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=500&q=80',
  },
  {
    id: 'bi-heo',
    nameEn: 'Shredded Pork Skin',
    nameVi: 'Bì Heo',
    descEn: 'Traditional Vietnamese shredded pork skin with a unique texture.',
    descVi: 'Bì heo truyền thống Việt Nam với kết cấu độc đáo.',
    price: 5000,
    category: 'toppings',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=500&q=80',
  },
  {
    id: 'suon-nuong',
    nameEn: 'Grilled Pork Skewers',
    nameVi: 'Sườn Nướng',
    descEn: 'Tender grilled pork skewers marinated in house special sauce.',
    descVi: 'Sườn nướng mềm ướp sốt đặc biệt của nhà hàng.',
    price: 23000,
    category: 'toppings',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=80',
  },
  {
    id: 'trung-op-la',
    nameEn: 'Omelet',
    nameVi: 'Trứng Ốp La',
    descEn: 'Classic Vietnamese fried egg, golden and perfectly cooked.',
    descVi: 'Trứng ốp la kiểu Việt Nam vàng ruộm và chín tới.',
    price: 6000,
    category: 'toppings',
    image: 'https://images.unsplash.com/photo-1510693206972-df098062cb71?w=500&q=80',
  },
];

export const featuredDishes = menuItems.filter((item) => item.popular);

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN').format(price) + ' VND';
};
