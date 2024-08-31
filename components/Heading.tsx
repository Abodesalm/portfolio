function Heading({ content, className = "" }) {
  const _class = "h1  ";
  return <p className={_class + className}>{content}</p>;
}

export default Heading;
