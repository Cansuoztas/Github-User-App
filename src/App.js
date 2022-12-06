import './App.css';
import AppRouter from './router/AppRouter';
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [allFollowers, setAllFollowers] = useState([]);
  const [allFollowing, setAllFollowing] = useState([]);
  const [validUser, setvalidUser] = useState("");

  const [userName, setUsername] = useState(sessionStorage.getItem("userName"))

  const getFollowers = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users/${userName}/followers?per_page=100`)
      setAllFollowers(data)
    } catch (error) {
      setvalidUser("User not found. Please check your username and try again.. 👀")
    }

  }

  const getFollowing = async () => {

    try {
      const { data } = await axios.get(`https://api.github.com/users/${userName}/following?per_page=100`)
      setAllFollowing(data)
    } catch (error) {
      console.log("test");
    }

  }

  useEffect(() => {
    getFollowers();
    getFollowing();
  }, [])


  return (
    <div className="container">
      <AppRouter allFollowers={allFollowers} allFollowing={allFollowing} validUser={validUser} />
    </div>
  );
}

export default App;