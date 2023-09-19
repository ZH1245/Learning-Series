import { BiLoaderAlt } from "react-icons/bi";
function Loader() {
  return (
    <div className="flex items-center justify-center w-full h-[inherit]">
      <BiLoaderAlt size={28} className="text-primary animate-spin" />
    </div>
  );
}

export default Loader;
