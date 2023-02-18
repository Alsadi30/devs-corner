const Image = (Src: string, Txt: string, Height: number, Width: number) => {
  return <img src={Src} height={Height} width={Width} alt={Txt} />;
};

export default Image;
