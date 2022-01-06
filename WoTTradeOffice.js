class TradeOffice{
  constructor(city, level, cost){
    this._city = city;
    this._level = level;
    this._cost = cost;
    this._upkeep = 10;
    this._updateFreq = 10;
  }
  
  get city(){return this._city};
  get level(){return this._level};
  get cost(){return this._cost};
  get upkeep(){return this._upkeep};
  get updateFreq(){return this._updateFreq};
  
  upgrade(){
    this._level += 1;
    this._upkeep += 10;
    this._cost += (this._level - 1) * 1000;
    this._updateFreq = ((3 - this._level) * 3) + 1;
  }
}
