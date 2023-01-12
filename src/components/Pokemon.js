import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const Pokemon = ({ pokemon }) => {
    const { isLoading } = useContext(PokemonContext);
    const navigate = useNavigate();
    return (
        <>
            {isLoading ? (
                <>
                    <Skeleton
                        animation='wave'
                        variant='rectangular'
                        width={210}
                        height={118}
                    />
                </>
            ) : (
                <Link to={`/pokemon/${pokemon.id}`}>
                    <div className='pokemon-card'>
                        <h1>{pokemon.name}</h1>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                            alt={`Pokemon ${pokemon?.name}`}
                        />
                    </div>
                </Link>
            )}
        </>
    );
};

export default Pokemon;
