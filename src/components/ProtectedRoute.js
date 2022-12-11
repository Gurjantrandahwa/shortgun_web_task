import React from "react";
import {Navigate} from "react-router-dom";
import {useUserAuth} from "../Common/UserAuthContext";

function ProtectedRoute({children}) {
    const {user} = useUserAuth();

    if (!user) {
        return <Navigate to={"/home"}/>
    }
    return children;
}

export default ProtectedRoute