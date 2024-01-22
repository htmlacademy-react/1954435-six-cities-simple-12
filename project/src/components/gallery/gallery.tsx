const MAX_IMAGES_LENGTH = 6;

type GalleryProps = {
  images: string[];
  alt: string;
};

export default function Gallery({ images, alt }: GalleryProps) {
  const visibleImages = images.slice(0, MAX_IMAGES_LENGTH);

  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {visibleImages.length &&
          visibleImages.map((src) => (
            <div key={src} className="property__image-wrapper">
              <img className="property__image" src={src} alt={alt} />
            </div>
          ))}
      </div>
    </div>
  );
}
