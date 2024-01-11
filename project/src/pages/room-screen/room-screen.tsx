import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import {
  fetchOfferItemAction,
  fetchReviewsAction,
  fetchOffersNearByAction,
} from '../../store/api-actions';

import Loader from '../../components/loader/loader';
import Header from '../../components/header/header';
import Gallery from '../../components/gallery/gallery';
import RoomHeader from '../../components/room-header/room-header';
import RoomInside from '../../components/room-inside/room-inside';
import Host from '../../components/host/host';
import RoomReviews from '../../components/reviews/room-reviews';
import OfferList from '../../components/offer-list/offer-list';
import Map from '../../components/map/map';
import { getOffer, getOfferStatus } from '../../store/offer/selectors';
import { getReviews, getReviewsStatus } from '../../store/reviews/selectors';
import { getNearOffers, getNearOffersStatus } from '../../store/near-offers/selectors';


export default function RoomScreen() {
  const { id } = useParams();
  const offer = useAppSelector( getOffer);
  const statusOffer = useAppSelector(getOfferStatus);
  const reviews = useAppSelector( getReviews);
  const statusReviews = useAppSelector(getReviewsStatus);
  const offersNearBy = useAppSelector(getNearOffers);
  const statusNearOffers = useAppSelector(getNearOffersStatus );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchOfferItemAction(Number(id)));
    dispatch(fetchReviewsAction(Number(id)));
    dispatch(fetchOffersNearByAction(Number(id)));
  }, [dispatch, id]);

  const areDataLoading = statusOffer.isLoading || statusReviews.isLoading || statusNearOffers.isLoading;
  if (areDataLoading || !offer) {
    return <Loader />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>Six cities: offer</title>
      </Helmet>

      <Header hasNavigation />
      <main className="page__main page__main--property">
        <section className="property">
          <Gallery offer={offer} />

          <div className="property__container container">
            <div className="property__wrapper">
              <RoomHeader offer={offer} />
              <RoomInside offer={offer} />
              <Host offer={offer} />
              <RoomReviews reviews={reviews} />
            </div>
          </div>

          <Map
            className="property__map"
            offers={[...offersNearBy, offer] }
            activePointId={offer.id}
          />
        </section>

        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <div className="near-places__list places__list">
              <OfferList className="near-places__card" offers={offersNearBy} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
