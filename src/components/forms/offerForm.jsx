import React from 'react';
import { Grid,
   Typography, 
   Paper, 
   Table, 
   TableBody, 
   TableCell, 
   TableHead, 
   CustomTableCell, 
   TableRow , 
   List,
   ListItemSecondaryAction,
   ListItem,
   ListItemText} from '@material-ui/core';

import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { required } from '../../utilities/validation';

import { ReduxFormInput, ReduxFormSelect, ItemGrid } from '../../components';

// eslint-disable-next-line
function OfferForm({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="telefon"
            labelText="Telefon Numarası"
            validate={required}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="teklifNo"
            labelText="Teklif No"
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="faks"
            labelText="Telefon Numarası"
            validate={required}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="teklifTarihi"
            labelText="Teklif Tarihi"
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="email"
            labelText="E-posta"
            validate={required}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="kurulusYetkilisi"
            labelText="Kuruluş Yetkilisi"
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput
            name="firmaUnvanı"
            labelText="Firma Ünvanı"
            validate={required}
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput
            name="adres"
            labelText="Adress"
            validate={required}
            multiline={true}
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput
            name="kapsam"
            labelText="Kapsam"
            validate={required}
            multiline={true}
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput
            name="standart"
            labelText="Standart"
            validate={required}
          />
        </ItemGrid>
      </Grid>

       <List>
          {[0, 1, 2, 3].map(value => (
            <ListItem
              key={value}
              role={undefined}
              dense
              button
            >
              <ListItemText primary={`Line item ${value + 1}`} />
              <ListItemSecondaryAction>
                <ReduxFormInput
                  name="standart"
                  labelText="Standart"
                  validate={required}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      

    </div>
  );
}

export default reduxForm({
  form: 'OfferForm',
})(connect()(OfferForm));
