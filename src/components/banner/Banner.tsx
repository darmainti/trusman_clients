import React from 'react';

const Fade = require('react-reveal/Fade');

export const Banner = () => {
  return (
    <section className='agency_banner_area_two'>
      <div className='dot_shap one'></div>
      <div className='dot_shap two'></div>
      <div className='dot_shap three'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <Fade left>
              <img
                className='agency_banner_img'
                src={require('../../img/home8/banner_img.png')}
                alt=''
              />
            </Fade>
          </div>
          <div className='col-lg-5 offset-lg-1 d-flex align-items-center'>
            <Fade bottom cascade>
              <div className='agency_content_two'>
                <h2 className='f_700 f_size_30 l_height50 w_color mb_20'>
                  Visi : menjadi perusahaan di Indonesia kelas global dengan
                  prinsip profesionalisme dan korporasi yang kuat
                </h2>
                <p className='f_400 w_color l_height28'>
                  Misi : menjadi mitra pertumbuhan dan kemajuan investor aktif
                  dalam ekonomi global
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};
