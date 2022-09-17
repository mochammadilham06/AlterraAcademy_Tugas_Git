import React from "react";
import ProfilePage from "./Modules/Profile/ProfilePage";
import { mockUser } from "./API/mockData";

function App(props) {
  return (
    <div>
      <ProfilePage users={mockUser} />
    </div>
  );
}

export default App;
