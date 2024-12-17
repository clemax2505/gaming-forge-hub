import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { PCConfig } from "@/components/prebuilt/types";
import PreBuiltPCCard from "@/components/prebuilt/PreBuiltPCCard";

const PreBuiltPCs = () => {
  const priceRanges: PCConfig[] = [
    { 
      id: "budget", 
      name: "Little Guy", 
      price: 1000, 
      description: "Ryzen 5 5600X & RX 6750 XT",
    },
    { 
      id: "mid1", 
      name: "Viper", 
      price: 1250, 
      description: "Ryzen 5 5600X & RTX 4060",
    },
    { 
      id: "mid2", 
      name: "AirFlow Prime", 
      price: 1500, 
      description: "Ryzen 7 5800X & RX 7700 XT",
    },
    { 
      id: "high1", 
      name: "The Spectral", 
      price: 1800, 
      description: "Intel I5 14600KF & RX 7800 XT",
    },
    { 
      id: "high2", 
      name: "Infinity", 
      price: 2350, 
      description: "Intel I5 14600KF & RTX 4070 super",
    },
    { 
      id: "extreme1", 
      name: "Tuffy", 
      price: 2500, 
      description: "Intel I7 14700KF & RTX 4070 ti super",
    },
    { 
      id: "extreme2", 
      name: "The Phantom", 
      price: 2850, 
      description: "Ryzen 7 7800X3D & RX 7900 XTX",
    },
    { 
      id: "extreme3", 
      name: "Chill Guy", 
      price: 3500, 
      description: "Intel I9 14900KF & RTX 4080 super",
    },
    { 
      id: "extreme4", 
      name: "The Overkill", 
      price: 4500, 
      description: "Ryzen 7 9800X3D & RTX 4080 super",
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="container mx-auto px-4 py-24 flex-grow">
          <h1 className="text-4xl font-bold text-center mb-12 py-2 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
            PC Gaming Pré-configurés
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
