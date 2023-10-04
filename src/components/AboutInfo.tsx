import React from "react";
import { user } from "@/common/constants";

const AboutInfo = () => {
  return (
    <div>
      <h2 className="mt-4 font-bold text-left">About</h2>
      <p className="text-xs sm:text-sm">{user.about}</p>
    </div>
  );
};

export default AboutInfo;
