const countValleys = require('./index')

it('Should return 1 valley', () => {
    expect(countValleys('UDDDUDUU', 8)).toEqual(1);
})

it('Should return 1 valley', () => {
    expect(countValleys('DDUUUUDD', 8)).toEqual(1);
})

it('Should return 2 valleys', () => {
    expect(countValleys('DDUUDDUDUUUD', 12)).toEqual(2);
})

it('Should return 2 valleys', () => {
    expect(countValleys('DUDDDUUDUU', 10)).toEqual(2);
})

it('Should return 4 valleys', () => {
    expect(countValleys('DDUUUDDDUUUDDDUUUDDU', 20)).toEqual(4);
})

it('Should return Invalid path error message', () => {
    expect(() => (countValleys('DDUUUDDDUUUDDDUUUDD', 19)).toThrow(
        new Error("Invalid path")
    ));
})