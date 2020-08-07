import React, { useEffect } from 'react';
import logo from './applex.jpg';
import logo2 from './Capture.jpg';
import bf1 from './2nd_Mesa de trabajo 1.png';
import bf2 from './1st new_Mesa de trabajo 1.png';
import './Mainstylingfile.css';
import firebase from './firebase.js';
import Particles from 'react-particles-js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Switch, BrowserRouter, Route, NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
const responsive = {
superLargeDesktop: {
breakpoint: { max: 4000, min: 3000 },
items: 4
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 4
},
tablet: {
breakpoint: { max: 1024, min: 464 },
items: 3
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 1
}
};
const responsive2 = {
superLargeDesktop: {
breakpoint: { max: 4000, min: 3000 },
items: 4
},
desktop: {
breakpoint: { max: 3000, min: 1024 },
items: 3
},
tablet: {
breakpoint: { max: 1024, min: 464 },
items: 3
},
mobile: {
breakpoint: { max: 464, min: 0 },
items: 1
}
};
function getdata(){
    firebase.database().ref('blogs/').once('value').then(function(snapshot){
      //get your posts div
      var posts_div=document.getElementById('posts');
      //remove all remaining data in that div

      //get data from firebase
      var data=snapshot.val();
      console.log(data);
      //now pass this data to our posts div
      //we have to pass our data to for loop to get one by one
      //we are passing the key of that post to delete it from database
      for(let[key,value] of Object.entries(data)){
        posts_div.innerHTML=
        "<div class='item'>"+
           "<blockquote>"+
              "<div class='row'>"+
                 "<div class='col-sm-8 col-sm-offset-2 testimonial-height2 text-center'>"+
                  "<h2 class='display-4'>"+value.title+"</h2>"+"<br/>"+
                    "<h4 class='text-justify'>"+value.text+"</h4>"+"<br/>"+
                    "<h4>"+value.Author+"</h4>"+"<img src='"+value.imageURL+"' class='rounded-circle' height='100px' width='100px'>"+
                 "</div></div></blockquote></div>"+posts_div.innerHTML;






      }

    });
}
window.onload=function(){
    getdata();
}

function Demo(){
useEffect(() =>{
Aos.init({duration:2000});
}, []);
return(
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
      size:{value:"5"},
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
            <a href="#ABOUT" target="_blank">About Us</a>
            <a href="#PROJECT" target="_blank">Projects</a>
            <a href="#TESTIMONIAL" target="_blank">Testimonials</a>
            <a href="#TEAM" target="_blank">Team Members</a>
            <button type="button" class="btn btn-info btn-md  ">
               <NavLink to="/contact">Contact Us</NavLink>
            </button>
         </div>
      </div>
   </div>
   <div class="car">
      <img src="http://applex.in/wp-content/uploads/2020/03/76515.jpg25.jpg" alt="Snow" width="100%" />
      <div class="top-left" data-aos="slide-up">
         <h2 class="display-responsive">
            Experience app<br/> development with<br/> applex.in<br/>
            <br/>
            <p class="lead">Bring your mobile app ideas into life with us  </p>
            <button type="button" class="btn btn-info">Download Brochure <i class="fa fa-download" aria-hidden="true"></i></button><button type="button" class="btn btn-danger" onClick={()=>document.getElementById("myForm").style.display = "block"}>Request Callback</button>
         </h2>
      </div>
   </div>
   <div class=" sbuttons">
      <a href="#" target="_blank" class="sbutton whatsapp" tooltip="WhatsApp"><i class="fa fa-whatsapp"></i></a>
      <a href="#" target="_blank" class="sbutton fb" tooltip="Facebook"><i class="fa fa-facebook-f"></i></a>
      <a href="#" target="_blank" class="sbutton twitt" tooltip="Linkedin"><i class="fa fa-linkedin"></i></a>
      <a href="#" target="_blank" class="sbutton pinteres" tooltip="Quora"><i class="fa fa-quora"></i></a>
      <a target="_blank" class="sbutton mainsbutton" tooltip="More about Us"><i class="fa fa-info-circle" aria-hidden="true"></i></a>
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
   <div class="container-fluid tmarginm" id="ABOUT">
      <p class="lead text-center ">ABOUT US</p>
      <h2 class="display-responsive text-center">We help brands and individuals solve their app related challenges with gratifying solutions</h2>
      <br/>
      <hr class="new3"/>
      <p class="lead text-center tmargin">We are a group of professionals who believe that in this growing scenario of digitization and innovation, mobile based applications are the need of the day.<br/><br/>
         applex.in can help your business or start-up reach out to the millions of smartphone users worldwide.
      </p>
   </div>
   <div class="container-fluid tmarginm " id="WHAT">
      <p class="lead text-center">WHAT WE DO</p>
      <h2 class="display-responsive text-center">Amazing features to convince you to use our products and services</h2>
      <br/>
      <hr class="new3"/>
      <p class="lead text-center tmargin ">Mobile apps can help increase engagement and foster customer loyalty and brand recognition. If you’re looking for a team to support your mobile application development project, applex.in can help. We offer cutting-edge research, development, and mobile application design to match your unique project requirements. We also provide quality assurance by industry professionals who ensure your project is done to your complete satisfaction and produces the results you’re looking for. Finally, our mobile application solutions can be built and tested to function seamlessly across any mobile device, whether it is a small smartphone or a large tablet.
      </p>
   </div>
   <div class="container-fluid tmargin " id="SERVICES">
      <div class="row tmargin">
         <div class="col-md-6 box" data-aos="zoom-in">
            <div class="align-items-center">
               <h2 class="display-responsive text-center "><img src="https://applex.in/wp-content/uploads/2017/06/editing-free-img.png"/><br/>Design</h2>
               <br/>
               <p class="lead text-center" >Best in class UI/UX designs with regular updates to make your app stay updated with the latest design trends.
               </p>
            </div>
         </div>
         <div class="col-md-6 box" data-aos="zoom-in">
            <div class="align-items-center">
               <h2 class="display-responsive text-center">  <img src="https://applex.in/wp-content/uploads/2017/06/coding-free-img.png"/><br/>Development</h2>
               <br/>
               <p class="lead text-center">Tailor-made apps underpinned by deep knowledge of material design and enterprise-grade mobile security can create a unified experience across varied screen sizes.
               </p>
            </div>
         </div>
      </div>
      <div class="row">
         <div class="col-md-6 box" data-aos="zoom-in">
            <div class="align-items-center">
               <h2 class="display-responsive text-center">  <img src="https://applex.in/wp-content/uploads/2017/06/support-free-img.png"/><br/>Debugging &Testing</h2>
               <br/>
               <p class="lead text-center">Extensive debugging and testing to ensure that the end user gets to experience a completely bug-free product
               </p>
            </div>
         </div>
         <div class="col-md-6 box" data-aos="zoom-in">
            <div class="align-items-center">
               <h2 class="display-responsive text-center" >  <img src="https://applex.in/wp-content/uploads/2017/06/marketing-1-free-img.png"/><br/>Help & Support</h2>
               <br/>
               <p class="lead text-center ">Get 24×7 help and support regarding any app you want us to develop for you or your company.
               </p>
            </div>
         </div>
      </div>
   </div>
   <div class="container tmarginm ">
      <br/>
      <div class="row">
         <div class="col-md-6">
            <img height="400px" src=" https://applex.in/wp-content/uploads/2020/03/rsz_21430-min_1-2048x1361.jpg" alt="" class="w-100" data-aos="zoom-in"/>
         </div>
         <div class="col-md-6">
            <div class=" align-items-center">
               <h2 class="text-center display-responsive" >Why Choose Us?</h2>
               <br/>
               <hr class="new3"/>
               <br/>
               <p class="lead text-center">
                  Quality Designs<br/>
               </p>
               <p class="lead text-center">
                  24×7 Live Support<br/>
               </p>
               <p class="lead text-center">
                  Result Oriented Projects<br/>
               </p>
               <p class="lead text-center">
                  Constant Monitorization<br/>
               </p>
               <p class="lead text-center" >
                  Experienced Professionals
               </p>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid tmarginm" id="PROJECT">
      <p class="lead text-center">EXPERIENCE</p>
      <h2 class="text-center display-responsive">Our Projects</h2>
      <br/>
      <hr class="new3"/>
      <br/>
      <div class="row tmargin">
         <div class="col-md-4 box2">
            <img src="https://applex.in/wp-content/uploads/2020/03/stiQr-it-icon-17.1-1-600x598.png" alt="" class="w-75" data-aos="zoom-in"/>
         </div>
         <div class="col-md-8">
            <div class="align-items-center h-100">
               <div class="col">
                  <h2 class="display-3">stiQR it</h2>
                  <h4 class="display-4">e-Verification for online certificates</h4>
                  <p class="lead">stiQR it Verifications ensures that no misrepresentation of information occurs and verifies that your credentials are uniquely yours.
                     We aim to provide you with a safe and secure verification environment by scanning the QR provided on your certificate through the stiQR it application.
                     <br /><br />
                     <button type="button" class="btn btn-info btn-lg" data-aos="slide-up"><a href="https://play.google.com/store/apps/details?id=com.applex.stiqr_it_verifications&amp;hl=en" > Download  </a></button>
                  </p>
               </div>
            </div>
         </div>
      </div>
      <div class="row tmargin">
         <div class="col-md-4 order-md-4 box2">
            <img src="https://applex.in/wp-content/uploads/2020/03/SnapLingo-1-600x600.png" alt="" class="w-75" data-aos="zoom-in"/>
         </div>
         <div class="col-md-8 order-md-1">
            <div class="align-items-center h-100">
               <div class="col">
                  <h2 class="display-3" >SNAPLINGO</h2>
                  <h4 class="display-4">One stop destination for all image to text (OCR) conversion troubles.</h4>
                  <p class="lead">Want to extract text from any image, edit and save as doc/pdf? Want to scan QR/Bar codes? Want to locate a place from a signboard and translate? Want to search images in google?
                     Snaplingo comes as a package solution to all these problems.
                     <br /><br />
                     <button type="button" class="btn btn-info btn-lg" data-aos="slide-up"><a href="https://play.google.com/store/apps/details?id=com.sourajit.snaptext&amp;hl=en" > Download  </a></button>
                  </p>
               </div>
            </div>
         </div>
      </div>
      <br/>
      <div class="row tmargin">
         <div class="col-md-4 box2">
            <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-07-at-20.39.32-1-e1585750905146.jpeg" alt="" class="w-75" data-aos="zoom-in"/>
         </div>
         <div class="col-md-8">
            <div class=" align-items-center h-100">
               <div class="col">
                  <h2 class="display-3">INNOVACION</h2>
                  <h4 class="display-4">Get to know the events, register and gear up for the annual IEM-UEM techfest, Innovacion.</h4>
                  <p class="lead">Must be confused which exhibition to attend, participate and which events to register and how. Want the complete set of information along with live updates on spot? Want to know your ID, your team ID that is hard to remember?
                     We made that easier for you with this app.
                     <br /><br />
                     <button type="button" class="btn btn-info btn-lg" data-aos="slide-up"><a href="https://play.google.com/store/apps/details?id=com.applex.innovacion&hl=en" > Download  </a></button>
                  </p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid tmarginm ">
      <p class="lead text-center ">FACTS</p>
      <h2 class="display-responsive text-center">Here is why we claim to be the best choice for you!</h2>
      <br/>
      <hr class="new3"/>
      <div class="row tmargin">
         <div class="col-md-3" data-aos="flip-right">
            <div class="align-items-center">
               <h2 class="display-responsive text-center"><img src="https://applex.in/wp-content/uploads/2017/06/projects-icon-free-img.png"/><br/>5</h2>
               <p class="lead text-center" >Projects Completed
               </p>
            </div>
         </div>
         <div class="col-md-3" data-aos="flip-right">
            <div class="align-items-center">
               <h2 class="display-responsive text-center">  <img src="https://applex.in/wp-content/uploads/2017/06/heart-icon-free-img.png"/><br/>1K+</h2>
               <p class="lead text-center">Happy Users
               </p>
            </div>
         </div>
         <div class="col-md-3" data-aos="flip-left">
            <div class="align-items-center">
               <h2 class="display-responsive text-center"><img src="https://applex.in/wp-content/uploads/2017/06/code-lines-icon-free-img.png"/><br/>1M+</h2>
               <p class="lead text-center" >Lines of Code.
               </p>
            </div>
         </div>
         <div class="col-md-3" data-aos="flip-left">
            <div class="align-items-center">
               <h2 class="display-responsive text-center"><img src="https://applex.in/wp-content/uploads/2017/06/award-icon-free-img.png"/><br/>6+</h2>
               <p class="lead text-center" >Awards
               </p>
            </div>
         </div>
      </div>
   </div>
   <div class="tmarginm">
      <h2 class="text-center display-responsive">Who We've Worked With</h2>
      <br/>
      <hr class="new3"/>
      <div class="tmargin container">
         <Carousel responsive={responsive}
         infinite={true} autoPlay={true} autoPlaySpeed={1500} removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
         itemClass="carousel-item-padding-4-px">
         <div class="box2"><img src="https://applex.in/wp-content/uploads/elementor/thumbs/logo1-opibusy62k8y5arhnvok74p80txivmdpwhpdtrooc0.png"/></div>
         <div class="box2"><img src="https://applex.in/wp-content/uploads/elementor/thumbs/imageds-onizehxb4jl0wsbs9oasi6cbjqq6kpht8o0yupfmeo.png"/></div>
         <div class="box2"><img src="https://applex.in/wp-content/uploads/elementor/thumbs/logo-omiek3j7vdsofernchx99ikrpgu5jidggruzg1dik0.png"/></div>
         <div class="box2"><img  src="https://applex.in/wp-content/uploads/elementor/thumbs/0-1-omiek1njhpq3s6udnh404j1uip3f445zsik0hhgawg.jpg"/></div>
         <div class="box2"><img src="https://applex.in/wp-content/uploads/elementor/thumbs/download-2-omiek88etjz41gktl1ye3ze2oe6zlzw45f4euf6jow.png"/></div>
         <div class="box2"><img src="https://applex.in/wp-content/uploads/elementor/thumbs/download-1-omiek7akmpxtpum6qjjrjhmm30bmeasdtagxd57xv4.png" /></div>
         </Carousel>;
      </div>
   </div>
   <div class="container-fluid tmarginm" id="applexblogs">
      <p class="lead text-center">Blogs</p>
      <h2 class="text-center display-responsive">Check out some beautiful articles from some beautiful minds</h2>
      <div class="row">
         <div class="col">
            <div class="carousel slide"  id="quote-carousel" data-interval="3000" data-pause="false">
               <div class="carousel-inner text-center" id="posts">
               <div class='item active'>
                <blockquote>
                    <div class='row'>
                    <div class='col-sm-8 col-sm-offset-2 testimonial-height2 text-center'>
                    <h2 class='display-4'>Polymorphism</h2><br/>
                    <h4 class='text-justify'>Polymorphism is the ability of an object to take on many forms. The most common use of polymorphism in OOP occurs when a parent class reference is used to refer to a child class object.

Any Java object that can pass more than one IS-A test is considered to be polymorphic. In Java, all Java objects are polymorphic since any object will pass the IS-A test for their own type and for the class Object.

It is important to know that the only possible way to access an object is through a reference variable. A reference variable can be of only one type. Once declared, the type of a reference variable cannot be changed.

The reference variable can be reassigned to other objects provided that it is not declared final. The type of the reference variable would determine the methods that it can invoke on the object.

A reference variable can refer to any object of its declared type or any subtype of its declared type. A reference variable can be declared as a class or interface type.</h4>
                    <br/><h4>Sandeep Sharma </h4>
                    <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-13-at-18.26.28-100x100.jpeg" class="rounded-circle" alt=""/>
                    </div></div></blockquote></div>
               </div>
               <a data-slide="next" href="#quote-carousel" class="left carousel-control"><i class="fa fa-chevron-left"></i></a>
               <a data-slide="prev" href="#quote-carousel" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>
            </div>
         </div>
      </div>
   </div>
   <div class="container tmargin ">
      <br/>
      <div class="row">
         <div class="col-md-6">
            <img height="500px" src={bf1} alt="" class="w-100"/>
         </div>
         <div class="col-md-6">
         <img height="500px" src={bf2} alt="" class="w-100"/>
         </div>
      </div>
   </div>
   <div class="container-fluid tmarginm" id="TESTIMONIAL">
      <p class="lead text-center">TESTIMONIALS</p>
      <h2 class="text-center display-responsive">Check out what people say about us!</h2>
      <div class="row">
         <div class="col">
            <div class="carousel slide" data-ride="carousel" id="quote-carousel" data-interval="2500" data-pause="false">
               <div class="carousel-inner text-center">
                  <div class="item active">
                     <blockquote>
                        <div class="row">
                           <div class="col-sm-8 col-sm-offset-2 testimonial-height text-center">
                              <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-13-at-18.26.28-100x100.jpeg" class="rounded-circle" alt=""/>
                              <h2 class="display-4">Sandeep Dwivedi</h2>
                              <h4>Innovation Officer, DST, Government of Uttar Pradesh</h4>
                              <br/>
                              <h4>&quot;Project is really wonderful. If we want to explore the mission of Digital India then we must have to recognize the innovators of this projects. Heartiest Blessings.&quot;</h4>
                           </div>
                        </div>
                     </blockquote>
                  </div>
                  <div class="item ">
                     <blockquote>
                        <div class="row">
                           <div class="col-sm-8 col-sm-offset-2 testimonial-height text-center">
                              <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-13-at-18.31.07-100x100.jpeg" class="rounded-circle" alt=""/>
                              <h2 class="display-4">Abhinav Gupta</h2>
                              <h4>IRS, Govt. Of India, P.S. to Dr Harsh Vardhan</h4>
                              <br/>
                              <h4>&quot;Excellent idea and very innovative.&quot;</h4>
                           </div>
                        </div>
                     </blockquote>
                  </div>
                  <div class="item ">
                     <blockquote>
                        <div class="row">
                           <div class="col-sm-8 col-sm-offset-2 testimonial-height text-center">
                              <img src="https://applex.in/wp-content/uploads/2020/03/iet-chairman-image-100x100.jpg" class="rounded-circle" alt=""/>
                              <h2 class="display-4">Dr.V.K Agarwal</h2>
                              <h4>Chiarman, IET Alwar</h4>
                              <br/>
                              <h4>&quot;Great idea, willing to implement this in our college.&quot;</h4>
                           </div>
                        </div>
                     </blockquote>
                  </div>
                  <div class="item ">
                     <blockquote>
                        <div class="row">
                           <div class="col-sm-8 col-sm-offset-2 testimonial-height text-center">
                              <img src="https://applex.in/wp-content/uploads/2020/03/iet-executive-director-image-100x100.jpg" class="rounded-circle" alt=""/>
                              <h2 class="display-4">Dr.Manju Agarwal</h2>
                              <h4>General Secretary, IET Alwar</h4>
                              <br/>
                              <h4>&quot;Want to collaborate with this project.&quot;</h4>
                           </div>
                        </div>
                     </blockquote>
                  </div>
               </div>
               <a data-slide="next" href="#quote-carousel" class="left carousel-control"><i class="fa fa-chevron-left"></i></a>
               <a data-slide="prev" href="#quote-carousel" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid tmarginm" id="TEAM" >
      <p class="lead text-center" >TEAM</p>
      <h2 class="display-responsive text-center">Meet our team of expert Developers</h2>
      <br/>
      <hr class="new3"/>
      <Carousel responsive={responsive2}
      infinite={true} autoPlay={true} autoPlaySpeed={2500} removeArrowOnDeviceType={["tablet", "mobile","desktop"]} showDots={true}
      itemClass="carousel-item-padding-4-px tmargin">
      <div>
         <div class="our-team">
            <div class="pic">
               <img src="https://applex.in/wp-content/uploads/2020/03/Arvil-Sen-e1584888762353.jpeg"/>
               <ul class="social">
                  <li><a href="https://www.facebook.com/arvilsen/" class="fa fa-facebook"></a></li>
                  <li><a href="https://www.instagram.com/arvilsen/?hl=en" class="fa fa-instagram"></a></li>
                  <li><a href="https://www.linkedin.com/in/arvil-sen-6342a716b/" class="fa fa-linkedin"></a></li>
               </ul>
            </div>
            <div class="team-content">
               <div class="team-info">
                  <h3 class="title">Arvil Sen</h3>
                  <span class="post">Operations Head</span>
               </div>
            </div>
         </div>
      </div>
      <div>
         <div class="our-team">
            <div class="pic">
               <img src="https://applex.in/wp-content/uploads/2020/03/75241179_775063572949471_7798094398171906048_n.jpg"/>
               <ul class="social">
                  <li><a href="https://www.facebook.com/anamikabasu95'" class="fa fa-facebook"></a></li>
                  <li><a href="https://www.instagram.com/sushmita_absolute_love/?hl=en" class="fa fa-instagram"></a></li>
                  <li><a href="https://www.linkedin.com/in/sushmita-biswas-77a2a4186/" class="fa fa-linkedin"></a></li>
               </ul>
            </div>
            <div class="team-content">
               <div class="team-info">
                  <h3 class="title">Sushmita Biswas</h3>
                  <span class="post">Graphics Head</span>
               </div>
            </div>
         </div>
      </div>
      <div>
         <div class="our-team">
            <div class="pic">
               <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-14-at-14.11.46-e1584888490865.jpeg"/>
               <ul class="social">
                  <li><a href="https://www.facebook.com/saikat.choudhury.543" class="fa fa-facebook"></a></li>
                  <li><a href="https://www.instagram.com/saikat.choudhury.543" class="fa fa-instagram"></a></li>
                  <li><a href="https://www.linkedin.com/in/saikat-choudhury-b3425b1aa/" class="fa fa-linkedin"></a></li>
               </ul>
            </div>
            <div class="team-content">
               <div class="team-info">
                  <h3 class="title">Saikat Choudhury</h3>
                  <span class="post">Android Developer</span>
               </div>
            </div>
         </div>
      </div>
      <div>
         <div class="our-team">
            <div class="pic">
               <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-09-at-20.13.23.jpeg"/>
               <ul class="social">
                  <li><a href="https://www.facebook.com/sarbari.choudhury.543" class="fa fa-facebook"></a></li>
                  <li><a href="https://www.instagram.com/sarbari.choudhury.543" class="fa fa-instagram"></a></li>
                  <li><a href="https://www.linkedin.com/in/sarbari-choudhury-b4325b1aa/" class="fa fa-linkedin"></a></li>
               </ul>
            </div>
            <div class="team-content">
               <div class="team-info">
                  <h3 class="title">Sarbari Choudhury</h3>
                  <span class="post">Android Developer</span>
               </div>
            </div>
         </div>
      </div>
      <div>
         <div class="our-team">
            <div class="pic">
               <img src="https://applex.in/wp-content/uploads/2020/03/WhatsApp-Image-2020-03-13-at-20.37.41-e1584889009418.jpeg"/>
               <ul class="social">
                  <li><a href="https://www.facebook.com/xaviel.blast" class="fa fa-facebook"></a></li>
                  <li><a href="'https://www.instagram.com/alex_cruze22/?hl=en" class="fa fa-instagram"></a></li>
                  <li><a href="https://www.linkedin.com/in/prajata-samanta-61bb851a9/" class="fa fa-linkedin"></a></li>
               </ul>
            </div>
            <div class="team-content">
               <div class="team-info">
                  <h3 class="title">Prajata Samanta</h3>
                  <span class="post">Web Head</span>
               </div>
            </div>
         </div>
      </div>
      <div>
         <div class="our-team">
            <div class="pic">
               <img src="https://applex.in/wp-content/uploads/2020/03/80571107_143011440465361_990146418796658688_o.jpg"/>
               <ul class="social">
                  <li><a href="https://www.facebook.com/ankita.de.336" class="fa fa-facebook"></a></li>
                  <li><a href="https://www.instagram.com/ankita_de_222000/?hl=en" class="fa fa-instagram"></a></li>
                  <li><a href="https://www.linkedin.com/in/ankita-de-9b327b198/" class="fa fa-linkedin"></a></li>
               </ul>
            </div>
            <div class="team-content">
               <div class="team-info">
                  <h3 class="title">Ankita De</h3>
                  <span class="post">Head App Developer<br/>Co-Founder applex.in</span>
               </div>
            </div>
         </div>
      </div>
      <div>
         <div class="our-team">
            <div class="pic">
               <img src="https://applex.in/wp-content/uploads/2020/03/33180111_577344002648558_6925806232779358208_o.jpg"/>
               <ul class="social">
                  <li><a href="https://www.facebook.com/sourajit.basu.3" class="fa fa-facebook"></a></li>
                  <li><a href="https://www.instagram.com/bos_on_99/?hl=en" class="fa fa-instagram"></a></li>
                  <li><a href="https://www.linkedin.com/in/sourajit-basu-4830b8187/" class="fa fa-linkedin"></a></li>
               </ul>
            </div>
            <div class="team-content">
               <div class="team-info">
                  <h3 class="title">Sourajit Basu</h3>
                  <span class="post">Head App Developer<br/>Co-Founder applex.in</span>
               </div>
            </div>
         </div>
      </div>
      </Carousel>;
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
export default Demo;
