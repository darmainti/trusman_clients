import BreadCrumb from '../../components/bread_crumb/BreadCrumb';
import { CustomNavbar } from '../../components/custom_navbar/CustomNavbar';
import TeamCompany from '../../components/team_company/TeamCompany';
import { TeamCompanyData } from '../../components/team_company/TeamCompany.constant';

export const Teams = () => {
  return (
    <div className='body_wrapper'>
      <CustomNavbar slogo='sticky_logo' mClass='menu_four' nClass='w_menu' />
      <BreadCrumb
        breadcrumbClass='breadcrumb_area'
        imgName='breadcrumb/banner_bg.png'
        title='Team Trusman'
        description='Inilah sekelompok orang yang luar biasa yang bersatu untuk membentuk team demi kekuatan untuk membentuk Trusman.'
      />
      <TeamCompany data={TeamCompanyData.data} />
    </div>
  );
};
