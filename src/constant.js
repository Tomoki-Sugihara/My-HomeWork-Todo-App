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

// // color
// const BLACKTEMPLATE = 'rgb(33,33,33)';
// const BLACKTEMPLATE096 = 'rgba(33,33,33, 0.96)';

// const GRAYTEMPLATE43 = "rgb(43,43,43)"
// const GRAYTEMPLATE50 = "rgb(50,50,50)"

// // export default {
// //    blackTemplate: 'rgb(33,33,33)',
// // };

// export const BLACKOFBACKGROUND = BLACKTEMPLATE;
// export const BLACKOFBACKGROUND096 = BLACKTEMPLATE096;
// export const GRAYOFITEM = GRAYTEMPLATE43
// export const GRAYOFITEMHOVER = GRAYTEMPLATE50
