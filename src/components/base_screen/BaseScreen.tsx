import { Outlet } from 'react-router-dom';
import { CustomNavbar } from '../custom_navbar/CustomNavbar';
import Footer from '../footer/Footer';

export const BaseScreen = () => {
  return (
    <div className='body_wrapper'>
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
