import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuoteForm from "@/components/quote/QuoteForm";

const Quote = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-forge-orange to-forge-red">
          PC Gaming Sur Mesure<br></br><br></br>
        </h1>
        <Card className="glass-card w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Configurez votre projet</CardTitle>
          </CardHeader>
          <CardContent>
            <QuoteForm />
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
