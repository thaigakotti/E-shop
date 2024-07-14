 import Carrot from '../assets/Carrot.jpg'
 
 
 const products = [
    {
        "id": 1,
        "name": "Carrot",
        "description": "A root vegetable, usually orange in color, crunchy in texture.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Carrot.jpg?alt=media&token=b1542bd4-a2cd-44c6-a844-22c764bb154b",
        "rate_inr": 40,
        "qty": 1
    },
    {
        "id": 2,
        "name": "Broccoli",
        "description": "An edible green plant in the cabbage family, with a large flowering head.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Broccoli.jpg?alt=media&token=5a1c7ed0-a3d6-4fb0-ae2e-2ea52df6ca1c",
        "rate_inr": 80,
        "qty": 1
    },
    {
        "id": 3,
        "name": "Spinach",
        "description": "A leafy green flowering plant, rich in iron and vitamins.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Spinach.jpg?alt=media&token=2c715abf-cdee-45c5-8973-d65a8b3e029b",
        "rate_inr": 30,
        "qty": 1
    },
    {
        "id": 4,
        "name": "Tomato",
        "description": "A red, edible fruit, commonly used in salads and cooking.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Tomato.jpg?alt=media&token=6612842e-e188-46d7-8ff2-6dc38882eacb",
        "rate_inr": 20,
        "qty": 1
    },
    {
        "id": 5,
        "name": "Cucumber",
        "description": "A long, green vegetable with a refreshing taste, often used in salads.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Cucumber.jpg?alt=media&token=291a4cf7-68cc-4665-afdb-6e5a9a9f5700",
        "rate_inr": 25,
        "qty": 1
    },
    {
        "id": 6,
        "name": "Bell Pepper",
        "description": "A sweet and crunchy vegetable, available in various colors such as red, yellow, and green.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/bell%20pepper.jpg?alt=media&token=6029c1c1-ec26-4ff2-a90c-e64e2e294d7f",
        "rate_inr": 70,
        "qty": 1
    },
    {
        "id": 7,
        "name": "Lettuce",
        "description": "A leafy green vegetable, commonly used in salads and sandwiches.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Lettuce.jpg?alt=media&token=6214247e-72e9-441d-84e6-1c70564fbcb1",
        "rate_inr": 50,
        "qty": 1
    },
    {
        "id": 8,
        "name": "Cauliflower",
        "description": "A white, flowering vegetable, often used in cooking and salads.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Cauliflower.jpg?alt=media&token=2cb6f7fc-f94e-4aa2-9a14-a730242fa8b4",
        "rate_inr": 40,
        "qty": 1
    },
    {
        "id": 9,
        "name": "Zucchini",
        "description": "A green or yellow summer squash with a mild flavor.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Zucchini.jpg?alt=media&token=df403d04-849f-4052-8724-89eda2943f6d",
        "rate_inr": 60,
        "qty": 1
    },
    {
        "id": 10,
        "name": "Eggplant",
        "description": "A purple, spongy vegetable, often used in cooking.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Eggplant.jpg?alt=media&token=4d4d08c4-f9af-48dd-bd58-99a4ab76caa8",
        "rate_inr": 35,
        "qty": 1
    },
    {
        "id": 11,
        "name": "Green Beans",
        "description": "Long, green pods with small seeds inside, eaten as a vegetable.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Green%20Beans.jpg?alt=media&token=cf73b417-1b42-48d2-a9e9-0bcc4df79cb1",
        "rate_inr": 45,
        "qty": 1
    },
    {
        "id": 12,
        "name": "Pumpkin",
        "description": "A large, orange squash, often used in soups and desserts.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Pumpkin.jpg?alt=media&token=35cb43d4-64a1-410e-abe9-ce7dba033dc8",
        "rate_inr": 20,
        "qty": 1
    },
    {
        "id": 13,
        "name": "Cabbage",
        "description": "A leafy green or purple vegetable, often used in salads and cooking.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Cabbage.jpg?alt=media&token=686014dd-fe86-4192-9a81-028df5de736b",
        "rate_inr": 25,
        "qty": 1
    },
    {
        "id": 14,
        "name": "Peas",
        "description": "Small, round, green seeds, often used in cooking and salads.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Peas.jpg?alt=media&token=24aeb580-dda1-41ad-83e9-3958dbd38bd0",
        "rate_inr": 55,
        "qty": 1
    },
    {
        "id": 15,
        "name": "Sweet Potato",
        "description": "A starchy, sweet-tasting root vegetable with a reddish skin and orange flesh.",
        "category_id": 1,
        "category_name": "Vegetable",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Sweet%20Potato.jpg?alt=media&token=8f4b8c98-07ad-4600-be66-fb089c5fe760",
        "rate_inr": 40,
        "qty": 1
    },
    {
        "id": 16,
        "name": "Apple",
        "description": "A sweet, edible fruit produced by an apple tree.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Apple.jpg?alt=media&token=7eda0e62-3116-46e0-830e-962d7cebce98",
        "rate_inr": 100,
        "qty": 1
    },
    {
        "id": 17,
        "name": "Banana",
        "description": "A long, curved fruit with a yellow skin and soft, sweet, white flesh inside.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Banana.jpg?alt=media&token=23d19491-765b-4a73-b625-86e569f86b96",
        "rate_inr": 50,
        "qty": 1
    },
    {
        "id": 18,
        "name": "Orange",
        "description": "A citrus fruit with a tough orange rind and juicy, sweet flesh.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Orange.jpg?alt=media&token=a7d90a85-1520-40f5-a661-3969e8819bae",
        "rate_inr": 80,
        "qty": 1
    },
    {
        "id": 19,
        "name": "Strawberry",
        "description": "A sweet, red fruit with tiny seeds on the outside.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Strawberry.jpg?alt=media&token=3f9baf03-053a-4503-b489-7de153e11213",
        "rate_inr": 150,
        "qty": 1
    },
    {
        "id": 20,
        "name": "Grape",
        "description": "A small, round, smooth-skinned fruit, typically green or purple.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Grape.jpg?alt=media&token=8cf52c00-4344-4839-b3f1-8e39f27ae5de",
        "rate_inr": 120,
        "qty": 1
    },
    {
        "id": 21,
        "name": "Mango",
        "description": "A tropical stone fruit with sweet, orange flesh.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Mango.jpg?alt=media&token=87171c19-1e65-43ff-a23f-021773ef48d7",
        "rate_inr": 200,
        "qty": 1
    },
    {
        "id": 22,
        "name": "Pineapple",
        "description": "A tropical fruit with spiky, tough skin and sweet, yellow flesh.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Pineapple.jpg?alt=media&token=a50efe63-c43e-4071-86f2-bcbe2e0a8bfb",
        "rate_inr": 60,
        "qty": 1
    },
    {
        "id": 23,
        "name": "Watermelon",
        "description": "A large fruit with a hard green rind and sweet, juicy, red flesh.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Watermelon.jpg?alt=media&token=52e54832-99d3-492c-9d41-4ce34ec9155a",
        "rate_inr": 30,
        "qty": 1
    },
    {
        "id": 24,
        "name": "Peach",
        "description": "A soft, round, and juicy fruit with fuzzy skin.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Peach.jpg?alt=media&token=e6f8879c-5757-4731-b5dc-34ea30fba921",
        "rate_inr": 90,
        "qty": 1
    },
    {
        "id": 25,
        "name": "Cherry",
        "description": "A small, round stone fruit that is typically bright or dark red.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Cherry.jpg?alt=media&token=daa97c8a-2a29-41a2-a1d5-f6199ba617b8",
        "rate_inr": 180,
        "qty": 1
    },
    {
        "id": 26,
        "name": "Kiwi",
        "description": "A small, brown, fuzzy fruit with bright green flesh inside.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Kiwi.jpg?alt=media&token=18b70f7c-bf2c-4c82-9fa8-58b35209c388",
        "rate_inr": 70,
        "qty": 1
    },
    {
        "id": 27,
        "name": "Blueberry",
        "description": "A small, round fruit that is typically dark blue or purple.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Blueberry.jpg?alt=media&token=3697354f-69c0-4fc4-b52d-c7b3c056c7db",
        "rate_inr": 200,
        "qty": 1
    },
    {
        "id": 28,
        "name": "Papaya",
        "description": "A tropical fruit with a sweet, orange flesh and black seeds.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Papaya.jpg?alt=media&token=b22104c6-cf8b-437d-9641-106ffc2d6112",
        "rate_inr": 45,
        "qty": 1
    },
    {
        "id": 29,
        "name": "Pear",
        "description": "A sweet, juicy fruit with a green or yellow skin.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Pear.jpg?alt=media&token=f1d20799-dcfe-4392-b9b7-621a12af443f",
        "rate_inr": 60,
        "qty": 1
    },
    {
        "id": 30,
        "name": "Pomegranate",
        "description": "A fruit with a tough outer skin and juicy, red seeds inside.",
        "category_id": 2,
        "category_name": "Fruit",
        "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Pomegranate.jpg?alt=media&token=31fc3241-cbe1-439b-bded-704be7f6c17c",
        "rate_inr": 150,
        "qty": 1
    },
    
        {
          "id": 31,
          "name": "Spaghetti Carbonara",
          "description": "Classic Italian pasta with creamy sauce and pancetta",
          "category_id": 3,
          "category_name": "Foods",
          "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Spaghetti%20Carbonara.jpg?alt=media&token=a615ef81-2c8a-4c1b-be54-598bdd70ce12",
          "rate_inr": 999,
          "qty": 1
        },
        {
          "id": 32,
          "name": "Margherita Pizza",
          "description": "Traditional pizza with tomatoes, mozzarella, and basil",
          "category_id": 3,
          "category_name": "Foods",
          "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Margherita%20Pizza.jpg?alt=media&token=e1caf85d-6bcd-4012-aec9-adcdd666fff1",
          "rate_inr": 799,
          "qty": 1
        },
        {
          "id": 33,
          "name": "Caesar Salad",
          "description": "Fresh romaine lettuce with Caesar dressing and croutons",
          "category_id": 3,
          "category_name": "Foods",
          "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Caesar%20Salad.jpg?alt=media&token=a2c260d2-7c54-41b5-b032-0a271cd30909",
          "rate_inr": 599,
          "qty": 1
        },
        {
          "id": 34,
          "name": "Beef Tacos",
          "description": "Soft tortillas filled with seasoned beef and toppings",
          "category_id": 3,
          "category_name": "Foods",
          "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Beef%20Tacos.jpg?alt=media&token=6d8b4dd8-7b7b-46db-a0ab-65aecc37d217",
          "rate_inr": 649,
          "qty": 1
        },
        {
          "id": 35,
          "name": "Chicken Alfredo",
          "description": "Creamy Alfredo sauce with grilled chicken over fettuccine",
          "category_id": 3,
          "category_name": "Foods",
          "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Chicken%20Alfredo.jpg?alt=media&token=89852554-6766-4c76-851c-914735830128",
          "rate_inr": 899,
          "qty": 1
        },
        {
          "id": 36,
          "name": "Vegetable Stir-fry",
          "description": "Mixed vegetables stir-fried in a savory sauce",
          "category_id": 3,
          "category_name": "Foods",
          "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Vegetable%20Stir-fry.jpg?alt=media&token=c5de120b-4e8e-4f33-af27-9e3134765a17",
          "rate_inr": 749,
          "qty": 1
        },
        {
          "id": 37,
          "name": "Cheeseburger",
          "description": "Juicy beef patty with melted cheese in a soft bun",
          "category_id": 3,
          "category_name": "Foods",
          "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Cheeseburger.jpg?alt=media&token=53157691-07f1-423d-b6e2-bd7bddd38c70",
          "rate_inr": 549,
          "qty": 1
        },
        {
          "id": 38,
          "name": "Clam Chowder",
          "description": "Creamy soup with clams and potatoes",
          "category_id": 3,
          "category_name": "Foods",
          "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Clam%20Chowder.jpg?alt=media&token=b4b8080b-a3fd-4fea-a75a-13f44d6fc788",
          "rate_inr": 499,
          "qty": 1
        },
        {
          "id": 39,
          "name": "Pad Thai",
          "description": "Stir-fried rice noodles with shrimp and peanuts",
          "category_id": 3,
          "category_name": "Foods",
          "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/Pad%20Thai.jpg?alt=media&token=1544b8e9-6918-4fb5-8c4c-fcea960b7a90",
          "rate_inr": 749,
          "qty": 1
        },
        {
          "id": 40,
          "name": "BBQ Ribs",
          "description": "Tender ribs coated in a tangy barbecue sauce",
          "category_id": 3,
          "category_name": "Foods",
          "image": "https://firebasestorage.googleapis.com/v0/b/e-shop-69f44.appspot.com/o/BBQ%20Ribs.jpg?alt=media&token=feb9b474-5ed3-4a56-bd12-1662dd8ec128",
          "rate_inr": 1049,
          "qty": 1
        }
      ]
      


export const Productinfo = products.map(product => ({
    ...product,
    iscart: "N"
}));