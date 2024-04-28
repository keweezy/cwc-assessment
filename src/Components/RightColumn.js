import SearchInput from "./SearchComponent";
import {
  mdiChevronLeft,
  mdiChevronRight,
  mdiCloudDownloadOutline,
  mdiMenuDown,
} from "@mdi/js";
import { Icon } from "@mdi/react";
import Switch from "react-switch";
import { useState } from "react";
import UserInfoCard from "./UserInfoCard";
import { downloadUsersDataAsCSV } from "../common/utils";

const RightColumn = ({
  users,
  page,
  fetchNextPage,
  fetchPrevPage,
  searchUsers,
  value,
}) => {
  const [isToggleChecked, setIsToggleChecked] = useState(true);

  const toggleSwitch = () => {
    setIsToggleChecked(!isToggleChecked);
  };

  return (
    <div className="right-column text-almost-black text-center p-8 pb-10 rounded-2xl w-full bg-almost-white mt-32 animate-fade-in">
      <h1 className="font-extrabold text-[22px] mt-10 md:text-left">
        All Users
      </h1>
      <p className="text-xs text-center mb-3 md:text-left">Filter by</p>

      <div className="forms-container grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-5 mb-8 md:mb-0">
          <SearchInput
            backgroundColor="bg-light-gray"
            borderRadius="rounded-3xl"
            placeholder="Find in list"
            inputClasses="p-3"
            onChange={searchUsers}
            value={value}
          />
        </div>

        <div className="bg-light-gray rounded-3xl p-1 px-5 flex items-center text-start justify-between col-span-7 md:col-span-4">
          <div className="flex flex-col">
            <p className="text-xs">country</p>
            <p className="text-sm">Afghanisthan</p>
          </div>
          <Icon path={mdiMenuDown} size={1} color="black" />
        </div>

        <div className="flex items-center gap-x-2">
          <Switch
            onChange={toggleSwitch}
            checked={isToggleChecked}
            offColor="#d9d9e1"
            onColor="#bfe4e8"
            handleDiameter={21}
            onHandleColor="#30BBB5"
            height={30}
            uncheckedIcon={false}
            checkedIcon={false}
            width={52}
          />

          <p className="text-base text-input-text">
            <span>Show</span>
            <br /> <span>Country</span>
          </p>
        </div>
      </div>

      {/* Cards */}
      {users.map((user, index) => (
        <UserInfoCard user={user} key={index} showCountry={isToggleChecked} />
      ))}

      {/* Download button and Prev and next button */}
      <div className="flex justify-between mt-14 items-center">
        <button
          className="rounded-3xl bg-female-users-bg p-3 px-5 text-white flex hover:opacity-80"
          onClick={() => downloadUsersDataAsCSV(users)}
          disabled={users.length === 0}
        >
          <Icon
            path={mdiCloudDownloadOutline}
            size={1}
            color="white"
            className="mr-2"
          />
          Download Results
        </button>
        <div className="flex gap-x-3">
          <button
            className="rounded-lg bg-icon-bg p-2 px-4 text-white"
            onClick={() => fetchPrevPage()}
            disabled={page === 1}
          >
            <Icon path={mdiChevronLeft} size={1} color="white" />
          </button>
          <button
            className="rounded-lg bg-black px-4 text-white"
            onClick={() => fetchNextPage()}
          >
            <Icon path={mdiChevronRight} size={1} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
