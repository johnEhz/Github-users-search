import React, { useState } from "react";
import { getUserByName } from "./services/getUserByName"; //AxiosGetUser
import { user } from "./types"; //user Definition
import UserCard from "./components/UserCard/UserCard"; //Component
import { AiOutlineSearch } from 'react-icons/ai'
//Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [userName, setUserName] = useState<string>("");
  const [User, setUser] = useState<user>();

  const handleSearchUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const load = toast.loading("Please wait...");
    await getUserByName(userName)
      .then((res) => {
        const {
          node_id,
          name,
          login,
          avatar_url,
          created_at,
          bio,
          public_repos,
          followers,
          following,
          location,
          blog,
          twitter_username,
          company,
        } = res.data;
        setUser({
          node_id,
          name,
          login,
          avatar_url,
          created_at: new Date(created_at),
          bio,
          public_repos,
          followers,
          following,
          location,
          blog,
          twitter_username,
          company,
        });
        toast.update(load, {
          render: "User loaded",
          type: "success",
          isLoading: false,
          closeButton: true,
          theme: 'dark',
          autoClose: 3000
        });
      })
      .catch((err) => {
        toast.update(load, {
          render: "User not founded",
          type: "error",
          isLoading: false,
          closeButton: true,
          theme: 'dark',
          autoClose: 3000
        });
      });
  };

  const handleChangeUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <div className="App">
      <ToastContainer />
      <header>
        <h1>devfinder</h1>
        <input type="radio" />
      </header>
      <form onSubmit={handleSearchUser}>
        <AiOutlineSearch size={60} className="search-item"/>
        <input type="text" name="userName" onChange={handleChangeUserName} placeholder="Search GitHub username..."/>
        <button>Search</button>
      </form>
      {User ? <UserCard user={User} /> : null}
    </div>
  );
}

export default App;
