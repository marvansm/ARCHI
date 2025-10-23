import { useQuery } from "@tanstack/react-query";
import HeadingText from "../../Components/Common/HeadingText";
import keys from "../../../Constants/queryKeys";
import ApiServices from "../../../Services/api";
import ProductCard from "../../Components/ProductCart";
import { Button } from "@mui/material";

const TopSaleSection = () => {
  const api = new ApiServices("http://localhost:1337/api/");
  const { data } = useQuery({
    queryKey: [keys.products],
    queryFn: () => api.getData("products?populate=*"),
  });
  console.log(data);
  return (
    <section className="max-w-[1300px] mx-auto px-6 py-10 ">
      <div className="mt-20">
        <HeadingText
          title={"Top sale on this week"}
          desc={"Featured Collections"}
        />
      </div>
      <div className="flex items-center justify-center flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {data?.data.map((item: any) => (
            <ProductCard
              key={item?.id}
              title={item?.name}
              price={item?.price}
              discount={item?.discount}
              image={`http://localhost:1337${item?.image[0]?.url}`}
            />
          ))}
        </div>
        <div className="py-[62px]">
          <Button variant="viewAll">View All</Button>
        </div>
      </div>
    </section>
  );
};

export default TopSaleSection;
