const Images = [
  { image: require("../assets/banners/steamed-chicken-rice.jpg") },
  { image: require("../assets/banners/roasted-chicken-rice.jpg") },
  { image: require("../assets/banners/white-carrot-cake.jpg") },
  { image: require("../assets/banners/black-carrot-cake.jpg") },
];

export const data = [
  {
    id: "1",
    name: "Famous Chicken Rice",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut ipsum nec lectus viverra suscipit. Cras sed mi risus. Etiam blandit justo posuere venenatis efficitur. ",
    rating: 4,
    image: require("../assets/banners/famous-chicken-rice.jpg"),
    menu: [
      {
        id: "1.1",
        dish: "Steamed Chicken Rice",
        image: require("../assets/banners/steamed-chicken-rice.jpg"),
      },
      {
        id: "1.2",
        dish: "Roasted Chicken Rice",
        image: require("../assets/banners/roasted-chicken-rice.jpg"),
      },
      {
        id: "1.3",
        dish: "Half Chicken",
        image: require("../assets/banners/half-chicken.jpg"),
      },
      {
        id: "1.4",
        dish: "Chicken Rice Set",
        image: require("../assets/banners/chicken-rice-set.jpg"),
      },
    ],
  },
  {
    id: "2",
    name: "Famous Fried Carrot Cake",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ut ipsum nec lectus viverra suscipit. Cras sed mi risus. Etiam blandit justo posuere venenatis efficitur.",
    image: require("../assets/banners/famous-carrot-cake.jpg"),
    menu: [
      {
        id: "2.1",
        dish: "White Carrot Cake",
        image: require("../assets/banners/white-carrot-cake.jpg"),
      },
      {
        id: "2.2",
        dish: "Black Carrot Cake",
        image: require("../assets/banners/black-carrot-cake.jpg"),
      },
    ],
  },
];
