import AddmisionsForm from '../views/addmisions/container/addmisionsFormContainer';

const hiddenRoutes = [
  {
    path: '/basvuru',
    component: AddmisionsForm,
  },
  { redirect: true, path: '/', to: '/basvuru', navbarName: 'Redirect' },
];

export default hiddenRoutes;
