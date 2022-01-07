class Industry{
  constructor(name, factors = [], product, maxProdR){
    this._name = name;
    this._factors = factors;
    this._product = product;
    this._maxProdR = maxProdR;
  }
  const this._maxConsR = this.factors.forEach((item, index) => {item * this.maxProdR} ; 

  get name(){return this._name};
  get factors(){return this._factors};
  get product(){return this._product};
  get maxProdR(){return this._maxProdR};
  
  
}

const silkPlantation = new Industry('silkPlantation', [], silk, 0);
const teaPlantation = new Industry('teaPlantation', [], tea, 0);
const coalMine = new Industry('coalMine', [], coal, 0);
const fishery = new Industry('fishery', [], fish, 0);

//textiles
const cottonFarm = new Industry('cottonFarm', [], cotton, 0);
const textileMill = new Industry('textileMill', [cotton: 2], fabric, .5752381);
const clothingFactory = new Industry('clothingFactory', [fabric: 1], clothes, .5752381);

//wood > paper > books
const lumberMill = new Industry('lumberMill', [], wood, 0);
const paperMill = new Industry('paperMill', [wood: 2], paper, .5753381);
const printingPress = new Industry('printingPress', [paper: 2], books, 0);

//tobacco > cigars
const tobaccoFarm = new Industry('tobaccoFarm', [], tobacco, 0);
const cigarFactory = new Industry('cigarFactory', [tobacco: 2, paper: 1], cigars, 0);

//sugar > rum
const sugarFarm = new Industry('sugarFarm', [], sugar, 0);
const distillery = new Industry('distillery', [sugar: 3], rum, 0);

//grain > beer
const grainFarm = new Industry('grainFarm', [], grain, 0);
const brewery = new Industry('brewery', [grain: 3], beer, 0);

//goldOre > gold && ivory > jewelry
const goldMine = new Industry('goldMine', [], goldOre, 0);
const goldSmelter = new Industry('goldSmelter' [goldOre: 4], gold, 0);
const poachersDen = new Industry('poachersDen', [], ivory, 0);
const jewelryFactory = new Industry('jewelryFactory', [gold: 1, ivory: 1], jewelry, 0);

//copper > coins
const copperMine = new Industry('copperMine', [], copper, 0);
const mint = new Industry('mint', [copper: 1], '', 0);

//opium
const opiumFarm = new Industry('opiumFarm', [], opium, 0);
const opiumDen = new Industry('opiumDen', [opium: 1], '', 0);

const ironMine = new Industry('ironMine', [], iron, 0);
const blacksmith = new Industry('blacksmith', [iron: 1, wood: 1], tools, 0);
const arsenal = new Industry('arsenal', [wood: 1, iron: 2], arms, 0);
const barracks = new Industry('barracks', [arms: 1], '', 0);

const shipyard = new Industry('shipyard', [wood: 1, fabric: 1], '', 0);
