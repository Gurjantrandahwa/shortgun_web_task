import './App.scss';
import { Route, Routes} from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginPage from "./components/LoginPage";
import SignUp from "./components/SignUp";
import React from "react";
import {UserAuthContextProvider} from "./Common/UserAuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
    return <div className={"app"}>
        <UserAuthContextProvider>
            <Routes>
                <Route path='/home' element={
                    <ProtectedRoute>
                        <Homepage/>
                    </ProtectedRoute>
                }/>
                <Route path='/' element={<LoginPage/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
            </Routes>
        </UserAuthContextProvider>

    </div>

}

export default App;
