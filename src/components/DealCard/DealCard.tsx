import { SDeal } from "@/schema/Deal.schema";
import Image from "next/image";

interface DealCardProps {
  deal: SDeal;
}

/** position이 static하지 않은 요소 기준으로 그린다.*/
function DealCard({ deal }: DealCardProps) {
  const { title, imgURL, price, location, likesCount } = deal;
  return (
    <div>
      <div className="relative aspect-square">
        <Image src={imgURL} alt={title} fill className="object-contain" />
      </div>
      <h6>{title}</h6>
      <div>{price}</div>
      <div>{location}</div>
      <div>{likesCount}</div>
    </div>
  );
}

export default DealCard;
