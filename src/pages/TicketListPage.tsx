import { useNavigate } from "react-router-dom";
import type { Ticket } from "../types/ticket";
import TicketCard from "../components/TicketCard";

type TicketListPageProps = {
  tickets: Ticket[];
  onDelete: (id: number) => void;
  onEdit: (ticket: Ticket) => void;
};

const TicketListPage = ({ tickets, onDelete, onEdit }: TicketListPageProps) => {
  const navigate = useNavigate();

  const handleEdit = (ticket: Ticket) => {
    onEdit(ticket);
    navigate("/create");
  };

  return (
    <main className="main">
      <section className="card ticket-list">
        <div className="section-header">
          <h2>All Tickets</h2>
          <span className="ticket-count">{tickets.length} ticket{tickets.length !== 1 ? "s" : ""}</span>
        </div>

        {tickets.length === 0 ? (
          <div className="empty-state">
            <p>No tickets yet. <button className="link-btn" onClick={() => navigate("/create")}>Create your first ticket.</button></p>
          </div>
        ) : (
          <ul id="tickets">
            {tickets.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onDelete={onDelete}
                onEdit={handleEdit}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
};

export default TicketListPage;
