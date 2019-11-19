function Person(name, foods) {
  this.name = name;
  this.foods = foods;
}

Person.prototype.fetchFavFoods = function() {
  return new Promise((resolve, reject) => {
    //simulate an API
    setTimeout(() => resolve(this.foods), 100);
  });
};

describe('Mocking learning', () => {
  it('mocks a regular function', () => {
    const fetchPets = jest.fn();
    // console.log(fetchPets);
    fetchPets('snickers');
    expect(fetchPets).toHaveBeenCalled();
    expect(fetchPets).toHaveBeenCalledWith('snickers');
    fetchPets('snickers');
    expect(fetchPets).toHaveBeenCalledTimes(2);
  });

  it('Can create a person', () => {
    const me = new Person('Benny', ['Pizza', 'Burgers']);
    expect(me.name).toBe('Benny');
  });

  it('Can fetch favorite foods', async () => {
    const me = new Person('Benny', ['pizza', 'ramen']);
    //mock the favFoods function
    me.fetchFavFoods = jest.fn().mockResolvedValue(['Sushi', 'ramen']);
    const favFoods = await me.fetchFavFoods();
    console.log(favFoods);
    expect(favFoods).toEqual(['Sushi', 'ramen']);
  });
});
