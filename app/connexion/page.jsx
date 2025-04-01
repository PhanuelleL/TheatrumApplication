import Connexion from "@/components/Connexion";

export const metadata = {
 title: "TheaTrum | Connexion",
  description: "Connexion au site",
  metadataBase: new URL("http://localhost:3000"),
 openGraph: {
  title: "TheaTrum | Contact",
  description: "Connexion au site",
  images: ["./logo.webp"],
 },
};

export default function Page() {
 return (
   <Connexion />
 );
}
