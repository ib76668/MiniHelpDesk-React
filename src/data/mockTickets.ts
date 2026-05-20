import type { Ticket } from "../types/ticket";

const mockTickets: Ticket[] = [
  {
    id: 1,
    subject: "Cannot login to account",
    description: "User is unable to login using correct credentials.",
    priority: "High",
    status: "Open",
    createdAt: "2026-03-26",
  },
  {
    id: 2,
    subject: "Server down",
    description: "Production server not responding since morning.",
    priority: "High",
    status: "In Progress",
    createdAt: "2026-04-01",
  },
  {
    id: 3,
    subject: "Password reset request",
    description: "User cannot login and needs a password reset.",
    priority: "Medium",
    status: "Open",
    createdAt: "2026-04-05",
  },
  {
    id: 4,
    subject: "Website UI bug",
    description: "UI misalignment on homepage for mobile devices.",
    priority: "Low",
    status: "Open",
    createdAt: "2026-04-10",
  },
  {
    id: 5,
    subject: "Email delivery delayed",
    description: "Outgoing emails are delayed by several hours for clients.",
    priority: "Medium",
    status: "Closed",
    createdAt: "2026-04-15",
  },
  {
    id: 6,
    subject: "New employee account setup",
    description: "Set up system account and access for new team member.",
    priority: "Low",
    status: "Open",
    createdAt: "2026-04-20",
  },
];

export default mockTickets;
