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
import UserProfile from '../views/userProfile/userProfile';
import AddmisionsList from '../views/addmisions/addmisionsList/addmisionsList';
import Typography from '../views/typography/typography';
import Icons from '../views/icons/icons';
import Maps from '../views/maps/maps';
import NotificationsPage from '../views/notifications/notifications';

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
    component: AddmisionsList,
  },
  {
    path: '/planlama',
    sidebarName: 'Planlama',
    navbarName: 'Planlama',
    icon: Assignment,
    component: UserProfile,
  },
  {
    path: '/tetkikler',
    sidebarName: 'Tetkikler',
    navbarName: 'Tetkikler',
    icon: LibraryBooks,
    component: Typography,
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
    component: NotificationsPage,
  },
  {
    path: '/dokumanlar',
    sidebarName: 'Dokumanlar',
    navbarName: 'Dokumanlar',
    icon: InsertDriveFile,
    component: NotificationsPage,
  },
  { redirect: true, path: '/', to: '/dashboard', navbarName: 'Redirect' },
];

export default dashboardRoutes;
