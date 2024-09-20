import './Darkening.css'
import {Component, createRef} from "react";



class Darkening extends Component {

    state = {
        visual : "none"
    }
    constructor(props) {
        super(props);

        this.props.this(() => this);
    }
    Visual(){
        this.setState({
            visual : "block"
        })
    }

    None(){
        this.setState({
            visual : "none"
        })
    }

    render() {

       return(
           <div style={{display: this.state.visual}} className="darkening"></div>
       );
    }
}

export default Darkening;






