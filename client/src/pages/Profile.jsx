import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileCard from "../components/ProfileCard";
import ProfileUpdateForm from "../components/ProfileUpdateForm";

const Profile = () => {
  const user = useSelector(  (state) => state.user );
  const [userData, setUserData] = useState(null);
  
  useEffect(() => {
    if (user) {
      setUserData({
        fullname: user.fullname || "",
        about: user.about || "",
        skills: user.skills || [],
        imageUrl: user.imageUrl || "",
      });
    }
  }, [user]);

  if (!user || !userData) return null;

  return (
    <div className="flex justify-between px-50 pt-5 pb-20">
      <ProfileUpdateForm userData={userData} setUserData={setUserData} user={user} />
      <div className="w-[35%]">
        <ProfileCard userData={userData} user={user} />
      </div>
    </div>
  );
};

export default Profile;
