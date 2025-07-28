import { User, SkillGap, LearningPath, LearningModule, Assessment, AgentStatus, DepartmentAnalytics } from '../types';

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Praveen Kumar',
    email: 'praveen@hexaware.com',
    department: 'Engineering',
    role: 'Senior Developer',
    tsrRole: 'Full Stack Developer',
    profileStatus: 'loaded',
    assessmentStatus: 'completed',
    recommendationStatus: 'ready',
    learningStatus: 'in-progress',
    completionRate: 75,
    lastActivity: new Date('2025-01-20T10:30:00'),
    skillGaps: [
      {
        id: '1',
        skill: 'React Native',
        currentLevel: 2,
        requiredLevel: 4,
        gap: 2,
        priority: 'high',
        category: 'Frontend'
      },
      {
        id: '2',
        skill: 'Microservices Architecture',
        currentLevel: 3,
        requiredLevel: 4,
        gap: 1,
        priority: 'medium',
        category: 'Backend'
      }
    ],
    currentPath: {
      id: 'path-1',
      title: 'Advanced Frontend Development',
      description: 'Master modern frontend technologies and best practices',
      estimatedHours: 40,
      completionStatus: 'in-progress',
      progress: 60,
      modules: [
        {
          id: 'mod-1',
          title: 'React Native Fundamentals',
          description: 'Learn the basics of React Native development',
          estimatedTime: 8,
          status: 'completed',
          type: 'video',
          difficulty: 'intermediate'
        },
        {
          id: 'mod-2',
          title: 'Advanced React Native',
          description: 'Deep dive into advanced React Native concepts',
          estimatedTime: 12,
          status: 'in-progress',
          type: 'project',
          difficulty: 'advanced'
        },
        {
          id: 'mod-3',
          title: 'Performance Optimization',
          description: 'Optimize React Native app performance',
          estimatedTime: 6,
          status: 'not-started',
          type: 'exercise',
          difficulty: 'advanced'
        }
      ]
    }
  },
  {
    id: '2',
    name: 'Vittal Reddy',
    email: 'vittal@hexaware.com',
    department: 'Data Science',
    role: 'Data Analyst',
    tsrRole: 'Senior Data Scientist',
    profileStatus: 'loaded',
    assessmentStatus: 'pending',
    recommendationStatus: 'pending',
    learningStatus: 'not-started',
    completionRate: 15,
    lastActivity: new Date('2025-01-19T14:15:00'),
    skillGaps: [
      {
        id: '3',
        skill: 'Machine Learning',
        currentLevel: 2,
        requiredLevel: 5,
        gap: 3,
        priority: 'high',
        category: 'AI/ML'
      },
      {
        id: '4',
        skill: 'Python Advanced',
        currentLevel: 3,
        requiredLevel: 4,
        gap: 1,
        priority: 'medium',
        category: 'Programming'
      }
    ]
  },
  {
    id: '3',
    name: 'Esther Williams',
    email: 'esther@hexaware.com',
    department: 'Engineering',
    role: 'DevOps Engineer',
    tsrRole: 'Cloud Solutions Architect',
    profileStatus: 'loaded',
    assessmentStatus: 'in-progress',
    recommendationStatus: 'generating',
    learningStatus: 'not-started',
    completionRate: 35,
    lastActivity: new Date('2025-01-20T16:45:00'),
    skillGaps: [
      {
        id: '5',
        skill: 'Kubernetes',
        currentLevel: 2,
        requiredLevel: 5,
        gap: 3,
        priority: 'high',
        category: 'DevOps'
      },
      {
        id: '6',
        skill: 'AWS Lambda',
        currentLevel: 1,
        requiredLevel: 4,
        gap: 3,
        priority: 'high',
        category: 'Cloud'
      }
    ]
  },
  {
    id: '4',
    name: 'Laksshaiya Patel',
    email: 'laksshaiya@hexaware.com',
    department: 'QA',
    role: 'QA Engineer',
    tsrRole: 'Test Automation Lead',
    profileStatus: 'loaded',
    assessmentStatus: 'completed',
    recommendationStatus: 'ready',
    learningStatus: 'in-progress',
    completionRate: 55,
    lastActivity: new Date('2025-01-20T11:20:00'),
    skillGaps: [
      {
        id: '7',
        skill: 'Automation Testing',
        currentLevel: 2,
        requiredLevel: 4,
        gap: 2,
        priority: 'high',
        category: 'Testing'
      },
      {
        id: '8',
        skill: 'Selenium WebDriver',
        currentLevel: 3,
        requiredLevel: 5,
        gap: 2,
        priority: 'medium',
        category: 'Testing'
      }
    ]
  }
];

// Admin users - separate from regular users
export const mockAdminUsers = [
  {
    id: 'admin-1',
    name: 'Admin User',
    email: 'admin@hexaware.com',
    role: 'System Administrator',
    department: 'IT',
    permissions: ['user_management', 'analytics', 'system_config']
  }
];

export const mockAssessments: Assessment[] = [
  {
    id: 'assess-1',
    userId: '1',
    competency: 'React Native',
    score: 75,
    maxScore: 100,
    completedAt: new Date('2025-01-18T09:00:00'),
    timeSpent: 45
  },
  {
    id: 'assess-2',
    userId: '4',
    competency: 'Automation Testing',
    score: 82,
    maxScore: 100,
    completedAt: new Date('2025-01-17T14:30:00'),
    timeSpent: 60
  }
];

export const mockAgentStatus: AgentStatus[] = [
  {
    name: 'Profile Agent',
    status: 'processing',
    queueSize: 3,
    avgLatency: 1.2,
    errorRate: 0.02,
    lastProcessed: new Date('2025-01-20T16:58:00')
  },
  {
    name: 'Assessment Agent',
    status: 'idle',
    queueSize: 0,
    avgLatency: 2.1,
    errorRate: 0.01,
    lastProcessed: new Date('2025-01-20T16:55:00')
  },
  {
    name: 'Recommender Agent',
    status: 'processing',
    queueSize: 5,
    avgLatency: 3.8,
    errorRate: 0.05,
    lastProcessed: new Date('2025-01-20T16:59:00')
  },
  {
    name: 'GenAI Agent',
    status: 'processing',
    queueSize: 2,
    avgLatency: 2.5,
    errorRate: 0.03,
    lastProcessed: new Date('2025-01-20T16:59:00')
  }
];

export const mockDepartmentAnalytics: DepartmentAnalytics[] = [
  {
    department: 'Engineering',
    totalEmployees: 45,
    averageCompletion: 68,
    topSkillGaps: [
      {
        id: 'gap-1',
        skill: 'Kubernetes',
        currentLevel: 2.1,
        requiredLevel: 4.5,
        gap: 2.4,
        priority: 'high',
        category: 'DevOps'
      },
      {
        id: 'gap-2',
        skill: 'React Native',
        currentLevel: 2.8,
        requiredLevel: 4.2,
        gap: 1.4,
        priority: 'medium',
        category: 'Frontend'
      }
    ],
    engagementScore: 72,
    trainingCost: 125000
  },
  {
    department: 'Data Science',
    totalEmployees: 28,
    averageCompletion: 81,
    topSkillGaps: [
      {
        id: 'gap-3',
        skill: 'Deep Learning',
        currentLevel: 2.5,
        requiredLevel: 4.8,
        gap: 2.3,
        priority: 'high',
        category: 'AI/ML'
      }
    ],
    engagementScore: 85,
    trainingCost: 98000
  },
  {
    department: 'QA',
    totalEmployees: 22,
    averageCompletion: 59,
    topSkillGaps: [
      {
        id: 'gap-4',
        skill: 'Automation Testing',
        currentLevel: 2.2,
        requiredLevel: 4.0,
        gap: 1.8,
        priority: 'high',
        category: 'Testing'
      }
    ],
    engagementScore: 63,
    trainingCost: 67000
  }
];

// GenAI Mock Data
export const mockGenAIInsights = [
  {
    id: 'insight-1',
    type: 'recommendation',
    title: 'Trending Skills in Your Department',
    content: 'Based on industry trends, React Native and Kubernetes are becoming essential skills for your role.',
    priority: 'high',
    actionable: true
  },
  {
    id: 'insight-2',
    type: 'progress',
    title: 'Learning Velocity Analysis',
    content: 'You\'re learning 23% faster than the average learner in similar roles.',
    priority: 'medium',
    actionable: false
  },
  {
    id: 'insight-3',
    type: 'opportunity',
    title: 'Career Path Suggestion',
    content: 'Completing your current path could qualify you for Senior Full Stack Developer positions.',
    priority: 'high',
    actionable: true
  }
];