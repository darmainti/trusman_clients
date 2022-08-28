import Sectitle from './Sectitle';
import TeamItem from './TeamItem';

type TeamCompanyProps = {
  data: { id: number; image: string; name: string; position: string }[];
};

export default function TeamCompany(props: TeamCompanyProps) {
  return (
    <section className='experts_team_area sec_pad'>
      <div className='container'>
        <Sectitle
          sClass='sec_title text-center mb_70'
          title='The Leaders'
          tClass='t_color3'
          titleP='Leader bukanlah penguasa segalanya. Inilah sekelompok orang yang luar biasa yang bersatu untuk membentuk kekuatan untuk membentuk Trusman.'
        />
        <div className='row'>
          {props.data.map((item) => {
            return (
              <div className='col-lg col-sm'>
                <div className='container w-50'>
                  <TeamItem
                    image={item.image}
                    name={item.name}
                    position={item.position}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
