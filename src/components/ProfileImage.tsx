import Image from "next/image";

const ProfileImage = () => {
  return (
    <div className="w-32 h-32 p-2 rounded-full">
      <Image
        src={"/profile.png"}
        alt="profile image"
        width={100}
        height={100}
        priority
        className="rounded-full w-auto h-auto"
      />
    </div>
  );
};

export default ProfileImage;
