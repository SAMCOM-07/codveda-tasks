import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";

const Products = () => {
  const items = ["Product 1", "Product 2", "Product 3", "Product 4"];

  return (
    <section className="max-w-6xl mx-auto py-20">
      <ScrollReveal>
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Products
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item) => (
          <ScrollReveal key={item}>
            <ProductCard title={item} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default Products;