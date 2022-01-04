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
