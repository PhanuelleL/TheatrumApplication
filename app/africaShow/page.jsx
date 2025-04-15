import Shows1 from "@/components/Shows1";

export const metadata = {
 title: "TheaTrum | AfricaShow",
 description: "Présentation des evenments de la journée d'Afrique",
 metadataBase: new URL(
  "https://theatrum-application-r65pw3gga-phanuelle-lienous-projects.vercel.app"
 ),
 openGraph: {
  title: "TheaTrum | AfricaShow",
  description: "Présentation des evenments de la journée d'Afrique",
  images: ["./logo.webp"],
 },
};

export default function Page() {
 return (
  <>
   <Shows1/>
  </>
 );
}
