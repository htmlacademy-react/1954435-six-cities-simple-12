import {Offer} from '../../types/offer';

type GalleryProps = {
  offer: Offer;
};

export default function Gallery ({offer}:GalleryProps) {
  const {title, images} = offer;
  const photos = images.slice(0,6);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">

        { photos.length && photos.map((src)=>(
          <div key={src} className="property__image-wrapper">
            <img className="property__image" src={src} alt={title}/>
          </div>))}

      </div>
    </div>

  );
}
