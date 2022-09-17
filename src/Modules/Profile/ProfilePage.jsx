import ProfileCard from "./Components/ProfileCard";
import HeaderPage from "./Components/Header";
export default function ProfilePage({ users }) {
  return (
    <>
      <HeaderPage text="Profile Page" />

      {users.map((user) => (
        <ProfileCard user={user} />
      ))}
    </>
  );
}
