import Image from "next/image";

interface Props {
  subpath: string;
  name: string;
}

export const CarouselImage = ({ subpath, name }: Props) => {
  return (
    <Image
      src={`/../public/images/${subpath}/${name}`}
      alt={name}
      width={1200}
      height={400}
      className="img"
      priority
    />
  );
};
