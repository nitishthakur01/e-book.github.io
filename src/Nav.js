import React from 'react';
import { Switch, Route } from "react-router-dom";
import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './Css/Nav.css';
import Logo from './img/arnilogo.gif';
import Home from './Files/Home';
import Book from './Files/Book';
import Ebook from './Files/Ebook';

function Nav() {

    return (

        <BrowserRouter >

        <nav class = "navbar" >

        <div class = "logo" >
        Arni University { /* <img className='logo' src={Logo} alt="no"/> */ } </div>

        <ul class = "nav-links" >

        <input type = "checkbox"
        id = "checkbox_toggle" />
        <label
        for = "checkbox_toggle"
        class = "hamburger" > &#9776;</label>

 <div class= "menu" >
        < li > <Link to = "/" > Home </Link></li >
        <li > <Link to = "/Book" > Books </Link></li >
        <li class = "services" >
        <Link to = "/Ebook" > E - Books </Link>

        {/* <ul class = "dropdown" >
        <li > <Link to = "" > Dropdown 1 </Link></li >
        <li > <Link to = "" > Dropdown 2 </Link></li >
        <li > <Link to = "" > Dropdown 2 </Link></li >
        <li > <Link to = "" > Dropdown 3 </Link></li >
        <li > <Link to = "" > Dropdown 4 </Link></li >
        </ul>  */}
        </li> 
        {/* <li > <Link to = "/Card" > Departme </Link></li > */}
        <li > <Link to = "" > Contact </Link></li >
        </div> </ul > </nav>
         <div className = 'Shortnav' >
        <div >
        <img className = 'logo1'
        src = { Logo }
        alt = "noimage" />
                    </div> 
                    <ol className = "snav" >
                    {/* <li > <Link className = 'snavlink'
                    to = "" >  Arni School of CSA E-Library</Link></li > */}
                    <li > <Link className = 'snavlink'
                    to = "" > School of Computer Science & Application </Link></li >
                    {/* <li > <Link className = 'snavlink'
                    to = "" > M phil </Link></li >
                    <li > 
                        <Link className = 'snavlink' to = "" > Phd </Link></li > */}
                    </ol>
                   
                     </div > <Switch >

        <Route exact path = "/" >
        <Home/>
        </Route>
                    <Route path = "/Book" >
                    <Book/>
                    </Route>
                                <Route path = "/Ebook" >
                                <Ebook/>
                                </Route>
     

        </Switch> </BrowserRouter >

    );

}
export default Nav;