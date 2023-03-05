import { serverUrl } from "../../../../client/src/utils/serverUrl";

type ImageProps = {
  Src: string; Txt?: string; Height?: string; Width?: string
};

const Image = ({ Src, Txt, Height, Width }: ImageProps) => {

  return <img src={`${serverUrl}/uploads/${Src}`} height={Height} width={Width} alt={Txt} />;

};

export default Image;
