import meat from "../assets/meet.png";
import corn from "../assets/corn.png";
import pea from "../assets/pea.png";
import grecha from "../assets/porrige/grecha.png";
import rice from "../assets/porrige/rice.png";
import puree from "../assets/porrige/puree.png";
import sub from "../assets/sub.png";
import kharchi from "../assets/kharchi.png";
import img from "../assets/01.png";
import img02 from "../assets/02.png";
import img03 from "../assets/03.png";
import img04 from "../assets/04.png";
import pasta from "../assets/pasta.png";
import { StaticImageData } from "next/image";
import { MenuListItem } from "../store/shoppingCart/type";

type ProductsType = {
  porridges: { id: number; name: string; img: StaticImageData }[];
  meat: { id: number; name: string; img: StaticImageData }[];
  vegetables: { id: number; name: string; img: StaticImageData }[];
};

type Dishes = {
  id: string;
  name: string;
  img: StaticImageData;
  price: number;
  options?: { name: string; enable: boolean }[];
};

// export const productsData: ProductsType = {
//   porridges: [
//     { id: Date.now(), name: "Греча", img: grecha },
//     { id: Date.now(), name: "Рис", img: rice },
//     { id: Date.now(), name: "Пюре", img: puree },
//   ],
//   meat: [{ id: 1, name: "М'ясо", img: meat }],
//   vegetables: [
//     { id: Date.now(), name: "Кукурудза", img: pea },
//     { id: Date.now(), name: "Горошок", img: corn },
//   ],
// };

export const firstDish: MenuListItem[] = [
  {
    id: String(Date.now() + Math.random()),
    name: "Гречка з овочами",
    img: sub,
    price: 50,
    orderIdWithOptionsId: "",
    options: [
      { name: "М'ясо", enable: false },
      { name: "Часник", enable: false },
      { name: "Гостре", enable: false },
    ],
  },
  {
    id: String(Date.now() + Math.random()),
    name: "Картопляне пюре з овочами",
    img: kharchi,
    price: 50,
    orderIdWithOptionsId: "",
    options: [
      { name: "М'ясо", enable: false },
      { name: "Часник", enable: false },
      { name: "Гостре", enable: false },
    ],
  },
  {
    id: String(Date.now() + Math.random()),
    name: "Горохова каша з овочами",
    img: pasta,
    price: 50,
    orderIdWithOptionsId: "",
    options: [
      { name: "М'ясо", enable: false },
      { name: "Часник", enable: false },
      { name: "Гостре", enable: false },
    ],
  },
  {
    id: String(Date.now() + Math.random()),
    name: "Кукурудзяна каша з овочами",
    img: img,
    price: 50,
    orderIdWithOptionsId: "",
    options: [
      { name: "М'ясо", enable: false },
      { name: "Часник", enable: false },
      { name: "Гостре", enable: false },
    ],
  },
];
export const secondDish: Dishes[] = [
  {
    id: String(Date.now() + Math.random()),
    name: "Cуп кукурудзяний з овочами",
    img: sub,
    price: 50,
    options: [
      { name: "М'ясо", enable: false },
      { name: "Часник", enable: false },
      { name: "Гостре", enable: false },
    ],
  },
  {
    id: String(Date.now() + Math.random()),
    name: "Cуп гороховий з овочами",
    img: sub,
    price: 50,
    options: [
      { name: "М'ясо", enable: true },
      { name: "Часник", enable: false },
      { name: "Гостре", enable: false },
    ],
  },
  {
    id: String(Date.now() + Math.random()),
    name: "Cуп рисовий з куркою і овочами",
    img: sub,
    price: 50,
    options: [
      { name: "М'ясо", enable: true },
      { name: "Часник", enable: false },
      { name: "Гостре", enable: false },
    ],
  },
  {
    id: String(Date.now() + Math.random()),
    name: "Cуп гречаний з овочами",
    img: sub,
    price: 50,
    options: [
      { name: "М'ясо", enable: true },
      { name: "Часник", enable: false },
      { name: "Гостре", enable: false },
    ],
  },
];
export const sweetPorige: Dishes[] = [
  {
    id: String(Date.now() + Math.random()),
    name: "Вівсяна каша 7 злаків",
    img: img02,
    price: 50,
  },
  {
    id: String(Date.now() + Math.random()),
    name: "Вівсяна каша 9 злаків",
    img: img03,
    price: 50,
  },
  {
    id: String(Date.now() + Math.random()),
    name: "Кус-кус з сухофруктами",
    img: img04,
    price: 50,
  },
  {
    id: String(Date.now() + Math.random()),
    name: "Вівсяна каша",
    img: sub,
    price: 50,
  },
];
