import { Question, QuestionType } from '../../../types';

export const LISTENING_QUESTIONS: Record<string, Question[]> = {
  'l-full-1': [
    { id: 1, group: 'PART 1', type: QuestionType.FILL_GAPS, text: 'kitchen has a fridge and a', correctAnswer: 'microwave', placeholder: '1.' },
    { id: 2, group: 'PART 1', type: QuestionType.FILL_GAPS, text: 'close to', correctAnswer: 'beach', placeholder: '2.' },
    { id: 3, group: 'PART 1', type: QuestionType.FILL_GAPS, text: 'fully-equipped kitchen and a', correctAnswer: 'television', placeholder: '3.' },
    { id: 4, group: 'PART 1', type: QuestionType.FILL_GAPS, text: 'facing the', correctAnswer: 'ocean', placeholder: '4.' },
    { id: 5, group: 'PART 1', type: QuestionType.FILL_GAPS, text: 'discount of... % for bookings over ten nights', correctAnswer: '15', placeholder: '5.' },
    { id: 6, group: 'PART 1', type: QuestionType.FILL_GAPS, text: 'Children can play... for free', correctAnswer: 'mini-golf', placeholder: '6.' },
    { id: 7, group: 'PART 1', type: QuestionType.FILL_GAPS, text: 'Hire equipment for...', correctAnswer: 'fishing', placeholder: '7.' },
    { id: 8, group: 'PART 1', type: QuestionType.FILL_GAPS, text: 'Visit local...', correctAnswer: 'museum', placeholder: '8.' },
    { id: 9, group: 'PART 1', type: QuestionType.FILL_GAPS, text: 'Guided tours of the...', correctAnswer: 'forest', placeholder: '9.' },
    { id: 10, group: 'PART 1', type: QuestionType.FILL_GAPS, text: 'Contact... to confirm', correctAnswer: 'manager', placeholder: '10.' },
    { id: 11, group: 'PART 2', type: QuestionType.MULTIPLE_CHOICE, text: 'Joan normally gets up at', options: [{label: '5.30 a.m.', value: 'A'}, {label: '6.30 a.m.', value: 'B'}, {label: '7.30 a.m.', value: 'C'}], correctAnswer: 'B' },
    { id: 13, group: 'PART 2', type: QuestionType.FILL_GAPS, text: 'helpers on the volunteer list', correctAnswer: '35', placeholder: '13.' },
    { id: 14, group: 'PART 2', type: QuestionType.FILL_GAPS, text: 'come regularly', correctAnswer: '15', placeholder: '14.' },
    { id: 31, group: 'PART 4', type: QuestionType.FILL_GAPS, text: 'Aim in UK is to reduce carbon emissions from energy consumed in', correctAnswer: 'homes', placeholder: '31.' },
    { id: 32, group: 'PART 4', type: QuestionType.FILL_GAPS, text: 'Most popular ‘green’ energy:', correctAnswer: 'solar', placeholder: '32.' },
    { id: 33, group: 'PART 4', type: QuestionType.FILL_GAPS, text: 'Lack of investment due to lack of...', correctAnswer: 'confidence', placeholder: '33.' },
    { id: 40, group: 'PART 4', type: QuestionType.FILL_GAPS, text: 'need for a... to co-ordinate the installation', correctAnswer: 'manager', placeholder: '40.' }
  ]
};