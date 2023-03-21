import {Helmet} from 'react-helmet-async';
import SvgUpper from '../../components/svg-upper/svg-upper';
import Header from '../../components/header/header';
import Gallery from '../../components/gallery/gallery';
import RoomHeader from '../../components/room-header/room-header';
import RoomInside from '../../components/room-inside/room-inside';
import Host from '../../components/host/host';
import Reviews from '../../components/reviews/reviews';
//import RoomCard from '../../components/room-card/room-card';


export default function RoomScreen() {
  return (
    <div className="page">
      <SvgUpper/>
      <Helmet>
        <title>Six cities: offer</title>
      </Helmet>

      <Header hasNavigation/>
      <main className="page__main page__main--property">
        <section className="property">

          < Gallery/>

          <div className="property__container container">
            <div className="property__wrapper">
              <RoomHeader/>
              <RoomInside/>
              <Host/>
              <Reviews/>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/*<RoomCard />
                <RoomCard />
              <RoomCard /> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
