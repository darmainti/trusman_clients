import React from 'react';
import { SubCompanyItem } from './SubCompanyItem';

type SubCompanyProps = {
  data: {
    id: string;
    titles: string;
    description: string;
    icon: string;
    rclass: string;
    iclass: string;
  }[];
};
export const SubCompany = (props: SubCompanyProps) => {
  return (
    <section className='prototype_service_info'>
      <div className='symbols-pulse active'>
        <div className='pulse-1'></div>
        <div className='pulse-2'></div>
        <div className='pulse-3'></div>
        <div className='pulse-4'></div>
        <div className='pulse-x'></div>
      </div>
      <div className='container'>
        <h2 className='f_size_30 f_600 t_color3 l_height45 text-center mb_90'>
          SaasLand is built for designers like you.
          <br /> With useful features, an intuitive interface.
        </h2>
        <div className='row p_service_info'>
          {props.data.map((item) => {
            return (
              <SubCompanyItem
                title={item.titles}
                description={item.description}
                icon={item.icon}
                rclass={item.rclass}
                iclass={item.iclass}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
