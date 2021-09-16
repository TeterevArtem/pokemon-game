import { useRouteMatch } from 'react-router';
import {Route, Switch} from 'react-router-dom';
import cn from 'classnames';
import HomePage from './routes/home';
import GamePage from './routes/game';
import MenuHeader from './component/menuHeader';
import Footer from './component/footer';
import s from './style.module.css';

const App = () => {
  const match = useRouteMatch('/');
  return(
    
      <Switch>
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(s.wrap, {[s.isHomePage]: match.isExact} )}>
              <Switch>           
                <Route path="/" exact component={HomePage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/about" render={()=> <h1>This is about page!!!</h1>}/>
              </Switch>
            </div>            
            <Footer />
          </>
        </Route>
      </Switch> 
   
  )
}

export default App;