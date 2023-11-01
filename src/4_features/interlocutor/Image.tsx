import { FC } from "react";

interface ImageProps {
  imageUrl: string;
}

const Image: FC<ImageProps> = ({imageUrl}) => {
  return <div className="w-[100px] h-[100px] flex rounded-3xl overflow-hidden">
    <img src={imageUrl} alt={imageUrl} className="w-[100px] h-[100px] object-center" />
  </div>;
};

export default Image;
