//Importações React
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Páginas
import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { AdminRoom } from './pages/AdminRoom';

//Contextos
import { AuthContextProvider } from './contexts/AuthContext';
import { Room } from './pages/Room';

function App() {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/rooms/new" exact component={NewRoom} />
          <Route path="/rooms/:id" component={Room}></Route>
          <Route path="/admin/rooms/:id" component={AdminRoom}></Route>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
