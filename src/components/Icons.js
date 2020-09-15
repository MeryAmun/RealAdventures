import React from 'react'
import ThemeToggle from '../components/ThemeToggle'



const Icons = () => {

    return (
        <div className='icono'>


            <div className="side-icons">
                <li><a href="https://wwww.facebook.com" className="icons"><i className="fab fa-facebook fa-fw"></i> </a></li>
                <li><a href="https://wwww.twitter.com" className="icons"><i className="fab fa-twitter fa-fw"></i> </a></li>
                <li><a href="https://wwww.google .com" className="icons"><i className="fab fa-google-plus fa-fw"></i> </a></li>
                <li><a href="https://wwww.instagram.com" className="icons"><i className="fab fa-instagram fa-fw"></i> </a></li>
            </div>
            <div>
                <h3 className="texi">On The Road</h3>
            </div>
            <div><ThemeToggle /></div>

        </div>

    )
}

export default Icons
