const colorTemplate = {
   black: (opacity = 1) => `rgba(33,33,33,${opacity})`,
   gray43: 'rgb(43,43,43)',
   gray50: 'rgba(50,50,50)',
   gray53: 'rgba(53,53,53)',
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
};
