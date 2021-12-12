import { useEffect, useState, useCallback } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header"
import SideBar from "../../components/SideBar";
import { Container, AllCards} from './styled';
import api from '../../services/api';
import InfiniteScroll from 'react-infinite-scroll-component'

function AllPokemons(){
    const [isLoading, setIsLoading] = useState();
    const [pokemonsList, setPokemonsList] = useState();
    const [pokemons, setPokemons] = useState();

    const [offset, setOffset] = useState(0);
    
    // async function loadData() {
    //     setIsLoading(true)
    //     const response = await api.get('/pokemon', {
    //         params: {
    //           limit: 21,
    //         }});
    //     setPokemonsList(response.data);
    //     setPokemons(response.data.results)
    //     setIsLoading(false)
    // }

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

    useEffect(() => {
        console.log("lista de pokemons",pokemons)
    }, [pokemons])

    async function fetchMore() {
        setIsLoading(true)
        const response = await api.get(`${pokemonsList.next.substring(25)}`);
        setPokemonsList(response.data);
        setPokemons(...pokemons, response.data.results)
        setIsLoading(false)
    }

    return(
        <div style={{display:"flex", width: "100%"}}>
        <SideBar page={'AllPokemons'}/>
        <Container>
            <Header title="All Pokemons"/>
            <AllCards>
                {/* <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/> */}

                {/* <InfiniteScroll
                    dataLength={0}
                    next={fetchMore}  
                    hasMore={true}  
                    loader={<h4>Loading...</h4>}
                    className="scroll"
                >
                { pokemons?.map(pokemon => (
                    <Card pokemon={pokemon?.name} key={pokemon?.name}/>
                ))}
                </InfiniteScroll> */}
                { pokemons?.map(pokemon => (
                    <Card pokemon={pokemon?.name}/>
                ))}
            </AllCards>
        </Container>
        </div>
    )
}

export default AllPokemons;