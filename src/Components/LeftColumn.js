import { Icon } from "@mdi/react";
import { mdiAccountGroup } from "@mdi/js";
import { mdiHumanMale } from "@mdi/js";
import { mdiHumanFemale } from "@mdi/js";
import SearchInput from "./SearchComponent";

const usersIcons = [
  {
    "bg-color": "bg-users-bg",
    icon: mdiAccountGroup,
    label: "All Users",
    gender: "all",
  },
  {
    "bg-color": "bg-male-users-bg",
    icon: mdiHumanMale,
    label: "Male Users",
    gender: "male",
  },
  {
    "bg-color": "bg-female-users-bg",
    icon: mdiHumanFemale,
    label: "Female Users",
    gender: "female",
  },
];

const LeftColumn = ({ fetchByGender, searchUsers, value }) => {
  return (
    <div className="left-column sm:pt-[230px] sm:px-14 w-full">
      <h1 className="mt-3 font-thin text-3xl mb-4">
        Hello, <span className="font-extrabold">Emerald</span>{" "}
      </h1>
      <p className="font-thin text-xs mb-4">
        {" "}
        Welcome to your dashboard, kindly sort through the user base{" "}
      </p>

      <div className="mb-10">
        <SearchInput
          backgroundColor="bg-dark-gray"
          borderRadius="rounded-xl"
          placeholder="Find a user"
          onChange={searchUsers}
          value={value}
        />
      </div>

      <p className="mb-4 text-sm">Show Users</p>

      <div className="users-format-container">
        <div className=" lg:grid lg:grid-cols-3 gap-x-3  lg:gap-x-20 flex flex-col gap-y-10">
          {usersIcons.map((userIcon, index) => (
            <div key={`${index}`}>
              <div
                key={index}
                className={`icon-contaienr p-6 ${userIcon["bg-color"]} rounded-2xl cursor-pointer w-4/5 mx-auto`}
                onClick={() => fetchByGender(userIcon.gender)}
              >
                <Icon
                  path={userIcon.icon}
                  className="mx-auto"
                  size={1.5}
                  color="white"
                />
              </div>
              <p className="text-center mt-3 text-xs font-thin">
                {userIcon.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftColumn;
