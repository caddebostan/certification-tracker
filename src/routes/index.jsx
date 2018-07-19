import Dashboard from '../layouts/dashboard/dashboard';
import ExternalAddmision from '../layouts/global/externalAddmision';

const indexRoutes = [
  { path: '/admin', component: Dashboard },
  { path: '/', component: ExternalAddmision },
];

export default indexRoutes;
