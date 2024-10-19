import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserRoute from "./routes/UserRoute";
import Profile from "./pages/user/Profile";
import Dashboard from "./pages/user/Dashboard";
import AddHabit from "./pages/user/AddHabit";
import EditHabit from "./pages/user/EditHabit";
import GuestRoute from "./routes/GuestRoute";
import About from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* Ensure content takes full screen height */}
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />

              <Route element={<GuestRoute />}>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
              </Route>

              <Route element={<UserRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/addHabit" element={<AddHabit />} />
                <Route path="/editHabit/:id" element={<EditHabit />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
