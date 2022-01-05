class Ship{
  constructor(name, capacity, speed, cost, upkeep, maxCannons, maxHp){
    this._name = name;
    this._capacity = capacity;
    this._speed = speed;
    this._cost = cost;
    this._upkeep = upkeep;
    this._maxCannons = maxCannons;
    this._cannons = maxCannons;
    this._maxHp = maxHp;
    this._hp = maxHp;
    this._upgrades = [];
    this._captain ='';
    this._askingPrice = Math.floor(cost/3.7625);
  }

  get name(){return this._name};
  get capacity(){return this._capacity};
  get speed(){return this._speed};
  get cost(){return this._cost};
  get upkeep(){return this._upkeep};
  get maxCannons(){return this._maxCannons};
  get cannons(){return this._cannons};
  get maxHp(){return this._maxHp};
  get hp(){return this._hp};
  get upgrades(){return this._upgrades};
  get captain(){return this._captain};
  get askingPrice(){return this._askingPrice};
 
     
  thirtySixPoundGuns(){
    this._cost += 2500;
    this._upgrades.push('thirtySixPoundGuns');
  }
  cottonSails(){
    this._cost += 1500;
    this._upgrades.push('cottonSails');
  }
  cargoHoldOptimization(){
    this._cost += 1500;
    this._upgrades.push('cargoHoldOptimization');
  }
  copperSheathing(){
    this._cost += 2000;
    this._upgrade.push('copperSheathing')
  }
  bronzeCannons(){
    this._cost += 3000;
    this._upgrades.push('bronzeCannons');
  }
  reinforcedFrame(){
    this._cost += 3000;
    this._upgrades.push('reinforcedFrame');
  }
  
  addCannon(){
    this._cost += 500;
    this._cannons += 1;
  }
  removeCannon(){
    this._cost -= 250;
    this._cannons -= 1;
  }
  repair(repairCost, repairHp){
    this._cost += repairCost;
    this._hp += repairHp;
  }
    
}


class Galleon extends Ship{
  constructor(name, cost){
    super(name, 400, 9, cost, 494, 24, 400)}
}

class Schooner extends Ship{
  constructor(name, cost){
    super(name, 80, 15, cost, 175, 8, 120)}
}
  
class Fluyt extends Ship{
  constructor(name, cost){
    super(name, 350, 10, cost, 550, 10, 200)}
}

class Frigate extends Ship{
  constructor(name, cost){
    super(name, 150, 13, cost, 900, 30, 500)}
}

class HeavyFrigate extends Ship{
  constructor(name, cost){
    super(name, 250, 13, cost, 1200, 36, 600)}
}

class Indiaman extends Ship{
  constructor(name, cost){
    super(name, 500, 8, cost, 840, 12, 500)}
}

class Xebec extends Ship{
  constructor(name, cost){
    super(name, 120, 15, cost, 670, 20, 300)}
}

class BermudaSloop extends Ship{
  constructor(name, cost){
    super(name, 100, 14, cost, 450, 12, 150)}
}

class Brigg extends Ship{
  constructor(name, cost){
    super(name, 150, 11, cost, 570, 16, 200)}
}

class Corvette extends Ship{
  constructor(name, cost){
    super(name, 80, 14, cost, 600, 22, 350)}
}
