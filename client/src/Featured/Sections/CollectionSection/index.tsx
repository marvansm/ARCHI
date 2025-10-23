import CollectionCart from "../../Components/CollectionCart";


const CollectionSection = () => {
  return (
    <section className="bg-[#f9fafb] py-[120px]">
      <div className="container mx-auto max-w-[1336px] px-[60px] py-[32px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <CollectionCart
            image={
              "https://cdn.prod.website-files.com/68519fc02007af8091e4b3e4/6851a096b22c4776772803a8_mens-category.webp"
            }
            title={"Men’s Collection"}
            btnVariant={"dark"}
          />
          <CollectionCart
            image={
              "https://cdn.prod.website-files.com/68519fc02007af8091e4b3e4/6851a096b22c4776772803af_women-category.webp"
            }
            title={"Women’s Collection"}
            btnVariant={"light"}
          />
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
