import FeaturedProduct from "./FeaturedProcuct";
import Link from "next/link";

export default function FeaturedProductsSection() {
    return (
        <section className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">Featured Books</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <FeaturedProduct/>
                <FeaturedProduct/>
                <FeaturedProduct/>
            </div>
            <Link href="/books" className="mt-8 text-xl inline-block text-blue-500 hover:underline">
                View All Books &rarr;            
            </Link> 
        </section>
    );
}