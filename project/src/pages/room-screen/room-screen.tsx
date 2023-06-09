import {useParams} from 'react-router-dom';
import {Helmet} from 'react-helmet-async';
import SvgUpper from '../../components/svg-upper/svg-upper';
import Header from '../../components/header/header';
import Gallery from '../../components/gallery/gallery';
import RoomHeader from '../../components/room-header/room-header';
import RoomInside from '../../components/room-inside/room-inside';
import Host from '../../components/host/host';
import RoomReviews from '../../components/reviews/room-reviews';
import OfferList from '../../components/offer-list/offer-list';
import { nearOffers } from '../../mocks/offers';
import {Offers, Offer} from '../../types/offer';
import { Reviews } from '../../types/review';
import Map from '../../components/map/map';


type RoomcreenProps = {
  offers: Offers;
  reviews: Reviews;
};


export default function RoomScreen({offers, reviews}: RoomcreenProps) {

  const {id} = useParams();

  const offer = offers.find((item) => item.id === Number(id)) as Offer;
  return (
    <div className="page">
      <SvgUpper/>
      <Helmet>
        <title>Six cities: offer</title>
      </Helmet>

      <Header hasNavigation/>
      <main className="page__main page__main--property">
        <section className="property">

          < Gallery offer={offer}/>

          <div className="property__container container">
            <div className="property__wrapper">
              <RoomHeader offer={offer}/>
              <RoomInside offer={offer}/>
              <Host offer={offer}/>
              <RoomReviews reviews={reviews}/>
            </div>
          </div>

          <Map className="property__map" offers={[]} />

        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList offers={nearOffers} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
