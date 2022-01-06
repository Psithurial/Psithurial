class Warehouse{
  constructor(city, level, capacity, cost){
    this._city = city;
    this._level = level;
    this._capacity = capacity;
    this._cost = cost;
  }
  
  get city(){return this._city};
  get level(){return this._level};
}

class smallWarehouse extends Warehouse{
  constructor(city){
    super(city, 'small', 500, 15000)
  }
}

class mediumWarehouse extends Warehouse{
  constructor(city){
    super(city, 'medium', 1000, 25000)
  }
}

class largeWarehouse extends Warehouse{
  constructor(city){
    super(city, 'large', 2000, 40000)
  }
}
