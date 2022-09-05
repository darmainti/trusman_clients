import BreadCrumb from '../../components/bread_crumb/BreadCrumb';
import ContactUs from '../../components/contact_us/ContactUs';
import { CustomNavbar } from '../../components/custom_navbar/CustomNavbar';

export const Contact = () => {
  return (
    <div className='body_wrapper'>
      <CustomNavbar slogo='sticky_logo' mClass='menu_four' nClass='w_menu' />
      <BreadCrumb
        breadcrumbClass='breadcrumb_area'
        imgName='breadcrumb/banner_bg.png'
        title='Hubungi Kami'
        description='Apabila Anda memiliki pertanyaan, kami ada untuk membantu Anda. Hubungi kami melalui call center atau Anda dapat mengirimkan email dengan mengisi form dibawah ini.'
      />
      <ContactUs />
    </div>
  );
};
