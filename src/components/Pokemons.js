import { useContext } from 'react';
import { PokemonContext } from '../context/PokemonContext';
import { PokemonProvider } from '../context/PokemonProvider';
import Pokemon from './Pokemon';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Pokemons = () => {
    const { allPokemons, isLoading } = useContext(PokemonContext);
    return (
        <div>
            {isLoading ? (
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto ',
                    }}
                >
                    <Skeleton variant='rectangular' width={210} height={200} />
                    <Skeleton variant='rectangular' width={210} height={200} />
                    <Skeleton variant='rectangular' width={210} height={200} />
                    <Skeleton variant='rectangular' width={210} height={200} />
                </div>
            ) : (
                <div className='pokemon-container'>
                    {allPokemons.map((pokemon) => (
                        <Pokemon key={pokemon.id} pokemon={pokemon} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Pokemons;
