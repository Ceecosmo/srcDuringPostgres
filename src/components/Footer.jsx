import React from 'react'
import pic1 from '../assets/images/COS11.png';
import pic2 from '../assets/images/COS3.png';
import pic3 from '../assets/images/people3.jpg';
import pic4 from '../assets/images/people4.jpg';
// import FORM2 from './Form2'

function Footer() {
  return (
    <>
    <div className="bg-dark text-light mt-5 py-5">
      <div className="container">
        <div className="row pt-2">
          <div className="col-md-4">
            <h4 >PRIME AFRICA TECH</h4>
            <p style={{textAlign:'justify'}}>Prime Africa Technologies is a partnership between Dadoye Innovations and First African AI Technologies. We are dedicated to revolutionize tech training and education in Africa.</p>
          
            <div className="Send_us_an_email_1 mb-5">
                <a href="mailto:info@primeafricatechnologies.com.ng" className="btn form-control Send_us_an_email ">Send us an email</a>

          
              </div>
          
          </div>




          

          <div className="col-md-4 mb-2">
            <h4>PHOTO GALLERY</h4>
            <div className="d-flex ">
              <div className="flex-grow-1 mb-3 me-2">
              <img src={pic1} alt="" className='img-fluid rounded' />
              </div>
              <div className="flex-grow-1 ms-2">
              <img src={pic2} alt="" className='img-fluid rounded' />
              
              </div>
            </div>

            <div className="d-flex">
              <div className="flex-grow-1 mb-3 me-2">
              <img src={pic3} alt="" className='img-fluid rounded' />
              </div>
              <div className="flex-grow-1 ms-2">
              <img src={pic4} alt="" className='img-fluid rounded' />
              
              </div>
            </div>

          </div>

          <div className="col-md-4">
            <h4>QUICK LINKS</h4>
            <ul className="list-unstyled">
              <li><a href="#" className='text-light text-decoration-none'>Our Curriculum</a></li>
              <li><a href="#" className='text-light text-decoration-none'>Meet The Team</a></li>
              <li><a href="#" className='text-light text-decoration-none'>FAQs</a></li>
             
            </ul>

          </div>
           
         
         {/* <div className="col-md-3">
         <FORM2/>
               <h4>OUR NEWSLETTER</h4>
            <p>Sign up today for tips and latest news and exclusive special offers.</p>
            
            <input type="email" placeholder='Enter your email' className="form-control mt-3 mb-3" />

            
            <button className="btn btn-danger">Submit</button>




          </div>  */}
        </div>
      </div>

      <div className="mt-5 text-center">
        <p>Follow us on:</p>
        <div className="fa-brands_all">
        <div className="">
        <a href="https://www.facebook.com/share/uHc8xEHH8CsXb88S/?mibextid=LQQJ4d" target="_blank"> <i className="fa-brands fa-facebook"> </i></a>
        </div>
        <div className="">
        <a href="https://wa.me/2349095212351" target="_blank"> <i className="fa-brands fa-whatsapp"> </i></a>
        </div>
        <div className="">
        <a href="https://www.twitter.com/myusername" target="_blank"> <i className="fa-brands fa-twitter"> </i></a>
        </div>
        <div className="">
        <a href="https://www.instagram.com/primeafricatech?igsh=MXhwaHVjNzh4enh1Zg%3D%3D&utm_source=qr" target="_blank"><i className="fa-brands fa-instagram"> </i></a>
        </div>
        </div>
       
        <br></br>  <br></br>
        <p> &copy; Copyright {new Date().getFullYear()} All Rights Reserved.</p>
      </div>


    </div>
    
    
    
    
    </>
  )
}

export default Footer