import { PCConfigDetailed } from "../types";

export const tuffy: PCConfigDetailed = {
  id: "tuffy",
  name: "Tuffy",
  price: 2660.98,
  description: "i7-14700KF & RTX 4070 Ti super",
  components: [
    "CPU : Intel Core i7-14700KF",
    "Refroidissement : ASUS TUF LC II 360 ARGB",
    "Carte mère : Gigabyte Z790 AORUS Pro X WiFi 7",
    "RAM : 32 Go DDR5 6000 MHz Lexar THOR RGB",
    "Stockage : WD_black SN770 2 To (NVMe)",
    "GPU : RTX 4070 Ti super TUF GAMING OC",
    "Boitier : NZXT H7 Flow 2024",
    "PSU : ASUS TUF Gaming 1000G",
    "Ventilation : Configurations ventilée uniquement avec des TF120"
  ],
  images: {
    cpu: "/pc-parts/cpu/i7-14700KF.png",
    gpu: "/pc-parts/gpu/4070 TI SUPER TUF GAMING OC.png"
  },
  gamePerformance: {
    fortnite: {
      fhd: { FPS_moyen: "250-270" },
      "2k": { FPS_moyen: "200-220" },
      "4k": { FPS_moyen: "140-160" }
    },
    warzone: {
      fhd: { FPS_moyen: "160-180" },
      "2k": { FPS_moyen: "140-160" },
      "4k": { FPS_moyen: "100-120" }
    },
    minecraft: {
      fhd: { FPS_moyen: "450+" },
      "2k": { FPS_moyen: "400+" },
      "4k": { FPS_moyen: "350+" }
    },
    valorant: {
      fhd: { FPS_moyen: "400+" },
      "2k": { FPS_moyen: "350+" },
      "4k": { FPS_moyen: "250+" }
    },
    gta: {
      fhd: { FPS_moyen: "180-200" },
      "2k": { FPS_moyen: "150-170" },
      "4k": { FPS_moyen: "110-130" }
    }
  }
};
