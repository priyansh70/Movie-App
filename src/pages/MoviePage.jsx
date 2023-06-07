import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const MoviePage = () => {
  const location = useLocation();
  const movie = location?.state?.movie;
  const rating = movie?.show?.rating?.average;
  // console.log(location)

  const navigate = useNavigate()

  // console.log(movie)

  const clickHander = () => {
    navigate(`bookmovie`, { state: { movie } });
  }

  return (
    <div className="w-11/12 mx-auto flex sm:flex-row flex-col gap-x-10 sm:gap-y-0 gap-y-10 justify-center items-center">
      <div className="sm:w-[25%] w-10/12 grid place-items-center blue__gradient border-[1px] border-gray-400 rounded-lg">
        <div className="max-w-[250px] py-8 px-1">
          <img
            src={movie.show.image.original}
            alt="movieImage"
            className="object-contain rounded-md w-full h-full"
          />
        </div>
      </div>
      <div className="flex-1 font-poppins py-5 px-10 border-[1px] border-gray-400">
        <div className="flex my-4 items-center justify-center">
          <h2 className="font-bold leading-4 tracking-wider text-3xl text-yellow-400">
            {movie.show.name}
          </h2>
        </div>
        <div dangerouslySetInnerHTML={{ __html: movie?.show?.summary }} className="text-lg tracking-normal leading-normal my-6 text-slate-200">
        </div>
        <div className="flex my-4 gap-x-6 items-center justify-center">
          {
            movie?.show?.genres.map((genre,index) => (
              <div key={index} className="flex items-center justify-center">
                <p className="text-slate-200 bg-gray-700 px-3 py-2 rounded-full text-base font-semibold">{genre}</p>
              </div>
            ))
          }
        </div>
        <div className="font-poppins text-slate-200 font-medium">
          <p>Language : <span className="font-semibold text-sky-100">{movie?.show?.language}</span></p>
          <p>Runtime : <span className="font-semibold text-sky-100">{movie?.show?.runtime} Minute</span></p>
          <p className='mt-1 '>Rating : <span className="bg-yellow-500 text-black px-2 py-1 rounded-full font-bold ">{rating !== null ? rating : 7}/10</span></p>
        </div>
        <button
          className='w-full text-white font-poppins text-lg font-medium bg-indigo-950	rounded-md px-4 py-1 my-5 hover:bg-indigo-600 transition-all duration-200'
          onClick={() => {
            clickHander()
          }}>
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MoviePage;
