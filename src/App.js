import {Route, Switch, useLocation, Redirect} from 'react-router-dom';
import cn from 'classnames';
import {NotificationContainer} from 'react-notifications'; 
import HomePage from './routes/home';
import GamePage from './routes/game';
import AboutPage from './routes/about';
import ContactsPage from "./routes/contacts";
import MenuHeader from './component/menuHeader';
import Footer from './component/footer';
import { FirebaseContext } from './context/firebaseContext';
import s from './style.module.css';
import 'react-notifications/lib/notifications.css';
import FirebaseClass from './service/firebase';
import PrivateRoute from './component/privateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserAsync } from './store/users';
import { selectUserLoading } from './store/users';


const App = () => {
  const isUserLoading = useSelector(selectUserLoading)
  const location = useLocation();
  const isPadding = location.pathname === '/' || location.pathname === '/game/board'
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(getUserAsync())
  },[])

  if(isUserLoading) {
    return "is loading"
  }

  return(
    <FirebaseContext.Provider value={FirebaseClass}>
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
                <PrivateRoute path="/game" component={GamePage}/>
                <PrivateRoute path="/about" component={AboutPage}/>
                <PrivateRoute path="/contacts" component={ContactsPage}/>
                <Route render={ () => (
                  <Redirect to="/404" />
                )} />
              </Switch>
            </div>            
            <Footer />
          </>
        </Route>
      </Switch>
      <NotificationContainer />
    </FirebaseContext.Provider>
  )
}

export default App;