// 상품 관련 interface
export interface Product {
  id: string;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  category?: Category;
  creationAt?: Date;
  updatedAt?: Date;
  slide?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  slug?: string;
  creationAt?: Date;
  updatedAt?: Date;
}
