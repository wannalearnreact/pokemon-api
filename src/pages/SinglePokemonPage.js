import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SinglePokemonPage = () => {
    const { getPokemonByID, setIsLoading, isLoading, checkType, refreshPage } =
        useContext(PokemonContext);
    const [singlePokemon, setSinglePokemon] = useState({});
    const { id } = useParams();

    const getSinglePokemon = async (id) => {
        console.log(isLoading);
        const result = await getPokemonByID(id);
        setSinglePokemon(result);
        setIsLoading(false);
    };

    useEffect(() => {
        getSinglePokemon(id);
    }, [id]);
    {
        console.log(singlePokemon);
    }

    return (
        <>
            {isLoading ? (
                <Skeleton variant='rectangular' width={210} height={118} />
            ) : (
                <div>
                    <div>
                        <div>#{singlePokemon.id}</div>
                        <div>{singlePokemon.name}</div>

                        {singlePokemon?.types.map((type) => (
                            <div key={type.id}>
                                <span>{type.type.name}</span>
                                <img
                                    src={
                                        type.type.name
                                            ? checkType(type.type.name)
                                            : ''
                                    }
                                    alt='aaa'
                                />
                            </div>
                        ))}

                        <div>
                            <span>Height</span>{' '}
                            <div>{singlePokemon.height / 10}m</div>
                        </div>
                        <div>
                            <span>Weight</span>{' '}
                            <div>{singlePokemon.weight / 10}kg</div>
                        </div>
                    </div>
                    <div className='container-img-pokemon'>
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${singlePokemon.id}.svg`}
                            alt={`Pokemon ${singlePokemon?.name}`}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default SinglePokemonPage;
