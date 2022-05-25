import React from "react";
import img01 from '../img/b3.jpg';
import img from '../img/book1.jpg';
import img2 from '../img/book2.jpg';
import img3 from '../img/book3.jpg';

export default function Book ()
{
 
        return(
                <>
                  <div className="book-1">
                  <div>

                  </div>
                  <div className="head">
                 <center> <h1> Computer Science & Application Trending Books</h1></center>
                  </div>
                  </div>
                  <div><br/>
                  {/* <center> <img className="display-image" src={display} alt="no image found"/></center> */}
                  </div>
                  <div>
{/* search bar */}
<form>
  <h2>Some Trending Books </h2>
  <input type="text"placeholder="Search.." title="Type in a category"/>
</form>
{/* end search */}



 <div className="card-container">
    
 <div class="left-card">
 <div class="card">
<img className="card-img" src={img} alt="Denim Jeans"/>
<h3>Practical Python AI Projects</h3>
<p class="price">287 Pages</p>
<p>Mathematical Models of Optimization Problems with Google · 2018 · 3.86 MB </p>
<p><a href="https://www.pdfdrive.com/download.pdf?id=187622604&h=c6edaad0cc683152ea61a23e6d135ec9&u=cache&ext=pdf"><button className="btn">Download E-book</button></a></p>
</div>
</div>           


<div class="main-card">
<div class="card-1">
<img className="card-img" src={img2} alt="Denim Jeans"/>
<h3>Web Design with HTML</h3>
<p class="price">307 Pages</p>
<p>Web Design with HTML and CSS · 2011 · 24.12 MB · 290,591 Downloads· English </p>
<p><a href="https://www.pdfdrive.com/web-design-with-html-and-css-d18760364.html"><button className="btn">Download E-book</button></a></p>
</div>
</div>

<div class="right-card">
<div class="card-2">
<img className="card-img" src={img3} alt="Denim Jeans"/>
<h3>Learning React:</h3>
<p class="price">230 Pages</p>
<p>A Hands-On Guide to Building Web Applications Using React and Redux  9.29 MB </p>
<p><a href="https://www.pdfdrive.com/learning-react-a-hands-on-guide-to-building-web-applications-using-react-and-redux-d185752183.html"><button className="btn">Download E-book</button></a></p>
</div>
</div>

{/* start */}
<div>
<h1>CSA E-library</h1>
</div>

<div>
<div class="menu-01">
<div class="menuitem"><h2>Onile Tutorials</h2></div>
<div class="menuitem"><a href="https://www.coursera.org/courseraplus/subscribe/monthly?utm_source=gg&utm_medium=sem&utm_campaign=04-CourseraPlus-Monthly-IN&utm_content=B2C&campaignid=15227915733&adgroupid=133520399030&device=c&keyword=coursera%20online%20courses&matchtype=b&network=g&devicemodel=&adpostion=&creativeid=560657404936&hide_mobile_promo&gclid=Cj0KCQjwuMuRBhCJARIsAHXdnqPMcsxI5rtVvRbGdqQl7RryHd4fwyNpV9SKechOWiy6C2NMebZh4x4aApRmEALw_wcB">Paid Courses</a></div>
<div class="menuitem"><a href="https://www.mygreatlearning.com/academy?ambassador_code=Google-Performance-Max&utm_source=Google-Ads&utm_campaign=GLA-Sign-Ups-Rest-Of-India&gclid=Cj0KCQjwuMuRBhCJARIsAHXdnqNRghDQH0MaCvMcFw7PUHgkkMiiiPDguvKk1hJaU59Bv3uu2iEBV2YaAmZEEALw_wcB">Free Courses</a></div>
<div class="menuitem"><a href="https://swayam.gov.in/nc_details/NPTEL">Certification Courses</a></div>
<div class="menuitem"><a href="https://skill-lync.com/scheduleademo?utm_source=Google-Search-Ad&utm_campaign=Electrical-Courses&utm_set=Electrical-Engineering-Course&utm_source=Google-Search-Ad&utm_campaign=Electrical-Courses-RoI&utm_set=Electrical-Engineering-Course&utm_network=g&utm_device=c&utm_keyword=electrical%20courses&gclid=Cj0KCQjwuMuRBhCJARIsAHXdnqM12nhMyifAWXCQVjRH0ZrfgkEyp7jdTWqUAvLb2gVELGltov6m1b4aAvWkEALw_wcB">Tutorials</a></div>
</div>

<div class="main-01">
<h2>E-Library</h2>
<p>The E-Library Is the Collection Of All the Computer Department Books present in the University Campus Library It contains mostly 150+ books and Some online and Certificate Courses</p>
<img className="img-01" src={img01} alt="Denim Jeans"/>

</div>

<div class="right-01">
<h2>Search</h2>
<p>Search any knid of CSA book present in your Syllabus</p>
<h2>Check</h2>
<p>Check the options and select the one book you want to Download</p>
<h2>Download</h2>
<p>Download a E-Book just on Single Click....!</p>
</div>
</div>
{/* end */}

                </div><br/> 

                  </div>
                </>
        );
        
}
