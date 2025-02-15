import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { PCConfig } from "@/components/prebuilt/types";
import PreBuiltPCCard from "@/components/prebuilt/PreBuiltPCCard";

export const priceRanges: PCConfig[] = [
  { 
    id: "thebeginning", 
    name: "The Beginning", 
    price: 829.96, 
    description: "Ryzen 5 5600 & RX 6650 XT",
  },
  { 
    id: "littleguy", 
    name: "Little Guy", 
    price: 1041.35, 
    description: "Ryzen 5 5600 & RX 6750 XT",
  },
  { 
    id: "viper", 
    name: "Viper", 
    price: 1233.89, 
    description: "Ryzen 5 5700X & RTX 4060",
  },
  { 
    id: "airflowprime", 
    name: "Airflow Prime", 
    price: 1442.18, 
    description: "Ryzen 7 5800X & RX 7700 XT",
  },
  { 
    id: "thehellbound", 
    name: "The HellBound", 
    price: 1978.89, 
    description: "Intel i5-14600KF & RX 7800 XT",
  },
  { 
    id: "infinity", 
    name: "Infinity", 
    price: 2460.64, 
    description: "Intel i5-14600KF & RTX 4070 Super",
  },
  { 
    id: "tuffy", 
    name: "Tuffy", 
    price: 2660.98, 
    description: "Intel i7-14700KF & RTX 4070 Ti Super",
  },
  { 
    id: "thetaichi", 
    name: "The Taichi", 
    price: 2938.45, 
    description: "Ryzen 7 7800X3D & RX 7900 XTX",
  },
  { 
    id: "chillguy", 
    name: "Chill Guy", 
    price: 3349.96, 
    description: "Intel i9-14900KF & RTX 4080 Super",
  },
  { 
    id: "themaster", 
    name: "The Master", 
    price: 3688.08, 
    description: "Ryzen 7 9800X3D & RX 7900 XTX",
  },
  { 
    id: "theoverkill", 
    name: "The Overkill", 
    price: 4499.44, 
    description: "Ryzen 7 9800X3D & RTX 4080 Super",
  }
];

const PreBuiltPCs = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-12 py-2 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            PC Gaming préconfigurés
          </h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Découvrez nos configurations optimisées pour chaque budget
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {priceRanges.map((config) => (
              <PreBuiltPCCard key={config.id} config={config} />
            ))}
          </div>
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PreBuiltPCs;
