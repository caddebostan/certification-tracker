import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { required } from '../../utilities/validation';

import { ReduxFormInput, ReduxFormSelect, ItemGrid } from '../../components';

// eslint-disable-next-line
function AddmisionsForm({ ...props }) {
  return (
    <div>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <h5>
            <b>12.12.1990</b> Tarihli <b>1122434</b> numarali basvuru.
          </h5>
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput name="firmaAdi" labelText="Firma Adı" validate={required} />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput name="firmaAdresi" labelText="Firma Merkez Adresi" />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput name="kapsam" labelText="Kapsam" />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput name="subeadresi" labelText="Sube Adresi" />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={3}>
          <ReduxFormInput name="sebesayisi" labelText="Şebe Sayisi" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormInput
            name="inceleneceksebesayisi"
            labelText="Incelenecek Şebe Sayısı"
            type="number"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormInput name="faksno" labelText="Faks Numarasi" type="number" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormInput name="telefonno" labelText="Telefon Numarasi" type="number" />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput name="email" labelText="E-mail" type="email" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput name="yonetimtemsilcisi" labelText="Yönetim Temsilcisi" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput name="firmayetkilisi" labelText="Firma Yetkilisi" />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput
            name="toplamcalisansayisi"
            labelText="Toplam Çalışan Sayısı"
            type="number"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput
            name="taseroncalisansayisi"
            labelText="Taseron Calisan Sayısı"
            type="number"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput name="yoneticisayisi" labelText="Yonetici Sayısı" type="number" />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput name="vardiyasayisi" labelText="Vardiya Sayısı" type="number" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput
            name="vardiyalicalisansayisi"
            labelText="Vardiyali Çalışan Sayısı"
            type="number"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput
            name="taseroncalisansayisi"
            labelText="Taseron Calisan Sayısı"
            type="number"
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={6} md={6}>
          <ReduxFormInput labelText="STANDART" name="standart" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={6}>
          <ReduxFormInput labelText="STANDART ADI" name="standartadi" />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput labelText="eanacekodlari" name="EA / Nace Kodlari" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput labelText="Tetkik Tipi" name="tetkiktipi" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput labelText="Toplam Adam Gun Suresi" name="toplamadamgunsuresi" />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={6} md={6}>
          <ReduxFormInput labelText="arttirmaazalmagerekcesi" name="Artirma Azalma Gerekcesi" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={6}>
          <ReduxFormInput labelText="Kapsam Dis Maddeler" name="kapsamdismaddeler" />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={6} md={12}>
          <Typography color="textSecondary">RISK GRUBUNU giriniz Ve Isaretleyiniz</Typography>
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormSelect label="En Yuksek Risk" name="enyuksekrist" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormSelect label="Yuksek Risk" name="yuksekrisk" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormSelect label="Orta Risk" name="ortarisk" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormSelect label="Dusuk Risk" name="dusukrisk" />
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={6} md={12}>
          <Typography color="textSecondary">
            Asama 1 Tetkik Bildirim Tarihi burada kaldim NOTE:::::{' '}
          </Typography>
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={6}>
          <ReduxFormInput
            name="firmaDanisman"
            labelText="Firma veya Danışman"
            helpText="(Danışmanlık Hizmeti Alındıysa)"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={12}>
          <ReduxFormSelect label="Ön Tetkik Talep Ediliyor" name="onTetkikTalep" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput
            name="onTetkikTarihi"
            labelText="Talep edilen Ön Tetkik Tarihi"
            type="number"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput
            name="1AsamaTetkikTarihi"
            labelText="Talep Edilen 1. Aşama Tetkik Tarihi"
            type="number"
            helpText="(Talep Ediliyorsa)"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput
            name="2AsamaTetkikTarihi"
            labelText="Talep Edilen 2. Aşama Tetkik Tarihi"
            type="number"
            helpText="(Talep Ediliyorsa)"
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="standartHaricTutulmalar"
            labelText="Standart Hariç Tutmalar Var mı? Hangi Maddeler?"
            helpText="Maddeleri Yaziniz."
            inputProps={{
              multiline: true,
              rows: 5,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="ruhsatBelgeleri"
            labelText="Resmi Kuruluşlardan Almış Olduğunuz İzin/ruhsat Belgeleri Varsa Belirtiniz."
            helpText="İlgili Yasal Şartlar"
            inputProps={{
              multiline: true,
              rows: 5,
            }}
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="yonetimSistemiHazirliklari"
            labelText="Talep Edilen Yönetim Sistemi Hazırlıkları"
            helpText="(El kitabı, YGG, içtetkik tarihleri vb.)"
            inputProps={{
              multiline: true,
              rows: 5,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="faaliyetKapsami"
            labelText="Belgelendirme Faaliyet Kapsamı"
            inputProps={{
              multiline: true,
              rows: 5,
            }}
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="faaliyetAlanlari"
            labelText="Belgelendirme Kapsamındaki faaliyet alanları, departmanlar, süreçler, Ana Ürünler/hizmetler, Ana Hammaddeler"
            helpText="(El kitabı, YGG, içtetkik tarihleri vb.)"
            inputProps={{
              multiline: true,
              rows: 5,
            }}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="disKaynakliProsesler"
            labelText="Varsa, Dış Kaynaklı Prosesler"
            inputProps={{
              multiline: true,
              rows: 5,
            }}
          />
        </ItemGrid>
      </Grid>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput
            name="not"
            labelText="Not"
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

export default reduxForm({
  form: 'AddmisionsForm',
})(connect()(AddmisionsForm));
