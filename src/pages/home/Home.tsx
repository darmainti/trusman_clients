import AboutCompany from '../../components/about_company/AboutCompany';
import { Banner } from '../../components/banner/Banner';
import { CustomNavbar } from '../../components/custom_navbar/CustomNavbar';
import { SubCompany } from '../../components/sub_company/SubCompany';
import { SubCompanyData } from '../../components/sub_company/SubCompany.constant';
import TeamCompany from '../../components/team_company/TeamCompany';
import { TeamCompanyData } from '../../components/team_company/TeamCompany.constant';

export const Home = () => {
  return (
    <div>
      <CustomNavbar slogo='sticky_logo' mClass='menu_four' nClass='w_menu' />
      <Banner />
      <SubCompany data={SubCompanyData.data} />
      <AboutCompany
        fclass='fun_fact_area_two'
        tclass='t_color3'
        ftitle='Perusahaan Berwawasan Kedepan'
        fsubtitle='Tentang Trusman'
        fdescription='Trusman berinvestasi di perusahaan yang kreatif dan berinovasi serta berorientasi maju yang memiliki potensi  pertumbuhan tinggi di Indonesia Trusman adalah perusahaan investasi yang kuat dalam mengidentifikasi, memanage, dan mengembangkan serta menciptakan nilai lebih di perusahaan-perusahaan yang kami investasikan.'
      />
      <TeamCompany data={TeamCompanyData.data} />
    </div>
  );
};
