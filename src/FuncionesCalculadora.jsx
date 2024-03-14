function calcular(num1, num2, key) {
  switch (key) {
    case 0:
      return num1 + num2;

      break;
    case 1:
      return num1 - num2;

      break;
    case 2:
      return num1 * num2;

      break;
    case 3:
      return num1 / num2;
      break;
  }
}
export  { calcular };
