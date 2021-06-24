import './App.css';
import { Provider } from 'react-redux'
import CakeContainer from './components/CakeContainer'
import IcecreamContainer from './components/IcecreamContainer'
import store from './redux/store'

function App() {
  return (
     <Provider store = {store}>
         <div className="container">
           <div className="app-wrapper">
            <CakeContainer/>
            </div>
            
            <div className="app-wrapper">
            <IcecreamContainer />
            </div>
         </div>
    </Provider>
  );
}

export default App;
