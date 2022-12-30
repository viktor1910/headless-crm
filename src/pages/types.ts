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
}

export interface ImageModel {
  alt_text: string;
  source_url: string;
}
