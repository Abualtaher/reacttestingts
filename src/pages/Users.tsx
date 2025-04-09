import { useState, useEffect } from "react";
type User = {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
  };
};

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data: User[]) => setUsers(data))
      .catch((error) => console.error("Failed to fetch", error));
  }, []);
  return (
    <div className="container">
      {users.map((user) => (
        <div className="card" key={user.id}>
          <img
            src={`https://i.pravatar.cc/150?img=${user.id}`}
            alt={user.name}
            className="avatar"
          />
          <h4>{user.name}</h4>
          <h5>{user.email}</h5>
          <p>
            Address:
            <span>{user.address.city}</span>
            <span>{user.address.street}</span>
            <span>{user.address.suite}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Users;
