import { Component } from 'react';
const Fade = require('react-reveal/Fade');

type SubCompanyItemProps = {
  title: string;
  description: string;
  icon: string;
  rclass: string;
  iclass: string;
  id: number;
  img: string;
};

class SubCompanyItem extends Component<SubCompanyItemProps> {
  render() {
    return (
      <div className='col-lg-4 col-sm-6' key={this.props.id}>
        <Fade bottom cascade>
          <div className={`p_service_item ${this.props.rclass}`}>
            <div className='container'>
              <img
                src={require('../../img/' + this.props.img)}
                alt='team'
                width='100'
                style={{ paddingBottom: '30px' }}
              />
            </div>
            <h5 className='f_600 f_p t_color3'>{this.props.title}</h5>
            <p className='f_400'>{this.props.description}</p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default SubCompanyItem;
