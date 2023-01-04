export interface ImagesAPIResponse {
  id: string | number;
  slug: 'about' | 'centering' | 'welcome' | 'banner-mobile' | 'banner-desktop';
  content: {
    rendered: string;
  };
  acf?: {
    center_image?: string;

    welcome_title: string;
    welcome_description: string;
    first_number: number;
    first_label: string;
    second_number: number;
    second_label: string;
    third_number: number;
    third_label: string;
  };
}

export interface ImagesModel {
  src: string;
  alt: string;
  title: string;
}

export interface ReviewModel {
  id: string | number;
  slug: string;
  content: {
    rendered: string;
  };
  acf?: {
    review: string;
    author: string;
    job_title: string;
  };
}
