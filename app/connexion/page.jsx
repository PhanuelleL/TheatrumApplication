import Connexion from "@/components/Connexion";

export const metadata = {
 title: "TheaTrum | Connexion",
 description: "Connexion au site",
 openGraph: {
  title: "TheaTrum | Contact",
  description: "Connexion au site",
  images: ["./react.webp"],
 },
};

export default function Page() {
 return (
   <Connexion />
 );
}
