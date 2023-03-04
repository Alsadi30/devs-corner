
type LogoProps = { Src: string; Txt: string; Size: number };
const Logo = ({ Src, Txt, Size }: LogoProps) => {
  return <img style={{ marginRight: "10px" }} src={Src} alt={Txt} width={Size} height={Size} />;
};
export default Logo;
