import {Route, Switch, useRouteMatch, Redirect} from 'react-router-dom';
import cn from 'classnames';
import HomePage from './routes/home';
import GamePage from './routes/game';
import AboutPage from './routes/about';
import ContactsPage from "./routes/contacts";
import MenuHeader from './component/menuHeader';
import Footer from './component/footer';
import s from './style.module.css';

const App = () => {
  const match = useRouteMatch('/');

  return(
    
      <Switch>
         <Route path="/404" render={ () => (
           <h1>Page Not Found</h1> 
         )} />
        <Route>
          <>
            <MenuHeader bgActive={!match.isExact} />
            <div className={cn(s.wrap, {[s.isHomePage]: match.isExact} )}>
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
   
  )
}

export default App;