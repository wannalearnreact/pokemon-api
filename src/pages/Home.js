import { useContext } from 'react';
import Pokemons from '../components/Pokemons';
import { PokemonContext } from '../context/PokemonContext';

const Home = () => {
    const { loadMorePokemons } = useContext(PokemonContext);
    return (
        <div>
            <Pokemons />
            <button onClick={loadMorePokemons}>Load more pokemons</button>
        </div>
    );
};

export default Home;
