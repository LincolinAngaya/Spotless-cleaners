import React from 'react'
import { Link } from 'react-router-dom'; 
import Footer from '../Footer/Footer'
import kitchen from '../assets/kitchen.jfif'
import bathroom from '../assets/toilet.jpg'
import room from '../assets/room.jfif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function PostConstruction() {
  return (
    <div>
    <div className='bg-gradient-to-r from-customBlue to-sky text-white p-6 text-center font-signature text-3xl mb-4'>
   Post Construction
  </div>

  <div className='mx-10 mt-5'>
  <h1 className=' text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue mt-[-0.5rem]'>What Makes Spotless Guru the Best Choice for Post-Construction Cleaning?</h1>
  <p className='text-left text-gray-500 font-poppins lg:font-sans text-lg'>We transform construction sites into pristine spaces with meticulous attention to detail and unparalleled expertise in post-construction cleaning. Trust Spotless Guru to make your new or renovated space spotless and ready for use!</p>
   
  <h1 className='font-bold font-signature mt-4 text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-customBlue'>
  Our Post Construction Cleaning Includes
</h1>
    </div>   
    <div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-9 py-8'>
      
    <img src={kitchen}  className='rounded-r-lg' height="400" width="500" alt='post construction' />
      <div>
      <h1 className='font-bold font-signature text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mt-3 text-customBlue'>Initial Cleaning (Rough Cleaning)</h1>
      <ul className='p-3  text-gray-500 font-poppins lg:font-sans text-lg'>

      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Debris Removal: Clear large debris, leftover materials, and trash</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Sweeping and Vacuuming: Remove dust and dirt from floors, walls, and surfaces.</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust Removal: Eliminate dust from surfaces, light fixtures, vents, and exposed ductwork.</li>

      </ul>
      <Link to="/booking" className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer' type="button">
       Book Now
     </Link>
      </div>
      </div>

     <div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-8 py-8'>
      <div>
      <h1 className='font-bold font-signature text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl  text-customBlue'> Detailed Cleaning (Final Cleaning)</h1>
      
      <ul className='p-3  text-gray-500 font-poppins lg:font-sans text-lg'>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Tile and Grout Cleaning.</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span> Vacuum and deep clean carpets to remove  residues.</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Hardwood/Hard Floor Cleaning.</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dusting and Wiping counters, shelves, and cabinetry.</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Cleaning Windows and Frames.</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Sanitizing Countertops.</li> 
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span> Clean the exterior and interior of appliances.</li> 
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Polishing Mirrors and Glass</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Cleaning Air Vents and Ducts
      </li>
    </ul>
    <Link to="/booking" className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer' type="button">
       Book Now
     </Link>
    

    </div>
    <img src={bathroom}  className='rounded-l-lg' height="400" width="500" alt='hand washing' />
</div>


<div className='flex flex-col lg:flex-row mx-10 space-x-5 lg:space-x-8 py-8'>
     
<img src={room}  className='rounded-r-lg' height="400" width="500" alt='dish washing' />
      <div>
      <h1 className='font-bold font-signature text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl mt-3 text-customBlue'> Touch-Up Cleaning (Ongoing or After Inspections)</h1>
      <ul className='p-3  text-gray-500 font-poppins lg:font-sans text-lg'>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Spot Cleaning: Address missed spots or new messes after initial cleaning.</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Dust Control: Re-dust surfaces to keep them dust-free until occupancy.</li>
      <li className='flex items-center'><span className='text-customBlue mr-2'> <FontAwesomeIcon icon={faCheckCircle} /> </span>Polishing and Buffing: Final touch-ups on floors and surfaces to maintain shine.</li>

      </ul>
      <Link to="/booking" className='bg-customBlue text-white text-base px-6 py-2 rounded-md m-4  hover:bg-sky hover:text-customBlue cursor-pointer' type="button">
      Book Now
    </Link>
         </div>
      </div>
     
      <Footer />

    </div>
  )
}

export default PostConstruction
