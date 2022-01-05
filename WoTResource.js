class Resource{
  constructor(name, products, productionR, producers, consumers){
    this._name = name;
    this._products = products;
    this._productionR = productionR;
    this._producers = producers;
    this._consumers = consumers;
    this._maxPrice = 0;
    this._minPrice = 0;
    this._maxSell = 0;
    this._minSell = 0;
  }

  get name(){return this._name};
  get products(){return this._products};
  get productionR(){return this._productionR};
  get producers(){return this._producers};
  get consumers(){return this._consumers}
  get maxPrice(){return this._maxPrice};
  get minPrice(){return this._minPrice};
  get maxSell(){return this._maxSell};
  get minSell(){return this._minSell};

  set maxPrice(num){this._maxPrice = num};
  set minPrice(num){this._minPrice = num};
  set maxSell(num){this._maxSell = num};
  set minSell(num){this._minSell = num};
}

class ManufacturedGood extends Resource{
  constructor(name, factors, products, productionR, producers, consumers){
    super(name, products, productionR, producers, consumers);
    this._factors = factors;
  }
  
  get factors(){return this._factors};
}



/*Coal
Produced by: Coal Mine, Mining Camp Colony
Consumed by: Cities
Estimated value: $ 20
Can be replaced with: Wood
cons rate: 1/33333
*/
const coal = new Resource('coal', [], 1, [coalMine, miningCamp], [cities]);


/*Coffee
Produced by: Coffee Farm
Consumed by: Cities
Estimated value: $ 40
cons rate: 1/20000

Copper
Produced by: Copper Mine
Consumed by: Mint
Estimated value: $ 40

Cotton
Produced by: Cotton Farm, Cotton Plantation Colony
Consumed by: Textile Mill
Estimated value: $ 20

Fish
Produced by: Fishery
Consumed by: Cities
Estimated value: $ 15
Can be replaced with: Grain
cons rate: 1/3333

Gold Ore
Produced by: Gold Mine
Consumed by: Gold Smelter
Estimated value: $ 200

Grain
Produced by: Grain Farm
Consumed by: Cities
Estimated value: $ 10
Can be replaced with: Fish

Iron
Produced by: Iron Mine, Mining Camp Colony
Consumed by: Blacksmith, Arsenal
Estimated value: $ 25

Ivory
Produced by: Poachers' Den
Consumed by: Jewelry Factory
Estimated value: $ 300

Opium
Produced by: Opium Farm
Consumed by: Opium Den
Estimated value: $ 500
May be illegal in some countries

Silk
Produced by: Silk Plantation
Consumed by: Weaving Mill
Estimated value: $ 110

Sugar
Produced by: Sugar Farm, Sugar Plantation Colony
Consumed by: Cities, Distillery
Estimated value: $ 20
cons rate: 1/2500

Tea
Produced by: Tea Plantation
Consumed by: Cities
Estimated value: $ 100
cons rate: 1/10000


Tobacco
Produced by: Tobacco Farm, Tobacco Plantation Colony
Consumed by: Cigar Factory
Estimated value: $ 35




Wood
Produced by: Logging Camp, Lumber Camp Colony
Consumed by: Cities, Arsenal, Blacksmith, Paper Mill, Shipyard
Estimated value: $ 10
Can be replaced with: Coal
cons rate: 1/3333

Manufactured Goods

Arms
Produced by: Arsenal
Consumed by: Barracks
Estimated value: $ 250
Made with: 2x Iron, 1x Wood

*/
const arms = new ManufacturedGood('arms', [iron, iron, wood], [], 1, [arsenal], [barracks]);                          

/*
Beer
Produced by: Brewery
Consumed by: Cities
Estimated value: $ 70
Made with: 3x Grain
cons rate: 1/25000



Books
Produced by: Printing Press
Consumed by: Cities
Estimated value: $ 150
Made with: 2x Paper
cons rate: 1/50000



Cigars
Produced by: Cigar Factory, Tobacco Plantation Colony (level 3)
Consumed by: Cities
Estimated value: $ 230
Made with: 2x Tobacco, 1x Paper
May be illegal in some countries
cons rate: 1/20000


Clothes
Produced by: Clothing Factory, Cotton Plantation Colony (level 3)
Consumed by: Cities
Estimated value: $ 150
Made with: 1x Fabric
cons rate: 1/10000



Fabric
Produced by: Textile Mill, Cotton Plantation Colony (level 2+)
Consumed by: Cities, Clothing Factory, Shipyard
Estimated value: $ 80
Made with: 2x Cotton
cons rate: 1/10000



Jewelry
Produced by: Jewelry Factory
Consumed by: Cities
Estimated value: $ 1800
Made with: 1x Gold Ore, 1x Ivory



Gold
Produced by: Gold Smelter
Consumed by: Jewelry Factory
Estimated value: $ 1000
Made with: 4x Gold Ore



Paper
Produced by: Paper Mill, Lumber Camp Colony (level 2+)
Consumed by: Cities, Cigar Factory, Printing Press
Estimated value: $ 60
Made with: 2x Wood
cons rate: 1/50000



Rum
Produced by: Distillery, Sugar Plantation Colony (level 3)
Consumed by: Cities
Estimated value: $ 160
Made with: 3x Sugar
May be illegal in some countries
cons rate: 1/20000


Tools
Produced by: Blacksmith, Mining Camp Colony (level 3)
Consumed by: Cities
Estimated value: $ 90
Made with: 1x Iron, 1x Wood
cons rate: 1/100000
