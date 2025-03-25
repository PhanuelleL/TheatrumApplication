import Shows2 from "@/components/Shows2";

export const metadata = {
 title: "TheaTrum | ValentineShow",
 description: "Site web de présentation des différentes pièces de théâtre",
 openGraph: {
  title: "TheaTrum | ValentineShow",
  description: "Présentation des evenment la date du 14 fevrier",
  images: ["./react.webp"],
 },
};

export default function Page() {
 return (
  <>
   <Shows2/>
  </>
 );
}
