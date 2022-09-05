const Fade = require('react-reveal/Fade');

type BreadCrumbProps = {
  breadcrumbClass: string;
  imgName: string;
  title?: string;
  description?: string;
};
export default function BreadCrumb(props: BreadCrumbProps) {
  return (
    <section className={`${props.breadcrumbClass}`}>
      <img
        className='breadcrumb_shap'
        src={require('../../img/' + props.imgName)}
        alt=''
      />
      {props.title && (
        <div className='container'>
          <div className='breadcrumb_content text-center'>
            <Fade effect='fadeInUp'>
              <h1 className='f_p f_700 f_size_50 w_color l_height50 mb_20'>
                {props.title}
              </h1>
            </Fade>
            <p className='f_400 w_color f_size_16 l_height26'>
              {props.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
