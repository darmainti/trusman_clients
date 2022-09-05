import React from 'react';
import FooterData from '../footer/Footer.constant';

export default function ContactUs() {
  return (
    <section className='contact_info_area sec_pad bg_color'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='contact_info_item'>
              <h6 className='f_p f_size_20 t_color3 f_500 mb_20'>
                Alamat kantor
              </h6>
              <p className='f_400 f_size_15'>
                {FooterData.AboutWidget[2].description}
              </p>
            </div>
            <div className='contact_info_item'>
              <h6 className='f_p f_size_20 t_color3 f_500 mb_20'>
                Contact Info
              </h6>
              <p className='f_400 f_size_15'>
                <span className='f_400 t_color3'>
                  {FooterData.AboutWidget[1].title}:
                </span>{' '}
                <a href='tel:3024437488'>
                  {FooterData.AboutWidget[1].description}
                </a>
              </p>
              <p className='f_400 f_size_15'>
                <span className='f_400 t_color3'>
                  {FooterData.AboutWidget[0].title}:
                </span>{' '}
                <a href='mailto:saasland@gmail.com'>
                  {FooterData.AboutWidget[0].description}
                </a>
              </p>
            </div>
          </div>
          <div className='contact_form col-lg-9'>
            <h2 className='f_p f_size_22 t_color3 f_600 l_height28 mb_40'>
              Tinggalkan pesan disini
            </h2>
            <form
              onSubmit={() => {}}
              className='contact_form_box'
              method='post'
              id='contactForm'
            >
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='form-group text_box'>
                    <input
                      type='text'
                      id='name'
                      name='name'
                      placeholder='Nama'
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='form-group text_box'>
                    <input
                      type='text'
                      name='email'
                      id='email'
                      placeholder='Email'
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='form-group text_box'>
                    <input
                      type='text'
                      id='subject'
                      name='subject'
                      placeholder='Judul pesan'
                      onChange={() => {}}
                    />
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div className='form-group text_box'>
                    <textarea
                      onChange={() => {}}
                      name='message'
                      id='message'
                      cols={30}
                      rows={10}
                      placeholder='Ketik pesan disni . . .'
                    ></textarea>
                  </div>
                </div>
              </div>
              <button type='submit' className='btn_three'>
                Kirim Pesan
              </button>
            </form>
            {/* {emailStatus ? emailStatus : null} */}
            <div id='success'>Your message succesfully sent!</div>
            <div id='error'>
              Opps! There is something wrong. Please try again
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
