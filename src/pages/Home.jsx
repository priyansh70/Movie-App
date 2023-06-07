import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {baseURL} from "../baseURL";
import Spinner from "../components/Spinner";
import MovieCard from '../components/MovieCard';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true)

  async function fetchData() {
    setLoading(true);

    const { data } = await axios.get(baseURL);
    console.log(data)
    setMovies(data)
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {
        loading ? 
        (<Spinner />) :  
        (
          <div className='flex sm:flex-row flex-col flex-wrap mx-auto w-11/12 items-center justify-start my-10 gap-x-10 gap-y-12'>
            {
              movies.map((movie) => (<MovieCard key={movie.show.id} movie={movie}/>))
            }
          </div>
        )
      }
    </div>
  )
}

export default Home