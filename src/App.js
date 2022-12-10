import './App.scss';
import { Route, Routes} from "react-router-dom";
import Homepage from "./Pages/Homepage";
import LoginPage from "./Pages/LoginPage";
import SignUp from "./Pages/SignUp";
import React from "react";
import {UserAuthContextProvider} from "./Common/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import {Container} from "@mui/material";

function App() {
    return <div className={"app"}>
        <Container maxWidth={"xl"}>
            <UserAuthContextProvider>
                <Routes>
                    <Route path='/home' element={
                        <ProtectedRoute>
                            <Homepage/>
                        </ProtectedRoute>
                    }/>

                    <Route path='/' element={<div className={"background"}><LoginPage/></div>}/>
                    <Route path='/signUp' element={<div className={"background"}><SignUp/></div>}/>


                </Routes>
            </UserAuthContextProvider>
        </Container>


    </div>

}

export default App;
