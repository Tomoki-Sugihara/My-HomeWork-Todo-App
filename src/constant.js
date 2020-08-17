export const initialState = {
   todoList: [],
   subjectList: [],
};

export const initialItem = {
   title: '',
   isImportant: false,
   subjectTitle: '',
};

export const todoListTemplate = {
   key: '',
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
   todoList: demoTodoList,
   subjectList: demoSubjectList,
};
