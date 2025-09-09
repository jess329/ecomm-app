import FeaturedProduct from "./FeaturedProcuct";

export default function FeaturedProductsSection() {
    return (
        <section>
            <h1 className="text-3xl font-bold mb-6">Featured Products</h1>
            <div>
                <FeaturedProduct/>
                <FeaturedProduct/>
                <FeaturedProduct/>
            </div>
        </section>
    );
}