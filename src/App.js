import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import { Home } from './pages/Home';
import { Header } from './components/Header';


function App() {
   return (
      <Provider store={store}>
         <Router basename='/Jordan'>
            <Header/>
               <main>
               <Routes>
                  <Route exact path="/:id" element={<Home />} />
               </Routes>
               </main>
         </Router>
      </Provider>
   );
}

export default App;
