
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/formlogin/FormLogin";
import Homeadmin from "./phantrang/Homeadmin";
import NewUserList from "./pages/test/ListData";
import ListDs from "./pages/test/ListDs";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <ListData /> */}
        {/* <NewUserList /> */}
        <Routes>
          <Route path="/login" element={< Login />} >

          </Route>
        </Routes>
        <Homeadmin />
      </BrowserRouter >
    </div>

  );
}

export default App;