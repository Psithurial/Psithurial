class City{
  constructor(name, country, population, industries){
    this._name = name;
    this._country = country;
    this._population = population;
    this._industries = industries;
    this._warehouses = 0;
    this._tradingStatus = 0;
    this._hasShipyard = false;
  }

  get name(){return this._name};
  get country(){return this._country};
  get population(){return this._population};
  get industries(){return this._industries};
  get warehouses(){return this._warehouses};
  get tradingStatus(){return this._tradingStatus};
  get hasShipyard(){return this._hasShipyard};
  
  set warehouses(num){this._warehouses = num};
  set tradingStatus(num){this._tradingStatus = num};
  set hasShipyard(bool){this._hasShipyard = bool};
  
}
  
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

class Ship{
  constructor(name, capacity, speed, price){
    this._name = name;
    this._capacity = capacity;
    this._speed = speed;
    this._price = price;
    this._upgrades = [];
    this._captain ='';
  }
  
  get name(){return this._name};
  get capacity(){return this._capacity};
  get speed(){return this._speed};
  get price(){return this._price};
  get upgrades(){return this._upgrades};
  get captain(){return this._captain};
}

class Resource{
  constructor(name, factors, products, productionR){
    this._name = name;
    this._factors = factors;
    this._products = products;
    this._productionR = productionR;
    this._maxPrice = 0;
    this._minPrice = 0;
    this._maxSell = 0;
    this._minSell = 0;
  }
  
  get name(){return this._name};
  get factors(){return this._factors};
  get products(){return this._products};
  get productionR(){return this._productionR};
  get maxPrice(){return this._maxPrice};
  get minPrice(){return this._minPrice};
  get maxSell(){return this._maxSell};
  get minSell(){return this._minSell};
  
  set maxPrice(num){this._maxPrice = num};
  set minPrice(num){this._minPrice = num};
  set maxSell(num){this._maxSell = num};
  set minSell(num){this._minSell = num};
}  

class Industry{
  constructor(name, factors, product, productionR){
    this._name = name;
    this._factors = factors;
    this._product = product;
    this._productionR = productionR;
  }
  
  get name(){return this._name};
  get factors(){return this._factors};
  get product(){return this._product};
  get productionR(){return this._productionR};
}

class Route{
  constructor(name){
    this._name = name;
  }
  
  get name(){return this._name}
}


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

class Colony{
  constructor(name, product){
    this._name = name;
    this._product = product;
  }
  
  get name(){return this._name};
  get product(){return this._product};
}
