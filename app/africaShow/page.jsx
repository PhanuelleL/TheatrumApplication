import Shows1 from "@/components/Shows1";

export const metadata = {
 title: "TheaTrum | AfricaShow",
 description: "Présentation des evenments de la journée d'Afrique",
 openGraph: {
  title: "TheaTrum | AfricaShow",
  description: "Présentation des evenments de la journée d'Afrique",
  images: ["./react.webp"],
 },
};

export default function Page() {
 return (
  <>
   <Shows1/>
  </>
 );
}
