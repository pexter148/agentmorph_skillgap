export interface User {
  id: string;
  name: string;
  email: string;
  department: string;
  role: string;
  tsrRole: string;
  profileStatus: 'loading' | 'loaded' | 'error';
  assessmentStatus: 'pending' | 'in-progress' | 'completed';
  recommendationStatus: 'pending' | 'generating' | 'ready';
  learningStatus: 'not-started' | 'in-progress' | 'completed';
  skillGaps: SkillGap[];
  currentPath?: LearningPath;
  completionRate: number;
  lastActivity: Date;
}

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: string;
  department: string;
  permissions: string[];
}

export interface SkillGap {
  id: string;
  skill: string;
  currentLevel: number;
  requiredLevel: number;
  gap: number;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  estimatedHours: number;
  modules: LearningModule[];
  completionStatus: 'not-started' | 'in-progress' | 'completed';
  progress: number;
}

export interface LearningModule {
  id: string;
  title: string;
  description: string;
  estimatedTime: number;
  status: 'not-started' | 'in-progress' | 'completed';
  type: 'video' | 'exercise' | 'quiz' | 'project';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export interface Assessment {
  id: string;
  userId: string;
  competency: string;
  score: number;
  maxScore: number;
  completedAt: Date;
  timeSpent: number;
}

export interface AgentStatus {
  name: string;
  status: 'idle' | 'processing' | 'error';
  queueSize: number;
  avgLatency: number;
  errorRate: number;
  lastProcessed: Date;
}

export interface DepartmentAnalytics {
  department: string;
  totalEmployees: number;
  averageCompletion: number;
  topSkillGaps: SkillGap[];
  engagementScore: number;
  trainingCost: number;
}

export interface GenAIInsight {
  id: string;
  type: 'recommendation' | 'progress' | 'opportunity' | 'alert';
  title: string;
  content: string;
  priority: 'high' | 'medium' | 'low';
  actionable: boolean;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
}

export interface CodingChallenge {
  id: string;
  title: string;
  description: string;
  language: string;
  starterCode: string;
  testCases: {
    input: string;
    expectedOutput: string;
  }[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}