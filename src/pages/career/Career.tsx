import BreadCrumb from '../../components/bread_crumb/BreadCrumb';
import CareerComponent from '../../components/career_component/CareerComponent';
import { CareerComponentData } from '../../components/career_component/CareerComponent.constant';
import { CustomNavbar } from '../../components/custom_navbar/CustomNavbar';

export default function Career() {
  return (
    <div className='body_wrapper'>
      <CustomNavbar slogo='sticky_logo' mClass='menu_four' nClass='w_menu' />
      <BreadCrumb
        breadcrumbClass='breadcrumb_area'
        imgName='breadcrumb/banner_bg.png'
        title='Karir'
        description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit cupiditate delectus est? Iusto cumque, sed quam ullam, maiores suscipit voluptatem, quae sit ea expedita repellendus? Earum, sapiente? Dolores, minima cupiditate?'
      />
      <CareerComponent data={CareerComponentData.data} />
    </div>
  );
}
