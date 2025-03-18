import Acceuil from "@/components/Acceuil";
export const metadata = {
 title: "TheaTrum | Accueil",
 description: "Site web de présentation des différentes pièces de théâtre",
 openGraph: {
  title: "TheaTrum | Accueil",
  description: "Site web de présentation des différentes pièces de théâtre",
  images: ["./react.webp"],
 },
};

export default function Home() {
    return (
        <main className='flex-1'>
            <Acceuil />
        </main>
    );
}
