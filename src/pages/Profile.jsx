import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {!user ? (
        <h1>Not logged in</h1>
      ) : (
        <h1>
          {console.log(user)}Profile: {user.username}
        </h1>
      )}
      <h2>More components</h2>
    </div>
  );
};

export default Profile;
