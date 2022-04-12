import images from './images';

const main = [
  {
    title: 'Jollof Rice',
    price: '₦500',
    // tags: 'AU | Bottle',
  },
  {
    title: 'Fried Rice',
    price: '₦500',
    // tags: 'AU | Bottle',
  },
  {
    title: 'Chinese Fried Rice',
    price: '₦800',
    // tags: 'FR | 750 ml',
  },
  {
    title: 'Spicy Village Rice',
    price: '₦600',
    // tags: 'CA | 750 ml',
  },
  {
    title: 'Yam Pottage',
    price: '₦450',
    // tags: 'IE | 750 ml',
  },
  {
    title: 'Beef Pasta',
    price: '₦600',
    // tags: 'IE | 750 ml',
  },
  {
    title: 'Jollof Spaghetti',
    price: '₦500',
    // tags: 'IE | 750 ml',
  },
  {
    title: 'Stir Fry Spaghetti',
    price: '₦800',
    // tags: 'IE | 750 ml',
  },
  {
    title: 'Yaamarita',
    price: '₦300',
    // tags: 'IE | 750 ml',
  },
];

const africana = [
  {
    title: 'Swallow',
    price: '₦150',
    tags: 'EBA | SEMO | AMALA',
  },
  {
    title: 'Efo Riro',
    price: '₦400',
    // tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Edikaikong',
    price: '₦500',
    // tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Pounded Yam',
    price: '₦250',
    // tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Sea Food Okro',
    price: '₦500',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'Egusi',
    price: '₦400',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'Ewedu/Gbegiri',
    price: '₦100',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const proteins = [
  {
    title: 'asun',
    price: '₦800',
    // tags: 'EBA | SEMO | AMALA',
  },
  {
    title: 'beef',
    price: '₦400',
    // tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Grilled Turkey Wings',
    price: '₦1000',
    // tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Cow skin',
    price: '₦250',
    // tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Shaki',
    price: '₦300',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'Grilled/BBQ chicken',
    price: '₦400',
    tags: '(1&8)',
  },
  {
    title: 'cow leg',
    price: '₦700',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'fried croaker',
    price: '₦1000',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'fried goat meat',
    price: '₦850',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'peppered snail',
    price: '₦1300',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'fried titus',
    price: '₦300',
    // tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
  {
    title: 'grilled/BBQ chicken ',
    price: '₦1000',
    tags: '1&4',
  },
  {
    title: 'peppered chicken',
    price: '₦500',
    tags: '1/8',
  },
];

const sauces = [
  {
    title: 'egg sauce',
    price: '₦300',
    // tags: 'EBA | SEMO | AMALA',
  },
];
const snacks = [
  {
    title: 'Meat pie',
    price: '₦350',
    // tags: 'EBA | SEMO | AMALA',
  },
  {
    title: 'doughnut',
    price: '₦250',
    // tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'chicken pie',
    price: '₦350',
    // tags: 'Rum | Citrus juice | Sugar',
  },
];
const sides = [
  {
    title: 'fried plantain',
    price: '₦250',
    // tags: 'EBA | SEMO | AMALA',
  },
  {
    title: 'moimoi',
    price: '₦300',
    tags: 'Pepsi | Fanta | Coke',
  },
  {
    title: 'vegetable salad',
    price: '₦450',
    // tags: 'Rum | Citrus juice | Sugar',
  },
];
const drinks = [
  {
    title: 'water',
    price: '₦150',
    // tags: 'EBA | SEMO | AMALA',
  },
  {
    title: 'pet drinks',
    price: '₦300',
    tags: 'Pepsi | Fanta | Coke',
  },
  {
    title: 'yoghurt parfait',
    price: '₦1600',
    // tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'malt',
    price: '₦300',
    // tags: 'Rum | Citrus juice | Sugar',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { main, africana, proteins, sauces, snacks, sides, drinks, awards };
