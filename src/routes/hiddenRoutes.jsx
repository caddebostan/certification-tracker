import AddmisionsForm from '../views/addmisions/container/addmisionsFormContainer';
import PlaningForm from '../views/planing/view/planingFormView';
import { ResearchListStep } from '../views/research';

const hiddenRoutes = [
  {
    path: '/admin/basvurular/form',
    component: AddmisionsForm,
  },
  {
    path: '/admin/planlama/form',
    component: PlaningForm,
  },
  {
    path: '/admin/tetkikler/select',
    component: ResearchListStep,
  },
];

export default hiddenRoutes;
