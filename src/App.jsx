import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

import Home from "./pages/Home";
import Details from "./pages/Details";
import Favorites from "./pages/Favorites";
import Search from "./pages/Search";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import MyList from "./pages/MyList";
import Live from "./pages/Live";
import Profile from "./pages/Profile";
import Continue from "./pages/Continue";
import Downloads from "./pages/Downloads";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Help from "./pages/Help";
import Genres from "./pages/Genres";
import Libraries from "./pages/Libraries";
import Theme from "./pages/Theme";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";

import { useState, useEffect } from "react";


export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { user } = useAuth();

  // determine if we should show the sidebar/menu toggle
  const isHome = location.pathname === "/";
  const showSidebar = user && isHome;
  const showMenuButton = user && isHome;

  // close the drawer when navigating away from home
  useEffect(() => {
    if (!isHome) setSidebarOpen(false);
  }, [isHome]);

  return (
    <>
      {/* navbar always renders for authenticated users; we conditionally pass
          a prop so the hamburger only appears on home */}
      <Navbar
        onMenuClick={() => setSidebarOpen(true)}
        showMenuButton={showMenuButton}
      />

      {/* sidebar only exists on the home route when a user is logged in */}
      {showSidebar && (
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      )}

      <main
        className="container"
        onClick={() => sidebarOpen && setSidebarOpen(false)}
      >
        <Routes>
          {/* PUBLIC */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<ForgotPassword />} />

          {/* PROTECTED */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />

          <Route
            path="/movie/:id"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />

          <Route
            path="/favorites"
            element={
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />
          {/* additional routes for sidebar items */}
          <Route
            path="/search"
            element={
              <ProtectedRoute>
                <Search />
              </ProtectedRoute>
            }
          />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/tv"
            element={
              <ProtectedRoute>
                <Tv />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mylist"
            element={
              <ProtectedRoute>
                <MyList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/live"
            element={
              <ProtectedRoute>
                <Live />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route
            path="/continue"
            element={
              <ProtectedRoute>
                <Continue />
              </ProtectedRoute>
            }
          />
          <Route
            path="/downloads"
            element={
              <ProtectedRoute>
                <Downloads />
              </ProtectedRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/help"
            element={
              <ProtectedRoute>
                <Help />
              </ProtectedRoute>
            }
          />
          <Route
            path="/genres"
            element={
              <ProtectedRoute>
                <Genres />
              </ProtectedRoute>
            }
          />
          <Route
            path="/libraries"
            element={
              <ProtectedRoute>
                <Libraries />
              </ProtectedRoute>
            }
          />
          <Route
            path="/theme"
            element={
              <ProtectedRoute>
                <Theme />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
    </>
  );
}
