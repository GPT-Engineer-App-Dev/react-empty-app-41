import { Route, BrowserRouter as Router, Routes, Link as RouterLink } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Box } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={
          <Box>
            <Index />
            {session ? (
              <Button onClick={logout}>Logout</Button>
            ) : (
              <Button as={RouterLink} to="/login">Login</Button>
            )}
          </Box>
        } />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;