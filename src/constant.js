export const initialState = {
   todoList: [],
   subjectList: [],
   activeSubjectIndex: undefined,
};

export const todoListTemplate = {
   title: '',
   isDone: false,
   isImportant: false,
   subjectIndex: undefined,
};

export const subjectListTemplate = {
   title: '',
};

export const demoTodoList = [
   {
      title: 'JavaScript',
      isDone: false,
      isImportant: false,
      subjectIndex: 2,
   },
   { title: 'Report', isDone: true, isImportant: true, subjectIndex: 0 },
   {
      title: '実験レポート',
      isDone: false,
      isImportant: false,
      subjectIndex: 1,
   },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
   { title: 'Python', isDone: false, isImportant: false, subjectIndex: 2 },
];

export const demoSubjectList = [
   { title: 'English' },
   { title: '理科' },
   { title: 'Computer Science' },
];

export const initialItem = {
   title: '',
   isImportant: false,
   subjectTitle: '',
};
