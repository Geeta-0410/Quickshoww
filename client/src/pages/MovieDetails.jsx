import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { dummyDateTimeData, dummyShowsData } from '../assets/assets';
import BlurCircle from '../components/BlurCircle';
import { HeartIcon, PlayCircleIcon, StarIcon } from 'lucide-react';
import DateSelect from '../components/DateSelect';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

// Helper function to format runtime (e.g. 2h 5m)
const timeFormat = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h}h ${m}m`;
};

const MovieDetails = () => {
  const navigate =useNavigate();


  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    const getShow = () => {
      const movieData = dummyShowsData.find(show => show._id === id);

   
      if (movieData) {
        setShow({
          movie: movieData,
          dateTime: dummyDateTimeData,
        });
      }
    };

    getShow();
  }, [id]);

  return show ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
        {/* Movie Poster */}
        <img
          src={show.movie.poster_path}
          alt={show.movie.title}
          className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'
        />

        {/* Movie Info */}
        <div className='relative flex flex-col gap-3'>
          <BlurCircle top='-100px' left='-100px' />

          <p className='text-primary'>ENGLISH</p>

          <h1 className='text-4xl font-semibold max-w-96 text-balance'>
            {show.movie.title}
          </h1>

          <div className='flex items-center gap-2 text-gray-300'>
            <StarIcon className='w-5 h-5 text-primary fill-primary' />
            {show.movie.vote_average.toFixed(1)} User Ratings
          </div>

          <p className='text-gray-400 text-sm leading-tight max-w-xl'>
            {show.movie.overview}
          </p>

          <p className='text-gray-300 text-sm'>
            {timeFormat(show.movie.runtime)} &bull;{' '}
            {show.movie.genres.map((genre) => genre.name).join(', ')} &bull;{' '}
            {new Date(show.movie.release_date).toLocaleDateString()}
          </p>

          {/* Action Buttons */}
          <div className='flex items-center gap-4 mt-4'>

            {/* Watch Trailer */}
            <button className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'>
              <PlayCircleIcon className='w-5 h-5' />
              Watch Trailer
            </button>

            {/* Buy Tickets */}
            <a
              href='#DateSelect'
              className='text-sm px-7 py-3 bg-primary text-black rounded-md font-medium hover:opacity-90 transition active:scale-95'
            >
              Buy Tickets
            </a>

            {/* Like Button */}
            <button className='p-3 rounded-full bg-gray-800 hover:bg-gray-900 transition active:scale-95'>
              <HeartIcon className='w-5 h-5 text-white' />
            </button>

          </div>
        </div>
      </div>

<p className='text-lg font-medium mt-20'> Your Favourite Cast</p>

<div className=' overflow-x-auto no-scrollbar mt-8 pb-4'>
  <div className='flex items-center w-max px-4 gap-4'>
    {show.movie.casts.slice(0,12).map((cast, index) => (
      <div key={index} className='flex flex-col items-center'>
        <img
          src={cast.profile_path}
          alt=" "
          className='rounded-full h-20 md:h-20 aspect-square'/>
        <p className='text-sm text-gray-300 mt-2'>{cast.name}</p>
      </div>
    ))}
  </div>
</div>

<DateSelect
  dateTime={show.dateTime}
  id={id}
/>

<p className='text-lg font-medium mt-20 mb-8'>You May Also like </p>
   <div className='flex flex-wrap max-sm:jusstify-center gap-8'>
    {dummyShowsData.slice(0, 4).map((movie,index) => (
    <MovieCard  key={index} movie={movie} />
    ))}
   </div>
   <div className='flex justify-center mt-20'>
<button onClick={()=>{navigate('/movies');scrollTo(0,0)}} className='px-10 py-3 text-sm bg-primay hover:bg-primay-dull transition rounded-md font-medium cursor-pointer'>Show More</button>

   </div>

    </div>
  ) : (
    <Loading />
  );
};

export default MovieDetails;
