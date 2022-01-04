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
