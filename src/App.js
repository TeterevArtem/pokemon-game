import {Route, Switch, useLocation, Redirect} from 'react-router-dom';
import cn from 'classnames';
import HomePage from './routes/home';
import GamePage from './routes/game';
import AboutPage from './routes/about';
import ContactsPage from "./routes/contacts";
import MenuHeader from './component/menuHeader';
import Footer from './component/footer';
import { FirebaseContext } from './context/firebaseContext';
import s from './style.module.css';
import Firebase from './service/firebase';

const App = () => {
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board'

  return(
    <FirebaseContext.Provider value={new Firebase()}>
      <Switch>
         <Route path="/404" render={ () => (
           <h1>Page Not Found</h1> 
         )} />
        <Route>
          <>
            <MenuHeader bgActive={isPadding} />
            <div className={cn(s.wrap, {[s.isHomePage]: isPadding} )}>
              <Switch>           
                <Route path="/" exact component={HomePage}/>
                <Route path="/game" component={GamePage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/contacts" component={ContactsPage}/>
                <Route render={ () => (
                  <Redirect to="/404" />
                )} />
              </Switch>
            </div>            
            <Footer />
          </>
        </Route>
      </Switch> 
    </FirebaseContext.Provider>
  )
}

export default App;