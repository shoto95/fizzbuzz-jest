import { fizzbuzz } from './FizzBuzz.ts'

describe('fizzbuzz()の3,5の倍数以外テスト', () => {
  it('1を渡すと、文字列"1"を返す。', () => {
    expect(fizzbuzz(1)).toBe("1");
  });

  it('2を渡すと、文字列"2"を返す。', () => {
    expect(fizzbuzz(2)).toBe("2");
  });
});

test('3を渡すと、文字列"Fizz"を返す。', () => {
  expect(fizzbuzz(3)).toBe('Fizz');
});

test('5を渡すと、文字列"Buzz"を返す。', () => {
  expect(fizzbuzz(5)).toBe('Buzz');
});

test('15を渡すと、文字列"FizzBuzz"を返す。', () => {
  expect(fizzbuzz(15)).toBe('FizzBuzz');
});



