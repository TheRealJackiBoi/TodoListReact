import "./App.css";
import TodoGroup from "./components/TodoGroup";
import {useEffect, useState} from "react";
import Login from "./components/auth/Login";


function App() {

  const [groups, setGroups] = useState([]);
  const [user, setUser] = useState(null);
  
  
  useEffect(() => {
    // TODO: fetch groups from api using user service
    setGroups[{}]
  }, [user])

  const handleSetUser = (user) => {
    setUser(user);
  }


  return (
    <div className="">

      {/* Login */}
      <Login handleSetUser={handleSetUser} />

      {/* TodoGroups */}
      {groups.map((group, index) => 
        <TodoGroup key={index} group={group}/>
        )}
      <TodoGroup />
    </div>
  );
}

export default App;
