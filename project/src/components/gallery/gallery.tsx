import { Offer } from '../../types/offer';
import { PHOTOS_GALLERY } from '../../const';

type GalleryProps = {
  offer: Offer;
};

export default function Gallery({ offer }: GalleryProps) {
  const { title, images } = offer;
  const photos = images.slice(0, PHOTOS_GALLERY);
  //console.log(offer);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {photos.length &&
          photos.map((src) => (
            <div key={src} className="property__image-wrapper">
              <img className="property__image" src={src} alt={title} />
            </div>
          ))}
      </div>
    </div>
  );
}
