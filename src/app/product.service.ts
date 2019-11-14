import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  tablas: Product[] = [
    {
      id: '1',
      image1: '../assets/images/Producto_Skateboard/Almost_DaewonSong_Frente.png',
      image2: '../assets/images/Producto_Skateboard/Almost_DaewonSong_Vuelta.png',
      name: 'Almost DaewonSong',
      price: 1200,
      description: 'Las mejores tablas, al mejor precio. Si tienes alguna inquietud no dude en contactarnos.',
      medida: '8,25',
      extras: 'Incluye Lija'
    },
    {
      id: '2',
      image1: '../assets/images/Producto_Skateboard/Almost_LewisMarnell_Frente.png',
      image2: '../assets/images/Producto_Skateboard/Almost_LewisMarnell_Vuelta.png',
      name: 'Almost LewisMarnell',
      price: 1200,
      description: 'Las mejores tablas, al mejor precio. Si tienes alguna inquietud no dude en contactarnos.',
      medida: '8,25',
      extras: 'Incluye Lija'
    },
    {
      id: '3',
      image1: '../assets/images/Producto_Skateboard/Blind_McEntire_Frente.png',
      image2: '../assets/images/Producto_Skateboard/Blind_McEntire_Vuelta.png',
      name: 'Blind McEntire',
      price: 1200,
      description: 'Las mejores tablas, al mejor precio. Si tienes alguna inquietud no dude en contactarnos.',
      medida: '8,25',
      extras: 'Incluye Lija'
    },
    {
      id: '4',
      image1: '../assets/images/Producto_Skateboard/Creature_TeamGust_Frente.png',
      image2: '../assets/images/Producto_Skateboard/Creature_TeamGust_Vuelta.png',
      name: 'Creature TeamGust',
      price: 1200,
      description: 'Las mejores tablas, al mejor precio. Si tienes alguna inquietud no dude en contactarnos.',
      medida: '8,25',
      extras: 'Incluye Lija'
    },
    {
      id: '6',
      image1: '../assets/images/Producto_Skateboard/Darkstar_RyanDeCenzo_Frente.png',
      image2: '../assets/images/Producto_Skateboard/Darkstar_RyanDeCenzo_Vuelta.png',
      name: 'Darkstar RyanCenzo',
      price: 1200,
      description: 'Las mejores tablas, al mejor precio. Si tienes alguna inquietud no dude en contactarnos.',
      medida: 'Medida: 8,25',
      extras: 'Incluye Lija'
    },
    {
      id: '7',
      image1: '../assets/images/Producto_Skateboard/Plan_B_Duffy_Frente.png',
      image2: '../assets/images/Producto_Skateboard/Plan_B_Duffy_Vuelta.png',
      name: 'Plan B Duffy',
      price: 1200,
      description: 'Las mejores tablas, al mejor precio. Si tienes alguna inquietud no dude en contactarnos.',
      medida: '8,25',
      extras: 'Incluye Lija'
    },
    {
      id: '8',
      image1: '../assets/images/Producto_Skateboard/Plan_B_FelipeGustavo_Frente.png',
      image2: '../assets/images/Producto_Skateboard/Plan_B_FelipeGustavo_Vuelta.png',
      name: 'Plan B FelipeGustavo',
      price: 1200,
      description: 'Las mejores tablas, al mejor precio. Si tienes alguna inquietud no dude en contactarnos.',
      medida: '8,25',
      extras: 'Incluye Lija'
    },
    {
      id: '9',
      image1: '../assets/images/Producto_Skateboard/Santa_Cruz_The Worst_Frente.png',
      image2: '../assets/images/Producto_Skateboard/Santa_Cruz_The Worst_Vuelta.png',
      name: 'Santa Cruz The Worst',
      price: 1200,
      description: 'Las mejores tablas, al mejor precio. Si tienes alguna inquietud no dude en contactarnos.',
      medida: '8,25',
      extras: 'Incluye Lija'
    },
    {
      id: '10',
      image1: '../assets/images/Producto_Skateboard/Grizzly_AdventureTime_Frente.png',
      image2: '../assets/images/Producto_Skateboard/Grizzly_AdventureTime_Vuelta.png',
      name: 'Grizzly AdventureTime',
      price: 1300,
      description: 'Las mejores tablas, al mejor precio. Si tienes alguna inquietud no dude en contactarnos.',
      medida: 'Medida: 8,37',
      extras: 'Incluye Lija'
    },
    {
      id: '11',
      image1: '../assets/images/Producto_Skateboard/Santa_Cruz_NinjaTurtles_Frente.png',
      image2: '../assets/images/Producto_Skateboard/Santa_Cruz_NinjaTurtles_Vuelta.png',
      name: 'Santa Cruz NinjaTurtles',
      price: 1500,
      description: 'Las mejores tablas, al mejor precio. Si tienes alguna inquietud no dude en contactarnos.',
      medida: 'Medida: 8,0',
      extras: 'Incluye Lija'
    },
   ];
  trucks: Product[] = [
    {
    id: '12',
    image1: '../assets/images/Producto_Skateboard/Truck_Thunder_Shane_Oneill.png',
    image2: '',
    name: 'Truck Thunder Shane O`neill',
    price: 1500,
    description: 'Trucks de la mas alta calidad con diseños increibles.',
    medida: 'Medida: 149 Premium Hollow Lights White',
    extras: 'ENVIO GRATIS'
    },
    {
      id: '17',
      image1: '../assets/images/Producto_Skateboard/Truck_Independent_Leo_Romero_frente.png',
      image2: '',
      name: 'Truck Independent Leo Romero',
      price: 1500,
      description: 'Trucks de la mas alta calidad con diseños increibles.',
      medida: 'Medida: 159 Stage 11 Holow',
      extras: 'ENVIO GRATIS'
      }
  ];
  ruedas: Product[] = [
    {
      id: '13',
      image1: '../assets/images/Producto_Skateboard/Spitfire_Old_English_Wheels_Black_53mm.png',
      image2: '',
      name: 'SpitFire Old English 53mm',
      price: 850,
      description: 'Ruedas con excelente calidad y diseño para el skating mas extremo',
      medida: 'Medida: 53mm',
      extras: 'ENVIO GRATIS'
    },
    {
      id: '14',
      image1: '../assets/images/Producto_Skateboard/Ricta_Sparx_52mm.png',
      image2: '',
      name: 'Ricta Sparx 52mm',
      price: 850,
      description: 'Ruedas con excelente calidad y diseño para el skating mas extremo',
      medida: 'Medida: 52mm',
      extras: 'ENVIO GRATIS'
    },
    {
      id: '15',
      image1: '../assets/images/Producto_Skateboard/pro_classic_58mm.jpg',
      image2: '',
      name: 'Spit Fire Lance Mountain',
      price: 950,
      description: 'Ruedas con excelente calidad y diseño para el skating mas extremo',
      medida: '58mm F4 99 Pro Classic',
      extras: 'ENVIO GRATIS'
    }
  ];
  tornillos: Product[] = [];
  elevadores: Product[] = [];
  tennis: Product[] = [];

  constructor() { }

  getTablas() {
    return this.tablas;
  }

  getTrucks() {
    return this.trucks;
  }

  getRuedas() {
    return this.ruedas;
  }

  getTornillos() {
    return this.tornillos;
  }

  getElevadores() {
    return this.elevadores;
  }

  getTennis() {
    return this.elevadores;
  }

  getProductTabla(id: string) {
    return this.tablas.find(item => id === item.id);
  }

  getProductRueda(id: string) {
    return this.ruedas.find(item => id === item.id);
  }

  getProductTruck(id: string) {
    return this.trucks.find(item => id === item.id);
  }

  getProductTornillo(id: string) {
    return this.tornillos.find(item => id === item.id);
  }

  getProductElevador(id: string) {
    return this.elevadores.find(item => id === item.id);
  }

  getProductTennis(id: string) {
    return this.elevadores.find(item => id === item.id);
  }
}
