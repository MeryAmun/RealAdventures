import React from 'react'
import Loader from  '../loader/loader'

const Contact = () => {
   //programatic ridirect
    //setTimeout(() => {
       // props.history.push('/')
   // }, 5000);

   return (
    <div>
    <div className="contact">
            <div className="contact-us">

    <button className="slide">Click To view Contact</button>
            <div className=" container toggle">   
 <i className="fas fa-envelope-open-text"></i>

    chebesiawah@gmail.com
    <div className="spacer"/>
               
<i className="fas fa-mobile"></i>

(+237) 677972126
<div className="spacer"/>
<a href="https://github.com/MeryAmun" target= "_blank" className="link" rel="noopener noreferrer" >Github:https://github.com/MeryAmun</a>
</div>
                </div>
             <Loader/>
    
    </div>
    <footer className="foot">
<h4> Reel Adventures 2020&copy;</h4></footer>  

    </div>
)


}

export default Contact