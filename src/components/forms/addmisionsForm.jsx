import React from "react";
import { Grid, InputLabel, TextField, MenuItem, Typography, Checkbox } from "material-ui";

import { CustomInput, ItemGrid, CustomSelect } from '../../components';

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
              fullWidth: true,
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
              fullWidth: true,
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
              fullWidth: true,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Yönetim Temsilcisi Adı Soyadı"
            id="first-name"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <CustomInput
            labelText="Firma Yetkilisi Adı/Soyadı"
            id=""
            formControlProps={{
              fullWidth: true,
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
              fullWidth: true,
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
              fullWidth: true,
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
              fullWidth: true,
            }}
          />
          <InputLabel style={inputDescriptionStyle}>
            (Şube / Geçici Saha / Şantiye)
          </InputLabel>
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={6} md={12}>
          <Typography color="textSecondary">
          Tetkik Edilecek Standart (Talep Edilen Belge Standartı)
          </Typography>
        </ItemGrid>

        <ItemGrid xs={12} sm={6} md={3}>
        <CustomSelect
          label="ISO 9001 - ISO 14001"
          value="ISO 9001 ISO 14001"
          formControlProps={{
            fullWidth: true,
          }}
        />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
        <CustomSelect
          label="OHSAS 18001 - ISO 22000"
          value=""
          formControlProps={{
            fullWidth: true,
          }}
        />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
        <CustomSelect
          label="SO 13485 - ISO 27001"
          value=""
          formControlProps={{
            fullWidth: true,
          }}
        />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
        <CustomSelect
          label=" ISO 10002 SA 8000"
          value=""
          formControlProps={{
            fullWidth: true,
          }}
        />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <CustomInput
              labelText="Varsa diger talep edilen belgeler."
              id="postal-code"
              formControlProps={{
                fullWidth: true
              }}
            />
        </ItemGrid>
      </Grid> 

      <Grid container>
        <ItemGrid xs={12} sm={6} md={12}>
          <Typography color="textSecondary">
            Firmanın Sistem Entegreasyon Düzeyi
          </Typography>
        </ItemGrid>

        <ItemGrid xs={12} sm={6} md={4}>
          <CustomSelect
            label="İçtetkik YGG toplantı uygulamaları entegre"
            value="firma-option-1"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomSelect
            label="Sistem Yönetim Temsilcisi Ortak "
            value=""
            formControlProps={{
              fullWidth: true,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomSelect
            label="El Kitapları Entegre"
            value=""
            formControlProps={{
              fullWidth: true,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomSelect
            label="Sistem Prosesleri entegre"
            value=""
            formControlProps={{
              fullWidth: true,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomSelect
            label="İş Talimatları Entegre"
            value=""
            formControlProps={{
              fullWidth: true,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomSelect
            label="İyileştirme Dokümanları Entegre "
            value=""
            formControlProps={{
              fullWidth: true,
            }}
          />
        </ItemGrid>
      </Grid> 

      <Grid container>
        <ItemGrid xs={12} sm={6} md={12}>
          <Typography color="textSecondary">
            Firmanın Sistem Entegreasyon Düzeyi
          </Typography>
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={6}>
          <CustomInput
              labelText="Firma veya Danışman"
              id=""
              formControlProps={{
                fullWidth: true
              }}
          />
          <InputLabel style={inputDescriptionStyle}>
            (Danışmanlık Hizmeti Alındıysa)
          </InputLabel>
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={12}>
          <CustomSelect
            label="Ön Tetkik Talep Ediliyor"
            value="1"
            formControlProps={{
              fullWidth: false,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomInput
            labelText="Talep edilen Ön Tetkik Tarihi"
            value="2"
            type="number"
            formControlProps={{
              fullWidth: true,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomInput
            labelText="Talep Edilen 1. Aşama Tetkik Tarihi:"
            value="3"
            type="number"
            formControlProps={{
              fullWidth: true,
            }}
          />
          <InputLabel style={inputDescriptionStyle}>
            (Talep Ediliyorsa)
          </InputLabel>
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <CustomInput
            labelText="Talep Edilen 2. Aşama Tetkik Tarihi:"
            value="5"
            type="number"
            formControlProps={{
              fullWidth: true,
            }}
          />
          <InputLabel style={inputDescriptionStyle}>
            (Talep Ediliyorsa)
          </InputLabel>
        </ItemGrid>
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
        <ItemGrid xs={12} sm={12} md={12}>
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
              fullWidth: true,
            }}
            inputProps={{
              multiline: true,
              rows: 5,
            }}
          />
        </ItemGrid>
      </Grid> 
    </div>
  );
}

export default AddmisionsForm;
