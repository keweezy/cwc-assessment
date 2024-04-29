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
import ViewUserInfo from "./ViewUserInfo";

const RightColumn = ({
  users,
  page,
  fetchNextPage,
  fetchPrevPage,
  searchUsers,
  value,
}) => {
  const fadeIn = "animate-fade-in";
  const fadeInRight = "animate-fadeInLeft";
  const fadeOutRight = "animate-fadeOutRight";
  const [isToggleChecked, setIsToggleChecked] = useState(true);
  const [viewUserInfo, setViewUserInfo] = useState({
    user: null,
    show: false,
  });
  const [animation, setAnimation] = useState(fadeIn);

  const toggleSwitch = () => {
    setIsToggleChecked(!isToggleChecked);
  };

  const viewUser = (user) => {
    setAnimation(fadeInRight);
    setViewUserInfo({
      user,
      show: true,
    });
  };

  const backToResults = () => {
    setAnimation(fadeOutRight);
    setViewUserInfo({
      user: null,
      show: false,
    });
  };

  return (
    <div
      className={`right-column text-almost-black text-center p-8 pb-10 rounded-2xl w-full bg-almost-white mt-32 overflow-hidden`}
    >
      <div className={`${animation}`}>
        <h1 className="font-bold text-[22px] mt-10 md:text-left">
          {viewUserInfo.show ? "User List" : "All Users"}
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

        {viewUserInfo.show ? (
          <ViewUserInfo
            user={viewUserInfo.user}
            backToResults={backToResults}
          />
        ) : (
          <>
            {/* Usser Lists Card */}
            {users.map((user, index) => (
              <UserInfoCard
                user={user}
                key={index}
                showCountry={isToggleChecked}
                viewUser={viewUser}
              />
            ))}
          </>
        )}

        {/* Download button and Prev and next button */}
        <div className="flex justify-between mt-14 items-center">
          <button
            className="rounded-3xl bg-female-users-bg p-3 px-5 text-white flex hover:opacity-80 disabled:opacity-80 disabled:cursor-not-allowed"
            onClick={() => downloadUsersDataAsCSV(users)}
            disabled={users.length === 0 || viewUserInfo?.show}
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
              className="rounded-lg bg-icon-bg p-2 px-4 text-white disabled:opacity-80 disabled:cursor-not-allowed"
              onClick={() => fetchPrevPage()}
              disabled={page === 1 || viewUserInfo?.show}
            >
              <Icon path={mdiChevronLeft} size={1} color="white" />
            </button>
            <button
              className="rounded-lg bg-black px-4 text-white disabled:opacity-80 disabled:cursor-not-allowed"
              onClick={() => fetchNextPage()}
              disabled={users.length === 0 || viewUserInfo?.show}
            >
              <Icon path={mdiChevronRight} size={1} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightColumn;
