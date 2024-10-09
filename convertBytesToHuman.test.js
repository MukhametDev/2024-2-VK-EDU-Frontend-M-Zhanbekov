import convertBytesToHuman from './convertBytesToHuman';

describe('convertBytesToHuman', () => {
  test('Возвращает false для неправильного типа данных', () => {
    expect(convertBytesToHuman(-1)).toBe(false); // Отрицательное число
    expect(convertBytesToHuman('string')).toBe(false); // Строка
    expect(convertBytesToHuman([])).toBe(false); // Массив
    expect(convertBytesToHuman({})).toBe(false); // Объект
    expect(convertBytesToHuman(null)).toBe(false); // null
    expect(convertBytesToHuman(undefined)).toBe(false); // undefined
  });

  test('Возвращает корректное значение для чисел', () => {
    expect(convertBytesToHuman(5)).toBe('5 B'); // Небольшое количество байт
    expect(convertBytesToHuman(1024)).toBe('1.00 KB'); // 1 КБ
    expect(convertBytesToHuman(123123123)).toBe('117.42 MB'); // Мегабайты
    expect(convertBytesToHuman(1610612736)).toBe('1.50 GB'); // Гигабайты
    expect(convertBytesToHuman(500)).toBe('500 B'); // Байты
    expect(convertBytesToHuman(0)).toBe('0 B'); // Ноль байт
  });

  test('Возвращает false для отрицательных чисел', () => {
    expect(convertBytesToHuman(-1024)).toBe(false);
    expect(convertBytesToHuman(-1)).toBe(false);
  });

  test('Возвращает корректные значения при больших объемах', () => {
    expect(convertBytesToHuman(1073741824)).toBe('1.00 GB'); // 1 ГБ
    expect(convertBytesToHuman(2147483648)).toBe('2.00 GB'); // 2 ГБ
  });
});
