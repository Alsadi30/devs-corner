import styles from "./TemplateThumbnail.module.css";
const TemplateThumb = ({ val, src, alt, selected }: any) => {
  return (
    <label>
      <input type="radio" name="test" value={val} style={styles} />
      <img src={src} alt={alt} width="150px" />
    </label>
  );
};
export default TemplateThumb;
