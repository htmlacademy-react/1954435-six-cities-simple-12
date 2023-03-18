import {Helmet} from 'react-helmet-async';
import Header from '../../components/header/header';
import Gallery from '../../components/gallery/gallery';
import RoomHeader from '../../components/room-header/room-header';
import RoomInside from '../../components/room-inside/room-inside';
import Host from '../../components/host/host';
import Reviews from '../../components/reviews/reviews';
import RoomCard from '../../components/room-card/room-card';


export default function RoomScreen() {
  return (
    <div className="page">
      <div style={{display: 'none'}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

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
              <RoomCard />
              <RoomCard />
              <RoomCard />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
