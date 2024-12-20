import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PCConfig } from "./types";
import { Link } from "react-router-dom";

interface PreBuiltPCCardProps {
  config: PCConfig;
}

const PreBuiltPCCard = ({ config }: PreBuiltPCCardProps) => {
  return (
    <Link to={`/prebuilt/${config.id}`} className="block">
      <Card className="glass-card hover:scale-105 transition-transform duration-300 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl text-center">{config.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <span className="text-3xl font-bold text-forge-orange">{config.price}€</span>
          </div>
          <p className="text-gray-400 text-center">{config.description}</p>
          <div className="flex flex-col gap-2">
            <Button className="w-full bg-forge-orange hover:bg-forge-red transition-colors">
              Voir les composants
            </Button>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PreBuiltPCCard;