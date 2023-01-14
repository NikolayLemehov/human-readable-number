module.exports = function toReadable(number) {
  if (number.toString().length > 9) return 'overflow';

  const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
  const b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  let str = '';
  const revNumArr = number.toString().split('').map(it => Number(it)).reverse();

  const pairToString = ([units = 0, tens = 0], isBegin = false) => {
    const num = +units + tens * 10;
    if (isBegin && num < 1) {
      return a[units];
    }

    if (!isBegin && num < 1) {
      return '';
    }

    if (num < 20) {
      str = a[num]
      return (isBegin ? '' : ' ') + str;
    }
    if (num < 100) {
      str = b[tens] + (units ? (' ' + a[units]) : '');
      return (isBegin ? '' : ' ') + str;
    }
  }

  if (number < 100) {
    str = pairToString([revNumArr[0], revNumArr[1]], true)
    return str;
  }

  if (!(number % 100)) {
    str = a[revNumArr[2]] + ' hundred';
    return str;
  }

  str = a[revNumArr[2]] + ' hundred' + pairToString([revNumArr[0], revNumArr[1]])
  return str;
}
