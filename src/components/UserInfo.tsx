import { user } from "@/common/constants";

const UserInfo = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{user.name}</h2>
      <span className="w-full">{`@${user.id}`}</span>
      <br />
      <span className="">{user.work}</span>
      <h2 className="mt-4 font-bold text-left">About</h2>
      <p className="text-xs sm:text-sm">{user.about}</p>
    </div>
  );
};

export default UserInfo;
