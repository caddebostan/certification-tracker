import {
  Dashboard,
  List,
  LibraryBooks,
  SupervisorAccount,
  Receipt,
  InsertDriveFile,
  Assignment,
  Description,
} from '@material-ui/icons';

import DashboardPage from '../views/dashboard/dashboard';
import Planing from '../views/planing/view/planingView';
import Addmisions from '../views/addmisions/container/addmisionsListContainer';
import Examination from '../views/typography/typography';
import Icons from '../views/icons/icons';
import Maps from '../views/maps/maps';
import Document from '../views/document/view/documentView';

const dashboardRoutes = [
  {
    path: '/admin/dashboard',
    sidebarName: 'Özet',
    navbarName: 'Özet',
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: '/admin/basvurular',
    sidebarName: 'Basvurular',
    navbarName: 'Basvurular',
    icon: List,
    component: Addmisions,
  },
  {
    path: '/admin/planlama',
    sidebarName: 'Planlama',
    navbarName: 'Planlama',
    icon: Assignment,
    component: Planing,
  },
  {
    path: '/admin/tetkikler',
    sidebarName: 'Tetkikler',
    navbarName: 'Tetkikler',
    icon: LibraryBooks,
    component: Examination,
  },
  {
    path: '/admin/belge',
    sidebarName: 'Belge',
    navbarName: 'Belge',
    icon: Description,
    component: Icons,
  },
  {
    path: '/admin/ucret',
    sidebarName: 'Ucret Takip',
    navbarName: 'Ucret Takip',
    icon: Receipt,
    component: Maps,
  },
  {
    path: '/admin/denetci',
    sidebarName: 'Denetci Performans',
    navbarName: 'Denetci Performans',
    icon: SupervisorAccount,
    component: Document,
  },
  {
    path: '/admin/dokumanlar',
    sidebarName: 'Dokumanlar',
    navbarName: 'Dokumanlar',
    icon: InsertDriveFile,
    component: Document,
  },
  { redirect: true, path: '/admin', to: '/admin/dashboard', navbarName: 'Redirect' },
];

export default dashboardRoutes;
