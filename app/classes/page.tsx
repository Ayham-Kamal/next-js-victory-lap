// page.tsx
"use client";
import React, { useState } from "react";
import { classes, userClasses } from "./mockData";
import ClassForm from "./classForm";

const ClassesPage: React.FC = () => {
  const userId = 1; // Simulating a logged-in user with ID = 1
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
    <div style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", fontSize: "2.5rem", margin: "20px 0", fontWeight: "bold" }}>
        Fitness Classes
      </h1>
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
            timeoffered={c.timeoffered}
            description={c.description}
            image={c.image}
            isRegistered={registeredClasses.includes(c.classid)}
            onRegister={handleRegister}
          />
        ))}
      </div>
    </div>
  );
};

export default ClassesPage;