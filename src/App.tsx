import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Ticket } from "./types/ticket";
import mockTickets from "./data/mockTickets";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TicketListPage from "./pages/TicketListPage";
import CreateTicketPage from "./pages/CreateTicketPage";

function App() {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);

  const handleCreateTicket = (ticket: Ticket) => {
    if (editingTicket) {
      setTickets(tickets.map((t) => (t.id === ticket.id ? ticket : t)));
      setEditingTicket(null);
    } else {
      setTickets([...tickets, ticket]);
    }
  };

  const handleDeleteTicket = (id: number) => {
    setTickets(tickets.filter((t) => t.id !== id));
  };

  const handleEditTicket = (ticket: Ticket) => {
    setEditingTicket(ticket);
  };

  const handleCancelEdit = () => {
    setEditingTicket(null);
  };

  return (
    <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <TicketListPage
              tickets={tickets}
              onDelete={handleDeleteTicket}
              onEdit={handleEditTicket}
            />
          }
        />
        <Route
          path="/create"
          element={
            <CreateTicketPage
              onCreateTicket={handleCreateTicket}
              editingTicket={editingTicket}
              onCancelEdit={handleCancelEdit}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
