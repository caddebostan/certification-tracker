import {
  Dashboard,
  List,
  LibraryBooks,
  SupervisorAccount,
  Receipt,
  InsertDriveFile,
  Assignment,
  Description,
  PersonAdd,
} from '@material-ui/icons';

import DashboardPage from '../views/dashboard/dashboard';
import Planing from '../views/planing/view/planingView';
import Addmisions from '../views/addmisions/container/addmisionsContainer';
import Examination from '../views/typography/typography';
import Icons from '../views/icons/icons';
import Maps from '../views/maps/maps';
import Document from '../views/document/view/documentView';
import UserCreate from '../views/userCreate';
import Research from '../views/research';

const dashboardRoutes = [
  {
    path: '/dashboard',
    sidebarName: 'Özet',
    navbarName: 'Özet',
    icon: Dashboard,
    component: DashboardPage,
  },
  {
    path: '/basvurular',
    sidebarName: 'Basvurular',
    navbarName: 'Basvurular',
    icon: List,
    component: Addmisions,
  },
  {
    path: '/planlama',
    sidebarName: 'Planlama',
    navbarName: 'Planlama',
    icon: Assignment,
    component: Planing,
  },
  {
    path: '/tetkikler',
    sidebarName: 'Tetkikler',
    navbarName: 'Tetkikler',
    icon: LibraryBooks,
    component: Research,
  },
  {
    path: '/texts',
    sidebarName: 'Texts',
    navbarName: 'Texts',
    icon: LibraryBooks,
    component: Examination,
  },
  {
    path: '/belge',
    sidebarName: 'Belge',
    navbarName: 'Belge',
    icon: Description,
    component: Icons,
  },
  {
    path: '/ucret',
    sidebarName: 'Ucret Takip',
    navbarName: 'Ucret Takip',
    icon: Receipt,
    component: Maps,
  },
  {
    path: '/denetci',
    sidebarName: 'Denetci Performans',
    navbarName: 'Denetci Performans',
    icon: SupervisorAccount,
    component: Document,
  },
  {
    path: '/dokumanlar',
    sidebarName: 'Dokumanlar',
    navbarName: 'Dokumanlar',
    icon: InsertDriveFile,
    component: Document,
  },
  {
    path: '/kullanici-yarat',
    sidebarName: 'Kullanici Yarat',
    navbarName: 'Kullanici Yarat',
    icon: PersonAdd,
    component: UserCreate,
  },
  { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' },
];

export default dashboardRoutes;
