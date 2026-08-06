import { 
  FiSliders, 
  FiMail, 
  FiShield, 
  FiHardDrive 
} from 'react-icons/fi';
import { FaPalette } from 'react-icons/fa';

export const organizationMenuItems = [
  {
    id: 'general',
    label: 'General Details',
    description: 'Manage identity, domain, and primary branding logos',
    icon: FiSliders,
  },
  {
    id: 'branding',
    label: 'Branding & Theme',
    description: 'Customize colors, theme mode, and brand appearance',
    icon: FaPalette,
  },
  {
    id: 'smtp',
    label: 'SMTP Configuration',
    description: 'Configure mail server settings for outbound notifications',
    icon: FiMail,
  },
  {
    id: 'security',
    label: 'Security & Compliance',
    description: 'Set up MFA, session timeouts, and IP whitelisting',
    icon: FiShield,
  },
  {
    id: 'storage',
    label: 'Storage Allocation',
    description: 'Monitor storage quotas, usage breakdown, and limits',
    icon: FiHardDrive,
  },
];
