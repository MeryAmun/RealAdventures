import React from 'react'


const Contact = () => {
   //programatic ridirect
    //setTimeout(() => {
       // props.history.push('/')
   // }, 5000);

   return (
    <div>
    <div className="contact">

    
<form className="container">
                   First Name:
             <input type="text" name="name"/>
            Last Name:
             <input type="text" name="name"/>
             Comment:
           <textarea></textarea>
           <button className="btn">Leave your comment</button>
                </form>
             
            
            <div className="side" />
            <div className="contact-us" />
             
    
    </div>
    <footer className="foot">
<h4> Reel Adventures 2020&copy;</h4></footer>  

    </div>
)


}

export default Contact