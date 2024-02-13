export interface INext {
  href: string;
  title: string;
}

export interface ILinks {
  next: INext;
}

export interface IIngredient {
  text: string;
  quantity: number;
  measure: string | null;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string | null;
}

export interface IEnERCKCAL {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFat {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFasat {
  label: string;
  quantity: number;
  unit: string;
}

export interface Fatrn {
  label: string;
  quantity: number;
  unit: string;
}

export interface Fams {
  label: string;
  quantity: number;
  unit: string;
}

export interface Fapu {
  label: string;
  quantity: number;
  unit: string;
}

export interface Chocdf {
  label: string;
  quantity: number;
  unit: string;
}

export interface Fibtg {
  label: string;
  quantity: number;
  unit: string;
}

export interface Sugar {
  label: string;
  quantity: number;
  unit: string;
}

export interface Procnt {
  label: string;
  quantity: number;
  unit: string;
}

export interface Chole {
  label: string;
  quantity: number;
  unit: string;
}

export interface Na {
  label: string;
  quantity: number;
  unit: string;
}

export interface Ca {
  label: string;
  quantity: number;
  unit: string;
}

export interface Mg {
  label: string;
  quantity: number;
  unit: string;
}

export interface K {
  label: string;
  quantity: number;
  unit: string;
}

export interface Fe {
  label: string;
  quantity: number;
  unit: string;
}

export interface Zn {
  label: string;
  quantity: number;
  unit: string;
}

export interface P {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitarae {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitc {
  label: string;
  quantity: number;
  unit: string;
}

export interface Thia {
  label: string;
  quantity: number;
  unit: string;
}

export interface Ribf {
  label: string;
  quantity: number;
  unit: string;
}

export interface Nia {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitb6a {
  label: string;
  quantity: number;
  unit: string;
}

export interface Foldfe {
  label: string;
  quantity: number;
  unit: string;
}

export interface Foldfd {
  label: string;
  quantity: number;
  unit: string;
}

export interface Folac {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitb12 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitd {
  label: string;
  quantity: number;
  unit: string;
}

export interface Tocpha {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitk1 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Water {
  label: string;
  quantity: number;
  unit: string;
}

export interface SugarAdded {
  label: string;
  quantity: number;
  unit: string;
}

export interface TotalNutrients {
  ENERC_KCAL: IEnERCKCAL;
  FAT: IFat;
  FASAT: IFasat;
  FATRN: Fatrn;
  FAMS: Fams;
  FAPU: Fapu;
  CHOCDF: Chocdf;
  FIBTG: Fibtg;
  SUGAR: Sugar;
  PROCNT: Procnt;
  CHOLE: Chole;
  NA: Na;
  CA: Ca;
  MG: Mg;
  K: K;
  FE: Fe;
  ZN: Zn;
  P: P;
  VITA_RAE: Vitarae;
  VITC: Vitc;
  THIA: Thia;
  RIBF: Ribf;
  NIA: Nia;
  VITB6A: Vitb6a;
  FOLDFE: Foldfe;
  FOLFD: Foldfd;
  FOLAC: Folac;
  VITB12: Vitb12;
  VITD: Vitd;
  TOCPHA: Tocpha;
  VITK1: Vitk1;
  WATER: Water;
  'SUGAR.added': SugarAdded | undefined;
}

export interface IEnERCKCAL2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFat2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface IFasat2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Chocdf2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Fibtg2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Procnt2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Chole2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Na2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Ca2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Mg2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface K2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Fe2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Zn2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface P2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitarae2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitc2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Thia2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Ribf2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Nia2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitb6a2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Foldfe2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitb122 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitd2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Tocpha2 {
  label: string;
  quantity: number;
  unit: string;
}

export interface Vitk12 {
  label: string;
  quantity: number;
  unit: string;
}

export interface TotalDaily {
  ENERC_KCAL: IEnERCKCAL2;
  FAT: IFat2;
  FASAT: IFasat2;
  CHOCDF: Chocdf2;
  FIBTG: Fibtg2;
  PROCNT: Procnt2;
  CHOLE: Chole2;
  NA: Na2;
  CA: Ca2;
  MG: Mg2;
  K: K2;
  FE: Fe2;
  ZN: Zn2;
  P: P2;
  VITA_RAE: Vitarae2;
  VITC: Vitc2;
  THIA: Thia2;
  RIBF: Ribf2;
  NIA: Nia2;
  VITB6A: Vitb6a2;
  FOLDFE: Foldfe2;
  VITB12: Vitb122;
  VITD: Vitd2;
  TOCPHA: Tocpha2;
  VITK1: Vitk12;
}

export interface ISub {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
}

export interface IDigest {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub: Sub[];
}

export interface IRecipe {
  uri: string;
  label: string;
  image: string | null;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: TotalNutrients;
  totalDaily: TotalDaily;
  digest: Digest[];
}

export interface ISelf {
  href: string;
  title: string;
}

export interface ILinks2 {
  self: Self;
}

export interface IHit {
  recipe: Recipe;
  _links: Links2;
}

export interface IRootObjectEdamam {
  from: number;
  to: number;
  count: number;
  _links: Links;
  hits: Hit[];
}
