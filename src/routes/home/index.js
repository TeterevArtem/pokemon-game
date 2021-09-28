import Header from '../../component/header';
import Footer from '../../component/footer';
import Layout from '../../component/layout';
import Bg1 from '../../assets/bg1.jpg';
import Bg2 from '../../assets/bg3.jpg';
import {color} from '../../assets/services/index.js'
import { useHistory } from 'react-router';
;


const HomePage = () => {

  const history = useHistory()
  const handlerClickButton = () => {
    history.replace('/game')
  }
  return (
    <>
      <Header title="This is title" descr="This is Description!" onClickButton={handlerClickButton}/>
      <Layout title="This is layout 1" urlBg={Bg1}>
        <p>
          In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
            Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.

            To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. 
        </p>
      </Layout>
      <Layout title="This is layout 2" descr="This is Description! 2" colorBg={color}>
      </Layout>
      <Layout title="this is layout 3" descr="This is Description! 3" urlBg={Bg2}>
        <p>
          In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
          Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.

          To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. 
        </p>
      </Layout>
      
      <Footer />
    </>
  );
}

export default HomePage;
