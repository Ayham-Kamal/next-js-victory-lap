"use client";
import React from "react";
import Image from "next/image";

interface ClassFormProps {
  classid: number;
  classname: string;
  dayoffered: number;
  timeoffered: string;
  description: string;
  image: string;
  isRegistered: boolean;
  onRegister: (classId: number) => void;
}

const ClassForm: React.FC<ClassFormProps> = ({
  classid,
  classname,
  dayoffered,
  timeoffered,
  description,
  image,
  isRegistered,
  onRegister,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        width: "300px",
        padding: "16px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "450px",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "180px",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <Image
          src={image}
          alt={classname}
          width={300}
          height={180}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <h3 style={{ fontSize: "1.5rem", margin: "10px 0" }}>{classname}</h3>
      <p style={{ flexGrow: 1, overflow: "hidden", textOverflow: "ellipsis", marginBottom: "10px", height: "50px" }}>
        {description}
      </p>
      <p>
        <strong>Day Offered:</strong>{" "}
        {["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dayoffered] || "Unknown"}
      </p>
      <p>
        <strong>Time:</strong> {timeoffered}
      </p>
      <button
        onClick={() => onRegister(classid)}
        disabled={isRegistered}
        style={{
          backgroundColor: isRegistered ? "#ddd" : "#007BFF",
          color: "#fff",
          border: "none",
          padding: "10px 20px",
          borderRadius: "4px",
          cursor: isRegistered ? "not-allowed" : "pointer",
          fontSize: "1rem",
        }}
      >
        {isRegistered ? "Registered" : "Register Now"}
      </button>
    </div>
  );
};

export default ClassForm;