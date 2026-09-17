const hardwareData = {
  cpu: [
    { nombre: "Seleccionar Procesador...", consumo: 0, socket: "none" },
    // AMD AM4
    { nombre: "AMD Ryzen 5 3600", consumo: 65, socket: "AM4" },
    { nombre: "AMD Ryzen 5 5600G", consumo: 65, socket: "AM4" },
    { nombre: "AMD Ryzen 5 5600X", consumo: 65, socket: "AM4" },
    { nombre: "AMD Ryzen 7 5700X", consumo: 65, socket: "AM4" },
    { nombre: "AMD Ryzen 7 5800X3D", consumo: 105, socket: "AM4" },
    { nombre: "AMD Ryzen 9 5900X", consumo: 105, socket: "AM4" },
    // AMD AM5
    { nombre: "AMD Ryzen 5 7600X", consumo: 105, socket: "AM5" },
    { nombre: "AMD Ryzen 7 7800X3D", consumo: 120, socket: "AM5" },
    { nombre: "AMD Ryzen 9 7950X", consumo: 170, socket: "AM5" },
    // Intel LGA1700
    { nombre: "Intel Core i3-12100F", consumo: 58, socket: "LGA1700" },
    { nombre: "Intel Core i5-12400F", consumo: 65, socket: "LGA1700" },
    { nombre: "Intel Core i5-13400F", consumo: 65, socket: "LGA1700" },
    { nombre: "Intel Core i5-13600K", consumo: 181, socket: "LGA1700" },
    { nombre: "Intel Core i7-13700K", consumo: 253, socket: "LGA1700" },
    { nombre: "Intel Core i9-14900K", consumo: 253, socket: "LGA1700" }
  ],
  motherboard: [
    { nombre: "Seleccioná un CPU primero...", consumo: 0, socket: "none" },
    // AM4
    { nombre: "Gigabyte B450M Aorus Elite", consumo: 40, socket: "AM4" },
    { nombre: "ASUS TUF B450-PLUS Gaming", consumo: 40, socket: "AM4" },
    { nombre: "MSI MAG B550 TOMAHAWK", consumo: 45, socket: "AM4" },
    { nombre: "ASUS ROG Strix X570-E", consumo: 55, socket: "AM4" },
    // AM5
    { nombre: "Gigabyte B650 AORUS ELITE AX", consumo: 50, socket: "AM5" },
    { nombre: "MSI PRO B650-P WIFI", consumo: 50, socket: "AM5" },
    { nombre: "ASUS ROG STRIX X670E-F", consumo: 60, socket: "AM5" },
    // LGA1700
    { nombre: "Gigabyte H610M S2H", consumo: 35, socket: "LGA1700" },
    { nombre: "ASUS PRIME B660M-A", consumo: 45, socket: "LGA1700" },
    { nombre: "MSI PRO Z790-P WIFI", consumo: 55, socket: "LGA1700" },
    { nombre: "Gigabyte Z790 AORUS ELITE AX", consumo: 60, socket: "LGA1700" }
  ],
  gpu: [
    { nombre: "Sin Tarjeta de Video (Gráficos Integrados)", consumo: 0 },
    // AMD
    { nombre: "Sapphire Radeon RX 580 8GB", consumo: 185 },
    { nombre: "AMD Radeon RX 6600", consumo: 132 },
    { nombre: "AMD Radeon RX 6700 XT", consumo: 230 },
    { nombre: "AMD Radeon RX 7600", consumo: 165 },
    { nombre: "AMD Radeon RX 7800 XT", consumo: 263 },
    { nombre: "AMD Radeon RX 7900 XTX", consumo: 355 },
    // NVIDIA
    { nombre: "NVIDIA GeForce GTX 1660 Super", consumo: 125 },
    { nombre: "NVIDIA GeForce RTX 3060 12GB", consumo: 170 },
    { nombre: "NVIDIA GeForce RTX 3070", consumo: 220 },
    { nombre: "NVIDIA GeForce RTX 4060", consumo: 115 },
    { nombre: "NVIDIA GeForce RTX 4070", consumo: 200 },
    { nombre: "NVIDIA GeForce RTX 4090", consumo: 450 }
  ],
  almacenamiento: [
    { nombre: "Ninguno", consumo: 0 },
    { nombre: "1x SSD SATA (120GB - 1TB)", consumo: 3 },
    { nombre: "1x SSD M.2 NVMe (Gen 3/Gen 4)", consumo: 6 },
    { nombre: "1x Disco Duro HDD 7200RPM", consumo: 8 },
    { nombre: "Combo: 1x M.2 NVMe + 1x HDD", consumo: 14 },
    { nombre: "Combo: 2x M.2 NVMe", consumo: 12 }
  ],
  refrigeracion: [
    { nombre: "Cooler de stock (Incluido con CPU)", consumo: 5 },
    { nombre: "Cooler por Aire Torre (ej. ID-Cooling 224)", consumo: 7 },
    { nombre: "Cooler por Aire Doble Torre (ej. NH-D15)", consumo: 10 },
    { nombre: "Watercooling AIO 120mm / 240mm", consumo: 15 },
    { nombre: "Watercooling AIO 360mm", consumo: 20 },
    { nombre: "+ Añadir 3 Ventiladores de Gabinete (RGB)", consumo: 15 },
    { nombre: "+ Añadir 6 Ventiladores de Gabinete (RGB)", consumo: 30 }
  ]
};
