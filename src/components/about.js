import React, { useContext } from 'react'
import {ThemeContext} from '../contexts/ThemeContext';
import va4 from '../images/va4.jpeg'
import va5 from '../images/va5.jpeg'
import nr from '../images/nr.jpg'
import jam3 from '../images/jam3.jpg'
import bafut3 from '../images/bafut3.jpg'
import gira from '../images/gira.jpg'



const About = () => {
 const {isLightTheme, light, dark} = useContext(ThemeContext);
 const theme = isLightTheme ? light : dark;
   
      //console.log(this.props)
    return (
            <div className="about">
            <div className="abt" style={{background:theme.bg}} >

    <p className="section">Reel Ad -ventures, is where you need to come to pick that perfect vacation spot. You are Welcome to our vacation resource bank,and we trust to be of excellent service to you.We recommend that before you click the destination button,share with our wonderful family the experiences from your last vacation we love travel stories (..).
    Rush to Road Gists and have your say.</p>

  <div className="side">             
<gallery>
<img src={va4} alt="" />
</gallery>
<gallery>
<img src={va5} alt="" />
</gallery>
<gallery>
<img src={nr} alt="" />
</gallery>
<gallery>
<img src={jam3} alt="" />
</gallery>
<gallery>
<img src={bafut3} alt="" />
  </gallery>
  <gallery>
<img src={gira} alt="" />
  </gallery>
  </div>
     
         </div>
             </div>
         );
    }
    
    
        export default About