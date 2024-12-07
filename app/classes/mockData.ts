// mockData.ts
// mockData.ts
export const classes = [
    {
      classid: 1,
      classname: "Yoga",
      dayoffered: 1,
      timeoffered: "10:00 AM - 11:00 AM",
      description: "Relax your mind and body with our beginner-friendly yoga class.",
      image: "/yoga.jpg", // Replace with a valid image path
    },
    {
      classid: 2,
      classname: "Fencing",
      dayoffered: 3,
      timeoffered: "1:00 PM - 2:00 PM",
      description: "Build sword skills and flexibility with our fencing class.",
      image: "/fencing.jpg", // Replace with a valid image path
    },
    {
      classid: 3,
      classname: "Zumba",
      dayoffered: 5,
      timeoffered: "6:00 PM - 7:00 PM",
      description: "Get your heart pumping with an energetic dance workout.",
      image: "/zumba.jpg", // Replace with a valid image path
    },
  ];
  
  export const userClasses: { userid: number; classid: number; daysattended?: number[] }[] = [];
  