import CarteAcceuil from "@/components/CarteAcceuil";
import docList from "@/public/json/doc.json";

export const metadata = {
 title: "TheaTrum | Livres",
 description: "Présentation des livres pour pieces",
 openGraph: {
  title: "TheaTrum | Livres",
  description: "Présentation des livres pour pieces",
  images: ["./react.webp"],
 },
};

export default function Page() {
 return (
  <>
   <div className="max-w-6xl mx-auto px- py-20">
    <h1 className="text-4xl font-bold text-center my-8">Liste des documents</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
     {docList.map((document) => (
      <CarteAcceuil key={document.id} doc={document} />
     ))}
    </div>
   </div>
  </>
 );
}
