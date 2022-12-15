export interface ImagesAPIResponse {
  id: string | number;
  slug: string;
  content: {
    rendered: string;
  };
}

export interface ImagesModel {
  src: string;
  alt: string;
  title: string;
}
