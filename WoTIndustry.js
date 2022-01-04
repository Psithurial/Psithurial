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

