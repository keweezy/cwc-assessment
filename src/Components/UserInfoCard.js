import React from "react";
import { mdiEmailOutline, mdiPhoneInTalkOutline, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";

const UserInfoCard = ({ user, showCountry }) => {
  return (
    <div className="p-4 md:p-6 rounded-lg md:flex bg-white shadow-info-card mt-10 w-full md:gap-x-4 animate-fade-in">
      <div className="h-[100px] w-[100px] flex items-center justify-center bg-gray-200 rounded-full border-4 border-light-green mx-auto">
        <img src={user?.picture?.large} alt="user" className="rounded-full" />
      </div>
      <div className="grow text-center md:text-left">
        <p className="font-extrabold mt-3">{`${user?.name?.first} ${user?.name?.last}`}</p>
        <p className="font-light mt-2 text-input-text italic">{`${
          user?.location?.postcode
        }, ${user?.location?.city}, ${user?.location?.state}, ${
          showCountry ? user?.location?.country : ""
        }`}</p>
        <div className="user-info flex justify-between flex-col md:flex-row gap-y-7 mt-5">
          <div className="email flex items-center justify-center ">
            <Icon path={mdiEmailOutline} size={1} className="text-icon-bg" />
            <p className="text-xs font-normal opacity-60">{user?.email}</p>
          </div>
          <div className="email flex items-center justify-center">
            <Icon
              path={mdiPhoneInTalkOutline}
              size={1}
              className="text-icon-bg"
            />
            <p className="text-xs font-normal opacity-60">{user?.phone}</p>
          </div>

          <button className="rounded-2xl cursor-pointer p-3 px-5 bg-light-green shadow-arrow-button w-fit mx-auto md:mx-0">
            <Icon
              path={mdiArrowRight}
              className="mx-auto"
              size={1}
              color="white"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserInfoCard;
