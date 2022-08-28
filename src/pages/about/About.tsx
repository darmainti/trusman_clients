import BreadCrumb from '../../components/bread_crumb/BreadCrumb';
import BussinessPartner from '../../components/bussiness_partner/BussinessPartner';
import { CustomNavbar } from '../../components/custom_navbar/CustomNavbar';
import { SubCompany } from '../../components/sub_company/SubCompany';
import { SubCompanyData } from '../../components/sub_company/SubCompany.constant';

export const About = () => {
  return (
    <div className='body_wrapper'>
      <CustomNavbar slogo='sticky_logo' mClass='menu_four' nClass='w_menu' />
      <BreadCrumb
        breadcrumbClass='breadcrumb_area'
        imgName='breadcrumb/banner_bg.png'
        title='Tentang Trusman'
        description='Trusman berinvestasi di perusahaan yang kreatif dan berinovasi serta berorientasi maju yang memiliki potensi  pertumbuhan tinggi di Indonesia
              Trusman adalah perusahaan investasi yang kuat dalam mengidentifikasi, memanage, dan mengembangkan serta menciptakan nilai lebih
              di perusahaan-perusahaan yang kami investasikan'
      />
      <SubCompany data={SubCompanyData.data} />
      <BussinessPartner pClass='partner_logo_area_five bg_color' />
    </div>
  );
};
