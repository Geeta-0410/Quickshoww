import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Calendar1Icon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {

 const navigate = useNavigate()

 
//   };

  return (
   <div className=' flex flex-col items-start justify-center gap-4px-6 md:px-16 lg:px-36  bg-[url("/backgroundImage.png")] bg-cover bg-center h-screen '>
 


        <img src={assets.marvelLogo} alt="Marvel Logo" className='max-h-11 lg:h-11 mt-20' />


<h1 className='text-5xl md:text-[70px] md:leading-18 font-semibold max-w-110' >Guardians <br/> of the Galaxy</h1>

<div className='flex items-center gap-4 text-gray-300 mt-6'>

<span>Action|Adventure| Sci-Fi</span>
<div className='flex items-center gap-1'>
    <Calendar1Icon className='w-4.4 h-4.5' />2025
</div>
<div className='flex items-center gap-1'>
    <ClockIcon className='w-4.4 h-4.5' />2h 8m
   
</div>
</div>
   <br/>
<p className='max-w-md text-gray-300'> Your one-stop destination for the latest movies, trending trailers, and theater showtimes!
🍿 Discover the newest blockbusters
🎟️ Book tickets at your favorite theaters

🍿 Discover the newest blockbusters
🎟️ Book tickets at your favorite theaters
❤️ Save your favourites to watch later
🔍 Search by genre, language, or release date
</p>

<button onClick={() => navigate('/movies')}
className= 'flex items-center px-6 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'>
    Explore Now
    <ArrowRight className="w-5 h-5" />
</button>
    </div>
  )
};  

export default HeroSection