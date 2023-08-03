import IonIcon from "@reacticons/ionicons";
import React from "react";
const experiences = [
  {
    index: 0,
    title: "Frontend Intern",
    company: "Zeza Technologies",
    date: "February 2023 - Present",
  },
  {
    index: 1,
    title: "Mobile App Developer",
    company: "Techimpace",
    date: "October 2021 - Jabuary 2023",
  },
];

export default function TimeLine() {
  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="uppercase">Experience</h1>
      {experiences.map((experience) => (
        <div key={experience.index} className="flex flex-col">
          <span>
            {experience.title} @ {experience.company}
          </span>
          <span className="text-zinc-400 text-sm">{experience.date}</span>
        </div>
      ))}
    </div>
  );
}
