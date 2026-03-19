import type { Product } from "@/types/catalog";

export const products: Product[] = [
  {
    id: "p1",
    slug: "arduino-uno-r3",
    name: "Kit Arduino Uno R3 (ATmega328P)",
    code: "UNO-R3",
    category: "Vi dieu khien & Kit",
    price: 165000,
    oldPrice: 185000,
    inStock: true,
    stockQuantity: 24,
    imageUrl:
      "https://images.unsplash.com/photo-1517055729445-fa7d27394b80?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Board Arduino Uno R3 chinh hang, phu hop cho nguoi moi bat dau.",
    discountPercent: 11,
  },
  {
    id: "p2",
    slug: "stm32f407-discovery",
    name: "Kit STM32F407 Discovery",
    code: "STM32F407-DISC",
    category: "Vi dieu khien & Kit",
    price: 780000,
    inStock: true,
    stockQuantity: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1581291518586-7515b845b9d8?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Kit phat trien STM32F4 manh me, tich hop cam bien va audio.",
  },
  {
    id: "p3",
    slug: "raspberry-pi-4-4gb",
    name: "Raspberry Pi 4 Model B 4GB",
    code: "RPI4-4GB",
    category: "Raspberry Pi",
    price: 1800000,
    oldPrice: 1950000,
    discountPercent: 8,
    inStock: false,
    stockQuantity: 0,
    imageUrl:
      "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa2?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Mini PC Raspberry Pi 4, RAM 4GB, ho tro 2 man hinh 4K.",
  },
  {
    id: "p4",
    slug: "dht22-sensor",
    name: "Cam bien nhiet do - do am DHT22",
    code: "DHT22",
    category: "Cam bien",
    price: 52000,
    inStock: true,
    stockQuantity: 68,
    imageUrl:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Cam bien do am va nhiet do DHT22, do chinh xac cao.",
  },
  {
    id: "p5",
    slug: "psu-12v-5a",
    name: "Nguon xung 12V 5A",
    code: "PSU-12V5A",
    category: "Nguon",
    price: 135000,
    inStock: true,
    stockQuantity: 34,
    imageUrl:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Nguon xung cong suat 60W, dau ra on dinh 12V 5A.",
  },
  {
    id: "p6",
    slug: "lora-sx1278-433",
    name: "Module LoRa SX1278 433MHz",
    code: "LORA-1278",
    category: "RF",
    price: 95000,
    inStock: true,
    stockQuantity: 40,
    imageUrl:
      "https://images.unsplash.com/photo-1555617981-7ce9f4651c86?auto=format&fit=crop&w=400&q=80",
    shortDesc: "Module LoRa SX1278 433MHz, tam xa, phu hop IoT.",
  },
];

export function findProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
