"use client";
import React, { useState } from "react";
import { userClasses } from "./mockData";
import ClassForm from "./classForm";

interface Class {
  classid: number;
  classname: string;
  dayoffered: number;
  timeoffered?: string;
  description?: string;
  image?: string;
}

interface ClassesClientProps {
  userId: number;
  classes: Class[];
}

const ClassesClient: React.FC<ClassesClientProps> = ({ userId, classes }) => {
  const [registeredClasses, setRegisteredClasses] = useState<number[]>(
    userClasses.filter((uc) => uc.userid === userId).map((uc) => uc.classid)
  );

  const handleRegister = (classId: number) => {
    if (!registeredClasses.includes(classId)) {
      userClasses.push({ userid: userId, classid: classId, daysattended: [] });
      setRegisteredClasses((prev) => [...prev, classId]);
      alert("Successfully registered for the class!");
    } else {
      alert("You are already registered for this class.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {classes.map((c) => (
        <ClassForm
          key={c.classid}
          classid={c.classid}
          classname={c.classname}
          dayoffered={c.dayoffered}
          timeoffered={c.timeoffered || "N/A"}
          description={c.description || "No description available."}
          image={c.image || "/placeholder.jpg"}
          isRegistered={registeredClasses.includes(c.classid)}
          onRegister={handleRegister}
        />
      ))}
    </div>
  );
};

export default ClassesClient;