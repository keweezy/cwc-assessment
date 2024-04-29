const {
  mdiArrowLeft,
  mdiPhoneInTalkOutline,
  mdiEmailOutline,
} = require("@mdi/js");
const { default: Icon } = require("@mdi/react");

const ViewUserInfo = ({ user, backToResults }) => {
  return (
    <div
      className={`mt-5 animate-fadeIn`}
    >
      <div
        className="flex items-center lg:justify-start hover:bg-light-gray hover:rounded w-fit py-2 px-3 cursor-pointer"
        onClick={backToResults}
      >
        <Icon path={mdiArrowLeft} size={1} className="mr-2 text-light-green" />
        <span>RESULTS</span>
      </div>

      <div className="lg:flex-row flex mt-3 md:gap-x-8 md:justify-evenly flex-col xl:justify-start">
        <div className="h-[200px] w-[200px] flex items-center justify-center bg-gray-200 rounded-full border-4 border-light-green mx-auto lg:mx-0">
          <img
            src={user?.picture?.large}
            alt="user"
            className="rounded-full w-full"
          />
        </div>
        <div className="flex flex-col md:gap-y-3 xl:items-start items-center mt-5 md:mt-0 gap-y-6">
          <p className="font-extrabold text-2xl">
            {`${user?.name?.first} ${user?.name?.last}`}{" "}
            <span className="font-extralight">{user?.dob.age}</span>
          </p>
          <p className="font-light text-input-text">{`${user?.location?.postcode}, ${user?.location?.city}, ${user?.location?.state}`}</p>
          <div className="email flex items-center justify-center bg-semi-dark-gray py-1 px-4 rounded-2xl gap-x-1 mt-2">
            <Icon path={mdiEmailOutline} size={1} color={"rgba(0,0,0,.26)"} />
            <p className="text-sm font-normal ">{user?.email}</p>
          </div>
          <div className="email flex items-center justify-center bg-light-pink py-2 px-4 rounded-2xl gap-x-1 hover:bg-semi-dark-pink cursor-pointer mt-3">
            <p className="font-normal text-xs">
              JOINED: {user?.registered.date}
            </p>
          </div>
          <div className="email flex items-center justify-center mt-4">
            <Icon
              path={mdiPhoneInTalkOutline}
              size={1}
              className="text-icon-bg"
            />
            <p className="text-xs font-normal opacity-40">{user?.phone}</p>
          </div>
          <div className="email flex items-center justify-center mt-4 opacity-40">
            <p className="text-xs font-normal opacity-60">{user?.cell}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewUserInfo;
