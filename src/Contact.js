import React, { useEffect } from 'react';
import logo from './applex.jpg';
import logo2 from './Capture.jpg';
import Particles from 'react-particles-js';
import './Mainstylingfile.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Switch, BrowserRouter, Route, NavLink } from 'react-router-dom';
function Contact(){
useEffect(() =>{
Aos.init({duration:2000});
}, []);
return (
<div className="abc">
   <div class="header">
      <Particles
      canvasClassName="example"
      params={{
      particles: {
      number: {
      value: 40,
      density: {
      enable: true,
      value_area: 1000,
      }
      },
      color:{value:"#2020ac"},
      size:{value:"8"},
      line_linked:{color:"#2020ac"},
      },
      }}
      />
      <div class="inl">
         <img src={logo} class="rounded-circle img-fluid"/>
      </div>
      <div class="inl1">
         <img src={logo2} class="rounded i"/>
      </div>
      <div class="nav center3">
         <input type="checkbox" id="nav-check"/>
         <div class="nav-header">
         </div>
         <div class="nav-btn">
            <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </label>
         </div>
         <div class="nav-links">
            <NavLink to="/">Return to Main Page</NavLink>
         </div>
      </div>
   </div>
   <div class="car2">
      <img src="http://applex.in/wp-content/uploads/2020/03/contact-us-customer-support-hotline-people-connect-call-customer-support_36325-2023.jpg" alt="" width="100%"/>
      <div class="top-center">
         <h2 class="display-responsive text-center">
            Why waiting?
            <br/><br/>
            <p class="lead text-center">Contact us for premium App development, Website Development, Firebase and Google Cloud Service at reasonable price<br/>OR<br/>Apply for an internship now
               <br/><button type="button" class="btn btn-danger btn-lg" onClick={()=>document.getElementById("myForm").style.display = "block"}>Request Callback</button>
            </p>
         </h2>
      </div>
   </div>
   <div class="form-popup" id="myForm">
      <form action="/action_page3.php" class="form-container">
         <h2> Request Callback </h2>
         <input type="text" placeholder="Enter Name*" name="tempname" required/>
         <input type="text" placeholder="Enter Contact Number*" name="tempphone" required/>
         <label for="adate">Date</label>
         <input type="date" id="adate" name="adate"/>
         <label for="appt">Select a time</label>
         <input type="time" id="appt" name="appt"/>
         <div class="row">
            <input type="submit" value="Submit"/>
         </div>
         <br/>
         <div class="row">
            <button type="button" class="btn cancel" onClick={()=>document.getElementById("myForm").style.display = "none"}>Close</button>
         </div>
      </form>
   </div>
   <div class="container tmargin">
      <h2 class="display-responsive text-center" data-aos="flip-left">Get Quotation <i class="fa fa-calculator" aria-hidden="true"></i></h2>
      <br/>
      <hr class="new3"/>
      <p class="lead text-center tmargin">Let us build together something great. Want to know what could be the approximate charge for your app or website? Fill up the details and get replied back within 24 hours.
      </p>
   </div>
   <div class="container c tmarginm">
      <form action="/action_page.php">
         <div class="row">
            <div class="col-md-6 col-50">
               <input type="text" id="fname" name="fname" placeholder="First Name*" required/>
            </div>
            <div class="col-md-6 col-50">
               <input type="text" id="lname" name="lname" placeholder="Last Name*" required/>
            </div>
         </div>
         <div class="row">
            <div class="col-50 col-md-6">
               <input type="text" id="email" name="email" placeholder="Enter your Email*" required/>
            </div>
            <div class="col-50 col-md-6">
               <input type="text" id="phno" name="phno" placeholder="Enter your Phone Number*" required/>
            </div>
         </div>
         <div class="row">
            <div class="col-25 col-md-3">
               <label for="category">Service Category</label>
            </div>
            <div class="col-75 col-md-9">
               <select id="category" name="category">
                  <option value="appd">App Development</option>
                  <option value="webd">Website/UI Design and Redesign</option>
                  <option value="fbase">FireBase + Google Cloud Service</option>
                  <option value="others">others</option>
               </select>
            </div>
         </div>
         <div class="row">
            <div class="col-25 col-md-3">
               <label for="deadline">Approximate Deadline</label>
            </div>
            <div class="col-75 col-md-9">
               <select id="deadline" name="deadline">
                  <option value="15">Within 15 days</option>
                  <option value="month">Within a month</option>
                  <option value="nolimit">No deadline</option>
               </select>
            </div>
         </div>
         <div class="row">
            <div class="col-25 col-md-3">
               <label for="description">Description</label>
            </div>
            <div class="col-75 col-md-9">
               <textarea id="description" name="description" placeholder="Write something.."></textarea>
            </div>
         </div>
         <div class="row">
            <input type="submit" value="Send your Message"/>
         </div>
      </form>
   </div>
   <div class=" sbuttons">
      <a href="#" target="_blank" class="sbutton whatsapp" tooltip="WhatsApp"><i class="fa fa-whatsapp"></i></a>
      <a href="#" target="_blank" class="sbutton fb" tooltip="Facebook"><i class="fa fa-facebook-f"></i></a>
      <a href="#" target="_blank" class="sbutton twitt" tooltip="Linkedin"><i class="fa fa-linkedin"></i></a>
      <a href="#" target="_blank" class="sbutton pinteres" tooltip="Quora"><i class="fa fa-quora"></i></a>
      <a target="_blank" class="sbutton mainsbutton" tooltip="More about Us"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
   </div>
   <div class="container tmargin" id="INTERNSHIP">
      <h2 class="display-responsive text-center " data-aos="flip-left">Apply for Internship
         <img src="https://applex.in/wp-content/uploads/2019/12/preview-1-300x282.jpg"/>
      </h2>
      <br/>
      <hr class="new3"/>
      <p class="lead text-center tmargin">Join our dynamic team as an intern and give an edge to your career. We will get back to within 24 hrs of your query.
      </p>
   </div>
   <div class="container c tmarginm">
      <form action="/action_page2.php">
         <div class="row">
            <div class="col-md-6 col-50">
               <input type="text" id="fname" name="fname" placeholder="First Name*" required/>
            </div>
            <div class="col-md-6 col-50">
               <input type="text" id="lname" name="lname" placeholder="Last Name*" required/>
            </div>
         </div>
         <div class="row">
            <div class="col-50 col-md-6">
               <input type="text" id="email" name="email" placeholder="Enter your Email*" required/>
            </div>
            <div class="col-50 col-md-6">
               <input type="text" id="phno" name="phno" placeholder="Enter your Phone Number*" required/>
            </div>
         </div>
         <div class="row">
            <div class="col-25 col-md-3">
               <label for="category">Internship Category</label>
            </div>
            <div class="col-75 col-md-9">
               <select id="category" name="category">
                  <option value="development">App Development/Web Development</option>
                  <option value="writer">Technical Content Writer</option>
                  <option value="marketing">Branding and Marketing</option>
                  <option value="graphics">Graphics Designing</option>
               </select>
            </div>
         </div>
         <div class="row">
            <div class="col-25 col-md-3">
               <label for="institution">College/University</label>
            </div>
            <div class="col-75 col-md-9">
               <input type="text" id="institution" name="institution" placeholder="Enter your Institution*" required/>
            </div>
         </div>
         <div class="row">
            <div class="col-25 col-md-3">
               <label for="reason">Why should we select you?</label>
            </div>
            <div class="col-75 col-md-9">
               <textarea id="reason" name="reason" placeholder="Write something.."></textarea>
            </div>
         </div>
         <div class="row">
            <input type="submit" value="Submit"/>
         </div>
      </form>
   </div>
   <div class="container tmarginm ">
      <br/>
      <div class="row">
         <div class="col-md-6">
            <iframe src="https://maps.google.com/maps?q=%20Salt%20lake%2C%20Sector-5%2C%20Kolkata%2C%20West%20Bengal%2C%20India&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" aria-label=" Salt lake, Sector-5, Kolkata, West Bengal, India" width="100%" height="450" allowfullscreen=""  tabindex="0"></iframe>
         </div>
         <div class="col-md-6"  data-aos="zoom-in">
            <div>
               <h2 class="text-center display-responsive" >Get In Touch<br/></h2>
               <br/>
               <hr class="new3"/>
               <br/>
               <p class="lead text-center">
                  Salt Lake, Sector-5,<br/>
                  Kolkata<br/>
                  West Bengal, India.
               </p>
               <h3 class="text-center" >
                  Call Us Now @+91 6290438875
                  <div class="lastp tmargin">
                     <a href="https://www.facebook.com/applexin-100528761563514/"><i class="fa fa-facebook"></i></a>
                     <a href="https://www.instagram.com/applex.in/"><i class="fa fa-instagram"></i></a>
                     <a href="https://www.linkedin.com/company/applex-in/"><i class="fa fa-linkedin"></i></a>
                  </div>
               </h3>
            </div>
         </div>
      </div>
   </div>
   <footer class="footer-distributed">
      <div class="footer-left">
         <h3>
            IMPORTANT LINKS:<br/>
            <hr class="new1"/>
         </h3>
         <p class="footer-links">
         <h5>
            <a href="#"> <i class="fa fa-caret-right" aria-hidden="true"></i> Home </a>
            <br/>
            ________________
            <br/>
            <a href="#ABOUT"><i class="fa fa-caret-right" aria-hidden="true"></i> About Us </a>
            <br/>
            ________________
            <br/>
            <a href="https://www.termsofservicegenerator.net/live.php?token=7FQJ7cN28AvU60MqZ0b2KUrxzGGqvsMl"><i class="fa fa-caret-right" aria-hidden="true"></i> Terms of Service </a>
            <br/>
            ________________
            <br/>
            <a href="https://www.privacypolicygenerator.info/live.php?token=RAr46RbL1wa1tThNqRNcDlAXJO9Lo3fT"><i class="fa fa-caret-right" aria-hidden="true"></i> Privacy policy </a>
            <br/>
            ________________
         </h5>
         </p>
      </div>
      <div class="footer-center">
         <div>
            <h3>
               CONTACT US:<br/>
               <hr class="new2"/>
            </h3>
         </div>
         <br/>
         <p class="footer-links">
         <h5>
            <i class="fa fa-map-marker"></i>
            <p>Sector V, Salt Lake<br/>Kolkata<br/>West Bengal, India.
            </p>
            <br/>
            <i class="fa fa-phone-square" aria-hidden="true"></i>
            <p>+91 6290438875</p>
            <br/>
            <i class="fa fa-envelope"></i>
            <p><a href="mailto:contact@applex.in">contact@applex.in</a></p>
         </h5>
         </p>
      </div>
      <div class="footer-right">
         <h3>
            REACH US ON:<br/>
            <hr class="new1"/>
         </h3>
         <div class="footer-icons">
            <a href="https://www.facebook.com/applexin-100528761563514/"><i class="fa fa-facebook"></i></a>
            <a href="https://www.instagram.com/applex.in/"><i class="fa fa-instagram"></i></a>
            <a href="https://www.linkedin.com/company/applex-in/"><i class="fa fa-linkedin"></i></a>
         </div>
      </div>
   </footer>
   <div class="container-fluid copyright text-center">© 2020 applex.in | Powered by applex.in | All rights Reserved</div>
</div>
);
}
export default Contact;
