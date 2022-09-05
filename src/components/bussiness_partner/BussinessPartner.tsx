import React from 'react';

type BussinessPartnerProps = {
  pClass: string;
};
export default function BussinessPartner(props: BussinessPartnerProps) {
  return (
    <section className={`${props.pClass}`}>
      <div className='container'>
        <div className='partner_logo_area_four'>
          <h4 className='f_size_18 f_400 f_p text-center l_height28 mb_70'>
            Bisnis Partner PT. Trusman Global Investama
          </h4>
          <div className='row partner_info'>
            <div className='logo_item wow fadeInLeft' data-wow-delay='0.1s'>
              <a href='.#'>
                <img src={require('../../img/home3/logo_01.png')} alt='' />
              </a>
            </div>
            <div className='logo_item wow fadeInLeft' data-wow-delay='0.2s'>
              <a href='.#'>
                <img src={require('../../img/home3/logo_02.png')} alt='' />
              </a>
            </div>
            <div className='logo_item wow fadeInLeft' data-wow-delay='0.3s'>
              <a href='.#'>
                <img src={require('../../img/home3/logo_03.png')} alt='' />
              </a>
            </div>
            <div className='logo_item wow fadeInLeft' data-wow-delay='0.4s'>
              <a href='.#'>
                <img src={require('../../img/home3/logo_04.png')} alt='' />
              </a>
            </div>
            <div className='logo_item wow fadeInLeft' data-wow-delay='0.5s'>
              <a href='.#'>
                <img src={require('../../img/home3/logo_05.png')} alt='' />
              </a>
            </div>
            <div className='logo_item wow fadeInLeft' data-wow-delay='0.6s'>
              <a href='.#'>
                <img src={require('../../img/home3/logo_01.png')} alt='' />
              </a>
            </div>
            <div className='logo_item wow fadeInLeft' data-wow-delay='0.7s'>
              <a href='.#'>
                <img src={require('../../img/home3/logo_04.png')} alt='' />
              </a>
            </div>
            <div className='logo_item wow fadeInLeft' data-wow-delay='0.8s'>
              <a href='.#'>
                <img src={require('../../img/home3/logo_05.png')} alt='' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
