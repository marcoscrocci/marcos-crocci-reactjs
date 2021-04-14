import './App.css';
import Routers from './Routers'
import { getLanguage } from './Utils'


function App() {

    console.log('getLanguage =', getLanguage());

    return (
        <div>
            <Routers />
        </div>
    );
}

export default App;
