import { useLoaderData } from "react-router-dom";

const Users = () => {
  const users = useLoaderData();
    console.log(users);
  return (
    <div>
      <h2>userid</h2>
    </div>
  );
};

export default Users;
