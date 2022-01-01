import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";

import { Routes, Route } from "react-router-dom";
import { VStack } from "@chakra-ui/react";
import { useState } from "react";
import { UserContext } from "./UserContext";

function App() {
  const [isLogged, setIsLogged] = useState(true);

  const AppRoutes = () => {
    return (
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </>
    );
  };

  return (
    <>
      <UserContext.Provider value={{ isLogged, setIsLogged }}>
        <VStack p={2}>
          <Header />
          {isLogged ? <AppRoutes /> : <Login />}
        </VStack>
      </UserContext.Provider>
    </>
  );
}

export default App;
