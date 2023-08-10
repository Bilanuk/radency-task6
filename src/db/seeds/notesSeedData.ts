import { NoteCategory } from '../../common/constants/common.constants';

export const notesSeedData = [
  {
    name: 'Dentist appointment',
    category: NoteCategory.Task,
    dates: ['3/5/2021', '5/5/2021'],
    content:
      'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
    isArchived: false,
  },
  {
    name: 'Buy a new phone',
    category: NoteCategory.Task,
    dates: [],
    content: 'I’m gonna buy a new phone, I’m thinking about the new iPhone 20',
    isArchived: false,
  },
  {
    name: 'New Year’s resolution',
    category: NoteCategory.Idea,
    dates: [],
    content: 'I’m gonna find a new job, and hope i will finish my degree',
    isArchived: false,
  },
  {
    name: 'My favorite movie',
    category: NoteCategory.RandomThought,
    dates: [],
    content: 'My favorite movie is “The Godfather”',
    isArchived: false,
  },
  {
    name: 'Read a book',
    category: NoteCategory.Task,
    dates: [],
    content:
      'I’m gonna read a book, I’m thinking about “The Lord of the Rings”',
    isArchived: true,
  },
  {
    name: "Don't forget to buy milk",
    category: NoteCategory.Task,
    dates: ['3/5/2021'],
    content: 'I’m gonna buy milk on the 3/5/2021',
    isArchived: true,
  },
  {
    name: 'Do planche hold',
    category: NoteCategory.Task,
    dates: [],
    content: 'I’m gonna do planche hold, I’m thinking about 10 seconds',
    isArchived: false,
  },
];
