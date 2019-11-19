import formatMoney from '../lib/formatMoney';

describe('Money formatter function', () => {
  it('works with fractional dollars', () => {
    expect(formatMoney(1)).toEqual('$0.01');
    expect(formatMoney(10)).toEqual('$0.10');
    expect(formatMoney(91)).toEqual('$0.91');
    expect(formatMoney(99)).toEqual('$0.99');
  });

  it('Trims cents off for whole dollars', () => {
    expect(formatMoney(5000)).toEqual('$50');
    expect(formatMoney(100)).toEqual('$1');
    expect(formatMoney(500000)).toEqual('$5,000');
    expect(formatMoney(50000000)).toEqual('$500,000');
  });

  it('Works with whole and fractional dollars', () => {
    expect(formatMoney(5032)).toEqual('$50.32');
    expect(formatMoney(101)).toEqual('$1.01');
    expect(formatMoney(500076)).toEqual('$5,000.76');
    expect(formatMoney(50000001)).toEqual('$500,000.01');
    expect(formatMoney(264389653)).toEqual('$2,643,896.53');
  });
});
