import { useState, useEffect } from "react";
import type { Ticket, TicketPriority, TicketStatus } from "../types/ticket";

type TicketFormProps = {
  onCreateTicket: (ticket: Ticket) => void;
  editingTicket?: Ticket | null;
  onCancelEdit?: () => void;
};

const TicketForm = ({ onCreateTicket, editingTicket, onCancelEdit }: TicketFormProps) => {
  const [subject, setSubject] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<TicketPriority>("Low");
  const [status, setStatus] = useState<TicketStatus>("Open");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (editingTicket) {
      setSubject(editingTicket.subject);
      setDescription(editingTicket.description);
      setPriority(editingTicket.priority);
      setStatus(editingTicket.status);
    } else {
      setSubject("");
      setDescription("");
      setPriority("Low");
      setStatus("Open");
      setError("");
    }
  }, [editingTicket]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (subject.trim() === "") {
      setError("Ticket subject is required.");
      return;
    }

    setError("");

    const ticketData: Ticket = {
      id: editingTicket ? editingTicket.id : Date.now(),
      subject: subject.trim(),
      description: description.trim(),
      priority,
      status,
      createdAt: editingTicket
        ? editingTicket.createdAt
        : new Date().toISOString().split("T")[0],
    };

    onCreateTicket(ticketData);

    if (!editingTicket) {
      setSubject("");
      setDescription("");
      setPriority("Low");
      setStatus("Open");
    }
  };

  return (
    <form id="ticketForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="subject" className="form-label">Subject / Title</label>
        <input
          id="subject"
          type="text"
          className="input"
          placeholder="Enter ticket subject"
          value={subject}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSubject(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description" className="form-label">Description</label>
        <textarea
          id="description"
          className="input"
          placeholder="Describe the issue"
          value={description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value)}
          rows={4}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority" className="form-label">Priority</label>
        <select
          id="priority"
          className="input"
          value={priority}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setPriority(e.target.value as TicketPriority)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="status" className="form-label">Status</label>
        <select
          id="status"
          className="input"
          value={status}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setStatus(e.target.value as TicketStatus)}
        >
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>
      </div>

      {error && <p className="error">{error}</p>}

      <div className="form-buttons">
        <button type="submit" className="btn create">
          {editingTicket ? "Update Ticket" : "Create Ticket"}
        </button>
        {editingTicket && onCancelEdit && (
          <button type="button" className="btn cancel" onClick={onCancelEdit}>
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TicketForm;
