import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { openEmailClient } from "@/utils/emailUtils";
import PCComponentsList from "./PCComponentsList";

const configComponents: { [key: string]: string[] } = {
  "budget1": [
    "AMD Ryzen 5 5600",
    "Stock AMD ventirad",
    "Gigabyte B550 GAMING X V2",
    "16 Go DDR4 3200 MHz Lexar THOR ",
    "WD_black SN770 1 To (NVMe)",
    "RX 6650 XT Speedster",
    "MSI MAG 100R",
    "MSI A650BN",
  ],
    "budget2": [
    "AMD Ryzen 5 5600",
    "Be Quiet Pure Rock 2",
    "MSI B550-A PRO",
    "16 Go DDR4 3200 MHz Kingston Fury Beast",
    "WD_black SN770 1 To (NVMe)",
    "RX 6750 XT Speedster",
    "MSI MAG A120 Airflow",
    "MSI A650BN",
  ],
  "mid1": [
    "AMD Ryzen 5 5600",
    "MSI 360R V2",
    "ASUS ROG B550-F Gaming WiFi II",
    "16 Go DDR4 3200 MHz Patriot Viper Steel",
    "WD_black SN770 2 To (NVMe)",
    "RTX 4060 Eagle 3X",
    "Corsair 3000D Airflow",
    "ASUS Prime AP-750G",
  ],
  "mid2": [
    "AMD Ryzen 7 5800X",
    "MSI 360R V2",
    "ASUS ROG B550-F Gaming WiFi II",
    "32 Go DDR4 3600 MHz Lexar Ares RGB",
    "WD_black SN770 2 To (NVMe)",
    "RX 7700 XT Gigabyte Gaming OC",
    "Corsair 4000D Airflow",
    "ASUS Prime AP-750G",
  ],
  "high1": [
    "Intel Core i5-14600KF",
    "Corsair H150i Elite Capellix XT White",
    "ASUS Prime Z790-P WiFi",
    "32 Go DDR5 6000 MHz G.Skill Ripjaws M5 RGB",
    "WD_black SN770 2 To (NVMe)",
    "RX 7800 XT PowerColor HellBound Spectral",
    "Corsair 3000D RGB Airflow White",
    "ASUS Prime AP-750G",
    "Configurations ventilée uniquement avec des RX120 LINK",
  ],
  "high2": [
    "Intel Core i5-14600KF",
    "MSI 360R V2",
    "MSI MPG Z790 Edge Max WiFi",
    "32 Go DDR5 6000 MHz Lexar THOR RGB",
    "WD_black SN770 2 To (NVMe)",
    "RTX 4070 Super Twin Edge Zotac",
    "Lian Li O11 Dynamic Mini",
    "Corsair RM1000X",
    "Configurations ventilée uniquement avec des SL-120 Infinity",
  ],
  "extreme1": [
    "Intel Core i7-14700KF",
    "ASUS TUF LC II 360 ARGB",
    "Gigabyte Z790 AORUS Pro X WiFi 7",
    "32 Go DDR5 6000 MHz Lexar THOR RGB",
    "WD_black SN770 2 To (NVMe)",
    "RTX 4070 Ti Super PNY Epic-X-RGB",
    "Corsair 3000D Airflow",
    "ASUS TUF Gaming 1000G",
    "Configurations ventilée uniquement avec des TF120",
  ],
  "extreme2": [
    "AMD Ryzen 7 7800X3D",
    "ASUS ROG LC III 360 ARGB",
    "MSI MPG X670E Gaming Plus WiFi",
    "32 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "KingStone KC3000 2 To + KC3000 1 To (NVMe)",
    "RX 7900 XTX ASRock Taichi white",
    "Corsair 5000D RGB Airflow",
    "Corsair RM1000X",
    "Configurations ventilée uniquement avec des RX120 LINK",
  ],
  "extreme3": [
    "Intel Core i9-14900KF",
    "Corsair iCUE Link TITAN 360 RGB",
    "Gigabyte Z790 AORUS Master X",
    "64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "KingStone KC3000 2 To + KC3000 1 To (NVMe)",
    "RTX 4080 Super PNY Epic-X-RGB",
    "Antec C8",
    "Corsair RM1000X",
    "Configurations ventilée uniquement avec des RX120 LINK",
  ],
  "extreme4": [
    "AMD Ryzen 7 9800X3D",
    "ARCTIC Liquid Freezer III 360 A-RGB",
    "Gigabyte X870E AORUS MASTER",
    "64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "Kingston KC3000 2 To x2 (NVMe)",
    "ASRock Taichi OC Radeon RX 7900 XTX",
    "Corsair iCUE LINK 6500X RGB",
    "Corsair RM1200x SHIFT",
    "Configurations ventilée uniquement avec des RX120 LINK",
  ],
  "extreme5": [
    "AMD Ryzen 7 9800X3D",
    "Corsair iCUE Link TITAN 360 RGB",
    "ASUS ROG Crosshair X870E Hero",
    "64 Go DDR5 6000 MHz G.Skill Trident Z5 Neo RGB",
    "Samsung 990 Pro 4 To (NVMe)",
    "RTX 4080 Super MSI Gaming X Slim",
    "Corsair 5000T RGB",
    "Be Quiet! Straight Power 12 1200W",
    "Configurations ventilée uniquement avec des RX120 LINK",
  ]
};

const PCConfigDetails = () => {
  const { configId } = useParams();
  const components = configComponents[configId || ""] || [];

  const handleEmailRequest = () => {
    const emailBody = `
Nouvelle demande de configuration PC

Configuration demandée : ${configId}

Liste des composants :
${components.join('\n')}
    `;

    openEmailClient("Nouvelle demande de configuration PC", emailBody);
  };

  return (
    <div className="space-y-8">
      <PCComponentsList components={components} />
      <div className="flex justify-center">
        <Button 
          variant="outline" 
          size="lg"
          onClick={handleEmailRequest}
        >
          Passer commande
        </Button>
      </div>
    </div>
  );
};

export default PCConfigDetails;
