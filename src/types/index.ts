export interface Issue {
  id: string;
  title: string;
  description: string;
  category: 'pothole' | 'waste' | 'water_leak' | 'streetlight' | 'other';
  status: 'reported' | 'assigned' | 'in_progress' | 'resolved';
  location: {
    address: string;
    coordinates: [number, number];
  };
  imageUrl?: string;
  reportedBy: string;
  reportedAt: Date;
  assignedTo?: string;
  assignedAt?: Date;
  resolvedAt?: Date;
  priority: 'low' | 'medium' | 'high';
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  points: number;
  badges: Badge[];
  rank: number;
  issuesReported: number;
  issuesResolved: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt: Date;
}

export interface LocationData {
  address: string;
  coordinates: [number, number];
  detected: boolean;
}

export interface Analytics {
  totalIssues: number;
  resolvedIssues: number;
  avgResolutionTime: number;
  topCategories: Array<{
    category: string;
    count: number;
  }>;
  citizenEngagement: Array<{
    date: string;
    reports: number;
  }>;
}