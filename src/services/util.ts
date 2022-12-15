import DomParser from 'dom-parser';
import { ImagesAPIResponse, ImagesModel } from '~/@types/Banner';

export const getBannerImage = (images: ImagesAPIResponse) => {
  const imagesFromText = new DomParser().parseFromString(images.content.rendered);

  const domImage = imagesFromText.getElementsByTagName('img');
  const imageResult = domImage?.map(
    i =>
      ({
        src: i.getAttribute('src'),
        alt: i.getAttribute('alt'),
        title: i.getAttribute('alt'),
      } as ImagesModel)
  );
  return imageResult;
};
