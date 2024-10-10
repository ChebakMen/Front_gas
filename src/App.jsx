import {Header} from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './components/main/Main';



function App() {

  return (
    <div className="App">
       {/* настройитеть эффект при наведении и нажатии */}
       <Header /> 
       <Main />
       <Footer />
    </div>
  );
}

export default App;
