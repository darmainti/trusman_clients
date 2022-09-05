import { useParams } from 'react-router-dom';
import { TeamCompanyData } from '../team_company/TeamCompany.constant';
const parse = require('html-react-parser');

export default function PersonDetail() {
  const { teamId } = useParams();

  const dataTeams = TeamCompanyData.data;
  const theTeam = dataTeams.find((data) => {
    return data.id === Number(teamId);
  });
  console.log(theTeam);

  return (
    <section className='portfolio_details_area sec_pad'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8'>
            <div className='portfolio_details_info pr_50'>
              <h5 className='f_700 f_p f_size_20 t_color3 mb-30'>
                {theTeam?.name} ({theTeam?.position})
              </h5>
              <div className='f_400 f_size_15 mb-0 team-description'>
                {parse(theTeam?.description)}
              </div>
              <div className='portfolio_category mt_60'>
                <div className='p_category_item'>
                  <p className='f_400 f_size_15 mb-0'>Sosial Media:</p>
                  <div className='social_icon'>
                    <a href='.#'>
                      <i className='ti-facebook'></i>
                    </a>
                    <a href='.#'>
                      <i className='ti-twitter-alt'></i>
                    </a>
                    <a href='.#'>
                      <i className='ti-google'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-4'>
            <div className='portfolio_details_gallery'>
              <img
                className='img-fluid mb_20 foto_team'
                src={require('../../img/teams/' + theTeam?.image)}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
