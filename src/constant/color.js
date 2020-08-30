const colorTemplate = {
   black: (opacity = 1) => `rgba(33,33,33,${opacity})`,
   gray43: 'rgb(43,43,43)',
   gray50: 'rgb(50,50,50)',
   gray53: 'rgb(53,53,53)',
   gray115: 'rgb(115, 115, 115)',
   red: 'tomato'

};

export const color = {
   blackOfBackground: colorTemplate.black,
   blackOfMenuBackground: colorTemplate.black,
   grayOfItem: colorTemplate.gray43,
   grayOfForm: colorTemplate.gray43,
   grayOfSideMenuBackground: colorTemplate.gray43,
   grayOfSelectedItem: colorTemplate.gray50,
   grayOfHoverItem: colorTemplate.gray53,
   grayOfHoverForm: colorTemplate.gray53,
   grayOfBorder: colorTemplate.gray115,
   grayOfCountNumber: colorTemplate.gray115,
   redOfCountNumber: colorTemplate.red,
   redOfErrorMessage: colorTemplate.red,
};
