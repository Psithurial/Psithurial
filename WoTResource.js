class Resource{
  constructor(name, products, producers, cityConsumptionR, consumers){
    this._name = name;
    this._products = products;
    this._producers = producers;
    this._cityConsumptionR = cityConsumptionR;
    this._consumers = consumers;
    this._maxPrice = 0;
    this._minPrice = 0;
    this._maxSell = 0;
    this._minSell = 0;
  }

  get name(){return this._name};
  get products(){return this._products};
  get producers(){return this._producers};
  get cityConsumptionR(){return this._cityConsumptionR}
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
  constructor(name, factors, products, producers, cityConsumptionR, consumers){
    super(name, products, producers, cityConsumptionR, consumers);
    this._factors = factors;
  }
  
  get factors(){return this._factors};
}

const coal = new Resource('coal', {}, {coalMine, miningCamp}, (1/33333), {cities});
const coffee = new Resource('coffee', {}, {coffeeFarm}, (1/20000), {cities});
const copper = new Resource('copper', {}, {copperMine}, 0, {mint});   
const cotton = new Resource('cotton', {fabric}, {cottonFarm, cottonPlantation}, 0, {textileMill});
const fish = new Resource ('fish', {}, {fishery}, (1/3333), {cities});
const goldOre = new Resource('goldOre', {gold}, {goldMine}, 0, {goldSmelter});
const grain = new Resource('grain', {beer}, {grainFarm}, (1/769), {cities});
const iron = new Resource('iron', {arms, tools}, {ironMine, MiningCamp}, 0, {blacksmith, arsenal});
const ivory = new Resource('ivory', {jewelry}, {poachersDen}, 0, {jewelryFactory});
const opium = new Resource('opium', {}, {opiumFarm}, 0, {opiumDen});
const silk = new Resource('silk', {}, {silkPlantation}, 0, {weavingMill});
const sugar = new Resource('sugar', {rum}, {sugarFarm, sugarPlantation}, (1/2500), {cities, distillery});
const tea = new Resource('tea', {}, {teaPlantation}, (1/10000), {cities});
const tobacco = new Resource('tobacco', {cigars}, {tobaccoFarm, tobaccoPlantation}, 0, {cigarFactory});
const wood = new Resource('wood', {arms, tools, paper}, {loggingCamp, lumberCamp}, (1/3333), {cities, arsenal, blacksmith, paperMill, shipyard});
const beer = new ManufacturedGood('beer', {grain}, {}, {brewery}, (1/25000), {cities});
const arms = new ManufacturedGood('arms', {iron, wood}, {}, {arsenal}, 0, {barracks});
const books = new ManufacturedGood('books', {paper}, {}, {printingPress}, (1/50000), {cities});
const paper = new ManufacturedGood('paper', {wood}, {cigars, books}, {paperMill, lumberCamp}, (1/50000), {cities, cigarFactory, printingPress});
const cigars = new ManufacturedGood('cigars', {paper}, {}, {cigarFactory, tobaccoPlantation}, (1/20000), {cities});
const clothes = new ManufacturedGood('clothes', {fabric}, {}, {clothingFactory, cottonPlantation}, (1/10000), {cities});
const rum = new ManufacturedGood('rum', {sugar}, {}, {distillery, sugarPlantation}, (1/20000), {cities});
const fabric = new ManufacturedGood('fabric', {cotton}, {clothes}, {textileMill, cottonPlantation}, (1/10000), {cities, clothingFactory, shipyard});
const jewelry = new ManufacturedGood('jewelry', {gold, ivory}, {}, {jewelryFactory}, (1/500000), {cities});
const tools ManufacturedGood('tools', {iron, wood}, {}, {blacksmith, miningCamp}, (1/100000), {cities});
const gold = new ManufacturedGood('gold', {goldOre}, {jewelry}, {goldSmelter}, 0, {jewelryFactory});


