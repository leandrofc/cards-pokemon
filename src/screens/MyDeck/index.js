import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header"
import SideBar from "../../components/SideBar";
import { Container, AllCards} from './styled';
import { usePokemons } from "../../context/listPokemons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyDeck(){
    const [nameSearch, setNameSearch] = useState();
    const [isSearching, setIsSearching] = useState();
    const [typingTimer, setTypingTimer] = useState();

    const [searchedName, setSearchedName] = useState();

    useEffect(() => {
        clearTimeout(typingTimer);
        nameSearch && setTypingTimer(setTimeout(()=> searchPokemon(), 1000))
    }, [nameSearch])

    const { pokemonInMyDeck } = usePokemons();

    function searchPokemon() {
        const found = pokemonInMyDeck.find(element => element.name === nameSearch.toLowerCase());

        found && setSearchedName(found?.name)
        setIsSearching(true)

        !found && toast.error('Pokemon not found in deck!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
        
        !found && setNameSearch('')
    }

    useEffect(()=>{
        !isSearching && setNameSearch('');
        !isSearching && setSearchedName('')

    },[isSearching])

    useEffect(()=>{
        !nameSearch && setIsSearching(false)
    },[nameSearch])

    return(
        <div style={{display:"flex", width: "100%"}}>
        <SideBar page={'MyDeck'}/>
        <Container>
            <Header title="My Deck" value={nameSearch} onChange={setNameSearch} onClose={setIsSearching}/>
            <AllCards>
                {
                    !isSearching 
                    ?
                        pokemonInMyDeck?.map(pokemon =>
                            <Card pokemon={pokemon?.name}/>
                        )
                    :
                        <Card pokemon={searchedName}/>
                }   


                {
                    pokemonInMyDeck <= 0 && <p>No cards added yet...</p>
                }

            </AllCards>
            <ToastContainer />
        </Container>
        </div>
    )
}

export default MyDeck;