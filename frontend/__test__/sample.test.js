describe('sample test 101', () => {
  it('works as expected', () => {
    const age = 99;
    expect(1).toEqual(1);
    expect(age).toEqual(99);
  });

  it('handles ranges just fine', () => {
    const age = 200;
    expect(age).toBeGreaterThan(100);
  });

  it('makes a list of pet names', () => {
    const pets = ['a', 'b', 'c'];
    expect(pets).toEqual(['a', 'b', 'c']);
    expect(pets).toContain('a');
  });
});
