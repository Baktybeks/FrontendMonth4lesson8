import './App.css';
import PokemonsPage from './pages/PokemonsPage/PokemonsPage';
import { BrowserRouter, Route, Router, Routes, useParams } from 'react-router-dom';
import FormPage from './pages/FormPage/FormPage';
import PokemonInfoPage from './pages/pokemonInfoPage/PokemonInfoPage';
import Menu from './components/menu/Menu';


function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path={'/'} element={<FormPage/>}/>
                <Route path={'/pokemon'} element={<PokemonsPage/>}/>
                <Route path={'/pokemon/:id'} element={<PokemonInfoPage/>}/>

            </Routes>
            <Menu/>

        </BrowserRouter>
    );
}


export default App;
