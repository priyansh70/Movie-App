import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie , btn}) => {
  const navigate = useNavigate();

  const rating = movie?.show?.rating?.average;
  // console.log(movie?.show?.rating?.average)
  const clickHander = () => {
    navigate(`movie/${movie.show.id}`, { state: { movie } });
  }

  return (
    <div className='flex flex-col blue__gradient px-5 py-6 border-[1px] border-gray-400 rounded-lg hover:scale-105 transition-all duration-300'>
      {/* image  */}
      <div className='rounded-md max-w-[250px]'>
        <img src={movie?.show?.image?.medium} alt="movieImage" className='object-contain rounded-md' />
      </div>

      <div className='my-5 mx-auto flex items-center justify-between w-full'>
        <h3 className='text-white font-poppins leading-5 stroke tracking-wide text-xl font-bold'>{movie?.show?.name}</h3>
        <p className='bg-yellow-500 px-2 py-1 rounded-full font-bold'>{rating !== null ? rating : 7}/10</p>
      </div>

      <button
        className='w-full text-white font-poppins text-lg font-medium bg-indigo-950	rounded-md px-4 py-1 mt-3 hover:bg-indigo-600 transition-all duration-200'
        onClick={() => {
          clickHander()
        }}>
        See More
      </button>
    </div>
  )
}

export default MovieCard