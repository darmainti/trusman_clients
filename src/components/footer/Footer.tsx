import { FooterData } from './Footer.constant';
const Fade = require('react-reveal/Fade');

export default function Footer() {
  return (
    <footer className='footer_area footer_area h_footer_dark pos_footer_area security_footer_area'>
      <img
        className='leaf_left'
        src={require('../../img/pos/leaf-left.png')}
        alt=''
      />
      <img
        className='leaf_right'
        src={require('../../img/pos/leaf-right.png')}
        alt=''
      />
      <div className='container'>
        <div className='row'>
          <Fade effect='fadeInLeft' duration={500} key={1}>
            <div className='col-lg-3 col-sm-6'>
              <div
                className='f_widget dark_widget company_widget'
                data-wow-delay='0.2s'
              >
                <a href='index.html' className='f-logo'>
                  <img
                    src={require('../../img/trusman_global_investama_w.png')}
                    alt=''
                    width={200}
                  />
                </a>
                <p>© 2022 - PT. Trusman Global Investama.</p>
                <div className='f_social_icon'>
                  {FooterData.socialIcon.map((item) => {
                    return (
                      <a href='/' key={item.id}>
                        <i className={item.icon}></i>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </Fade>
          {FooterData.AboutWidget.map((widget) => {
            return (
              <Fade effect='fadeInLeft' duration={500} key={widget.id}>
                <div className='col-lg-3 col-sm-6'>
                  <div className='f_widget dark_widget about-widget pl_70'>
                    <h3 className='f-title f_500 t_color f_size_18 mb_40'>
                      {widget.title}
                    </h3>
                    <div className='desc_footer'>{widget.description}</div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
        <div className='pos_footer_bottom justify-content-between d-flex align-items-end'>
          <img
            className='pos_women'
            src={require('../../img/pos/women.png')}
            alt=''
          />
          <img src={require('../../img/pos/people.png')} alt='' />
          <img
            className='pos_women'
            src={require('../../img/pos/man.png')}
            alt=''
          />
        </div>
      </div>
      <svg className='wave_shap' xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.302'
          fill='rgb(73, 69, 140)'
          d='M22.990,11.999 C22.990,11.999 -62.334,196.188 102.000,90.998 C236.033,5.204 349.217,18.152 512.000,80.998 C773.380,181.909 898.075,49.752 1051.000,15.998 C1316.369,-42.574 1488.518,78.268 1581.000,112.999 C1783.485,189.036 1942.990,61.999 1942.990,61.999 L1942.990,211.999 L22.990,211.999 L22.990,11.999 Z'
        />
      </svg>
    </footer>
  );
}
