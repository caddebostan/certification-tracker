import AddmisionsForm from '../views/addmisions/container/addmisionsFormContainer';
import PlaningForm from '../views/planing/view/planingFormView';
import Login from '../views/login';
import { ResearchListStep } from '../views/research';

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
  {
    path: '/research/select',
    component: ResearchListStep,
  },
];

export default hiddenRoutes;
