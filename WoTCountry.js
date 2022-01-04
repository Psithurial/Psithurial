class Country{
  constructor(name, cities, diplomaticStatus){
    this._name = name;
    this._cities = cities;
    this._diplomaticStatus = diplomaticStatus;
  }

  get name(){return this._name};
  get cities(){return this._cities};
  get diplomaticStatus(){return this._diplomaticStatus};

}
