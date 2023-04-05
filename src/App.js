import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Landing } from './components/landing/Landing';
import { Encrypt } from './components/encryptmenu/Encrypt';

function App() {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                     <Route path={"/"}  element={<Landing/>}/>
                     <Route path={"/encrypt"} element={<Encrypt/>}/>   
                </Routes>
            </div>
        </BrowserRouter>
  );
}

export default App;
