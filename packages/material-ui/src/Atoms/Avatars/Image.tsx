type ImageProps = {
  Src: string; Txt?: string; Height?: string; Width?: string
};

const Image = ({ Src, Txt, Height, Width }: ImageProps) => {

  return <img src={Src} height='auto' width='100%' alt={Txt} />;

};

export default Image;
