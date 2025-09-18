import FeaturedProduct from "./FeaturedProcuct";
import BookGrid from "./BookGrid";
import Link from "next/link";

export default async function FeaturedProductsSection() {

    // Wir rufen die Google Books API auf, um 3 Bücher für die Startseite zu erhalten
    const res = await fetch('https://www.googleapis.com/books/v1/volumes?q=book&maxResults=3');

    // Prüfe, ob die Anfrage erfolgreich war
    if (!res.ok) {
        // Wenn die Anfrage fehlschlägt, kannst du einen Fehler werfen oder eine Fallback-UI anzeigen
        return <div>Fehler beim Laden der Bücher.</div>;
    }

    const data = await res.json();
    const featuredBooks = data.items || []; // Stelle sicher, dass "items" existiert
    // console.log(featuredBooks)

    return (
        <section className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Featured Books</h1>
            <BookGrid books={featuredBooks}/>
            <Link href="/books" className="mt-8 text-xl inline-block text-blue-500 hover:underline">
                View All Books &rarr;            
            </Link> 
        </section>
    );
}