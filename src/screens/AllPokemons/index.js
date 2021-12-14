import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header"
import SideBar from "../../components/SideBar";
import { Container, AllCards} from './styled';
import api from '../../services/api';
import InfiniteScroll from 'react-infinite-scroll-component'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AllPokemons(){
    const [isLoading, setIsLoading] = useState();
    const [pokemonsList, setPokemonsList] = useState();
    const [pokemons, setPokemons] = useState([]);
    const [typingTimer, setTypingTimer] = useState()

    const [offset, setOffset] = useState(0);

    const [nameSearch, setNameSearch] = useState();
    const [pokemonSearch, setPokemonSearch] = useState();
    const [isSearching, setIsSearching] = useState();
    const [pokemonNotFound, setPokemonNotFound] = useState(false);

    useEffect(() => {
        clearTimeout(typingTimer);
        nameSearch && setTypingTimer(setTimeout(()=> searchPokemon(), 1000))
    }, [nameSearch])

    async function searchPokemon() {
        setIsLoading(true)

        try{
            const response = await api.get(`/pokemon/${nameSearch}`);
            setPokemonSearch(response.data)
            setIsLoading(false)
            setIsSearching(true)
            setPokemonNotFound(false)
        } catch{
            setPokemonNotFound(true)
            toast.error('Pokemon not found!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            setNameSearch('')
        }
    }

    useEffect(()=>{
        !isSearching && setNameSearch('')
    },[isSearching])

    useEffect(()=>{
        !nameSearch && setIsSearching(false)
    },[nameSearch])

    async function loadData() {
        setIsLoading(true)
        const response = await api.get('/pokemon', {
            params: {
              limit: 21,
              offset: offset
            }});
        setOffset(offset + 21)
        setPokemonsList(response.data);
        setPokemons(response.data.results)
        setIsLoading(false)
    }

    useEffect(() => {
        loadData();
    }, [])

    async function fetchMore() {
        setIsLoading(true)
        const response = await api.get(`${pokemonsList.next.substring(25)}`);
        setPokemonsList(response.data);
        setPokemons([...pokemons, ...response.data.results])
        setIsLoading(false)
    }

    return(
        <div style={{display:"flex", width: "100%"}}>
        <SideBar page={'AllPokemons'}/>
        <Container>
            <Header title="All Pokemons" value={nameSearch} onChange={setNameSearch} onClose={setIsSearching}/>
            <AllCards>
                <InfiniteScroll
                    dataLength={pokemons?.length}
                    next={fetchMore}
                    hasMore={true}
                    className="scroll"
                >
                    {
                        !isSearching ?
                            pokemons?.map(pokemon =>
                                <Card pokemon={pokemon?.name} key={pokemon?.name}/>
                        )
                        :
                            <Card pokemon={pokemonSearch?.name}/>
                    }       
                    <ToastContainer />
                </InfiniteScroll>
            </AllCards>
        </Container>
        </div>
    )
}

export default AllPokemons;