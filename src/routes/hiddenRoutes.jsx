import AddmisionsForm from '../views/addmisions/view/addmisionsFormView';
import PlaningForm from '../views/planing/view/planingFormView';

const hiddenRoutes = [
  {
    path: '/basvurular/form',
    component: AddmisionsForm,
  },
  {
    path: '/planlama/form',
    component: PlaningForm,
  },
];

export default hiddenRoutes;
