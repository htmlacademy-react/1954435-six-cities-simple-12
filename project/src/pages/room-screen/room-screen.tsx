import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { store } from '../../store';
import { fetchOfferItemAction, fetchReviewsAction, fetchOffersNearByAction } from '../../store/api-actions';

import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import Gallery from '../../components/gallery/gallery';
import RoomHeader from '../../components/room-header/room-header';
import RoomInside from '../../components/room-inside/room-inside';
import Host from '../../components/host/host';
import RoomReviews from '../../components/reviews/room-reviews';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';


export default function RoomScreen() {
  const {id} = useParams();
  const offer = useAppSelector((state) => state.offer.offerItem);
  const isOfferLoading = useAppSelector((state) => state.offer.isOfferLoading);
  const reviews = useAppSelector((state) => state.offer.reviews);
  const isReviewsLoading = useAppSelector((state) => state.offer.isReviewsLoading);
  const offersNearBy = useAppSelector((state) => state.offer.offersNearBy);
  const isOffersNearByLoading = useAppSelector((state) => state.offer.isOffersNearBy);

  useEffect(() => {
    store.dispatch(fetchOfferItemAction(Number(id)));
    store.dispatch(fetchReviewsAction(Number(id)));
    store.dispatch(fetchOffersNearByAction(Number(id)));
  }, [id]);

  const areDataLoading = (isOfferLoading || isReviewsLoading || isOffersNearByLoading );
  if (areDataLoading) {return <Loader />;}
  if (!offer){return <Navigate to={'/'} />;}

  return (
    <div className="page">
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

          <Map className="property__map" offers={offersNearBy} />

        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <OfferList className="near-places__card" offers={offersNearBy} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
