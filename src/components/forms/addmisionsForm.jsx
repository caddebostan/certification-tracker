import React from "react";
import { Grid, InputLabel, } from "material-ui";

import {
  Button,
  CustomInput,
  ItemGrid
} from "../../components";

function AddmisionsForm({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={5}>
          <CustomInput
            labelText="Sirket Adi (disabled)"
            id="company-disabled"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              disabled: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={3}>
          <CustomInput
            labelText="Ad"
            id="username"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Email"
            id="email-address"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Adi"
            id="first-name"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Soy adi"
            id="last-name"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Sehir"
            id="city"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Ulke"
            id="country"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Postal Code"
            id="postal-code"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <InputLabel style={{ color: "#AAAAAA" }}>
            About me
          </InputLabel>
          <CustomInput
            labelText="Lorem ipsum dol amor"
            id="about-me"
            formControlProps={{
              fullWidth: true
            }}
            inputProps={{
              multiline: true,
              rows: 5
            }}
          />
        </ItemGrid>
      </Grid>
    </div>
  );
}

export default AddmisionsForm;
