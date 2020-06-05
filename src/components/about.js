import React, {Component} from 'react'
import {Link} from 'react-router-dom';


class About extends Component {

    render() {
      //console.log(this.props)
    return (
            <div className="about">
            <div className="abt" >
          
<div><p className="section">Reel Ad -ventures, is where you need to come to pick that perfect vacation spot. You are Welcome to our vacation resource bank,and we trust to be of excellent service to you.We recommend that before you click the destination button,share with our wonderful family the experiences from your last vacation we love travel stories :).click the button below to get started.</p>
                 
                 <Link to={'/:stories/'}>
                 <button className="btn" >Get Started</button></Link>  
            
           </div>
           
          <div className="anim"/>
     
         </div>
      <footer className="foot"><h4> Reel Adventures 2020&copy;</h4></footer>
     
             </div>
         );
    }
    }
    
        export default About