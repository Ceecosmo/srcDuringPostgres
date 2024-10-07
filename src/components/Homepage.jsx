import React from 'react'

import About from '../assets/images/people22.jpg'
import ICON1 from '../assets/images/icon1.png'
import ICON2 from '../assets/images/icon2.png'
import ICON3 from '../assets/images/icon3.png'

import pic22 from '../assets/images/people11.jpg';
import pic222 from '../assets/images/people111.jpg';

import pic1 from '../assets/images/p1.jpg';
import pic2 from '../assets/images/p2.jpg';
import pic3 from '../assets/images/p3.jpg';
import pic4 from '../assets/images/p4.jpg';
import pic5 from '../assets/images/p5.jpg';
import pic6 from '../assets/images/p6.jpg';
import pic7 from '../assets/images/p7.jpg';
import pic8 from '../assets/images/p8.jpg';
import pic9 from '../assets/images/p9.jpg';
import pic10 from '../assets/images/p10.jpg';
import pic11 from '../assets/images/p11.jpg';
import pic12 from '../assets/images/p12.jpg';
import Card1 from './Card'
import FORM from './Form'
// import About from '../assets/images/about1.png'

function HomePage() {
  return (
    <>

<div className="bg-image1" >

<div className="bg-image text-light ">

<img src={pic22} className="" alt="about" id="mk" />
</div>
<div className="bg-image2 text-light ">

<img src={pic222} className="" alt="about" id="mk" />
</div>
            <div className="overlay pt-5" data-aos="fade-down-right">
            <h1 className='container Building-Up  text-light'>
            Building Up Technologies & Development of <br></br>Digital Literacy
            </h1>
            <p className="container Register text-light" style={{fontSize:'24px',fontWeight:'700px'}}>Register and get started with our Technology's Tools.</p>
            <div className="container Your" >
        <a href="/Curriculum" className="btn btn-danger" data-aos="fade-up-left">Take Your Course</a>
        </div>  
           </div>
     
        
        
       </div> 
       <div className="text-danger" >
<marquee>Our portal is open, Register now and be part of us &#x1F44B; &#x1F389;!! </marquee>
</div>

    
<div className="container rounded img-fluid pt-4">
<div className="text-center" data-aos="fade-up" style={{background: '#001F3F', color: 'white', borderRadius: '5px'}}>
<h2>Welcome To Prime Africa Technologies</h2>
  <div className="white-line mx-auto"></div>
  <br />
<p>Prime Africa Technology is a partnership between Dadoye Innovations (Management) and First African AI Technologies(Tutoring).</p>
</div>



<div className="container-fluid pt-3">
   <div className="row">

      <div className="col mt-6">
      <img src={About} className="rounded img-fluid mb-5" alt="about" />
          
        
      </div>

      <div className="col-md-6 rounded img-fluid"  style={{background: '#001F3F', color: 'white'}} data-aos="fade-up">
        {/* <p className='text-danger'>TECHNOLOGY COMPANY</p> */} 
        <h2 >We Provide Full Range Tech Solution</h2>
        <p className="intro" >We are dedicated to revolutionize tech training and education in Africa. Our mission is to empower individuals, businesses, and communities with cutting-edge skills and knowledge, bridging the digital divide and unlocking the continent's full potential.</p >
        <p className="intro" >With a passion for innovation and excellence, we deliver top-notch online and offline training programs, resources, and support, tailored to meet the unique needs of African learners. Our expert trainers, industry partners, and state-of-the-art facilities ensure a transformative learning experience, equipping our students with the skills and confidence to succeed in an ever-evolving tech landscape.</p>
        <p className="intro" > At Prime Africa Technologies, we believe in the power of technology to drive positive change and economic growth. We are committed to making high-quality tech education accessible, inclusive, and impactful, shaping the future of Africa's digital economy and beyond.</p>
        <a href="/PartnersAndCompany" className="btn btn-danger">Learn More</a>
        
        </div>

   </div>
   </div></div>


<div className="container pt-5 ">
  <div className="text-center"><p className='text-danger'> TOP LEVEL COURSES </p>
  <h2>Covering All Technologies Field</h2>
    </div>


<Card1/>
<div className="text-center " data-aos="fade-up">

  <a href="/Curriculum" className="btn btn-danger">Click For More Courses</a>
  
</div>
</div>

<div className="text-center mt-5" >

        <div className="scroll-container" >
        <div className="scrolling-line" >
      
       
       
        <div className="team-member me-3"> <img src={pic11} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/> <p className="text-center" >Founder/CEO</p></div>
       
       <div className="team-member me-3" > <img src={pic12} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center">COO/CFO</p></div>
    
     <div className="team-member me-3"> <img src={pic10} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center">Head of Legal</p></div>
<div className="team-member me-3" > <img src={pic9} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center">CEO Prime Africa </p></div>
    
     <div className="team-member me-3"> <img src={pic5} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center">Administrative Manager</p></div>


     <div className="team-member me-3"> <img src={pic7} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center">Accountant</p></div>

<div className="team-member me-3" > <img src={pic6} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center">Marketing Manager</p></div>

<div className="team-member me-3" > <img src={pic1} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center">Sales Manager</p></div>
    
     <div className="team-member me-3"> <img src={pic3} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center">CTO</p></div>

    
     <div className="team-member me-3"> <img src={pic8} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center"> Software Engineer</p></div>

<div className="team-member me-3" > <img src={pic2} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center">Academic Director</p></div>
 

<div className="team-member me-3" > <img src={pic4} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="150" height="150"/><p className="text-center">CPO</p></div>
 
  
      
        </div>
        </div>
        <a href="/Contact" className="btn btn-danger">More About the Teams</a>
        </div>

        


<div className="bg-warning mt-5" style={{ minHeight: '200px', padding: '20px 0' }}>
     <div className="container">
          <div className="row pt-5 d-flex justify-content-center">
            <div className='col-md-8' data-aos="fade-up">
            <h2>Fostering Digital Literacy</h2>
            <p>Prime Africa Technologies is ready to take you to the next level of tech.</p>
            </div>
            <div className="col-md-4 text-md-end text-sm-start" data-aos="fade-up">
               <a href='/Curriculum' className="btn btn-danger">Track Course Info</a> 
            </div>
          </div>
          
        </div>
      </div>
      

  


<div className="container mt-5" >
<div className="row">
 <div className="col-md-6" data-aos="fade-up">
 <h4>Why Choose Us?</h4>

 <div className="d-flex">
 <div className="flex-grow-2 me-2">
              <img src={ICON1} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              {/* <h4>ADD HEADER</h4> */}
            <h4>Convinience in learning</h4>
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-2 me-2">
              <img src={ICON2} alt="" className='img-fluid' />
              </div>
              <div className="flex-grow-1 ms-2">
              {/* <h4>ADD HEADER</h4> */}
            <h4>Hands on learning</h4>
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-2 me-2">
              <img src={ICON3} alt=""  className='img-fluid'/>
              </div>
              <div className="flex-grow-1 ms-2">
              {/* <h4>ADD HEADER</h4> */}
            <h4>Flexible learning schedule</h4>
              </div>
            </div>
 </div>
<div className="col-md-6" data-aos="fade-up">
<h4>Send us a message (For full enrolment <a href='/Curriculum' className="" type="submit">Register here</a>)</h4>
<FORM/>
</div>

</div>
</div>


    </>
    
   
  )
}

export default HomePage