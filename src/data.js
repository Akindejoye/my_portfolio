import { v4 as uuidv4 } from 'uuid';
import DarkHorse from './images/dark-horse-agency.png';
import EvoGym from './images/evo-gym.png';
import OceanSea from './images/oceansea.png';
import Tesla from './images/tesla.png';
import UserAdmin from './images/useradmin.png';
import Yolo from './images/yolo.png';
import NewsBlog from './images/news-blog.png';
import EcomVanilla from './images/ecommerce-vanilla.png';
import Billion from './images/billion.png';

export const products = [
  {
    id: uuidv4(),
    img: NewsBlog,
    link: "https://news-blog-iota-woad.vercel.app/",
  },
  {
    id: uuidv4(),
    img: EvoGym,
    link: "https://evogym-neon.vercel.app/",
  },
  {
    id: uuidv4(),
    img: DarkHorse,
    link: "https://dark-horse-agency.netlify.app/",
  },
  {
    id: uuidv4(),
    img: Billion,
    link: "https://billion-dashboard-client.vercel.app/dashboard",
  },
  {
    id: uuidv4(),
    img: EcomVanilla,
    link: "https://ecommerce-vanilla-design.vercel.app/",
  },
  {
    id: uuidv4(),
    img: UserAdmin,
    link: "https://useradmingeneral.netlify.app/",
  },
  {
    id: uuidv4(),
    img: OceanSea,
    link: "https://oceansea-blockchain.vercel.app/",
  },
  {
    id: uuidv4(),
    img: Yolo,
    link: "https://yolo-ecommerce-rosy.vercel.app/",
  },
  
  {
    id: uuidv4(),
    img: Tesla,
    link: "https://tesla-classic.netlify.app/",
  },
];