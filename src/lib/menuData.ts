export interface MenuItem {
  id: string;
  nameEn: string;
  nameVi: string;
  subName?: string;
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
    nameEn: 'Brown Rice Cơm Tấm',
    nameVi: 'Cơm Tấm Gạo Lứt',
    subName: 'Cơm Tấm Gạo Lứt',
    descEn: 'Classic Vietnamese brown rice served with savory accompaniments.',
    descVi: 'Cơm tấm gạo lứt Việt Nam cổ điển phục vụ kèm các món ăn đặc trưng.',
    price: 69000,
    category: 'main',
    image: '/menu_img/Brown_Rice_V2.jpg',
    popular: true,
  },

  {
    id: 'bun-thit-nuong',
    nameEn: 'Shirataki Bún Thịt Nướng',
    nameVi: 'Bún Nưa Thịt Nướng',
    subName: 'Bún Nưa Thịt Nướng',
    descEn: 'Fresh vermicelli noodles topped with fragrant grilled pork and fresh herbs.',
    descVi: 'Bún tươi với thịt heo nướng thơm và rau sống tươi mát.',
    price: 75000,
    category: 'main',
    image: '/menu_img/Grilled_Pork_Vermicelli.jpg',
    popular: true,
  },
  {
    id: 'banh-mi-thit-nuong',
    nameEn: 'Whole-wheat Bánh Mì',
    nameVi: 'Bánh Mì Nguyên Cám Thịt Nướng',
    subName: 'Bánh Mì Nguyên Cám Thịt Nướng',
    descEn: 'Crispy Vietnamese baguette filled with savory grilled pork and fresh vegetables.',
    descVi: 'Bánh mì giòn với thịt heo nướng đậm đà và rau tươi.',
    price: 45000,
    category: 'main',
    image: '/menu_img/Whole_Wheat_Pork_Baguette.jpg',
    popular: true,
  },
  {
    id: 'banh-mi-trung',
    nameEn: 'Fried Egg Baguette',
    nameVi: 'Bánh Mì Trứng',
    descEn: 'Crispy baguette with perfectly fried egg, sauces, and fresh toppings.',
    descVi: 'Bánh mì giòn với trứng ốp la, sốt và các loại rau tươi.',
    price: 29000,
    category: 'main',
    image: '/menu_img/Whole_Wheat_Banh_Mi_Egg.jpg',
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
  // COMBO
  {
    id: 'combo-com-tam-canh',
    nameEn: 'Brown Rice Cơm Tấm + Seaweed Soup',
    nameVi: 'Cơm Tấm Gạo Lứt + Canh Rong Biển',
    subName: 'Cơm Tấm Gạo Lứt + Canh Rong Biển',
    descEn: 'Value combo: Broken rice with a bowl of our nutritious seaweed soup.',
    descVi: 'Combo tiết kiệm: Cơm tấm kèm canh rong biển bổ dưỡng.',
    price: 79000,
    category: 'combo',
    image: '/menu_img/Brown_Rice_Seaweed_Soup_Combo.jpg',
  },
  {
    id: 'combo-bun-canh',
    nameEn: 'Shirataki Bún Thịt Nướng + Seaweed Soup',
    nameVi: 'Bún Nưa Thịt Nướng + Canh Rong Biển',
    subName: 'Bún Nưa Thịt Nướng + Canh Rong Biển',
    descEn: 'Value combo: Grilled pork vermicelli paired with seaweed soup.',
    descVi: 'Combo tiết kiệm: Bún thịt nướng kèm canh rong biển.',
    price: 85000,
    category: 'combo',
    image: '/menu_img/Vermicelli_Seaweed_Soup_v2.jpg',
  },
];

export const featuredDishes = menuItems.filter((item) => item.popular);

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('vi-VN').format(price) + ' VND';
};
