import './App.css'
import { AiFillApi } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";

function App() {

  return (
    <>
       <section >
        <div className="secFtopP">
        <div className='secFtop'>
          <button>How it works</button>
          <h1>A Step-by-Step Guide to Our Platform</h1>
          <p>Explore our platform with ease! Sign up, select your industry, and seamlessly integrate our tailored payment solutions.</p>
        </div>
        </div>
        <div className='secFbottom '>
          <div>
            <AiFillApi className='icon' />
            <h3>Run Your First Payroll</h3>
            <p>Join our platform effortlessly! Streamlined user registration with secure verification.</p>
          </div>
          <div>
             <AiFillApi className='icon' />
             <h3>Run Your First Payroll</h3>
             <p>Join our platform effortlessly! Streamlined user registration with secure verification.</p>
          </div>
          <div>
          <AiFillApi className='icon' />
          <h3>Run Your First Payroll</h3>
          <p>Join our platform effortlessly! Streamlined user registration with secure verification.</p>
          </div>
        </div>

       </section>

       <section className='sectionS'>
        <div>
          <div className='left'>
            <h1>We’ve got everything you need?</h1>
            <p>We save you from all that boring paperwork! From global hiring, to instant payments, and taxes, we’ve got your back.</p>
            <button>Contact Us<FaLocationArrow /></button>
          </div>
          <div className='right'>
            <img src="https://softivuspro.com/accupay/main/assets/images/contact_illus.png" alt="" />
          </div>
        </div>

       </section>
    </>
  )
}

export default App
