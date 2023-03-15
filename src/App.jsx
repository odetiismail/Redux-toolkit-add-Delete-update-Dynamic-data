import React from "react";
import Navbar from "./Components/Navbar";
import UserDetails from "./Components/UserDetails";
//import FakeUserData  from "./API";
function App() {
  return (
    <>
      {/* <FakeUserData/> */}
      <Navbar />
      <UserDetails/>
    </>
  );
}

export default App;
