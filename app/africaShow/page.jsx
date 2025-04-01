import Shows1 from "@/components/Shows1";

export const metadata = {
 title: "TheaTrum | AfricaShow",
    description: "Présentation des evenments de la journée d'Afrique",
  metadataBase: new URL("http://localhost:3000"),
 openGraph: {
  title: "TheaTrum | AfricaShow",
  description: "Présentation des evenments de la journée d'Afrique",
  images: ['./logo.webp'],
 },
};

export default function Page() {
 return (
  <>
   <Shows1/>
  </>
 );
}
