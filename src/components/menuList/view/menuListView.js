import React from 'react';
import { Link } from 'react-router-dom';

import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {
  Home,
  AccountBalanceWallet,
  CompareArrows,
  History,
  Settings,
  InfoOutline,
  ExitToApp,
  CardGiftcard,
} from '@material-ui/icons';

export const MenuListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Anasayfa" />
      </ListItem>
    </Link>

    <Link search="sa" to="/">
      <ListItem button>
        <ListItemIcon>
          <AccountBalanceWallet />
        </ListItemIcon>
        <ListItemText primary="Basvurular" />
      </ListItem>
    </Link>

    <Link to="/pageone">
      <ListItem button>
        <ListItemIcon>
          <CompareArrows />
        </ListItemIcon>
        <ListItemText primary="Surec" />
      </ListItem>
    </Link>

    <Link to="/wallet/history">
      <ListItem button>
        <ListItemIcon>
          <History />
        </ListItemIcon>
        <ListItemText primary="Yonetim" />
      </ListItem>
    </Link>

    <Link to="/wallet/settings">
      <ListItem button>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Onay" />
      </ListItem>
    </Link>
  </div>
);

export const UnderMenuListItems = (
  <div>
    <Link to="/wallet/support">
      <ListItem button>
        <ListItemIcon>
          <InfoOutline />
        </ListItemIcon>
        <ListItemText primary="Yardim" />
      </ListItem>
    </Link>

    <Link to="/wallet/invite">
      <ListItem button>
        <ListItemIcon>
          <CardGiftcard />
        </ListItemIcon>
        <ListItemText primary="Destek" />
      </ListItem>
    </Link>

    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <ExitToApp />
        </ListItemIcon>
        <ListItemText primary="Log Out" />
      </ListItem>
    </Link>
  </div>
);
