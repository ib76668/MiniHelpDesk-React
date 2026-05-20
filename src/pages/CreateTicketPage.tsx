import { useNavigate } from "react-router-dom";
import type { Ticket } from "../types/ticket";
import TicketForm from "../components/TicketForm";

type CreateTicketPageProps = {
  onCreateTicket: (ticket: Ticket) => void;
  editingTicket: Ticket | null;
  onCancelEdit: () => void;
};

const CreateTicketPage = ({ onCreateTicket, editingTicket, onCancelEdit }: CreateTicketPageProps) => {
  const navigate = useNavigate();

  const handleSubmit = (ticket: Ticket) => {
    onCreateTicket(ticket);
    navigate("/");
  };

  const handleCancel = () => {
    onCancelEdit();
    navigate("/");
  };

  return (
    <main className="main">
      <section className="card ticket-form-section">
        <h2>{editingTicket ? "Edit Ticket" : "Create New Ticket"}</h2>
        <TicketForm
          onCreateTicket={handleSubmit}
          editingTicket={editingTicket}
          onCancelEdit={handleCancel}
        />
      </section>
    </main>
  );
};

export default CreateTicketPage;
