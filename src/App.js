import React from "react";
import ProfileDetails from "./components/ProfileDetails";
import ProfileImage from "./components/ProfileImage";
import ProfileLinks from "./components/ProfileLinks";

export default function App() {
  return (
    <>
      <ProfileImage />
      <ProfileLinks />
      <ProfileDetails />
    </>
  );
}
