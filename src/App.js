import { Route } from 'react-router';
import MainHeader from './components/MainHeader';
import Products from './pages/Products';
import Welcome from './pages/Welcome';

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>
      <main>
        <Route path="/products">
          <Products />
        </Route>
        <Route path={['/welcome', '/']}>
          <Welcome />
        </Route>
      </main>
    </div>
  );
}

export default App;
