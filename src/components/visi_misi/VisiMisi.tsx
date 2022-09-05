import React from 'react';
import VisiMisiItem from './VisiMisiItem';

export default function VisiMisi() {
  return (
    <section className='software_featured_area'>
      <div className='container'>
        <h2
          className='f_600 f_size_30 t_color3 text-center l_height40 mb_70 wow fadeInUp'
          data-wow-delay='0.3s'
        >
          Visi Misi Trusman
        </h2>
        <div className='software_featured_info'>
          <VisiMisiItem
            icon='icon1.png'
            sTitle='Visi'
            Sp='Menjadi perusahaan di Indonesia kelas global dengan
            prinsip profesionalisme dan korporasi yang kuat.'
          />
          <VisiMisiItem
            icon='icon3.png'
            sTitle='Misi'
            Sp='menjadi mitra pertumbuhan dan kemajuan investor aktif
            dalam ekonomi global. Mengembangkan usaha mitra melalui akses kapitalisasi (Investasi) global, Pengembangan usaha hingga level internasional, melalui pengelolaan keuangan yang profesional dan jaringan pemasaran yang luas, dan Pengembangan usaha yang didukung dengan modernisasi teknologi yang terintegrasi secara global. '
          />
        </div>
      </div>
    </section>
  );
}
