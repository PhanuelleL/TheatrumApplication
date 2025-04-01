import Contact from "@/components/Contact";

export const metadata = {
 title: "TheaTrum | Contact",
    description: "Contact du site",
  metadataBase: new URL("http://localhost:3000"),
 openGraph: {
  title: "TheaTrum | Contact",
  description: "Contact du site",
  images: ["./logo.webp"],
 },
};

export default function Page() {
 return <Contact />;
}
