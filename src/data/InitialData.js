export const initialBarbers = [
  {
    id: "b1",
    name: "Asrorjan",
    age: 26,
    experience: "4 years",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    phone: "+998 90 123 45 67",
    languages: ["UZ", "EN", "RU"],
    rating: 4.9,
    workingHours: { start: "09:00", end: "18:00" },
    breaks: ["13:00-14:00"],
  },
  {
    id: "b2",
    name: "Alex",
    age: 29,
    experience: "6 years",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    phone: "+998 91 987 65 43",
    languages: ["EN", "RU"],
    rating: 4.8,
    workingHours: { start: "10:00", end: "19:00" },
    breaks: ["14:00-15:00"],
  },
];

export const servicesList = [
  { id: "s1", nameKey: "haircut", duration: "30 min", price: "$15" },
  { id: "s2", nameKey: "beardTrim", duration: "20 min", price: "$10" },
  { id: "s3", nameKey: "fullPackage", duration: "50 min", price: "$22" },
];
