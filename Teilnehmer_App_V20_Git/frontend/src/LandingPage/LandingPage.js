import React, { Component } from 'react';
import background from "./Gewinnspiel_Stelcon.png";

class LandingPage extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center'}}>
                <div
               style={{
                backgroundImage: `url(${background})`,
                backgroundColor:"white",
                 height: "820px",
                 width:"1920px",
                 backgroundRepeat:"no-repeat"
              }}
            ></div>
                </div>
        );
    }
}

export default LandingPage;