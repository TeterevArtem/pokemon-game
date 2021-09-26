import { useContext, useEffect, useState  } from 'react';
import { useHistory } from 'react-router-dom';
import { PokemonContext } from '../../../../context/pokemonContext';
import PokemonCard from '../../../../component/pokemonCards';
import s from './style.module.css';
import PlayerBoard from './component/playerCard';

const BoardPage = () => {
    const {pokemons, pokemons2, getContextPlayer2Card, clean} = useContext(PokemonContext)
    
    const history = useHistory();
    const [board, setBoard] = useState([]);

    const [player1, setPlayer1] = useState( () => {
        return Object.values(pokemons).map( item => ({
            ...item,
            possession: "blue"
        }))
    })

    const [player2, setPlayer2] = useState( () => {
        return Object.values(pokemons2).map( item => ({
            ...item,
            possession: 'red'
        }))
    })

    const [steps, setSteps] = useState(0);
    const [choiseCard, setChoiseCard] = useState(null);
    
    if (Object.keys(pokemons).length === 0) {
        history.replace('/game');
    }

    const counterWin = (board, player1, player2) => {
        let player1Count = player1.length;
        let player2Count = player2.length;

        board.forEach( item => {
            if (item.card.possession === 'red') {
                player2Count++;
            }
            if (item.card.possession === 'blue') {
                player1Count++;
            }
        })
        return [player1Count, player2Count];
    }

    useEffect( () => {
        const fetchData = async() => {
            const boardResponse = await fetch('https://reactmarathon-api.netlify.app/api/board');
            const boardRequest = await boardResponse.json();
            setBoard(boardRequest.data); 

            const player2Response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
            const player2Request = await player2Response.json();
            setPlayer2( () => (
                player2Request.data.map( item => ({
                    ...item,
                    possession: "red" 
                }))
            ))
            getContextPlayer2Card( player2Request.data )
        }
        
        fetchData();
    },[getContextPlayer2Card])

    const handlerClickBoardPlate = async (position) => {
        if (choiseCard) {
            const params = {
                position,
                card: choiseCard,
                board
            }
            const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params),
            });

            const request = await res.json();

            if (choiseCard.player === 1) {
                setPlayer1(prevState => prevState.filter(item => item.id !== choiseCard.id));
            }
            if (choiseCard.player === 2) {
                setPlayer2(prevState => prevState.filter(item => item.id !== choiseCard.id));
            }

            setBoard(request.data)
            setSteps(prevState => {
                const count = prevState + 1;
                return count;
            })
           

        }
    }
    useEffect (() => {  
        if (steps === 9) {
            const [count1, count2] = counterWin(board, player1, player2)
            if (count1 > count2) {
                alert('win')
                
            }else if (count1 < count2) {
                alert('lose')
             
                
            }else{
                alert('draw')
            
                
            }
            history.replace('/game/finish')
        }
    },[steps, board, history, player1, player2, clean])


    return (
        <div className={s.root}>
            <div className={s.playerOne}>
                <PlayerBoard
                    player={1}
                    cards={player1} 
                    onClickCard={(card) => setChoiseCard(card)}    
                /> 
            </div>
            <div className={s.board}>
                {
                    board.map( item => (
                        <div className={s.boardPlate} 
                            key={item.position} 
                            onClick={() => {
                                !item.card && handlerClickBoardPlate(item.position)
                            }}>
                            {
                               item.card && <PokemonCard {...item.card} isActive minimaze/>
                            }
                        </div>
                    ))
                }
            </div>
            <div className={s.playerTwo}>
                 <PlayerBoard
                    player={2}
                    cards={player2}
                    onClickCard={(card) => setChoiseCard(card)}   
                /> 
            </div>
        </div>
    );
};

export default BoardPage;