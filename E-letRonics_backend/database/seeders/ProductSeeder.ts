import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Product from 'App/Models/Product'

export default class extends BaseSeeder {
  public async run () {
    const products = [
      {
        name: 'Raspberry Pi 4 Model B 8GB',
        description: 'The Raspberry Pi 4 Model B 8GB is a compact computer board that offers impressive computing capabilities. It is equipped with a 1.5GHz quad-core 64-bit ARM Cortex-A72 CPU, 8GB of LPDDR4 SDRAM, dual-band 802.11ac wireless LAN, Bluetooth 5.0, Gigabit Ethernet, USB 3.0, and PoE capability (via a separate PoE HAT add-on). It supports up to two monitors at resolutions up to 4K. This model, with its increased RAM, is perfect for heavy computing tasks, making it a great choice for a desktop replacement, or for use in high-performance server applications.',
        image: 'https://pt.farnell.com/productimages/large/en_GB/3051885-40.jpg',
        price: 129.99,
        quantity: Math.floor(Math.random() * 30) + 1,
        rating: Math.floor(Math.random() * 5) + 1,
      },
      {
        name: 'Getac X600 39.6 cm (15,6) Win. 10 Pro, QWERTY, USB-C, SSD, Full HD',
        description: 'fully rugged, 39.6 cm (15.6), 1920x1080 pixels, Intel Core i7 vPro, 2.5GHz, RAM: 32 GB, SSD: 1 TB, USB-C, RS232, Bluetooth, Ethernet (2x), Wi-Fi, VGA, QWERTY, webcam, NVIDIA Quadro RTX 3000, brightness: 1000cd, IP66, MIL-STD 461, MIL-STD 810H, Win 10 Professional, incl.: power supply unit, power cable (EU), battery, 6900mAh',
        image: 'https://www.logiscenter.pt/media/catalog/product/cache/8cf70735af30046b057c1b96cae675a8/g/e/getac-x600-mobile-computing-3.jpg',
        price: 12673.92,
        quantity: Math.floor(Math.random() * 20) + 1,
        rating: Math.floor(Math.random() * 5) + 1,
      },
    ]

    await Product.createMany(products)
  }
}
