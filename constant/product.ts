import meat from "../public/assets/meet.png";
import corn from "../public/assets/corn.png";
import pea from "../public/assets/pea.png";
import grecha from "../public/assets/porrige/grecha.png";
import rice from "../public/assets/porrige/rice.png";
import puree from "../public/assets/porrige/puree.png";
import sub from "../public/assets/sub.png";
import kharchi from "../public/assets/kharchi.png";
import img from "../public/assets/01.png";
import img02 from "../public/assets/02.png";
import img03 from "../public/assets/03.png";
import img04 from "../public/assets/04.png";
import pasta from "../public/assets/pasta.png";
import { StaticImageData } from "next/image";
import { MenuListItem } from "../store/shoppingCart/type";

type constructorProductItemType = {
  id: string;
  name: string;
  img: StaticImageData;
};

type constructorProductType = {
  porridges: constructorProductItemType[];
  meat: constructorProductItemType[];
  vegetables: constructorProductItemType[];
};

export const constructorProduct: constructorProductType = {
  porridges: [
    { id: String(Date.now() + Math.random()), name: "Греча", img: grecha },
    { id: String(Date.now() + Math.random()), name: "Рис", img: rice },
    { id: String(Date.now() + Math.random()), name: "Пюре", img: puree },
  ],
  meat: [{ id: String(Date.now() + Math.random()), name: "М'ясо", img: meat }],
  vegetables: [
    { id: String(Date.now() + Math.random()), name: "Кукурудза", img: pea },
    { id: String(Date.now() + Math.random()), name: "Горошок", img: corn },
  ],
};

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
export const secondDish: MenuListItem[] = [
  {
    id: String(Date.now() + Math.random()),
    name: "Cуп кукурудзяний з овочами",
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
    name: "Cуп гороховий з овочами",
    img: sub,
    price: 50,
    orderIdWithOptionsId: "",
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
    orderIdWithOptionsId: "",
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
    orderIdWithOptionsId: "",
    options: [
      { name: "М'ясо", enable: true },
      { name: "Часник", enable: false },
      { name: "Гостре", enable: false },
    ],
  },
];
export const sweetPorige: MenuListItem[] = [
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
