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
