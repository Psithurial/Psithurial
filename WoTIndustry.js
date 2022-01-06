class Industry{
  constructor(name, factors, consR, product, maxProdR){
    this._name = name;
    this._factors = factors;
    this._consR = consR;
    this._product = product;
    this._maxProdR = maxProdR;
  }

  get name(){return this._name};
  get factors(){return this._factors};
  get consR(){return this._consR};
  get product(){return this._product};
  get maxProdR(){return this._maxProdR};
}

const clothingFactory = new Industry('clothingFactory', [fabric], [1], clothes, .5752381);
const textileMill = new Industry('textileMill', [cotton], [2], fabric, .5752381);
const paperMill = new Industry('paperMill', [wood], [2], paper, .5753381);
const sugarFarm = new Industry('sugarFarm', [], [], sugar, 0);
const grainFarm = new Industry('grainFarm', [], [], grain, 0);
const fishery = new Industry('fishery', [], [], fish, 0);
const poachersDen = new Industry('poachersDen', [], [], ivory, 0);
const brewery = new Industry('brewery', [grain], [3], beer, 0);
const printingPress = new Industry('printingPress', [paper], [2], books, 0);
const distillery = new Industry('distillery', [sugar], [3], rum, 0);
const cigarFactory = new Industry('cigarFactory', [tobacco, paper], [2, 1], cigars, 0);
const jewelryFactory = new Industry('jewelryFactory', [gold, ivory], [1, 1], jewelry, 0);
const mint = new Industry('mint', [copper], [1], '', 0);
const shipyard = new Industry('shipyard', [wood, fabric], [1, 1], '', 0);
const opiumFarm = new Industry('opiumFarm', [], [], opium, 0);
const silkPlantation = new Industry('silkPlantation', [], [], silk, 0);
const teaPlantation = new Industry('teaPlantation', [], [], tea, 0);
const coalMine = new Industry('coalMine', [], [], coal, 0);
const goldMine = new Industry('goldMine', [], [], goldOre, 0);
const arsenal = new Industry('arsenal', [wood, iron], [1, 2], arms, 0);
const blacksmith = new Industry('blacksmith', [iron, wood], [1, 1], tools, 0);




                                
/*
production is a function of pop, domestic consumption, and current stockpile

