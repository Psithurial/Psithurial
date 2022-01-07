class City{
  constructor(name, country, population, industries){
    this._name = name;
    this._country = country;
    this._population = population;
    this._industries = industries;
    this._warehouses = [];
    this._tradeOffice = [];
    this._hasShipyard = false;
  }

  get name(){return this._name};
  get country(){return this._country};
  get population(){return this._population};
  get industries(){return this._industries};
  get warehouses(){return this._warehouses};
  get tradeOffice(){return this._tradeOffice};
  get hasShipyard(){return this._hasShipyard};
  
  
  //if the city has an industry that produces a resource, return the rate at which the industry(level) produces it
  production(resource){
    const checkForResource = (industry) =>{
      if(idustry.factors
  }
    
    const producingIndustries = this.industries.forEach(producesResource)
    
  }

  
  set hasShipyard(bool){this._hasShipyard = bool};
  
  

}
