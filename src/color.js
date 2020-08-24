// // color
// const BLACKTEMPLATE = 'rgb(33,33,33)';
// const BLACKTEMPLATE096 = 'rgba(33,33,33, 0.96)';

// const GRAYTEMPLATE43 = 'rgb(43,43,43)';
// const GRAYTEMPLATE50 = 'rgb(50,50,50)';

// // export default {
// //    blackTemplate: 'rgb(33,33,33)',
// // };

// export const BLACKOFBACKGROUND = BLACKTEMPLATE;
// export const BLACKOFBACKGROUND096 = BLACKTEMPLATE096;
// export const GRAYOFITEM = GRAYTEMPLATE43;
// export const GRAYOFITEMHOVER = GRAYTEMPLATE50;

const colorTemplate = {
   black: (opacity = 1) => {
      return `rgba(33,33,33,${opacity})`;
   },
   gray: 'rgb(43,43,43)',
   lighterGray: 'rgba(50,50,50)',

   // gray: (opacity = 1) => {
   //    return `rgba(43,43,43,${opacity})`;
   // },
   // lighterGray: (opacity = 1) => {
   //    return `rgba(50,50,50,${opacity})`;
   // },
};

//color
export const c = {
   blackOfBackground: colorTemplate.black,
   blackOfMenuBackground: colorTemplate.black,
   grayOfItem: colorTemplate.gray,
   grayOfForm: colorTemplate.gray,
   grayOfHoverForm: colorTemplate.lighterGray,
};
