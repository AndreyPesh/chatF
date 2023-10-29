export const getIconStyles = ({
  isActive,
  imageBg,
  activeImageBg,
}: {
  isActive: boolean;
  imageBg: string;
  activeImageBg: string;
}) => {
  const base_styles = `inline-flex w-[52px] h-[52px] rounded-full ${imageBg} bg-no-repeat bg-center hover:bg-grayish`;
  return isActive ? base_styles + ` ${activeImageBg} bg-grayish shadow-lg` : base_styles;
};
