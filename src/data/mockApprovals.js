export const mockApprovals = [
  {
    id: "REQ-001",
    documentName: "Q4_Financial_Report_Final.pdf",
    description: "Final review of the Q4 financial statements before submission to the board.",
    owner: { name: "Sarah Chen", avatar: "SC" },
    assignedUsers: [
      { name: "Michael Chang", avatar: "MC" },
      { name: "David Miller", avatar: "DM" }
    ],
    priority: "High",
    dueDate: "2026-08-10",
    status: "Pending",
    department: "Finance",
    progress: 0,
    comments: 2,
    attachments: 1,
    createdDate: "2026-08-01",
    updatedDate: "2026-08-01"
  },
  {
    id: "REQ-002",
    documentName: "Enterprise_SLA_Agreement.docx",
    description: "Updated service level agreement for the new tier of enterprise customers.",
    owner: { name: "James Wilson", avatar: "JW" },
    assignedUsers: [
      { name: "Legal Team", avatar: "LT" }
    ],
    priority: "Medium",
    dueDate: "2026-08-15",
    status: "In Review",
    department: "Legal",
    progress: 50,
    comments: 5,
    attachments: 3,
    createdDate: "2026-07-28",
    updatedDate: "2026-08-04"
  },
  {
    id: "REQ-003",
    documentName: "Marketing_Campaign_Assets.zip",
    description: "Brand guidelines and graphic assets for the upcoming fall product launch.",
    owner: { name: "Emma Watson", avatar: "EW" },
    assignedUsers: [
      { name: "Sarah Chen", avatar: "SC" },
      { name: "Marketing Execs", avatar: "ME" }
    ],
    priority: "Low",
    dueDate: "2026-08-20",
    status: "Approved",
    department: "Marketing",
    progress: 100,
    comments: 0,
    attachments: 12,
    createdDate: "2026-07-20",
    updatedDate: "2026-07-30"
  },
  {
    id: "REQ-004",
    documentName: "Security_Audit_2026.pdf",
    description: "Annual security audit compliance report requiring CTO sign-off.",
    owner: { name: "Alex Kumar", avatar: "AK" },
    assignedUsers: [
      { name: "Tech Lead", avatar: "TL" }
    ],
    priority: "High",
    dueDate: "2026-08-06",
    status: "Rejected",
    department: "Engineering",
    progress: 10,
    comments: 8,
    attachments: 2,
    createdDate: "2026-08-02",
    updatedDate: "2026-08-05"
  }
];
