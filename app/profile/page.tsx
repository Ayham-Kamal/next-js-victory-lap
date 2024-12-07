"use client";
// pages/profile-example.tsx

import { useState } from "react";
import Image from "next/image";

const ProfilePage = () => {
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isGeneralOpen, setIsGeneralOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  const user = {
    id: 1,
    firstName: "Shane",
    lastName: "Sine",
    email: "shane.sine@gmail.com",
    gender: "Male",
    profilePicture: "/images.jpg", // Replace with the actual path
    totalTime: "2h 30m",
    caloriesBurned: 7200,
    tasksDone: 2,
    height: "5'9\"",
    weight: "70 kg",
  };

  const Section = ({
    title,
    icon,
    isOpen,
    onToggle,
    children,
  }: {
    title: string;
    icon: string;
    isOpen: boolean;
    onToggle: () => void;
    children: React.ReactNode;
  }) => (
    <>
      <div
        onClick={onToggle}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px",
          cursor: "pointer",
          backgroundColor: "#fff",
          borderBottom: "1px solid #e0e0e0",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontSize: "18px", marginRight: "10px", color: "#4a90e2" }}>
            {icon}
          </span>
          <p style={{ margin: "0", fontWeight: "bold", color: "#333" }}>{title}</p>
        </div>
        <span
          style={{
            fontSize: "16px",
            color: "#4a90e2",
            transform: isOpen ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.2s",
          }}
        >
          ▼
        </span>
      </div>
      {isOpen && <div style={{ padding: "15px", backgroundColor: "#f7f9fc" }}>{children}</div>}
    </>
  );

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f9fc",
        minHeight: "100vh",
        padding: "20px",
        color: "#333",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#fff",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Profile Header */}
        <div style={{ textAlign: "center", padding: "20px" }}>
          <div
            style={{
              width: "130px",
              height: "130px",
              margin: "0 auto 10px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #4a90e2",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src={user.profilePicture}
              alt={`${user.firstName} ${user.lastName}`}
              width={130}
              height={130}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
          <h2 style={{ margin: "5px 0" }}>{`${user.firstName} ${user.lastName}`}</h2>
          <p style={{ margin: "5px 0", color: "#777" }}>{user.email}</p>
          <p style={{ margin: "5px 0", color: "#777" }}>Gender: {user.gender}</p>
        </div>

        {/* Stats Section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            backgroundColor: "#f7f9fc",
            padding: "15px",
            borderTop: "1px solid #e0e0e0",
            borderBottom: "1px solid #e0e0e0",
          }}
        >
          {/* Total Time */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p style={{ fontWeight: "bold", margin: "0", fontSize: "16px" }}>
              {user.totalTime}
            </p>
            <p style={{ margin: "5px 0", color: "#777", fontSize: "14px" }}>
              Total Time
            </p>
          </div>

          {/* Burned */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p style={{ fontWeight: "bold", margin: "0", fontSize: "16px" }}>
              {user.caloriesBurned} cal
            </p>
            <p style={{ margin: "5px 0", color: "#777", fontSize: "14px" }}>
              Burned
            </p>
          </div>

          {/* Done */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          >
            <p style={{ fontWeight: "bold", margin: "0", fontSize: "16px" }}>
              {user.tasksDone}
            </p>
            <p style={{ margin: "5px 0", color: "#777", fontSize: "14px" }}>
              Done
            </p>
          </div>
        </div>

        {/* Settings Sections */}
        <Section
          title="Personal"
          icon="👤"
          isOpen={isPersonalOpen}
          onToggle={() => setIsPersonalOpen(!isPersonalOpen)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <p style={{ margin: "0", fontWeight: "bold", color: "#333" }}>
              Height: {user.height}
            </p>
            <button
              style={{
                padding: "5px 15px",
                backgroundColor: "#4a90e2",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "12px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Edit
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p style={{ margin: "0", fontWeight: "bold", color: "#333" }}>
              Weight: {user.weight}
            </p>
            <button
              style={{
                padding: "5px 15px",
                backgroundColor: "#4a90e2",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "12px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              Edit
            </button>
          </div>
        </Section>

        <Section
          title="General"
          icon="⚙️"
          isOpen={isGeneralOpen}
          onToggle={() => setIsGeneralOpen(!isGeneralOpen)}
        >
          <p style={{ margin: "0", color: "#333" }}>Language: English</p>
        </Section>

        <Section
          title="Notifications"
          icon="🔔"
          isOpen={isNotificationsOpen}
          onToggle={() => setIsNotificationsOpen(!isNotificationsOpen)}
        >
          <p style={{ margin: "0", color: "#333" }}>Push Notifications: Enabled</p>
        </Section>

        <Section
          title="Help"
          icon="❓"
          isOpen={isHelpOpen}
          onToggle={() => setIsHelpOpen(!isHelpOpen)}
        >
          <p style={{ margin: "0", color: "#333" }}>FAQ: Visit our help center</p>
        </Section>
      </div>
    </div>
  );
};

export default ProfilePage;
