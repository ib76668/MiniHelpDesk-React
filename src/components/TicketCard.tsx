import type { Ticket } from "../types/ticket";

type TicketCardProps = {
  ticket: Ticket;
  onDelete: (id: number) => void;
  onEdit?: (ticket: Ticket) => void;
};

const priorityClass: Record<string, string> = {
  Low: "priority-low",
  Medium: "priority-medium",
  High: "priority-high",
};

const statusClass: Record<string, string> = {
  Open: "status-open",
  "In Progress": "status-inprogress",
  Closed: "status-closed",
};

const TicketCard = ({ ticket, onDelete, onEdit }: TicketCardProps) => {
  return (
    <li className="ticket">
      <div className="ticket-info">
        <div className="ticket-field">
          <strong>Subject:</strong> {ticket.subject}
        </div>
        <div className="ticket-field">
          <strong>Description:</strong> {ticket.description}
        </div>
        <div className="ticket-field ticket-meta">
          <span className={`badge ${priorityClass[ticket.priority]}`}>
            {ticket.priority}
          </span>
          <span className={`badge ${statusClass[ticket.status]}`}>
            {ticket.status}
          </span>
          <span className="ticket-date">📅 {ticket.createdAt}</span>
        </div>
      </div>
      <div className="ticket-actions">
        {onEdit && (
          <button
            className="btn edit"
            onClick={() => onEdit(ticket)}
          >
            Edit
          </button>
        )}
        <button
          className="btn delete"
          onClick={() => onDelete(ticket.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TicketCard;
