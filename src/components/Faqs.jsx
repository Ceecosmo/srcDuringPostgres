import React from 'react'

function Faqs() {
  return (
    <> 
<br />
<br />
<br />
<br />

<div className="container pt-5">
<h2>FAQs:</h2>
    {/* <p className="d-inline-flex gap-1"></p> */}
    {/* <p className=""> */}
  <a className="btn btn-primary" style={{background: '#001F3F'}} data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1"><span style={{fontWeight:'bold'}}>Q1:</span> What skills will I gain from your Data Analysis course?</a>
 
  {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Toggle second element</button> */}
  {/* <button className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2">Toggle both elements</button> */}
{/* </p> */}

<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample1">
      <div className="card card-body">
        {/* Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger. */}

        <span style={{fontWeight:'bold'}}>Ans1:</span> Our Data Analysis course will equip you with the ability to collect, organize, and analyze data, as well as create visualizations and reports to inform business decisions. You'll learn tools like PowerBI, Excel, SQL, Python, and Tableau.
      </div>
    </div>
  </div>
 
</div>


<br></br>



    {/* <p className=""> */}
  <a className="btn btn-primary" style={{background: '#001F3F'}} data-bs-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="false" aria-controls="multiCollapseExample2"> <span style={{fontWeight:'bold'}}>Q2:</span> Can your Website Development course help me build a career in tech?</a>
{/* </p> */}

<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample2">
      <div className="card card-body">
      <span style={{fontWeight:'bold'}}>Ans2:</span> Absolutely! Our Website Development course teaches you how to design and build dynamic websites using HTML, CSS, JavaScript, and frameworks like WordPress. You'll gain skills to pursue a career in web development, e-commerce, or digital marketing.
      </div>
    </div>
  </div>
 
</div>
<br></br>

    {/* <p className=""> */}
  <a className="btn btn-primary" style={{background: '#001F3F'}} data-bs-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="false" aria-controls="multiCollapseExample3"> <span style={{fontWeight:'bold'}}>Q3:</span> How will your Academic Writing course improve my research skills?</a>
{/* </p> */}

<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample3">
      <div className="card card-body">
      <span style={{fontWeight:'bold'}}>Ans3:</span> Our Academic Writing course focuses on developing your writing, research, and critical thinking skills. You'll learn to structure academic papers, cite sources, and improve your writing style, preparing you for academic or professional research roles.
      </div>
    </div>
  </div>
 
</div>

<br></br>
    {/* <p className=""> */}
  <a className="btn btn-primary" style={{background: '#001F3F'}} data-bs-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="false" aria-controls="multiCollapseExample4">  <span style={{fontWeight:'bold'}}>Q4:</span> What are the benefits of taking your Computer Literacy course?
   
    </a>
{/* </p> */}

<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample4">
      <div className="card card-body">
      <span style={{fontWeight:'bold'}}>Ans4:</span> Our Computer Literacy course covers basic computer skills, software applications, and digital tools. You'll gain confidence in using technology, enhancing your productivity and employability in various industries.
      </div>
    </div>
  </div>
 
</div>
<br></br>

    {/* <p className=""> */}
  <a className="btn btn-primary" style={{background: '#001F3F'}} data-bs-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="false" aria-controls="multiCollapseExample5">     <span style={{fontWeight:'bold'}}>Q5:</span> Can your courses prepare me for industry-recognized certifications?
    </a>
{/* </p> */}

<div className="row">
  <div className="col">
    <div className="collapse multi-collapse" id="multiCollapseExample5">
      <div className="card card-body">
      <span style={{fontWeight:'bold'}}>Ans5:</span> Yes! Our courses are designed to prepare you for certifications like Google Analytics, HubSpot Inbound Marketing, and CompTIA A+. You'll gain practical skills and knowledge to succeed in your chosen field and enhance your career prospects.
      </div>
    </div>
  </div>
 
</div>
</div>
    </>
  )
}

export default Faqs