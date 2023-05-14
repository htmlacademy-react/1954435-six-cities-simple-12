type LocationNavProps = {
  locations: string[];
  currentLocation: string;
};

export default function LocationNav(props: LocationNavProps) {
  const { locations, currentLocation } = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city) =>{
            const isActive = (city === currentLocation);

            return(
              <li key={city} className="locations__item">
                <a className={`locations__item-link tabs__item ${ isActive ? 'tabs__item--active' : ''} `} href="#todo">
                  <span>{city}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
