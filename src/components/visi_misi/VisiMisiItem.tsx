import React from 'react';

type VisiMisiItemProps = {
  icon: string;
  sTitle: string;
  Sp: string;
};
export default function VisiMisiItem(props: VisiMisiItemProps) {
  return (
    <div className='wow fadeInUp' data-wow-delay='0.4s'>
      <div className='software_featured_item text-center mb_20'>
        <div className='s_icon'>
          <img src={require('../../img/home5/icon_shape.png')} alt='' />
          <img
            className='icon'
            src={require('../../img/home5/' + props.icon)}
            alt=''
          />
        </div>
        <h3 className='f_600 t_color3'>{props.sTitle}</h3>
        <p className='f_400 f_size_15 mb-30'>{props.Sp}</p>
      </div>
    </div>
  );
}
