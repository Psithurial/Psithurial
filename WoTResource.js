class Resource{
  constructor(name, products, producers, consumptionR, consumers){
    this._name = name;
    this._products = products;
    this._producers = producers;
    this._consumptionR = consumptionR;
    this._consumers = consumers;
    this._maxPrice = 0;
    this._minPrice = 0;
    this._maxSell = 0;
    this._minSell = 0;
  }

  get name(){return this._name};
  get products(){return this._products};
  get producers(){return this._producers};
  get consumptionR(){return this._consumptionR}
  get consumers(){return this._consumers};
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
  constructor(name, factors, products, producers, consumptionR, consumers){
    super(name, products, producers, consumptionR, consumers);
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
const coal = new Resource('coal', [], [coalMine, miningCamp], (1/33333), [cities]);


/*Coffee
Produced by: Coffee Farm
Consumed by: Cities
Estimated value: $ 40
cons rate: 1/20000
*/
const coffee = new Resource('coffee', [], [coffeeFarm], (1/20000), [cities]);

/*
Copper
Produced by: Copper Mine
Consumed by: Mint
Estimated value: $ 40
*/
 const copper = new Resource('copper', [], [copperMine], 0, [mint]);                           
                            
/*
Cotton
Produced by: Cotton Farm, Cotton Plantation Colony
Consumed by: Textile Mill
Estimated value: $ 20
*/
const cotton = new Resource('cotton', [fabric], [cottonFarm, cottonPlantation], 0, [textileMill]);

/*
Fish
Produced by: Fishery
Consumed by: Cities
Estimated value: $ 15
Can be replaced with: Grain
cons rate: 1/3333
*/
const fish = new Resource ('fish', [], [fishery], (1/3333), [cities]);

/*
Gold Ore
Produced by: Gold Mine
Consumed by: Gold Smelter
Estimated value: $ 200
*/
const goldOre = new Resource('goldOre', [gold], [goldMine], 0, [goldSmelter]);
                           
/*
Grain
Produced by: Grain Farm
Consumed by: Cities
Estimated value: $ 10
Can be replaced with: Fish
*/
const grain = new Resource('grain', [beer], [grainFarm], (1/769), [cities]);
                           
/*
Iron
Produced by: Iron Mine, Mining Camp Colony
Consumed by: Blacksmith, Arsenal
Estimated value: $ 25
*/
const iron = new Resource('iron', [arms, tools], [ironMine, MiningCamp], 0, [blacksmith, arsenal]);
                           
/*
Ivory
Produced by: Poachers' Den
Consumed by: Jewelry Factory
Estimated value: $ 300
*/
const ivory = new Resource('ivory', [jewelry], [poachersDen], 0, [jewelryFactory]);
                           
/*
Opium
Produced by: Opium Farm
Consumed by: Opium Den
Estimated value: $ 500
May be illegal in some countries
*/
const opium = new Resource('opium', [], [opiumFarm], 0, [opiumDen]);
                           
/*
Silk
Produced by: Silk Plantation
Consumed by: Weaving Mill
Estimated value: $ 110
*/
const silk = new Resource('silk', [], [silkPlantation], 0, [weavingMill]);
                           
/*
Sugar
Produced by: Sugar Farm, Sugar Plantation Colony
Consumed by: Cities, Distillery
Estimated value: $ 20
cons rate: 1/2500
*/
const sugar = new Resource('sugar', [rum], [sugarFarm, sugarPlantation], (1/2500), [cities, distillery]);
                           
/*
Tea
Produced by: Tea Plantation
Consumed by: Cities
Estimated value: $ 100
cons rate: 1/10000
*/
const tea = new Resource('tea', [], [teaPlantation], (1/10000), [cities]);
                           
/*

Tobacco
Produced by: Tobacco Farm, Tobacco Plantation Colony
Consumed by: Cigar Factory
Estimated value: $ 35
*/
const tobacco = new Resource('tobacco', [cigars], [tobaccoFarm, tobaccoPlantation], 0, [cigarFactory]);
                           
/*



Wood
Produced by: Logging Camp, Lumber Camp Colony
Consumed by: Cities, Arsenal, Blacksmith, Paper Mill, Shipyard
Estimated value: $ 10
Can be replaced with: Coal
cons rate: 1/3333
*/
const wood = new Resource('wood', [arms, tools, paper], [loggingCamp, lumberCamp], (1/3333), [cities, arsenal, blacksmith, paperMill, shipyard]);
                           
/*
Manufactured Goods

Arms
Produced by: Arsenal
Consumed by: Barracks
Estimated value: $ 250
Made with: 2x Iron, 1x Wood

*/
const arms = new ManufacturedGood('arms', [iron, wood], [], [arsenal], 0, [barracks]);                          

/*
Beer
Produced by: Brewery
Consumed by: Cities
Estimated value: $ 70
Made with: 3x Grain
cons rate: 1/25000
*/
const beer = new ManufacturedGood('beer', [grain], [], [brewery], (1/25000), [cities]);
                           
/*


Books
Produced by: Printing Press
Consumed by: Cities
Estimated value: $ 150
Made with: 2x Paper
cons rate: 1/50000
*/
const books = new ManufacturedGood('books', [paper], [], [printingPress], (1/50000), [cities]);
                           
/*


Cigars
Produced by: Cigar Factory, Tobacco Plantation Colony (level 3)
Consumed by: Cities
Estimated value: $ 230
Made with: 2x Tobacco, 1x Paper
May be illegal in some countries
cons rate: 1/20000
*/
const cigars = new ManufacturedGood('cigars', [paper], [], [cigarFactory, tobaccoPlantation], (1/20000), [cities]);
                           
/*

Clothes
Produced by: Clothing Factory, Cotton Plantation Colony (level 3)
Consumed by: Cities
Estimated value: $ 150
Made with: 1x Fabric
cons rate: 1/10000
*/
const clothes = new ManufacturedGood('clothes', [fabric], [], [clothingFactory, cottonPlantation], (1/10000), [cities]);
                           
/*


Fabric
Produced by: Textile Mill, Cotton Plantation Colony (level 2+)
Consumed by: Cities, Clothing Factory, Shipyard
Estimated value: $ 80
Made with: 2x Cotton
cons rate: 1/10000
*/
const fabric = new ManufacturedGood('fabric', [cotton], [clothes], [textileMill, cottonPlantation], (1/10000), [cities, clothingFactory, shipyard]);
                           
/*


Jewelry
Produced by: Jewelry Factory
Consumed by: Cities
Estimated value: $ 1800
Made with: 1x Gold, 1x Ivory
*/
const jewelry = new ManufacturedGood('jewelry', [gold, ivory], [], [jewelryFactory], (1/500000), [cities]);
                           
/*


Gold
Produced by: Gold Smelter
Consumed by: Jewelry Factory
Estimated value: $ 1000
Made with: 4x Gold Ore
*/
const gold = new ManufacturedGood('gold', [goldOre], [jewelry], [goldSmelter], 0, [jewelryFactory]);
                           
/*


Paper
Produced by: Paper Mill, Lumber Camp Colony (level 2+)
Consumed by: Cities, Cigar Factory, Printing Press
Estimated value: $ 60
Made with: 2x Wood
cons rate: 1/50000
*/
const paper = new ManufacturedGood('paper', [wood], [cigars, books], [paperMill, lumberCamp], (1/50000), [cities, cigarFactory, printingPress]);
                           
/*


Rum
Produced by: Distillery, Sugar Plantation Colony (level 3)
Consumed by: Cities
Estimated value: $ 160
Made with: 3x Sugar
May be illegal in some countries
cons rate: 1/20000
*/
const rum = new ManufacturedGood('rum', [sugar], [], [distillery, sugarPlantation], (1/20000), [cities]);
                           
/*

Tools
Produced by: Blacksmith, Mining Camp Colony (level 3)
Consumed by: Cities
Estimated value: $ 90
Made with: 1x Iron, 1x Wood
cons rate: 1/100000
*/
const tools ManufacturedGood('tools', [iron, wood], [], [blacksmith, miningCamp], (1/100000), [cities]);
                           
