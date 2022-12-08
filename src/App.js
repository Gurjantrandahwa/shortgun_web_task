
import './App.scss';
import AuthContextProvider from "./Common/AuthContext";
import AppRouter from "./components/AppRouter";

function App() {
  return       <AuthContextProvider>
    <div className={"app"}>
      <AppRouter />
    </div>

  </AuthContextProvider>
}

export default App;
