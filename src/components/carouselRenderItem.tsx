import {
  PaginationItemType,
  PaginationItemRenderProps,
} from "@nextui-org/react";
import { BiSkipNext } from "react-icons/bi";
import { BiSkipPrevious } from "react-icons/bi";

export default function carouselRenderItem({
  ref,
  key,
  value,
  isActive,
  onNext,
  onPrevious,
  setPage,
}: PaginationItemRenderProps) {
  if (value === PaginationItemType.NEXT) {
    return (
      <button
        key={key}
        onClick={onNext}
        className="border-1 rounded-full ml-16 p-1"
      >
        <BiSkipNext className=" text-white text-xl" />
      </button>
    );
  }
  if (value === PaginationItemType.PREV) {
    return (
      <button
        key={key}
        onClick={onPrevious}
        className="border-1 rounded-full mr-16 p-1"
      >
        <BiSkipPrevious className="text-white text-xl" />
      </button>
    );
  }
  const classValue = isActive
    ? "bg-transparent border-white border-1 rounded-full p-1"
    : "bg-white rounded-full p-1";
  if (typeof value === "number") {
    return (
      <button
        className={classValue}
        onClick={() => setPage(value)}
        key={key}
        ref={ref}
      ></button>
    );
  }
}
