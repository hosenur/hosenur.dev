import IonIcon from "@reacticons/ionicons";
import React from "react";

export default function TimeLine() {
  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="uppercase">Experience</h1>

      <div className="flex gap-2.5">
        <IonIcon name="ellipse" className="text-2xl" />
        <div className="flex flex-col">
          <span>February 2023 - Present</span>
          <span>Frontend Intern @ Zeza Technologies</span>
        </div>
      </div>

      <div className="flex gap-2.5">
        <IonIcon name="ellipse-outline" className="text-2xl" />
        <div className="flex flex-col">
          <span>October 2021 - Jabuary 2023</span>
          <span>Mobile App Developer @ Techimpace</span>
        </div>
      </div>
    </div>
  );
}
