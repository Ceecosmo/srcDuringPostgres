import React,  { useState }  from 'react';
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
import TeamCard1 from './TeamCard';



function Contact() {


//   const [angle, setAngle] = useState(0);

//   const rotateCircle = (direction) => {
//     const rotationAmount = 100; 
//     //degree to rotate per click 
//     setAngle((prevAngle) => prevAngle + (direction === 'left' ?-rotationAmount : rotationAmount));

//   };



//   <div className="container mt-5" >
//   <button className="arrow left" onClick={() => rotateCircle('left')}>&#9664;</button>
// <div className="circle" style={{ transform: `rotate(${90}deg)`}}>

// <div className="team-member"> <img src={pic2} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="200" height="200"/></div>
// <div className="team-member" > <img src={pic2} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="200" height="200"/></div>
// <div className="team-member" > <img src={pic2} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="200" height="200"/></div>
// <div className="team-member" > <img src={pic2} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="200" height="200"/></div>
// <div className="team-member" > <img src={pic2} className="  me-2" alt="about" style={{borderRadius: '50%'}} width="200" height="200"/></div>


// </div>

 
// <button className="arrow right" onClick={() => rotateCircle('right')}>&#9654;</button>
  
//   </div>


  return (
    <>
    <div className="bg-cover mt-5">
            <div className="text-center pt-3 text-light">
                <h2 className="pt-5" data-aos="fade-down-right">Contact</h2>
                <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Our Teams</p>
            </div>
        </div>


        <div className="mt-5" >
        <h3 className="text-center">BE IN TOUCH WITH OUR TEAMS</h3>
        <div className="scroll-container">
        <div className="scrolling-line">
      
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
        </div>


<TeamCard1/>

    
    </>
  )
}

export default Contact