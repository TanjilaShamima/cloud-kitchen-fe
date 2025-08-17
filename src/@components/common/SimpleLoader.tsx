interface SimpleLoaderProps {
  width?: string;
  height?: string;
  border?: string;
}

const SimpleLoader = ({
  width = "64px",
  height = "64px",
  border = "8px",
}: SimpleLoaderProps) => {
  return (
    <div className="flex justify-center items-center h-full min-height-inherit">
      <div
        className={`loader ease-linear rounded-full border-blue-100`}
        style={{ width: width, height: height, borderWidth: border }}
      ></div>
    </div>
  );
};

export default SimpleLoader;
