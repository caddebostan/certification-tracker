import AddmisionsForm from '../views/addmisions/container/addmisionsFormContainer';
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
