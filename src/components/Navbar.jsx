import { useState, useRef } from "react"
import { links, social } from "../data";
import Logo from '../logo.svg';
import { FaBars } from '../../node_modules/react-icons/fa/'


const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksRef = useRef(null);

    /*DYNAMIC APPROACH - CALCULATE HEIGHT UL*/
    const linkStyle = {
        height: showLinks ? `${linksRef.current.getBoundingClientRect().height}px` : '0px'
    }

    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={Logo} alt="logo" className="logo" />
                    <button type="button" onClick={() => setShowLinks(!showLinks)} className="nav-toggle"><FaBars /></button>
                </div>
                <div className='links-container' style={linkStyle}>
                    <ul className="links" ref={linksRef}>
                        {links.map((link) => {
                            return <li key={link.id}><a href={link.url} target="_blank">{link.text}</a></li>
                        })}
                    </ul>
                </div>
                <ul className="social-icons">
                    {social && social.map((socialIcon) => {
                        const {id, url, icon} = socialIcon;
                        return <li key={id}><a href={url} target="_blank">{icon}</a></li>
                    })}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar