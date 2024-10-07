import React,  { useState }  from 'react'
import axios from 'axios'
function Form() {

    //Course data mapping
  //   const courseData = {    
  //     'course1': 'N85,000',
  //     'course2': 'N37,000',
  //     'course3': 'N100,000',
  //     'course4': 'N37,000',
    
  // };


  // const cos = 'You chose:';
 

  //The form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course_name: '',
    message: ''
});



//State to manage the selected course and price
const [selectedCourse, setSelectedCourse] = useState('');
// const [coursePrice, setCoursePrice] = useState(null);


                                                         

//handler for input change
const [errors, setErrors] = useState({});

    const handleChange = (e) => {
      
      // const coursemm = e.target.value;
      // setSelectedCourse(course);
      // setCoursePrice(courseData[course] || null);
      // //Update price based on selectecd course
   

      //error message
    const { name, value, course } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });

    setSelectedCourse(course);
    setCoursePrice(courseData[course] || null);
    };


    const validateForm = () => {
      const errors = {};
      if (!formData.name.trim()) {
        errors.name = 'Name is required';
      }


      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
      } else if (formData.phone.length > 15) {
        errors.phone = 'Invalid Phone number';
      }

      // if (!formData.email.trim()) {
      //   errors.email = 'Email is required';
      // } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      //   errors.email = 'Invalid email format';
      // }
      if (!formData.course_name.trim()) {
          errors.course_name = 'Course name is required';
      // }else if (formData.course_name){
        // errors.course_name = 'Text is too small,More text required'
      }
      // if (!formData.subject.trim()) {
      //     errors.subject = 'Subject is required';
      // }else if (formData.subject.length < 5){
      //   errors.subject = 'Text is too small,More text required'
      // }
      if (!formData.message.trim()) {
        errors.message = 'Message is required';
      } else if (formData.message.length < 10){
        errors.message = 'Text is too small, More text required'
      }
       // You can add more validation rules for other fields as needed
      setErrors(errors);
      return Object.keys(errors).length === 0;
    };



    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   if (validateForm()) {
    //     // Process form submission
    //     alert('Message sent Successfully')
        
    //     console.log(formData);
    //     // Redirect to another page
    //     window.location.href = '/Contact';
    //   }
    // };
  




    const handleSubmit = async (e) => {
      e.preventDefault();
      if (validateForm()) {

        try{
          

          const response = await axios.post('https://primeafricatechnologies.onrender.com/studentInfo/poststudentInfo/', formData);
          // const response = await axios.post('http://localhost:8000/studentInfo/poststudentInfo/', formData);
          console.log('Form submitted:', response.data);
          //Assuming the form submission was successful, you can handle it here
           // Process form submission
        alert('Message sent Successfully');
        
        //page reload
        window.location.reload();
        } catch (error) {
          console.error('Error submitting Form:', error);
          //Handle error accordingly


           // console.log(formData);
        // Redirect to another page
        //page reload
        // window.location.href = '/Contact';
        }
       
        
        
      }
    };



    
  return (
    <>
<form action="" onSubmit={handleSubmit}>
<div className="d-flex mt-3">
<div className="flex-grow-1 me-2">
<input type="text" name='name' value={formData.name}  placeholder='Name' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange}/> 
{errors.name && <div className='invalid-feedback'>{errors.name}</div>}
</div>
<div className="flex-grow-1 ms-2">

<input type="email" name='email' value={formData.email}  className='form-control' placeholder='Email (Optional)' onChange={handleChange}/> 

</div>
</div>



<div className="d-flex mt-3">
<div className="flex-grow-1 me-2">
<input type="text" name='phone' value={formData.phone} className={`form-control ${errors.phone && 'is-invalid'}`} placeholder='Enter valid phone number'  onChange={handleChange}/> {errors.phone && <div className='invalid-feedback'>{errors.phone}</div>}
</div>
<div className="flex-grow-1 ms-2">

{/* <label htmlFor="coure" className={`form-control ${errors.name && 'is-invalid'}`}>Select a Course Name</label> */}

<select  id="course" name='course_name' value={selectedCourse} className={`form-control ${errors.course_name && 'is-invalid'}`}  onChange={handleChange}>{errors.course_name && <div className='invalid-feedback'>{errors.course_name}</div>}
<option value="">Choose Course Name</option>
<option type="radio" value="Web Development">Web Development</option>
<option value="Academic Writing">Academic Writing</option>
<option value="Data Analysis">Data Analysis</option>
<option value="Computer Literacy">Computer Literacy</option>

</select>


</div>


{/* <input type="text" name='subject'  value={formData.subject} placeholder='Your Course' className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange}/> 

{errors.subject && <div className='invalid-feedback'>{errors.subject}</div>}
</div> */}



</div>

{/* <div className="flex-grow-1">

{coursePrice !== null && (
<input type="text" name='course_price'  value={`Course Price: ${coursePrice}`} className={`form-control ${errors.name && 'is-invalid'}`} onChange={handleChange}/> 

// {errors.subject && <div className='invalid-feedback'>{errors.subject}</div>}
)}


</div> */}

<textarea id="" cols="30" rows="10" className={`form-control mt-3 ${errors.message && 'is-invalid'}`} onChange={handleChange}  name="message"  value={formData.message}  placeholder='Enter your Message'></textarea>
{errors.message && <div className='invalid-feedback'>{errors.message}</div>}


<button className="btn btn-danger mt-2">Submit</button>
</form>






    </>
  )
}

export default Form
