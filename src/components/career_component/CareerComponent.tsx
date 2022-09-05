import React from 'react';
import CareerComponentItem from './CareerComponentItem';

type CareerComponentProps = {
  data: {
    id: string;
    titles: string;
    description: string;
    rclass: string;
    iclass: string;
  }[];
};

export default function CareerComponent(props: CareerComponentProps) {
  return (
    <section className='prototype_career_info'>
      <div className='symbols-pulse active'>
        <div className='pulse-1'></div>
        <div className='pulse-2'></div>
        <div className='pulse-3'></div>
        <div className='pulse-4'></div>
        <div className='pulse-x'></div>
      </div>
      <div className='container'>
        <div className='row p_service_info'>
          {props.data.map((item, index) => {
            return (
              <CareerComponentItem
                title={item.titles}
                description={item.description}
                rclass={item.rclass}
                iclass={item.iclass}
                key={index}
                id={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
