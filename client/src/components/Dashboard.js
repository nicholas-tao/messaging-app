import React from "react";
import Sidebar from "./Sidebar";
import { useConversations } from "../contexts/ConversationsProvider";
import OpenConveration from "./OpenConversation";
export default function Dashboard({ id }) {
  const selectedConversation = useConversations();

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      <Sidebar id={id} />
      {selectedConversation && <OpenConveration />}
    </div>
  );
}
