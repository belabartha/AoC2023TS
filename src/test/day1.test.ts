import { day1 } from '../day1';

describe('Test day 1 corectness', () => {
  test('Single number on a line', async () => {
    expect(await day1('./src/test/fixtures/day1_1.txt')).toEqual(11);
  })

  test('Two number on a line', async () => {
    expect(await day1('./src/test/fixtures/day1_2.txt')).toEqual(12);
  })

  test('Single number at the end of a line', async () => {
    expect(await day1('./src/test/fixtures/day1_3.txt')).toEqual(22);
  })

  test('One number as string', async () => {
    expect(await day1('./src/test/fixtures/day1_4.txt')).toEqual(77);
  })

  test('Two numbers as string, with mid-number', async () => {
    expect(await day1('./src/test/fixtures/day1_5.txt')).toEqual(71);
  })
})