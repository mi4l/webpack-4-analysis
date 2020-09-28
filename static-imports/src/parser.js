const isNumber = str => !isNaN(+str);

const isOperator = str => ['+', '-', '/', '*'].includes(str);

const splitString = (str, separator = '') => str.split(separator);

export default input => {
  console.log(
    splitString(input)
  );
}