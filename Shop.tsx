import { useState } from "react";
import tusconLeather from "@/assets/tuscon-leather.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const allProducts = [
  { id: 1, name: "Tuscon Leather", category: "Eau de Parfum", price: "$185", image: tusconLeather, badge: "Bestseller", notes: "Leather, Amber, Desert Sage", size: "100ml" },
  { id: 2, name: "Rose Elixir", category: "Eau de Parfum", price: "$165", image: product2, badge: null, notes: "Damascene Rose, Peony, Musk", size: "100ml" },
  { id: 3, name: "Amber Oud", category: "Extrait de Parfum", price: "$220", image: product3, badge: "New", notes: "Oud, Amber, Sandalwood", size: "50ml" },
  { id: 4, name: "Azure Coast", category: "Eau de Toilette", price: "$145", image: product4, badge: null, notes: "Sea Salt, Bergamot, Vetiver", size: "100ml" },
  { id: 5, name: "Midnight Velvet", category: "Eau de Parfum", price: "$195", image: tusconLeather, badge: null, notes: "Black Orchid, Vanilla, Tonka", size: "75ml" },
  { id: 6, name: "Golden Sands", category: "Extrait de Parfum", price: "$240", image: product3, badge: "Limited", notes: "Frankincense, Myrrh, Saffron", size: "50ml" },
];

const categories = ["All", "Eau de Parfum", "Eau de Toilette", "Extrait de Parfum"];

const Shop = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? allProducts : allProducts.filter((p) => p.category === filter);

  return (
    <main className="pt-24 min-h-screen">
      {/* Header */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">Collection</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-foreground">
            Our <span className="text-gradient-gold italic">Fragrances</span>
          </h1>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`font-body text-xs tracking-[0.2em] uppercase transition-colors pb-1 ${
                filter === cat
                  ? "text-primary border-b border-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-secondary mb-5 aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-gradient-gold text-primary-foreground font-body text-[10px] tracking-[0.2em] uppercase px-3 py-1">
                      {product.badge}
                    </span>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-foreground font-elegant text-sm">{product.notes}</p>
                    <p className="text-muted-foreground font-body text-xs mt-1">{product.size}</p>
                  </div>
                </div>
                <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">{product.name}</h3>
                <p className="text-muted-foreground text-xs font-body tracking-wider uppercase mt-1">{product.category}</p>
                <p className="text-primary font-body text-sm mt-2 font-medium">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Shop;
