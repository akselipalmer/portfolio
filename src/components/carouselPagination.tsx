import { Pagination } from "@nextui-org/react";
import CarouselRenderItem from "./carouselRenderItem";

type CarouselPaginationType = {
  handleChange: (newVal: number) => void;
};

export default function CarouselPagination({
  handleChange,
}: CarouselPaginationType): JSX.Element {
  return (
    <Pagination
      initialPage={1}
      variant="light"
      total={3}
      color="default"
      className="absolute top-3/4 left-2/3 -translate-x-1/3 z-30 "
      showControls
      disableCursorAnimation
      onChange={handleChange}
      renderItem={CarouselRenderItem}
    />
  );
}
