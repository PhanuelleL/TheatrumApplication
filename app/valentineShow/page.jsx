import Shows2 from "@/components/Shows2";

export const metadata = {
 title: "TheaTrum | ValentineShow",
 description: "Site web de présentation des différentes pièces de théâtre",
 metadataBase: new URL("https://theatrum-application.vercel.app/"),
 openGraph: {
  title: "TheaTrum | ValentineShow",
  description: "Présentation des evenment la date du 14 fevrier",
  images: ["./logo.webp"],
 },
};

export default function Page() {
 return (
  <>
   <Shows2 />
  </>
 );
}
