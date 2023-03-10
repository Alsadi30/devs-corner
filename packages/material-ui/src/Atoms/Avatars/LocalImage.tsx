type ImageProps = {
  Src: string;
  Txt?: string;
  Height?: string;
  Width?: string;
};

const LocalImage = ({ Src, Txt, Height, Width }: ImageProps) => {
  return <img src={Src} height={Height} width={Width} alt={Txt} />;
};

export default LocalImage;
