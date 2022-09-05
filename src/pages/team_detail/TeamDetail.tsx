import BreadCrumb from '../../components/bread_crumb/BreadCrumb';
import { CustomNavbar } from '../../components/custom_navbar/CustomNavbar';
import PersonDetail from '../../components/person_detail/PersonDetail';
import { TeamCompanyData } from '../../components/team_company/TeamCompany.constant';

interface LocationState {
  from: {
    img: string;
    name: string;
    description: string;
  };
}

export default function TeamDetail() {
  return (
    <div className='body_wrapper'>
      <CustomNavbar slogo='sticky_logo' mClass='menu_four' nClass='w_menu' />
      <BreadCrumb
        breadcrumbClass='breadcrumb_area_single'
        imgName='breadcrumb/banner_bg.png'
      />
      <PersonDetail />
    </div>
  );
}
