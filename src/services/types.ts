export enum Categories {
  DichVu = 3,
  // DichVuKhac = 3,
  NangMui = 4,
  HutMo = 6,
  CatMi = 5,
  NangNguc = 4,
  DichVuNoiBat = 9,
  KhuyenMai = 8,
}

export interface CardDichVuModel {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  acf?: {
    feature_image_alt: string;
    feature_image_url: string;
  };
  categories?: Array<number>;
}

export interface BaiVietDichVuModel {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt?: {
    rendered: string;
  };
  acf?: {
    feature_image_alt: string;
    feature_image_url: string;
  };
}

export interface CategoriesModel {
  name: string;
}
