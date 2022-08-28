type AboutCompanyProps = {
  fclass: string;
  tclass: string;
  ftitle: string;
  fsubtitle: string;
  fdescription: string;
  fimg?: string;
};

export default function AboutCompany(props: AboutCompanyProps) {
  return (
    <section className={`fun_fact_area ${props.fclass}`}>
      <div className='container'>
        <div className='row flex-row-reverse'>
          <div className='col-lg-7 col-md-6'>
            <div className='fact_author_img fact_author_img_two text-right'>
              <div className='square_box box_three'></div>
              <div className='square_box box_four'></div>
              {props.fimg && (
                <img
                  className='wow fadeInUp'
                  data-wow-delay='0.3s'
                  src={require('../../img/' + props.fimg)}
                  alt=''
                />
              )}
            </div>
          </div>
          <div className='col-lg-5 col-md-6'>
            <div className='fun_fact_content'>
              <h2 className={`f_p f_700 mb_20 ${props.tclass}`}>
                {props.fsubtitle}
              </h2>
              <h1 className={`f_p f_700 mb_20 ${props.tclass}`}>
                {props.ftitle}
              </h1>
              <p className='f_400 f_size_15 l_height28 mb_40'>
                {props.fdescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
