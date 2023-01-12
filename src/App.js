import { useContext, useState } from 'react';

import { PokemonContext } from './context/PokemonContext';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './index.css';
import Error from './components/Error';
import SinglePokemonPage from './pages/SinglePokemonPage';
function App() {
    const { allPokemons } = useContext(PokemonContext);
    const [urls, setUrls] = useState([]);

    return (
        <div className='App'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/pokemon/:id'
                        element={<SinglePokemonPage />}
                    />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
