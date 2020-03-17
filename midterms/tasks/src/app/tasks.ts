import {Task} from './task';

export const TASKS: Task[] = [
  {
    id: 1,
    title: 'The most Important task',
    description: 'This is what I really have to do!',
    status: -1
  },
  {
    id: 2,
    title: 'More Important Task',
    description: 'This is what needs to be done in time.',
    status: -1
  },
  {
    id: 3,
    title: 'Not so Important Task',
    description: 'I can do it later.',
    status: -1
  },
  {
    id: 4,
    title: 'Not Important at all',
    description: 'I do not really need to do this.',
    status: 0
  },
  {
    id: 5,
    title: 'Some useless task',
    description: 'I have better stuff to do but I will work on this useless thing instead.',
    status: 1
  }
];
