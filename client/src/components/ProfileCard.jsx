import React from "react";

const ProfileCard = ({ userData , user}) => {
  
  return (
    <div className="card bg-base-300 shadow-sm">
      <img
        src={userData.imageUrl}
        alt="User Profile Photo"
        className="w-full object-cover h-100 object-top"
      />
      <div className="card-body">
        <h2 className="card-title">Fullname : {userData.fullname}</h2>
        <p className="text-base">
          <span className="font-semibold"> About : </span>
          {userData.about || "No Data Found"}
        </p>

        <p className="text-lg">
          <span className="font-semibold"> Age : </span> {user.age}
        </p>
        <p className="text-lg">
          <span className="font-semibold"> Gender : </span> {user.gender}
        </p>

        {userData?.skills.length > 0 && (
          <>
            <p className="text-lg">
              <span className="font-semibold">
                Skills :{" "}
                {Array.isArray(userData?.skills) && userData.skills.join(", ")}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
