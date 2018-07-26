import AddmisionsForm from '../views/addmisions/view/addmisionsFormView';
import PlaningForm from '../views/planing/view/planingFormView';
import OfferForm from '../views/offer/view/offerFormView';
import Login from '../views/login';

const hiddenRoutes = [
  {
    path: '/basvurular/form',
    component: AddmisionsForm,
  },
  {
    path: '/planlama/form',
    component: PlaningForm,
  },
  {
    path: '/teklifler/form',
    component: OfferForm,
  },

  {
    path: '/login',
    component: Login,
  },
];

export default hiddenRoutes;
