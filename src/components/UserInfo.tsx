import { User } from "@/common/constants";

const UserInfo = () => {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold">{User.name}</h2>
      <span className="text-gray-500">{User.career}</span>
    </div>
  );
};

export default UserInfo;
