const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);
//id divisible by 3
const divisbleBy3= pokémon.filter( (poke) => poke.id % 3 ===0);
console.log(divisbleBy3);
//fire type
const fireType= pokémon.filter( (p) => p.types.includes('fire'));
console.log(fireType)
//more than one type
const moreThanOneType=pokémon.filter((p) => p.types.length > 1);
console.log(moreThanOneType);
//names of pokemon
const justPokeNames=pokémon.map( p => p.name);
console.log(justPokeNames);
//id greater than 99
const pokeId= pokémon.filter (p => p.id > 99);
console.log(pokeId);
//only type is poison
const pokePoison= pokémon.filter( (poke) => poke.types.length ==1 && poke.types.includes('poison'));
console.log(pokePoison);
//first type that has second type of flying
const firstType= pokémon.filter( p => p.types.length == 2 && p.types[1] =='flying').map( (poke) => poke.types[0]);
console.log(firstType)
// count of types that are 'normal'
const normalType= pokémon.filter( (poke) => poke.types.includes('normal').length);
console.log(normalType);

