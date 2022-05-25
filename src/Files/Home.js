import React from "react";
import Slider from "./Slider";
// import Book from './Book';
// import imgs from '../img/01.jpg'



export default function Home ()
{
        return(
                <>
              <Slider /> 
            {/* <Book /> */}

{/* card............... */}<br/><center>
<h1>Library of Department of Computer Application </h1></center>
<br/>
<p className="peragraph">
 Arni University is a private university situated near Kathgarh
 village in Kangra district, Himachal Pradesh, India. Arni University 
 was founded by K D Education trust in 2009. Courses being offered at this university 
 include B.Tech., M.Sc., M.Tech., MBA, M.Phil., Ph.D., BHMCT, M.A, etc.</p><br/><br/>
<center>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
    <div class="bg"><br/> <br/>
    <h2>Welcome to arni University</h2>
    <br/><br/>
    Get Programming Books 
    <br/>
    click here to know about Department<br/><br/><br/><br/>
    <button className="dbtn">
      Click here
    </button>
    
    </div>
     </div>
    <div class="flip-card-back"><br/>   <br/>
      <h1>For Downloading Books</h1> <br/><br/>
      <p>Arni University</p> 
      <p>Arni School of Computer Science and Application</p><br/><br/><br/>
      <button className="dbtn-1">
      Click Here
    </button>
    </div>
  </div>
</div>
</center>
    {/* card close........................... */}
    
    <br/>
    <br/>
    <br/>
    <br/>
   
                </>
        );
}