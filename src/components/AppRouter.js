import React from 'react'
import {  BrowserRouter ,  Route,  Routes,} from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import {useAuth} from "../Common/AuthContext";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import Homepage from "../pages/Homepage";

export default function AppRouter() {
  return  <BrowserRouter>

      <Routes>

          <Route path='homepage/' element={<Homepage/>} />
          {/*<div className={"app"}>*/}
              <Route  path='/' element={<LoginPage/>} />
              <Route  path='/register' element={<RegisterPage/>} />
              <Route  path='/forgot-password' element={<ForgotPasswordPage/>} />
              <Route  path='/reset-password' element={<ResetPasswordPage/>} />

          {/*</div>*/}



      </Routes>
    </BrowserRouter>

}

// function ProtectedRoute(props) {
//   const { currentUser } = useAuth()
//   const { path } = props
//   console.log('path', path)
//   const location = useLocation()
//   console.log('location state', location.state)
//
//   if (
//     path === '/login' ||
//     path === '/register' ||
//     path === '/forgot-password' ||
//     path === '/reset-password'
//   ) {
//     return currentUser ? (
//       <Redirect to={location.state?.from ?? '/profile'} />
//     ) : (
//       <Route {...props} />
//     )
//   }
//   return currentUser ? (
//     <Route {...props} />
//   ) : (
//     <Redirect
//       to={{
//         pathname: '/login',
//         state: { from: path },
//       }}
//     />
//   )
// }
