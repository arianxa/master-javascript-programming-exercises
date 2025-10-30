function getLaceNameDataForShoes(inventory) {
  const result = [];

  for (let i = 0; i < inventory.length; i++) {
    const shoes = inventory[i].shoes || [];

    for (let j = 0; j < shoes.length; j++) {
      const name = shoes[j].name || "";
      // separamos por espacios; mantenemos tokens como "low-top" y "lace-up"
      const nameWords = name.split(' ').filter(w => w.length > 0);

      // buscamos la palabra que contenga "lace" (case-insensitive)
      const targetWordIndex = nameWords.findIndex(
        w => w.toLowerCase().includes('lace')
      );

      if (targetWordIndex !== -1) {
        result.push({
          nameWords,
          targetWordIndex
        });
      }
    }
  }

  return result;
}

let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

console.log(getLaceNameDataForShoes(currentInventory));