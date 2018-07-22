import AddmisionsForm from '../views/addmisions/container/addmisionsFormContainer';
import PlaningForm from '../views/planing/view/planingFormView';
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
    path: '/login',
    component: Login,
  },
];

export default hiddenRoutes;
