import React,  { useState }  from 'react'
import axios from 'axios'
function Form3() {

// const  handleClick = () => {
//   window.open('http://127.0.0.1:8000/', '_blank', 'noopener,noreferrer');
// };

//   const courseData = {    
//     'course1': 'N76,000',
//     'course2': 'N85,000',
//     'course3': 'N107,000',
  
  
// };


//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     course_name: '',
//     Course_Price:'',
//     creditors_address:'',
//     message: '',



// });



// //State to manage the selected course and price
// const [selectedCourse, setSelectedCourse] = useState('');
// const [coursePrice, setCoursePrice] = useState(null);






// //error message
// const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
      
//       const course = e.target.value;
//       setSelectedCourse(course);
//       setCoursePrice(courseData[course] || null);
//       //Update price based on selectecd course
   

//     const { name, value } = e.target;
//     setFormData({
//         ...formData,
//         [name]: value
//     });
//     };


//     const validateForm = () => {
//       const errors = {};
//       if (!formData.name.trim()) {
//         errors.name = 'Name is required';
//       }
//       if (!formData.Course_name.trim()) {
//         errors.Course_name = 'Course name is required';
//       }
//       if (!formData.email.trim()) {
//         errors.email = 'Email is required';
//       } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//         errors.email = 'Invalid email format';
//       }
      
//       if (!formData.message.trim()) {
//         errors.message = 'Message is required';
//       } else if (formData.message.length < 10){
//         errors.message = 'Text is too small, More text required'
//       }
//        // You can add more validation rules for other fields as needed
//       setErrors(errors);
//       return Object.keys(errors).length === 0;
//     };



//     // const handleSubmit = (e) => {
//     //   e.preventDefault();
//     //   if (validateForm()) {
//     //     // Process form submission
//     //     alert('Message sent Successfully')
        
//     //     console.log(formData);
//     //     // Redirect to another page
//     //     window.location.href = '/Contact';
//     //   }
//     // };
  




//     const handleSubmit = async (e) => {
//       e.preventDefault();
//       if (validateForm()) {

//         try{
          

//           const response = await axios.post('http://localhost:8000/contact/postcontact/', formData);
//           console.log('Form submitted:', response.data);
//           //Assuming the form submission was successful, you can handle it here
//            // Process form submission
//         alert('Message sent Successfully');
        
//         //page reload
//         window.location.reload();
//         } catch (error) {
//           console.error('Error submitting Form:', error);
//           //Handle error accordingly


//            // console.log(formData);
//         // Redirect to another page
//         //page reload
//         // window.location.href = '/Contact';
//         }
       
        
        
//       }
//     };



    
  return (
    <>
{/* <form action="" onSubmit={handleSubmit}>
<div className="d-flex mt-3">
<div className="flex-grow-1 me-2">
<input type="text" name='name' value={formData.name}  placeholder='Name' className={`render_field payment_form.phone_number form-control ${errors.name && 'is-invalid'}`} onChange={handleChange}/> 
{errors.name && <div className='invalid-feedback'>{errors.name}</div>}
</div>
<div className="flex-grow-1 ms-2">

<input type="email" name='email' value={formData.email}  className={`form-control ${errors.email && 'is-invalid'}`} placeholder='Email' onChange={handleChange}/> 
{errors.email && <div className='invalid-feedback'>{errors.email}</div>}
</div>
</div>


<p className="text-end pt-4 me-5">Course: Website Development</p>
<div className="d-flex mt-1">
<div className="flex-grow-1 me-2">
<input type="text" name='phone' value={formData.phone} placeholder='Phone (Optional)' className='form-control' onChange={handleChange}/> 
</div>
<div className="flex-grow-1 ms-2"> */}

{/* <input type="text" name='WebDev'  value='Course: Website Development' className='form-control'/>  */}

{/* 

<select  id="course" name='course_name' value={selectedCourse} className={`form-control ${errors.Course_name && 'is-invalid'}`} onChange={handleChange}><option value="">Choose Course Option</option>
<option type="radio" value="course1">Front-end Development</option>
<option value="course2">Back-end Development</option>
<option value="course3">Full Stack Development (i.e for the both course options above)</option>

</select>

</div>

</div>


<div className="flex-grow-1">

{coursePrice !== null && (<input type="text" name='Course_Price'  value={`Course Price: ${coursePrice}`} className={`form-control ${errors.amount && 'is-invalid'}`} onChange={handleChange}/>  */}

{/* //  {errors.Course_name && <div className='invalid-feedback'>{errors.subject}</div>}
)}


</div> */}



{/* <div className="flex-grow-1 mt-3">

<input type="number" name='email' value={formData.email}  className={`form-control ${errors.email && 'is-invalid'}`} placeholder='Select Tuition Fee for this chosen course option(s)' onChange={handleChange}/> 
{errors.email && <div className='invalid-feedback'>{errors.email}</div>}


</div> */}

{/* <textarea id="" cols="30" rows="10" className={`form-control mt-3 ${errors.name && 'is-invalid'}`} onChange={handleChange}  name="message"  value={formData.message}  placeholder='Write down your Message'></textarea>
{errors.message && <div className='invalid-feedback'>{errors.message}</div>}

{/* onClick={handleClick}  */}
{/* <button className="btn btn-danger mt-2" >Pay Now</button> */}

{/* </form> */} 





<a href="https://primeafricatechnologiess.onrender.com/" className="btn btn-danger mt-5" >Pay for this Course &#8594;</a>

    </>
  )
}

export default Form3