// Base de datos local de componentes y su consumo en Watts (TDP)
const hardwareData = {
  cpu: [
    { nombre: "Seleccionar Procesador...", consumo: 0 },
    { nombre: "AMD Ryzen 5 5600X", consumo: 65 },
    { nombre: "AMD Ryzen 7 5800X3D", consumo: 105 },
    { nombre: "Intel Core i5-12400F", consumo: 65 },
    { nombre: "Intel Core i7-13700K", consumo: 253 }
  ],
  gpu: [
    { nombre: "Seleccionar Placa de Video...", consumo: 0 },
    { nombre: "Sapphire Radeon RX 580", consumo: 185 },
    { nombre: "AMD Radeon RX 7600", consumo: 165 },
    { nombre: "NVIDIA GeForce RTX 3060", consumo: 170 },
    { nombre: "NVIDIA GeForce RTX 4090", consumo: 450 }
  ],
  motherboard: [
    { nombre: "Seleccionar Motherboard...", consumo: 0 },
    { nombre: "Gigabyte B450M Aorus Elite", consumo: 40 },
    { nombre: "ASUS TUF B450 Gaming", consumo: 40 },
    { nombre: "Genérica Mini-ITX", consumo: 30 },
    { nombre: "Genérica ATX / Z-Series", consumo: 50 }
  ],
  almacenamiento: [
    { nombre: "Ninguno", consumo: 0 },
    { nombre: "SSD 120GB / 240GB (SATA)", consumo: 3 },
    { nombre: "Disco Duro HDD TOSHIBA / WD (7200RPM)", consumo: 7 },
    { nombre: "SSD M.2 NVMe", consumo: 5 }
  ],
  refrigeracion: [
    { nombre: "Ninguno", consumo: 0 },
    { nombre: "Cooler CPU por Aire (ej. ID-Cooling)", consumo: 4 },
    { nombre: "Ventilador de Gabinete 120mm (Unitario)", consumo: 2 },
    { nombre: "Refrigeración Líquida (AIO 240mm)", consumo: 15 }
  ]
};
