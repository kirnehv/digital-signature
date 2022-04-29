import React, {Component} from 'react'
import WAVES from 'vanta/dist/vanta.cells.min'
import '../index.css'

// import title from '../media/davinci_white.png';

class Vanta extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }
  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 500.00,
      minWidth: 200.00,
      scale: 1.00,
      color1: 0x344d93,
      color2: 0xffffff
    })
  }
  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy()
  }
  render() {
    return (
        <div className="Vanta" ref={this.vantaRef}>
        </div>
    );
  }
}

export default Vanta;
