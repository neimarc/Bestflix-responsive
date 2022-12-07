import './home-styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';


function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function loadMovie() {
      const response = await fetch('https://tmdb-proxy.cubos-academy.workers.dev/3/discover/movie?language=pt-BR&include_adult=false', {
        method: 'GET'
      })

      const { results } = await response.json();
      setMovies(results)

    }

    loadMovie()

  }, [])

  return (
    <div className='home-box'>
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
