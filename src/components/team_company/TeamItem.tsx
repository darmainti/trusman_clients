import FooterData from '../footer/Footer.constant';

type TeamItemProps = {
  image: string;
  name: string;
  position: string;
};

export default function TeamItem(props: TeamItemProps) {
  return (
    <div className='ex_team_item'>
      <img
        src={require('../../img/teams/' + props.image)}
        alt='team'
        width='270'
        height='400'
      />
      <div className='team_content'>
        <a href='.#'>
          <h3 className='f_p f_size_16 f_600 t_color3'>{props.name}</h3>
        </a>
        <h5>{props.position}</h5>
      </div>
      <div className='hover_content'>
        <div className='n_hover_content'>
          <ul className='list-unstyled'>
            {FooterData.socialIcon.map((item) => {
              return (
                <li key={item.id}>
                  <a href={item.url}>
                    <i className={`${item.icon}`}></i>
                  </a>
                </li>
              );
            })}
          </ul>
          <div className='br'></div>
          <a href='.#'>
            <h3 className='f_p f_size_16 f_600 w_color'>{props.name}</h3>
          </a>
          <h5>{props.position}</h5>
        </div>
      </div>
    </div>
  );
}
