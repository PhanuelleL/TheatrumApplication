import Connexion from "@/components/Connexion";

export const metadata = {
 title: "TheaTrum | Connexion",
 description: "Connexion au site",
 metadataBase: new URL(
  "https://theatrum-application-r65pw3gga-phanuelle-lienous-projects.vercel.app"
 ),
 openGraph: {
  title: "TheaTrum | Contact",
  description: "Connexion au site",
  images: ["./logo.webp"],
 },
};

export default function Page() {
 return <Connexion />;
}
