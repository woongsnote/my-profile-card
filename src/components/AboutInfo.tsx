import React from "react";
import { User } from "@/common/constants";

const AboutInfo = () => {
  return (
    <div>
      <h2 className="mt-4 font-bold text-left">About</h2>
      <p className="text-xs sm:text-sm">{User.about}</p>
    </div>
  );
};

export default AboutInfo;
