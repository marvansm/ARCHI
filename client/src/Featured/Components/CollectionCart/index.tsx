import { Button } from "@mui/material";
import type { CollectionCart } from "../../../Types/global";

const CollectionCart = ({ image, title, btnVariant }: CollectionCart) => {
  return (
    <div className=" relative ">
      <img
        src={image}
        alt=""
        className="w-full h-[426px] object-cover  rounded-2xl"
      />
      <div className="absolute top-10 left-10 max-w-[176px]">
        <h2 className="text-[36px] tracking-[-1px] font-semibold leading-[110%] mb-[20px] text-white">
          {title}
        </h2>
        <Button variant={btnVariant}>Shop Now</Button>
      </div>
    </div>
  );
};

export default CollectionCart;
