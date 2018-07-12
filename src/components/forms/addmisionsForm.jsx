import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import { required } from '../../utilities/validation';

import { ReduxFormInput, ReduxFormSelect, ItemGrid } from '../../components';

// eslint-disable-next-line
function AddmisionsForm({ handleSubmit, onSubmit, ...props }) {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="firmaAdi"
            labelText="Firma Adı"
            helpText="(Varsa Bağlı olduğu Kuruluş) (Ticaret Sicil Gazetesi’ndeki)"
            validate={required}
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={6}>
          <ReduxFormInput
            name="firmaAdresi"
            labelText="Firma Merkez Adresi"
            helpText="(Ticaret Sicili Gazetesi’ndeki)"
          />
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={12} md={4}>
          <ReduxFormInput name="faaliyet" labelText="Gerçekleştirilen Faaliyet" />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ReduxFormInput name="temsilciAdi" labelText="Yönetim Temsilcisi Adı Soyadı" />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ReduxFormInput name="yetkiliAdi" labelText="Firma Yetkilisi Adı/Soyadı" />
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={12} md={4}>
          <ReduxFormInput name="telefon" labelText="Telefon" />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ReduxFormInput name="faks" labelText="Faks" />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={4}>
          <ReduxFormInput name="webAdresi" labelText="Web Adresi / E-mail" />
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput
            name="adres"
            labelText="Adres"
            helpText="(Şube / Geçici Saha / Şantiye / Uygulama Adresi)"
          />
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormInput name="calisanSayisi" labelText="Toplam Çalışan Sayısı" type="number" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormInput name="yoneticiSayisi" labelText="Yönetici Sayısı" type="number" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormInput name="vardiyaSayisi" labelText="Vardiya Sayısı" type="number" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormInput
            name="vardiyaCalisanSayisi"
            labelText="Vardiya Çalışan Sayısı"
            type="number"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput
            name="uygulamaAlaniSayisi"
            labelText="Uygulama Alanı Sayısı"
            type="number"
            helpText="(Şube / Geçici Saha / Şantiye)"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormInput
            name="uygulamaAlaniCalisanSayisi"
            labelText="Uygulama Alanı Çalışan Sayısı"
            type="number"
            helpText="(Şube / Geçici Saha / Şantiye)"
          />
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={6} md={12}>
          <Typography color="textSecondary">
            Tetkik Edilecek Standart (Talep Edilen Belge Standartı)
          </Typography>
        </ItemGrid>

        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormSelect label="ISO 9001 - ISO 14001" name="ISO9001ISO14001" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormSelect label="OHSAS 18001 - ISO 22000" name="OHSAS18001ISO22000" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormSelect label="SO 13485 - ISO 27001" name="SO13485ISO27001" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={3}>
          <ReduxFormSelect label="ISO 10002 SA 8000" name="ISO10002SA8000" />
        </ItemGrid>
        <ItemGrid xs={12} sm={12} md={12}>
          <ReduxFormInput name="digerBelgeler" labelText="Varsa diger talep edilen belgeler" />
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={6} md={12}>
          <Typography color="textSecondary">Firmanın Sistem Entegreasyon Düzeyi</Typography>
        </ItemGrid>

        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormSelect
            label="İçtetkik YGG toplantı uygulamaları entegre"
            name="yggToplantiUygulamari"
          />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormSelect label="Sistem Yönetim Temsilcisi Ortak" name="sistemYonetimTemsilcisi" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormSelect label="El Kitapları Entegre" name="elKitaplariEntegre" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormSelect label="Sistem Prosesleri entegre" name="sistemProsesleriEntegre" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormSelect label="İş Talimatları Entegre" name="isTalimatlariEntegre" />
        </ItemGrid>
        <ItemGrid xs={12} sm={6} md={4}>
          <ReduxFormSelect
            label="İyileştirme Dokümanları Entegre"
            name="iyilestirmeDokumanlariEntegre"
          />
        </ItemGrid>
      </Grid>

      <Grid container>
        <ItemGrid xs={12} sm={6} md={12}>
          <Typography color="textSecondary">Firmanın Sistem Entegreasyon Düzeyi</Typography>
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
    </form>
  );
}

export default reduxForm({
  form: 'AddmisionsForm',
})(connect()(AddmisionsForm));
