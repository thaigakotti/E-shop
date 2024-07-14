 const products = [
    {
        "id": 1,
        "name": "Carrot",
        "description": "A root vegetable, usually orange in color, crunchy in texture.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/carrot.jpg",
        "rate_inr": 40,
        "qty": 1
    },
    {
        "id": 2,
        "name": "Broccoli",
        "description": "An edible green plant in the cabbage family, with a large flowering head.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/broccoli.jpg",
        "rate_inr": 80,
        "qty": 1
    },
    {
        "id": 3,
        "name": "Spinach",
        "description": "A leafy green flowering plant, rich in iron and vitamins.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/spinach.jpg",
        "rate_inr": 30,
        "qty": 1
    },
    {
        "id": 4,
        "name": "Tomato",
        "description": "A red, edible fruit, commonly used in salads and cooking.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/tomato.jpg",
        "rate_inr": 20,
        "qty": 1
    },
    {
        "id": 5,
        "name": "Cucumber",
        "description": "A long, green vegetable with a refreshing taste, often used in salads.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/cucumber.jpg",
        "rate_inr": 25,
        "qty": 1
    },
    {
        "id": 6,
        "name": "Bell Pepper",
        "description": "A sweet and crunchy vegetable, available in various colors such as red, yellow, and green.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/bell_pepper.jpg",
        "rate_inr": 70,
        "qty": 1
    },
    {
        "id": 7,
        "name": "Lettuce",
        "description": "A leafy green vegetable, commonly used in salads and sandwiches.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/lettuce.jpg",
        "rate_inr": 50,
        "qty": 1
    },
    {
        "id": 8,
        "name": "Cauliflower",
        "description": "A white, flowering vegetable, often used in cooking and salads.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/cauliflower.jpg",
        "rate_inr": 40,
        "qty": 1
    },
    {
        "id": 9,
        "name": "Zucchini",
        "description": "A green or yellow summer squash with a mild flavor.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/zucchini.jpg",
        "rate_inr": 60,
        "qty": 1
    },
    {
        "id": 10,
        "name": "Eggplant",
        "description": "A purple, spongy vegetable, often used in cooking.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/eggplant.jpg",
        "rate_inr": 35,
        "qty": 1
    },
    {
        "id": 11,
        "name": "Green Beans",
        "description": "Long, green pods with small seeds inside, eaten as a vegetable.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/green_beans.jpg",
        "rate_inr": 45,
        "qty": 1
    },
    {
        "id": 12,
        "name": "Pumpkin",
        "description": "A large, orange squash, often used in soups and desserts.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/pumpkin.jpg",
        "rate_inr": 20,
        "qty": 1
    },
    {
        "id": 13,
        "name": "Cabbage",
        "description": "A leafy green or purple vegetable, often used in salads and cooking.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/cabbage.jpg",
        "rate_inr": 25,
        "qty": 1
    },
    {
        "id": 14,
        "name": "Peas",
        "description": "Small, round, green seeds, often used in cooking and salads.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/peas.jpg",
        "rate_inr": 55,
        "qty": 1
    },
    {
        "id": 15,
        "name": "Sweet Potato",
        "description": "A starchy, sweet-tasting root vegetable with a reddish skin and orange flesh.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://example.com/images/sweet_potato.jpg",
        "rate_inr": 40,
        "qty": 1
    },
    {
        "id": 16,
        "name": "Apple",
        "description": "A sweet, edible fruit produced by an apple tree.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/apple.jpg",
        "rate_inr": 100,
        "qty": 1
    },
    {
        "id": 17,
        "name": "Banana",
        "description": "A long, curved fruit with a yellow skin and soft, sweet, white flesh inside.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/banana.jpg",
        "rate_inr": 50,
        "qty": 1
    },
    {
        "id": 18,
        "name": "Orange",
        "description": "A citrus fruit with a tough orange rind and juicy, sweet flesh.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/orange.jpg",
        "rate_inr": 80,
        "qty": 1
    },
    {
        "id": 19,
        "name": "Strawberry",
        "description": "A sweet, red fruit with tiny seeds on the outside.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/strawberry.jpg",
        "rate_inr": 150,
        "qty": 1
    },
    {
        "id": 20,
        "name": "Grape",
        "description": "A small, round, smooth-skinned fruit, typically green or purple.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/grape.jpg",
        "rate_inr": 120,
        "qty": 1
    },
    {
        "id": 21,
        "name": "Mango",
        "description": "A tropical stone fruit with sweet, orange flesh.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/mango.jpg",
        "rate_inr": 200,
        "qty": 1
    },
    {
        "id": 22,
        "name": "Pineapple",
        "description": "A tropical fruit with spiky, tough skin and sweet, yellow flesh.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/pineapple.jpg",
        "rate_inr": 60,
        "qty": 1
    },
    {
        "id": 23,
        "name": "Watermelon",
        "description": "A large fruit with a hard green rind and sweet, juicy, red flesh.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/watermelon.jpg",
        "rate_inr": 30,
        "qty": 1
    },
    {
        "id": 24,
        "name": "Peach",
        "description": "A soft, round, and juicy fruit with fuzzy skin.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/peach.jpg",
        "rate_inr": 90,
        "qty": 1
    },
    {
        "id": 25,
        "name": "Cherry",
        "description": "A small, round stone fruit that is typically bright or dark red.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/cherry.jpg",
        "rate_inr": 180,
        "qty": 1
    },
    {
        "id": 26,
        "name": "Kiwi",
        "description": "A small, brown, fuzzy fruit with bright green flesh inside.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/kiwi.jpg",
        "rate_inr": 70,
        "qty": 1
    },
    {
        "id": 27,
        "name": "Blueberry",
        "description": "A small, round fruit that is typically dark blue or purple.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/blueberry.jpg",
        "rate_inr": 200,
        "qty": 1
    },
    {
        "id": 28,
        "name": "Papaya",
        "description": "A tropical fruit with a sweet, orange flesh and black seeds.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/papaya.jpg",
        "rate_inr": 45,
        "qty": 1
    },
    {
        "id": 29,
        "name": "Pear",
        "description": "A sweet, juicy fruit with a green or yellow skin.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/pear.jpg",
        "rate_inr": 60,
        "qty": 1
    },
    {
        "id": 30,
        "name": "Pomegranate",
        "description": "A fruit with a tough outer skin and juicy, red seeds inside.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://example.com/images/pomegranate.jpg",
        "rate_inr": 150,
        "qty": 1
    }
];


export const Productinfo = products.map(product => ({
    ...product,
    iscart: "N"
}));