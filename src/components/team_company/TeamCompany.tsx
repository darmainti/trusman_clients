import Sectitle from './Sectitle';
import TeamItem from './TeamItem';

type TeamCompanyProps = {
  data: {
    id: number;
    image: string;
    name: string;
    position: string;
    description: string;
  }[];
};

export default function TeamCompany(props: TeamCompanyProps) {
  return (
    <section className='experts_team_area sec_pad'>
      <div className='container'>
        <Sectitle
          sClass='sec_title text-center mb_70'
          title='Team Trusman'
          tClass='t_color3'
          titleP='Inilah sekelompok orang yang luar biasa yang bersatu untuk membentuk team demi kekuatan untuk membentuk Trusman.'
        />
        <div className='row'>
          {props.data.map((item) => {
            return (
              <div className='col-lg-4 col-sm' key={item.id}>
                <div className='container w-75'>
                  <TeamItem
                    id={item.id}
                    image={item.image}
                    name={item.name}
                    position={item.position}
                    description={item.description}
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
