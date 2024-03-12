import tourImg01 from "../images/tour-img01.jpg";
import tourImg02 from "../images/tour-img02.jpg";
import tourImg03 from "../images/tour-img03.jpg";
import tourImg04 from "../images/tour-img04.jpg";
import tourImg05 from "../images/tour-img05.jpg";
import tourImg06 from "../images/tour-img06.jpg";
import tourImg07 from "../images/tour-img07.jpg";
import tourImg08 from "../images/tour-img08.jpg";

const tours = [
  {
    id: "01",
    title: "Victoria Peak",
    location: "Hong Kong Island",
    time: "10:00 AM",
    price: 99,
    maxGroupSize: 10,
    desc: "this is the description",
    reviews: [
      {
        name: "bobe kryant",
        rating: 4.6,
      },
      {
        name: "pergio serez",
        rating: 5,
      },
      {
        name: "bhon joe vi",
        rating: 4.8,
      },
      {
        name: "vax merstappen",
        rating: 4.9,
      },
      {
        name: "raniel diccardio",
        rating: 4.9,
      },
    ],
    photo: tourImg01,
    featured: true,
  },
  {
    id: "02",
    title: "Tian Tan Buddha",
    location: "Ngong Ping",
    time: "8:00 AM",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "chris wong",
        rating: 4.3,
      },
      {
        name: "hewis lamilton",
        rating: 4.5,
      },
      {
        name: "alonso fernando",
        rating: 4.5,
      },
    ],
    photo: tourImg02,
    featured: true,
  },
  {
    id: "03",
    title: "Wong Tai Sin Temple",
    location: "Wong Tai Sin",
    time: "12:00 PM",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "sarlos cainz",
        rating: 4.9,
      },
    ],
    photo: tourImg03,
    featured: true,
  },
  {
    id: "04",
    title: "Hong Kong Space Museum",
    location: "Tsim Sha Tsui",
    time: "9:00 AM",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "jhon doe",
        rating: 4.6,
      },
      {
        name: "larles checlerc",
        rating: 4.6,
      },
    ],
    photo: tourImg04,
    featured: true,
  },
  {
    id: "05",
    title: "Avenue of Stars",
    location: "Tsim Sha Tsui",
    time: "1:00 PM",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "mevin kagnussen",
        rating: 4.5,
      },
    ],
    photo: tourImg05,
    featured: false,
  },
  {
    id: "06",
    title: "Temple Street Night Market",
    location: "Jordan",
    time: "6:00 PM",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "nando lorris",
        rating: 4.0,
      },
    ],
    photo: tourImg06,
    featured: false,
  },
  {
    id: "07",
    title: "Hong Kong History Museum",
    location: "Tsim Sha Tsui",
    time: "8:00 AM",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [
      {
        name: "rimi kaikkonen",
        rating: 4.1,
      },
    ],
    photo: tourImg07,
    featured: false,
  },
  {
    id: "08",
    title: "Mong Kok Night Market",
    location: "Mong Kok",
    time: "7:00 PM",
    price: 99,
    maxGroupSize: 8,
    desc: "this is the description",
    reviews: [],
    photo: tourImg08,
    featured: false,
  },
];

export default tours;
