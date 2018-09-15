import AddmisionsForm from '../views/addmisions/container/addmisionsFormContainer';
import Login from '../views/login';

const hiddenRoutes = [
  {
    path: '/basvuru',
    component: AddmisionsForm,
  },
  {
    path: '/login',
    component: Login,
  },
  { redirect: true, path: '/', to: '/basvuru', navbarName: 'Redirect' },
];

export default hiddenRoutes;
