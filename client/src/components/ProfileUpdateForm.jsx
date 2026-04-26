import axios from "axios";
import React, { useState } from "react";
import { BaseUrl } from "../utils/constant";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/userSlice";

const ProfileUpdateForm = ({ userData, setUserData, user }) => {
  const dispatch = useDispatch();

  const [skillInput, setSkillInput] = useState("");
  const [skillList, setSkillList] = useState(userData.skills);

  const handleRemoveSkill = (listIndex) => {
    const newList = skillList.filter((_, idx) => idx !== listIndex);
    setSkillList(newList);
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (!skillInput.trim()) return;
    setSkillList((prev) => [...prev, skillInput]);
    setSkillInput("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const payload = {
      ...userData,
      skills: skillList,
    };

    const data = await axios.patch(BaseUrl + "/profile/edit", payload, {withCredentials: true});
    dispatch(addUser(data.data.data));
    toast.success(data.data.message);
  };

  return (
    <form className="flex flex-col w-[50%]">
      <div className="py-3 ">
        <label className="text-xl font-medium italic">Fullname :</label>
        <input
          type="text"
          value={userData.fullname}
          onChange={handleChange}
          name="fullname"
          placeholder="Enter your Fullname"
          className="input input-md mt-3 text-base placeholder:text-base outline-0 w-full"
        />
      </div>
      <div className="py-3 ">
        <label className="text-xl font-medium italic">Email :</label>
        <input
          type="text"
          name="email"
          disabled
          value={user.email}
          placeholder="Enter your Fullname"
          className="input input-md mt-3 text-base placeholder:text-base outline-0 w-full"
        />
      </div>
      <div className="py-3 ">
        <label className="text-xl font-medium italic">About :</label>
        <textarea
          name="about"
          placeholder="Enter about yourself"
          value={userData.about}
          onChange={handleChange}
          className="resize-none border border-[#464E57] w-full mt-3 text-base placeholder:text-base p-3"
          rows="4"
        ></textarea>
      </div>
      <div className="py-3 ">
        <label className="text-xl font-medium italic">Image Url :</label>
        <input
          type="text"
          value={userData.imageUrl}
          onChange={handleChange}
          name="imageUrl"
          placeholder="Enter your Photo Url"
          className="input input-md mt-3 text-base placeholder:text-base outline-0 w-full"
        />
      </div>
      <div className="py-3 ">
        <label className="text-xl font-medium italic">Skills :</label>
        <div className="flex items-center gap-x-2">
          <input
            type="text"
            name="skills"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
            placeholder="Enter your all Skills"
            className="input input-md mt-3 text-base placeholder:text-base outline-0 w-full"
          />
          <button className="btn btn-primary mt-3" onClick={handleAddSkill}>
            Add
          </button>
        </div>
        {skillList.length > 0 && (
          <ol className="mt-4 list-decimal pl-[19px]">
            {skillList.map((item, index) => (
              <li className="font-medium text-xl pt-2">
                {item}{" "}
                <span
                  className="text-primary  ml-5 cursor-pointer"
                  onClick={() => handleRemoveSkill(index)}
                >
                  X
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>

      <button className="btn btn-primary w-full mt-4"  onClick={handleUpdateProfile} >
        Update Profile
      </button>
    </form>
  );
};

export default ProfileUpdateForm;
