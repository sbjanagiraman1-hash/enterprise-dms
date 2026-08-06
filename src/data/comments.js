export const mockCommentsMap = {
  'file-001': [
    {
      id: 'comment-1',
      author: {
        name: 'Elena Rostova',
        avatar: 'ER',
        email: 'elena.r@acme.corp',
        role: 'Financial Controller'
      },
      timestamp: 'Today at 11:35 AM',
      text: 'Please double-check Section 4.2 regarding tax exemptions before submitting to compliance @Alex Johnson.',
      attachments: [
        { name: 'Schedule_B_Exemptions.pdf', size: '1.2 MB' }
      ],
      resolved: false,
      replies: [
        {
          id: 'reply-1-1',
          author: {
            name: 'Alex Johnson',
            avatar: 'AJ',
            email: 'alex.j@acme.corp',
            role: 'Lead Architect'
          },
          timestamp: 'Today at 11:42 AM',
          text: 'Thanks @Elena! I reviewed the exemptions table with legal and updated Section 4.2 in v3.2.'
        }
      ]
    },
    {
      id: 'comment-2',
      author: {
        name: 'David Chen',
        avatar: 'DC',
        email: 'david.c@acme.corp',
        role: 'SecOps Director'
      },
      timestamp: 'Yesterday at 04:10 PM',
      text: 'File lock has been activated for financial audit review cycle. Contact @Elena Rostova for write access.',
      attachments: [],
      resolved: true,
      replies: []
    }
  ]
};
