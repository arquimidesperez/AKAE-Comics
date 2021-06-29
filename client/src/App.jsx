import './App.css';
import { useState, useEffect } from 'react'
import Home from './screens/Home/Home'
import ComicBrowse from './screens/ComicBrowse/ComicBrowse'
import ComicCreate from './screens/ComicCreate/ComicCreate'
import ComicEdit from './screens/ComicEdit/ComicEdit'
import ComicDetail from './screens/ComicDetail/ComicDetail'
import { Route, Switch, Redirect } from 'react-router-dom'
// import { verifyUser } from './services/users'
import SignUp from './screens/SignUp/SignUp'
import Login from './screens/Login/Login'
import Logout from './screens/Logout/Logout'

// const App = () => {
//   const [user, setUser] = useState(null)

//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = await verifyUser()
//       user ? setUser(user) : setUser(null)
//     }
//     fetchUser()
//   }, [])

function App() {
  return (
    <div className="App">
        Hello!
    </div>
  );
}

export default App;