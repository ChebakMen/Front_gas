import {Header} from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';
import {Exchanger} from './components/pages/Exchanger'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BadExchanger } from './components/pages/badExchanger/BadExchenger';



function App() {

  return (
    <div className="App">
       {/* настройитеть эффект при наведении и нажатии */}
        <Header /> 
       {/* <Router>
        <Switch >
            <Route exact path='/'>
              <Main />
            </Route>
            <Route exact path='/exchangeer'>
              <Exchangeer />
            </Route>
          </Switch>
       </Router> */}

       {/* <Exhanger /> */}

        <BrowserRouter>
        
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exchanger" element={<Exchanger />} />
            <Route path="/badExchenger" element={<BadExchanger />} />
          </Routes>
        </BrowserRouter>
        <Footer />
        
    </div>
  );
}

export default App;
