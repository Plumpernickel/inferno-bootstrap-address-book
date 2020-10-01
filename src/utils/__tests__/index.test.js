import { formatName } from '../index';

describe('utilities', () => {
  const validNameObj = {
    title: 'Miss', first: 'Testy', last: 'Testerson'
  };

  it('formatName() returns a default string when called with no arguments', () => {
    expect(formatName()).toEqual('Mr. E Nigma');
  });

  it('formatName() does not add a dot to prefix lengths > 3 characters', () => {
    expect(formatName(validNameObj)).toEqual('Miss Testy Testerson');
  });

  it('formatName() adds a dot to prefix lengths <= 3 characters', () => {
    const shortPrefix = { ...validNameObj, title: 'Mr' };

    expect(formatName(shortPrefix)).toEqual('Mr. Testy Testerson');
  });
});