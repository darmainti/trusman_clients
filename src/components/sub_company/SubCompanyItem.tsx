const Reveal = require('react-reveal');

type SubCompanyItemProps = {
  title: string;
  description: string;
  icon: string;
  rclass: string;
  iclass: string;
};

export const SubCompanyItem = (props: SubCompanyItemProps) => {
  return (
    <div className='col-lg-4 col-sm-6'>
      <Reveal bottom cascade>
        <div className={`p_service_item ${props.rclass}`}>
          <div className={`icon ${props.iclass}`}>
            <i className={`ti-${props.icon}`}></i>
          </div>
          <h5 className='f_600 f_p t_color3'>{props.title}</h5>
          <p className='f_400'>{props.description}</p>
        </div>
      </Reveal>
    </div>
  );
};
