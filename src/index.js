const teaStrains = [
  "Earl Grey",
  "English Breakfast",
  "Irish Breakfast",
  "Scottish Breakfast",
  "Darjeeling",
  "Assam",
  "Ceylon",
  "Jasmine Green",
  "Gunpowder Green",
  "Dragon Well",
  "Sencha",
  "Gyokuro",
  "Matcha",
  "Genmaicha",
  "Hojicha",
  "White Peony",
  "Silver Needle",
  "Oolong",
  "Tie Guan Yin",
  "Da Hong Pao",
  "Masala Chai",
  "Rooibos",
  "Honeybush",
  "Lemon Ginger",
  "Peppermint",
  "Chamomile",
  "Lavender Tea",
  "Hibiscus",
  "Turmeric Spice",
  "Blue Butterfly Pea"
];

const coffeeRoastType = [
  "Light Roast",
  "Medium Roast",
  "Dark Roast",
  "French Roast",
  "Italian Roast",
  "Breakfast Blend",
  "House Blend",
  "Espresso Roast",
  "Cold Brew",
  "Nitro Cold Brew",
  "Colombian",
  "Ethiopian Yirgacheffe",
  "Kenyan AA",
  "Sumatra Mandheling",
  "Guatemalan Antigua",
  "Brazil Santos",
  "Costa Rican Tarrazu",
  "Mocha Java",
  "Hawaiian Kona",
  "Jamaican Blue Mountain",
  "Peruvian Organic",
  "Vienna Roast",
  "Cinnamon Roast",
  "Americano",
  "Cappuccino",
  "Latte Roast",
  "Single Origin Blend",
  "Small Batch Reserve",
  "Midnight Roast",
  "Volcanic Blend"
];

const yerbaMate = [
  "Traditional Mate",
  "Argentine Mate",
  "Uruguayan Mate",
  "Paraguayan Mate",
  "Brazilian Chimarrao",
  "Mint Mate",
  "Citrus Mate",
  "Orange Peel Mate",
  "Lemon Mate",
  "Ginger Mate",
  "Roasted Mate",
  "Smoked Mate",
  "Forest Blend Mate",
  "Mountain Mate",
  "Wild Herb Mate",
  "Guarana Mate",
  "Berry Mate",
  "Peach Mate",
  "Vanilla Mate",
  "Honey Mate",
  "Tropical Mate",
  "Coconut Mate",
  "Spiced Mate",
  "Mint-Lime Mate",
  "Blood Orange Mate",
  "Sunrise Mate",
  "Moonlight Mate",
  "Golden Mate",
  "Evergreen Mate",
  "Trailblazer Mate"
];

const cannabisVibes = [
  "Cosmic Kush",
  "Lemon Nebula",
  "Berry Comet",
  "Pine Phantom",
  "Velvet Dream",
  "Mango Mirage",
  "Purple Stardust",
  "Cookie Meteor",
  "Citrus Nova",
  "Forest Oracle",
  "Moonlight Hybrid",
  "Dragon Haze",
  "Solar Sherbet",
  "Blue Comet",
  "Electric Mango",
  "Ghost Cookies",
  "Cherry Eclipse",
  "Nebula OG",
  "Galactic Diesel",
  "Tropical Void",
  "Crimson Cloud",
  "Emerald Mist",
  "Saturn Spice",
  "Rainbow Fog",
  "Thunder Berry",
  "Crystal Pine",
  "Golden Hour",
  "Silver Comet",
   "Lucky Leaf",
  "Sunset Mirage",
  "Astral Bloom",
  "Forbidden Lime"
];

const bonuses = [
  "+2 Creativity",
  "+2 Cozy",
  "+2 Social",
  "+1 Philosophy",
  "+2 Music Appreciation",
  "+1 Snack Detection",
  "+2 Good Vibes",
  "+1 Luck",
  "+3 Relaxation",
  "+2 Storytelling"
];

const cozyComplications = [
  "You spend five minutes looking for your drink before realizing it's in your hand.",
  "You discover a snack you specifically bought for a special occasion and forgot about.",
  "A simple conversation somehow turns into the greatest idea nobody will ever act on.",
  "You go to refill your drink and return with three unrelated items.",
  "The playlist becomes impossibly good for no discernible reason.",
  "You start telling a story and accidentally improve it three times.",
  "A pet appears and immediately becomes the center of attention.",
  "You find exactly what you were looking for while searching for something else.",
  "Your beverage reaches perfect temperature at the exact moment you take a sip.",
  "A two-minute task evolves into a delightful side quest.",
  "Someone says 'wait, hear me out' and suddenly everyone is invested.",
  "You discover an open tab and have no memory of creating it.",
  "Everybody laughs, but nobody can identify the exact cause.",
  "You remember a forgotten hobby and briefly consider becoming an expert.",
  "A random fact changes the direction of the entire conversation.",
  "You uncover an inside joke that predates recorded history.",
  "A chair becomes significantly more comfortable than physics should allow.",
  "You successfully explain an idea using an increasingly ridiculous metaphor.",
  "Someone finds the exact song the group didn't know it needed.",
  "A completely ordinary moment becomes strangely memorable.",
  "You enter the kitchen for one thing and complete four unrelated objectives.",
  "A cloud outside looks suspiciously like something important.",
  "The conversation loops back to the original topic with remarkable efficiency.",
  "You discover a note you left for yourself and fully agree with it.",
  "Everyone simultaneously decides this is a good day.",
  "A forgotten snack stash is revealed to universal celebration.",
  "The room's vibe improves without any identifiable source.",
  "You accidentally create a phrase that will be repeated for months.",
  "The group collectively solves a problem nobody was trying to solve.",
  "You briefly achieve peak coziness."
];

const beverageCategories = [
  {
    name: "Tea",
    options: teaStrains
  },
  {
    name: "Coffee",
    options: coffeeRoastType
  },
  {
    name: "Yerba Mate",
    options: yerbaMate
  }
];

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default {
  async fetch() {
    const category = randomItem(beverageCategories);
    const beverage = randomItem(category.options);
    const vibe = randomItem(cannabisVibes);
    const bonus = randomItem(bonuses);
    const complication = randomItem(cozyComplications);

    const result =
      `🍵 TEATIME | ` +
      `Category: ${category.name} | ` +
      `Beverage: ${beverage} | ` +
      `🌿 Vibe: ${vibe} | ` +
      `✨ Bonus: ${bonus} | ` +
      `🫖😅 Cozy Complication: ${complication} | ` +
      `🍃 It's probably 4:20 somewhere.`;

    return new Response(result, {
      headers: {
        "Content-Type": "text/plain; charset=UTF-8"
      }
    });
  }
};
