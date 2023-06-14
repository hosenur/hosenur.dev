import IonIcon from "@reacticons/ionicons";
import React from "react";

export default function TimeLine() {
  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="uppercase">Experience</h1>
      <div className="flex items-center gap-2.5">
        <IonIcon name="ellipse-outline" className="text-2xl" />
        <span>
          February 2023 - Present | Frontend Intern @ Zeza technologies
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        <IonIcon name="ellipse" className="text-2xl" />
        <span>
          October 2021 - January 2023 | Mobile App Developer Intern @ Techimpace
        </span>
      </div>
    </div>
  );
}
