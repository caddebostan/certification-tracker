import React from "react";
import { Grid, InputLabel, TextField, MenuItem } from "material-ui";

import {
  Button,
  CustomInput,
  ItemGrid
} from "../../components";

const inputDescriptionStyle = {
  color: "#cbcbcb",
  fontSize: '11px',
}

const selectData = [
  {
    value: '1',
    label: 'ISO 9001',
  },
  {
    value: '2',
    label: 'OHSAS 18001',
  },
  {
    value: '3',
    label: 'ISO 13485',
  },
  {
    value: '4',
    label: 'ISO 10002',
  },
];

function AddmisionsForm({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Firma Adı "
            id="company-disabled"
            formControlProps={{
              fullWidth: true
            }}
            // inputProps={{
            //   disabled: true
            // }}
          />
          <InputLabel style={inputDescriptionStyle}>
            (Varsa Bağlı olduğu Kuruluş) (Ticaret Sicil Gazetesi’ndeki)
          </InputLabel>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
            labelText="Firma Merkez Adresi"
            id="username"
            formControlProps={{
              fullWidth: true
            }}
          />
          <InputLabel style={inputDescriptionStyle}>
            (Ticaret Sicili Gazetesi’ndeki)
          </InputLabel>
        </ItemGrid>

      </Grid>

      <Grid container>
      <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Gerçekleştirilen Faaliyet"
            id="postal-code"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Yönetim Temsilcisi Adı Soyadı"
            id="first-name"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Firma Yetkilisi Adı/Soyadı"
            id=""
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
      </Grid>

      <Grid container>
      <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Telefon"
            id="last-name"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Faks"
            id="city"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Web Adresi / E-mail"
            id="city"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
      </Grid>

    <Grid container>      
      <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput
            labelText="Adres"
            id="country"
            formControlProps={{
              fullWidth: true
            }}
          />
          <InputLabel style={inputDescriptionStyle}>
            (Şube / Geçici Saha / Şantiye / Uygulama Adresi)
          </InputLabel>
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={6} md={3}>
          <CustomInput
            labelText="Toplam Çalışan Sayısı"
            id="city"
            type="number"            
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <CustomInput
            labelText="Yönetici Sayısı"
            id="country"
            type="number"            
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <CustomInput
            labelText="Vardiya Sayısı"
            id="postal-code"
            type="number"            
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <CustomInput
            labelText="Vardiya Çalışan Sayısı"
            id="postal-code"
            type="number"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomInput
            labelText="Vardiya Çalışan Sayısı"
            id="postal-code"
            type="number"
            formControlProps={{
              fullWidth: true
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomInput
            labelText="Uygulama Alanı Sayısı"
            id="postal-code"
            type="number"
            formControlProps={{
              fullWidth: true
            }}
          />
          <InputLabel style={inputDescriptionStyle}>
            (Şube / Geçici Saha / Şantiye)
          </InputLabel>
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomInput
            labelText="Uygulama Alanı Çalışan Sayısı"
            id="postal-code"
            type="number"
            formControlProps={{
              fullWidth: true
            }}
          />
          <InputLabel style={inputDescriptionStyle}>
            (Şube / Geçici Saha / Şantiye)
          </InputLabel>
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={12} md={3}>
          <TextField
            id="select-currency"
            select
            label="Tetkik Edilecek Standart"
            value="asd"
            helperText="(Talep Edilen Belge Standartı)"
            margin="normal"
          >
          {selectData.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
            ))}
          </TextField>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
              labelText="Diger"
              id="postal-code"
              formControlProps={{
                fullWidth: true
              }}
            />
        </ItemGrid>
      </Grid> 

      <Grid container>
        <InputLabel style={[{color: "#cbcbcb"}]}>
          {/* Firmanın Sistem Entegreasyon Düzeyi */}
        </InputLabel>
      </Grid> 


      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
              labelText="Standart Hariç Tutmalar Var mı? Hangi Maddeler?"
              id="postal-code"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                multiline: true,
                rows: 5
              }}
            />
          <InputLabel style={inputDescriptionStyle}>
            Maddeleri Yaziniz.
          </InputLabel>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
              labelText="Resmi Kuruluşlardan Almış Olduğunuz İzin/ruhsat Belgeleri Varsa Belirtiniz."
              id="postal-code"
              inputProps={{
                multiline: true,
                rows: 5
              }}
              formControlProps={{
                fullWidth: true
              }}
            />
          <InputLabel style={inputDescriptionStyle}>
            İlgili Yasal Şartlar 
          </InputLabel>
        </ItemGrid>
      </Grid> 

      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
              labelText="Talep Edilen Yönetim Sistemi Hazırlıkları"
              id="postal-code"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                multiline: true,
                rows: 5
              }}
            />
          <InputLabel style={inputDescriptionStyle}>
          (El kitabı, YGG, içtetkik tarihleri vb.)
          </InputLabel>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
              labelText="Belgelendirme Faaliyet Kapsamı"
              id="postal-code"
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


      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
              labelText="Belgelendirme Kapsamındaki faaliyet alanları, departmanlar, süreçler, Ana Ürünler/hizmetler, Ana Hammaddeler"
              id="postal-code"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                multiline: true,
                rows: 5
              }}
            />
          <InputLabel style={inputDescriptionStyle}>
          (El kitabı, YGG, içtetkik tarihleri vb.)
          </InputLabel>
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
              labelText="Varsa, Dış Kaynaklı Prosesler"
              id="postal-code"
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

      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <CustomInput
              labelText="Belgelendirme Kapsamındaki faaliyet alanları, departmanlar, süreçler, Ana Ürünler/hizmetler, Ana Hammaddeler"
              id="postal-code"
              formControlProps={{
                fullWidth: true
              }}
              inputProps={{
                multiline: true,
                rows: 5
              }}
            />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput
            labelText="Not"
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
