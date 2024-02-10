import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Home from "./components/Home";


function App() {
    return (
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/sign-in' element={<SignIn />}/>
              <Route path='/sign-up' element={<SignUp />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
