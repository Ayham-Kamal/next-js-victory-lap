// ClassesClient.tsx
"use client";

import React, { useState, useEffect } from "react";
import ClassForm from "./classForm";

interface Class {
  classid: number;
  classname: string;
  dayoffered: number;
}

interface ClassesClientProps {
  userId: number;
  classes: Class[];
  userClasses: number[];
}

const ClassesClient: React.FC<ClassesClientProps> = ({
  userId,
  classes,
  userClasses,
}) => {
  const [registeredClasses, setRegisteredClasses] = useState<number[]>(
    userClasses || []
  );

  useEffect(() => {
    // Fetch initial registered classes for the user (optional)
    // You can call an API here to get the registered classes from the server
  }, [userId]);

  const handleRegister = async (classId: number) => {
    if (!registeredClasses.includes(classId)) {
      try {
        const requestData = {
          userId,
          classId,
          dateAttended: new Date(),
          daysAttended: 0, // Adjust as needed
        };

        console.log("Sending registration data:", requestData); // Log data

        const response = await fetch("/api/classes/insertUserClasses", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        if (response.ok) {
          setRegisteredClasses([...registeredClasses, classId]);
          alert("Successfully registered for the class!");
        } else {
          alert("Failed to register for the class. Please try again.");
        }
      } catch (error) {
        console.error("Error registering for class:", error);
        alert("An error occurred while registering. Please try again later.");
      }
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
          isRegistered={registeredClasses?.includes(c.classid) || false}
          onRegister={handleRegister}
        />
      ))}
    </div>
  );
};

export default ClassesClient;
