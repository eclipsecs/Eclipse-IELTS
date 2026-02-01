
export enum QuestionType {
  MATCHING_ENDINGS = 'MATCHING_ENDINGS',
  MATCHING_PEOPLE = 'MATCHING_PEOPLE',
  TFNG = 'TFNG',
  FILL_GAPS = 'FILL_GAPS',
  MULTIPLE_CHOICE = 'MULTIPLE_CHOICE',
  MULTIPLE_CHOICE_MULTI = 'MULTIPLE_CHOICE_MULTI',
  MATCHING = 'MATCHING',
  CLASSIFICATION = 'CLASSIFICATION'
}

export type Theme = 'light' | 'dark';
export type AppView = 'home' | 'test' | 'roadmap' | 'passage1' | 'passage2' | 'passage3';
export type TestCategory = 'reading' | 'listening' | 'writing' | 'full';

export interface Question {
  id: number;
  type: QuestionType;
  text: string;
  options?: { label: string; value: string }[];
  correctAnswer: string | string[];
  explanation?: string;
  placeholder?: string;
  group?: string;
}

export interface TestState {
  isStarted: boolean;
  isFinished: boolean;
  timeRemaining: number;
  initialTime: number;
  userAnswers: Record<number, string | string[]>;
  theme: Theme;
}

export interface TestMeta {
  id: string;
  title: string;
  category: TestCategory;
  passageNumber?: number;
  sectionNumber?: number;
  taskNumber?: number;
  duration: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isAvailable: boolean;
  imageUrl?: string;
  audioUrl?: string;
}

export interface ReadingPassageData {
  title: string;
  subtitle: string;
  content: string[];
  questions: Question[];
}
