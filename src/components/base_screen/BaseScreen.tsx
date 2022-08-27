import { Outlet } from 'react-router-dom';
import { CustomNavbar } from '../custom_navbar/CustomNavbar';

export const BaseScreen = () => {
  return (
    <div className='body_wrapper'>
      <CustomNavbar slogo='sticky_logo' mClass='menu_four' nClass='w_menu' />
      <div className='content'>
        <Outlet />
      </div>
    </div>
  );
};
