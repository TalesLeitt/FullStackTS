import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Account from "./pages/Account";
import { useContext } from "react";
import { AppContext } from "./components/AppContext";

const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext);

    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/account/:id' element={isLoggedIn ? <Account/> : <Home/> }/>
        </Routes>
    )
}

export default MainRoutes;