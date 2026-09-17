const hardwareData = {
  cpu: [
    { nombre: "Seleccionar Procesador...", consumo: 0, socket: "none" },
    
    // AMD AM4
    { nombre: "AMD Ryzen 3 3100 / 3300X", consumo: 65, socket: "AM4" },
    { nombre: "AMD Ryzen 5 3600 / 3600X", consumo: 95, socket: "AM4" },
    { nombre: "AMD Ryzen 5 5600G / 5600", consumo: 65, socket: "AM4" },
    { nombre: "AMD Ryzen 5 5600X", consumo: 65, socket: "AM4" },
    { nombre: "AMD Ryzen 7 5700X / 5700G", consumo: 65, socket: "AM4" },
    { nombre: "AMD Ryzen 7 5800X", consumo: 105, socket: "AM4" },
    { nombre: "AMD Ryzen 7 5800X3D", consumo: 105, socket: "AM4" },
    { nombre: "AMD Ryzen 9 5900X / 5950X", consumo: 105, socket: "AM4" },
    
    // AMD AM5
    { nombre: "AMD Ryzen 5 7600 / 7600X", consumo: 105, socket: "AM5" },
    { nombre: "AMD Ryzen 7 7700 / 7700X", consumo: 105, socket: "AM5" },
    { nombre: "AMD Ryzen 7 7800X3D", consumo: 120, socket: "AM5" },
    { nombre: "AMD Ryzen 9 7900X / 7950X", consumo: 170, socket: "AM5" },
    { nombre: "AMD Ryzen 9 7950X3D", consumo: 120, socket: "AM5" },

    // Intel LGA1200 (10ma / 11va Gen)
    { nombre: "Intel Core i3-10100F / 10105F", consumo: 65, socket: "LGA1200" },
    { nombre: "Intel Core i5-10400F / 11400F", consumo: 65, socket: "LGA1200" },
    { nombre: "Intel Core i7-10700K / 11700K", consumo: 125, socket: "LGA1200" },
    { nombre: "Intel Core i9-10900K / 11900K", consumo: 125, socket: "LGA1200" },

    // Intel LGA1700 (12va / 13va / 14va Gen)
    { nombre: "Intel Core i3-12100F / 13100F", consumo: 89, socket: "LGA1700" },
    { nombre: "Intel Core i5-12400F / 13400F", consumo: 117, socket: "LGA1700" },
    { nombre: "Intel Core i5-12600K / 13600K", consumo: 181, socket: "LGA1700" },
    { nombre: "Intel Core i7-12700K / 13700K", consumo: 253, socket: "LGA1700" },
    { nombre: "Intel Core i7-14700K", consumo: 253, socket: "LGA1700" },
    { nombre: "Intel Core i9-13900K / 14900K", consumo: 253, socket: "LGA1700" }
  ],
  
  motherboard: [
    { nombre: "Seleccioná un CPU primero...", consumo: 0, socket: "none" },
    
    // AM4
    { nombre: "Placa Base A320 / A520", consumo: 30, socket: "AM4" },
    { nombre: "Placa Base B450 / B550 (ej. Gigabyte Aorus, ASUS TUF)", consumo: 45, socket: "AM4" },
    { nombre: "Placa Base X470 / X570 High-End", consumo: 60, socket: "AM4" },
    
    // AM5
    { nombre: "Placa Base A620", consumo: 35, socket: "AM5" },
    { nombre: "Placa Base B650 / B650E", consumo: 55, socket: "AM5" },
    { nombre: "Placa Base X670 / X670E High-End", consumo: 70, socket: "AM5" },

    // LGA1200
    { nombre: "Placa Base H410 / H510", consumo: 30, socket: "LGA1200" },
    { nombre: "Placa Base B460 / B560", consumo: 45, socket: "LGA1200" },
    { nombre: "Placa Base Z490 / Z590 High-End", consumo: 60, socket: "LGA1200" },
    
    // LGA1700
    { nombre: "Placa Base H610", consumo: 35, socket: "LGA1700" },
    { nombre: "Placa Base B660 / B760", consumo: 50, socket: "LGA1700" },
    { nombre: "Placa Base Z690 / Z790 High-End", consumo: 65, socket: "LGA1700" }
  ],
  
  gpu: [
    { nombre: "Sin Tarjeta de Video (Gráficos Integrados)", consumo: 0 },
    
    // AMD Radeon Serie RX 500 / 5000
    { nombre: "AMD Radeon RX 570", consumo: 150 },
    { nombre: "AMD Radeon RX 580 8GB", consumo: 185 },
    { nombre: "AMD Radeon RX 5500 XT", consumo: 130 },
    { nombre: "AMD Radeon RX 5600 XT", consumo: 150 },
    { nombre: "AMD Radeon RX 5700 XT", consumo: 225 },
    
    // AMD Radeon Serie RX 6000 / 7000
    { nombre: "AMD Radeon RX 6600 / 6600 XT", consumo: 160 },
    { nombre: "AMD Radeon RX 6700 XT / 6750 XT", consumo: 250 },
    { nombre: "AMD Radeon RX 6800 XT", consumo: 300 },
    { nombre: "AMD Radeon RX 7600", consumo: 165 },
    { nombre: "AMD Radeon RX 7700 XT", consumo: 245 },
    { nombre: "AMD Radeon RX 7800 XT", consumo: 263 },
    { nombre: "AMD Radeon RX 7900 XT / XTX", consumo: 355 },

    // Intel Arc
    { nombre: "Intel Arc A380", consumo: 75 },
    { nombre: "Intel Arc A580", consumo: 185 },
    { nombre: "Intel Arc A750", consumo: 225 },
    { nombre: "Intel Arc A770", consumo: 225 },
    
    // NVIDIA GeForce Serie GTX / RTX 2000
    { nombre: "NVIDIA GeForce GTX 1650 / 1650 Super", consumo: 100 },
    { nombre: "NVIDIA GeForce GTX 1660 / Ti / Super", consumo: 125 },
    { nombre: "NVIDIA GeForce RTX 2060 / Super", consumo: 175 },
    { nombre: "NVIDIA GeForce RTX 2070 / Super", consumo: 215 },
    
    // NVIDIA GeForce Serie RTX 3000
    { nombre: "NVIDIA GeForce RTX 3050", consumo: 130 },
    { nombre: "NVIDIA GeForce RTX 3060 12GB", consumo: 170 },
    { nombre: "NVIDIA GeForce RTX 3060 Ti", consumo: 200 },
    { nombre: "NVIDIA GeForce RTX 3070 / Ti", consumo: 290 },
    { nombre: "NVIDIA GeForce RTX 3080 / Ti", consumo: 350 },
    
    // NVIDIA GeForce Serie RTX 4000
    { nombre: "NVIDIA GeForce RTX 4060", consumo: 115 },
    { nombre: "NVIDIA GeForce RTX 4060 Ti", consumo: 160 },
    { nombre: "NVIDIA GeForce RTX 4070 / Super", consumo: 220 },
    { nombre: "NVIDIA GeForce RTX 4070 Ti / Super", consumo: 285 },
    { nombre: "NVIDIA GeForce RTX 4080 / Super", consumo: 320 },
    { nombre: "NVIDIA GeForce RTX 4090", consumo: 450 }
  ],
  
 almacenamiento: [
    { nombre: "Ninguno", consumo: 0 },
    
    // Unidades Simples (Ofimática / PC Básica)
    { nombre: "1x SSD SATA (2.5\")", consumo: 3 },
    { nombre: "1x SSD M.2 NVMe (Gen 3 / Gen 4)", consumo: 6 },
    { nombre: "1x SSD M.2 NVMe (Gen 5 - Alto Rendimiento)", consumo: 10 },
    { nombre: "1x Disco Duro HDD 5400 RPM", consumo: 5 },
    { nombre: "1x Disco Duro HDD 7200 RPM", consumo: 8 },
    { nombre: "1x Disco Duro HDD Enterprise / 10000 RPM", consumo: 12 },
    { nombre: "1x Unidad Óptica (Grabadora CD/DVD/Blu-Ray)", consumo: 15 },
    
    // Combos Estándar (Gaming / Uso General)
    { nombre: "Combo Básico: 1x M.2 NVMe + 1x SSD SATA", consumo: 9 },
    { nombre: "Combo Clásico: 1x M.2 NVMe + 1x HDD 7200 RPM", consumo: 14 },
    { nombre: "Combo Rendimiento: 2x M.2 NVMe", consumo: 12 },
    { nombre: "Combo Capacidad: 1x M.2 NVMe + 2x HDD 7200 RPM", consumo: 22 },
    
    // Combos Avanzados (Workstation / Creadores de Contenido)
    { nombre: "Workstation SSD: 2x M.2 NVMe + 2x SSD SATA", consumo: 18 },
    { nombre: "Edición de Video: 2x M.2 NVMe + 2x HDD 7200 RPM", consumo: 28 },
    { nombre: "Productor Audiovisual: 3x M.2 NVMe + 3x HDD", consumo: 42 },
    
    // Combos Extremos (Servidores / NAS)
    { nombre: "Servidor NAS Casero: 1x M.2 NVMe + 4x HDD", consumo: 38 },
    { nombre: "Servidor NAS Avanzado: 2x M.2 NVMe + 6x HDD", consumo: 60 },
    { nombre: "Servidor Extremo (RAID Masivo): 2x M.2 + 8x HDD", consumo: 76 }
  ],
  
  refrigeracion: [
    { nombre: "Sin ventiladores (Solo disipación pasiva)", consumo: 0 },
    
    // Refrigeración por Aire (Incluye estimación de ventiladores del gabinete)
    { nombre: "Aire Básico: Cooler de Stock + 1 o 2 Fans de gabinete", consumo: 10 },
    { nombre: "Aire Estándar: Cooler Torre Simple + 3 Fans de gabinete", consumo: 15 },
    { nombre: "Aire RGB: Cooler Torre Simple + 5 o 6 Fans RGB", consumo: 25 },
    { nombre: "Aire Extremo: Cooler Doble Torre (ej. NH-D15) + 6 Fans RGB", consumo: 30 },
    { nombre: "Aire Servidor: Cooler CPU + Ventiladores Industriales (Altas RPM)", consumo: 45 },
    
    // Refrigeración Líquida (AIO) (Incluye ventiladores de gabinete extra)
    { nombre: "Líquida AIO 120mm/140mm + 2 Fans de gabinete", consumo: 20 },
    { nombre: "Líquida AIO 240mm/280mm + 3 Fans RGB", consumo: 28 },
    { nombre: "Líquida AIO 360mm + 4 Fans RGB", consumo: 35 },
    { nombre: "Líquida AIO 420mm + 4 a 6 Fans RGB", consumo: 45 },
    { nombre: "Gabinete Pecera (Lian Li / NZXT): AIO 360mm + 9 Fans RGB", consumo: 55 },
    
    // Custom Loop (Sistemas personalizados con bombas de agua)
    { nombre: "Custom Loop Básico: 1 Bomba (D5/DDC) + 1 Radiador + 4 Fans", consumo: 40 },
    { nombre: "Custom Loop Extremo: 1 Bomba + 2 Radiadores + 7+ Fans", consumo: 60 },
    { nombre: "Custom Loop Ultra: Doble Bomba + Multi Radiador + 10+ Fans RGB", consumo: 85 }
  ]
};
