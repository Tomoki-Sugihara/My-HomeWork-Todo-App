export const initialState = {
   todoList: [],
   subjectList: [],
   // activeSubjectIndex: -1,
};

export const initialItem = {
   title: '',
   isImportant: false,
   subjectTitle: '',
};

export const todoListTemplate = {
   title: '',
   isDone: false,
   isImportant: false,
   subjectIndex: -1,
};

export const subjectListTemplate = {
   title: '',
};

const demoTodoList = [
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
];

const demoSubjectList = [
   { title: 'English' },
   { title: '理科' },
   { title: 'Computer Science' },
];

export const demoState = {
   // ...initialState,
   todoList: demoTodoList,
   subjectList: demoSubjectList,
   // activeSubjectIndex: -1,
};
