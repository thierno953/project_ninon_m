import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
import {scroller} from 'react-scroll';

const Navbar = () => {
    const[click, setClick] = useState(false)
    
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 200) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)


        const scrollToElement = (element) => {
            scroller.scrollTo(element, {
                duration: 800,
                delay: 50,
                smooth: true,
                offset: -80
            })
        }
 

    return (
        <div className={color ? 'header header-bg' : 'header'}>
               <div className="header_container">
           <Link to='/'><h1>NINON</h1></Link> 
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li onClick={() => scrollToElement('Home')}>
                   <Link to='/' onClick={handleClick}>Home</Link>
               </li>
               <li onClick={() => scrollToElement('Pricing')}>
                   <Link to='/' onClick={handleClick}>Pricing</Link>
               </li>
               <li onClick={() => scrollToElement('Maps')}>
                   <Link to='/' onClick={handleClick}>Maps</Link>
               </li>
               <li onClick={() => scrollToElement('Contact')}>
                   <Link to='/' onClick={handleClick}>Contact</Link>
               </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               </div>
           </div>
        </div>
    )
}

export default Navbar
