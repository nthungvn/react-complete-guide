import { useState } from 'react';
import AddUser from './components/AddUser/AddUser';
import UserList from './components/UserList/UserList';

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (user) => {
    setUsers((prevData) => [user, ...prevData]);
    console.log(user);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}

export default App;
