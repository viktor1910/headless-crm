export enum Categories {
  DichVu = 2,
  DichVuKhac = 3,
  GiamBeo = 4,
  TreHoaDa = 5,
  TamTrang = 6,
  DichVuNoiBat = 11,
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
}

export interface CategoriesModel {
  name: string;
}
