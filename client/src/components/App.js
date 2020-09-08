import React from "react";
import Login from "./Login";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";

function App() {
  const [id, setId] = useLocalStorage("id");
  const dashboard = (
    <ContactsProvider>
      <Dashboard id={id} />
    </ContactsProvider>
  );
  return id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />;
}

export default App;
