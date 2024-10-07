import React from 'react'
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

// import pic1 from '../assets/images/Team1.jpg';
// import pic2 from '../assets/images/Team5.jpg';
// import pic3 from '../assets/images/Team4.jpg';
// import pic4 from '../assets/images/Team8.jpg';
// import pic5 from '../assets/images/Team6.jpg';
// import pic6 from '../assets/images/Team7.jpg';
// import pic7 from '../assets/images/Team2.jpg';
// import pic8 from '../assets/images/Team3.jpg';
// import pic9 from '../assets/images/NoPhoto.jpeg';
// import pic10 from '../assets/images/NoPhoto.jpeg';
// import pic11 from '../assets/images/NoPhoto.jpeg';
// import pic11 from '../assets/images/NoPhoto.jpeg';






function TeamCard() {
// an Array of objects
const CardData = [
    { image: pic11, title: 'King David Oyekanmi', content_text: 'Chairman, Board of Director/CEO: Oversees overall strategy, vision, and execution. Acts as the main point of communication between the team and external partners'},
    { image: pic12, title: 'Tomi Oyekanmi', content_text: 'COO/CFO (Chief Operating and Financial Officer): Manages daily operations and financial planning. Ensures efficiency in administrative tasks and handles budgeting and financial reporting. Administrative and Support Team' },
    { image: pic10, title: 'Femi Oyekanmi Esq', content_text: 'Head of Legal ' },

    
    { image: pic9, title: 'Adeolu Oyekanmi', content_text: 'CEO '},

 
{ image: pic5, title: 'Ashaola Victor Temilade', content_text: 'Administrative Manager/HR Specialist: Manages office operations, HR tasks, and administrative responsibilities. Handles recruitment, training, payroll, and employee relations'},
    
    
    { image: pic7, title: 'Aremu Emmanuel Olukayode', content_text: 'Accountant/Financial Analyst: Manages financial records, budgeting, and financial forecasting. Ensures accuracy in financial reporting and compliance. Marketing and Sales Team'},

    { image: pic6, title: 'Olabisi Ayomide Jesuferanmi', content_text: 'Marketing Manager/Social Media Specialist: Develops and implements marketing strategies. Manages social media accounts, creates engaging content, and interacts with followers' },


    { image: pic1, title: 'Emenyonu Oluchi Mercy', content_text: 'Sales Manager/Customer Support Manager: Develops and implements sales strategies. Manages client relationships and oversees customer support services. Technical Team'},


    { image: pic3, title: 'Erim Emmanuel', content_text: 'CTO (Chief Technology Officer): Leads technology strategy and oversees technical development. Manages the technical team and ensures high-quality deliverables'},



    { image: pic8, title: 'Aniekan Sunday', content_text: 'Software Engineer/IT Support: Develops and maintains the platform’s software and applications. Provides technical support and ensures the security and efficiency of IT systems.Academic Team'},


    { image: pic2, title:'Eche Floyd', content_text: 'Academic Director/Instructors Coordinator: Manages course content and curriculum development. Coordinates with instructors and ensures the quality of educational materials. Content Developer/Instructor. Creates and updates educational materials. Delivers courses and provides student support.'},


    { image: pic4, title:'Victory Chinedum', content_text: 'CPO Firsta Technologies/Content Developer: Manages all content development, Prime Africa Technologies.'},
    // Add more card data objects as needed
  ];



  return (
    <>
    
    <div className="container pt-5">
    <h3 className="text-center">Consolidated Organogram</h3>

<h4 className="text-center">Executive Teams</h4>

<div className="row" >
{CardData.map((Card, index) => (
 
<div className="col-md-3 mb-3 " data-aos="fade-up">

<div className="card ms-2" style={{width: '80%', height: '100%'}}>

  <img src={Card.image} className="card-img-top" alt="..."  />
  <div className="card-body">
    <h4 className="card-title ">{Card.title}</h4>
    <p className="card-text">{Card.content_text}
    {/* <a href="/Curriculum" className="text-danger" style={{textDecoration:'none'}}>Read more</a>*/} </p> 
  
            
              </div> 
              </div>
              </div>



))}

</div>
</div>  
    
    
    </>
  )
}

export default TeamCard