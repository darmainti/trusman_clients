import { Component } from 'react';
const Fade = require('react-reveal/Fade');

type CareerComponentItemProps = {
  title: string;
  description: string;
  rclass: string;
  iclass: string;
  id: number;
};

class CareerComponentItem extends Component<CareerComponentItemProps> {
  render() {
    return (
      <div className='col-lg-4 col-sm-6' key={this.props.id}>
        <Fade bottom cascade>
          <div className={`p_service_item ${this.props.rclass}`}>
            <h5 className='f_600 f_p t_color3'>{this.props.title}</h5>
            <p className='f_400'>{this.props.description}</p>
          </div>
        </Fade>
      </div>
    );
  }
}

export default CareerComponentItem;
