const Fade = require('react-reveal/Fade');

type SectitleProps = {
  title: string;
  titleP: string;
  tClass: string;
  sClass: string;
};
export default function Sectitle(props: SectitleProps) {
  return (
    <div className={`${props.sClass}`}>
      <Fade effect='fadeInUp' duration={1300}>
        <h2 className={`f_p f_size_30 l_height50 f_600 ${props.tClass}`}>
          {props.title}
        </h2>
      </Fade>
      <Fade effect='fadeInUp' duration={1600}>
        <p className='f_400 f_size_16 mb-0'>{props.titleP}</p>
      </Fade>
    </div>
  );
}
