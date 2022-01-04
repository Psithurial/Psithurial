class Captain{
  constructor(name, salary, startingLvl){
    this._name = name;
    this._salary = salary;
    this._startingLvl = startingLvl;
    this._lvl = startingLvl;
  }

  get name(){return this._name};
  get salary(){return this._salary};
  get startingLvl(){return this._startingLvl};
  get lvl(){return this._lvl};
}  
