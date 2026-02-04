import { Question, QuestionType } from '../../../types';

// Options for Section 2 matching
const SECTION2_OPTIONS = [
  { label: 'A  deposit is required', value: 'A' },
  { label: 'B  only available at weekends', value: 'B' },
  { label: 'C  can be reserved online', value: 'C' },
  { label: 'D  currently under repair', value: 'D' },
  { label: 'E  recently extended', value: 'E' },
  { label: 'F  temporarily not available', value: 'F' },
  { label: 'G  no booking is necessary', value: 'G' }
];

// Form-based structure for Test 1
export const LISTENING_QUESTIONS: Record<string, Question[]> = {
  'test-1': [
    // Form Header Info (not questions, just for rendering)
    { id: 0, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'HEADER', correctAnswer: '', group: 'header' },
    
    // Personal Details Section
    { id: 1, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Surname', correctAnswer: '', placeholder: '', group: 'Personal Details' },
    { id: 2, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Date of birth', correctAnswer: '', placeholder: '', group: 'Personal Details' },
    
    // Temporary Work Requirements Section  
    { id: 3, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Period when work wanted from June to', correctAnswer: '', placeholder: '', group: 'Temporary Work Requirements' },
    { id: 4, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Where work wanted', correctAnswer: '', placeholder: '', group: 'Temporary Work Requirements' },
    { id: 5, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Or', correctAnswer: '', placeholder: '', group: 'Temporary Work Requirements' },
    { id: 6, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Type of work wanted: 1st priority', correctAnswer: '', placeholder: '', group: 'Temporary Work Requirements' },
    { id: 7, section: 'SECTION 1', type: QuestionType.FILL_GAPS, text: 'Type of work wanted: 2nd priority', correctAnswer: '', placeholder: '', group: 'Temporary Work Requirements' },
    
    // Questions 8-10 (Select 3)
    { id: 8, section: 'SECTION 1', group: 'Questions 8-10', type: QuestionType.MULTIPLE_CHOICE_MULTI, text: 'Which of these has Lily got? (Select THREE)', options: [
      {label: 'A good knowledge of a foreign language', value: 'A'},
      {label: 'B a driving license', value: 'B'},
      {label: 'C the ability to deal with the public', value: 'C'},
      {label: 'D a sports coaching qualification', value: 'D'},
      {label: 'E good computer skills', value: 'E'},
      {label: 'F experience of working with young children', value: 'F'},
      {label: 'G the ability to play a musical instrument', value: 'G'}
    ], correctAnswer: '' },
    
    // SECTION 2 - Questions 11-15 (Matching with box format)
    { id: 11, section: 'SECTION 2', group: 'Questions 11-15', type: QuestionType.MATCHING_BOX, text: 'Football pitches', correctAnswer: '', options: SECTION2_OPTIONS, heading: 'Community Centre Facilities' },
    { id: 12, section: 'SECTION 2', group: 'Questions 11-15', type: QuestionType.MATCHING_BOX, text: 'Library', correctAnswer: '', options: SECTION2_OPTIONS },
    { id: 13, section: 'SECTION 2', group: 'Questions 11-15', type: QuestionType.MATCHING_BOX, text: 'Tennis courts', correctAnswer: '', options: SECTION2_OPTIONS },
    { id: 14, section: 'SECTION 2', group: 'Questions 11-15', type: QuestionType.MATCHING_BOX, text: 'Large hall', correctAnswer: '', options: SECTION2_OPTIONS },
    { id: 15, section: 'SECTION 2', group: 'Questions 11-15', type: QuestionType.MATCHING_BOX, text: 'Computer lab', correctAnswer: '', options: SECTION2_OPTIONS },
    
    // SECTION 2 - Questions 16-20 (Note completion format)
    { id: 16, section: 'SECTION 2', group: 'Questions 16-20', type: QuestionType.NOTE_COMPLETION, text: 'Event', correctAnswer: '', noteText: 'Event:', blankText: '' },
    { id: 17, section: 'SECTION 2', group: 'Questions 16-20', type: QuestionType.NOTE_COMPLETION, text: 'Entrants', correctAnswer: '', noteText: 'Entrants:', blankText: '' },
    { id: 18, section: 'SECTION 2', group: 'Questions 16-20', type: QuestionType.NOTE_COMPLETION, text: 'Type of prize', correctAnswer: '', noteText: 'Type of prize:', blankText: 'competition' },
    { id: 19, section: 'SECTION 2', group: 'Questions 16-20', type: QuestionType.NOTE_COMPLETION, text: 'Date', correctAnswer: '', noteText: 'Date:', blankText: 'Starts on' },
    { id: 20, section: 'SECTION 2', group: 'Questions 16-20', type: QuestionType.NOTE_COMPLETION, text: 'Entrants', correctAnswer: '', noteText: 'Entrants:', blankText: '' },
    
    // SECTION 3 - Questions 21-25 (Multiple Choice)
    { id: 21, section: 'SECTION 3', group: 'Questions 21-25', type: QuestionType.MULTIPLE_CHOICE, text: 'Martin and Julia agree that the most difficult part about working together is', correctAnswer: '', options: [
      {label: 'A dividing the reading up equally', value: 'A'},
      {label: 'B finding a mutually convenient time to meet', value: 'B'},
      {label: 'C ensuring all sections of the presentation link together', value: 'C'}
    ] },
    { id: 22, section: 'SECTION 3', group: 'Questions 21-25', type: QuestionType.MULTIPLE_CHOICE, text: 'What does Martin think is important to remember when they deliver the presentation?', correctAnswer: '', options: [
      {label: 'A to provide sufficient detail', value: 'A'},
      {label: 'B to consider the kind of audience they have', value: 'B'},
      {label: 'C to avoid going over the time limit', value: 'C'}
    ] },
    { id: 23, section: 'SECTION 3', group: 'Questions 21-25', type: QuestionType.MULTIPLE_CHOICE, text: 'Which aspect of biomechanics is Martin keen to research further?', correctAnswer: '', options: [
      {label: 'A the analysis of human movement', value: 'A'},
      {label: 'B the influence of the environment', value: 'B'},
      {label: 'C the role of sports equipment', value: 'C'}
    ] },
    { id: 24, section: 'SECTION 3', group: 'Questions 21-25', type: QuestionType.MULTIPLE_CHOICE, text: 'According to Julia, sports science is of most benefit to athletes when', correctAnswer: '', options: [
      {label: 'A it enables them to perform consistently', value: 'A'},
      {label: 'B it identifies an athlete\'s readiness for competition', value: 'B'},
      {label: 'C it assesses the effectiveness of a training programme', value: 'C'}
    ] },
    { id: 25, section: 'SECTION 3', group: 'Questions 21-25', type: QuestionType.MULTIPLE_CHOICE, text: 'What does Julia say about the psychology of athletes?', correctAnswer: '', options: [
      {label: 'A They are particularly strong-willed', value: 'A'},
      {label: 'B They become over-confident when winning', value: 'B'},
      {label: 'C They depend too much on professional support', value: 'C'}
    ] }
  ]
};
