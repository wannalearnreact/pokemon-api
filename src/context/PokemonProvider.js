import { useEffect, useState } from 'react';
import { PokemonContext } from './PokemonContext';
import bug from '../assets/icons/bug.svg';
import dark from '../assets/icons/dark.svg';
import dragon from '../assets/icons/dragon.svg';
import electric from '../assets/icons/electric.svg';
import fairy from '../assets/icons/fairy.svg';
import fighting from '../assets/icons/fighting.svg';
import fire from '../assets/icons/fire.svg';
import flying from '../assets/icons/flying.svg';
import ghost from '../assets/icons/ghost.svg';
import grass from '../assets/icons/grass.svg';
import ground from '../assets/icons/ground.svg';
import ice from '../assets/icons/ice.svg';
import normal from '../assets/icons/normal.svg';
import poison from '../assets/icons/poison.svg';
import psychic from '../assets/icons/psychic.svg';
import rock from '../assets/icons/rock.svg';
import steel from '../assets/icons/steel.svg';
import water from '../assets/icons/water.svg';
export const PokemonProvider = ({ children }) => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(undefined);
    const [offset, setOffset] = useState(0);

    const url = ' https://pokeapi.co/api/v2/';

    const fetchAllPokemons = async (limit = 5) => {
        try {
            const res = await fetch(
                `${url}pokemon?limit=${limit}&offset=${offset}`
            );
            const data = await res.json();

            const promises = data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                const data = await res.json();
                return data;
            });
            const results = await Promise.all(promises);

            setAllPokemons([...allPokemons, ...results]);
        } catch (error) {
            setError(error.message || 'Something went wrong');
        }
        setIsLoading(false);

        /*   const res = await fetch(
            `${url}pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await res.json();

        const promises = data.results.map(async (pokemon) => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const results = await Promise.all(promises);

        setAllPokemons([...allPokemons, ...results]); */
    };

    const getPokemonByID = async (id) => {
        const url = 'https://pokeapi.co/api/v2/';

        const res = await fetch(`${url}pokemon/${id}`);
        const data = await res.json();

        return data;
    };

    const loadMorePokemons = (limit) => {
        setOffset(offset + 5);
    };

    const checkType = (type) => {
        switch (type) {
            case 'bug':
                return bug;
                break;
            case 'dark':
                return dark;
                break;
            case 'dragon':
                return dragon;
                break;
            case 'electric':
                return electric;
                break;
            case 'fairy':
                return fairy;
                break;
            case 'fighting':
                return fighting;
                break;
            case 'fire':
                return fire;
                break;
            case 'flying':
                return flying;
                break;
            case 'ghost':
                return ghost;
                break;
            case 'grass':
                return grass;
                break;
            case 'ground':
                return ground;
                break;
            case 'ice':
                return ice;
                break;
            case 'normal':
                return normal;
                break;
            case 'poison':
                return poison;
                break;
            case 'psychic':
                return psychic;
                break;
            case 'rock':
                return rock;
                break;
            case 'steel':
                return steel;
                break;
            case 'water':
                return water;
                break;
            default:
                return null;
        }
    };

    const refreshPage = () => {
        window.location.reload();
    };
    useEffect(() => {
        const timer = setTimeout(() => {
            fetchAllPokemons();
        }, 1000);

        return () => clearTimeout(timer);
    }, [offset]);
    return (
        <PokemonContext.Provider
            value={{
                allPokemons,
                getPokemonByID,
                error,
                loadMorePokemons,
                isLoading,
                setIsLoading,
                checkType,
                refreshPage,
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};
