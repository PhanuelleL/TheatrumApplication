import Contact from "@/components/Contact";

export const metadata = {
 title: "TheaTrum | Contact",
 description: "Contact du site",
 metadataBase: new URL("https://theatrum-application.vercel.app/"),
 openGraph: {
  title: "TheaTrum | Contact",
  description: "Contact du site",
  images: ["./logo.webp"],
 },
};

export default function Page() {
 return <Contact />;
}
