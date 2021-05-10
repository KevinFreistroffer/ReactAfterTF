export const returnCommaSeparatedStrings = (strings: Array<string>): string => {
  let returnValue = '';

  strings.forEach((str: string, index: number) => {
    if (index < strings.length - 1) {
      returnValue += `${str}, `;
    } else {
      returnValue += str;
    }
  });

  return returnValue;
};
