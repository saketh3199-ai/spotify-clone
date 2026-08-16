
import './App.css';
import { Switch,Route } from 'react-router-dom/cjs/react-router-dom.min';
import LoginScreen from './Screens/LoginScreen';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './Components/ProtectedRoute';
import HomeScreen from './Screens/HomeScreen';
import FeaturedPlayListScreen from './Screens/FeaturedPlayListScreen';
import CategoryPlayListScreen from './Screens/CategoryPlayListScreen';
import AlbumScreen from './Screens/AlbumScreen';
import NotFoundScreen from './Screens/NotFoundScreen';

const App = () => 
{
  const AppJsx = 
  <>
  <ToastContainer />
  <Switch>
      <Route exact path='/login' component={LoginScreen} />
      <ProtectedRoute exact path='/home' component={HomeScreen} />
      <ProtectedRoute exact path='/featured/:id' component={FeaturedPlayListScreen} />
      <ProtectedRoute exact path='/newrelease/:id' component={AlbumScreen} />
      <ProtectedRoute exact path='/category/:id' component={CategoryPlayListScreen} />
      <Route component={NotFoundScreen} />

  </Switch>
  </>


  return AppJsx
}

export default App