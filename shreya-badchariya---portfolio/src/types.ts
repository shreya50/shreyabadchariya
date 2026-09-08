export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  badgeType: 'secureauth' | 'greenledger';
  tags: string[];
  role: string;
  impact?: string;
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
}

export type ActiveModal = 'none' | 'resume' | 'hackathon' | 'secureauth' | 'greenledger' | 'linkedin';
