import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { useContacts } from "../contexts/ContactsProvider";

const ConversationsContext = React.createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useLocalStorage(
    "conversations",
    []
  );

  const { contacts } = useContacts();

  function createConversation(recipients) {
    setConversations((prevConversations) => {
      return [...prevConversations, { recipients, messages: [] }];
    });
  }

  const formattedConversations = conversations.map((conversations) => {
    const recipients = conversations.recipients.map((recipient) => {
      const contact = contacts.find((contact) => {
        return contact.id === recipient;
      });
      const name = [contact && contact.name] || recipient;
      return { id: recipient, name };
    });
    return { ...conversations, recipients };
  });

  const value = {
    conversations: formattedConversations,
    createConversation,
  };

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  );
}
