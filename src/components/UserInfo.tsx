import { user } from "@/common/constants";

const UserInfo = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{user.name}</h2>
      <span className="w-full">{`@${user.id}`}</span>
      <br />
      <span className="text-gray-500">{user.work}</span>
    </div>
  );
};

export default UserInfo;
