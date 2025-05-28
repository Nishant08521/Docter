import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Booking from "./component/Booking/Booking";
import Footer from "./component/Footer/Footer";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Booking />
      <Footer />
    </div>
  );
};

export default App;
