class Company{
  constructor(name, ships, money, relationships, colonies){
    this._name = name;
    this._ships = ships;
    this._money = money;
    this._relationships = relationships;
    this._colonies = colonies;
  }

  get name(){return this._name};
  get ships(){return this._ships};
  get money(){return this._money};
  get relationships(){return this._relationships};
  get colonies(){return this._colonies};
}
