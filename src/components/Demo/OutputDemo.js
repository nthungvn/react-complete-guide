const OutputDemo = (props) => {
  console.log('OUTPUT_DEMO RUNNING...');
  return <p>{props.show && props.children}</p>;
};
export default OutputDemo;
