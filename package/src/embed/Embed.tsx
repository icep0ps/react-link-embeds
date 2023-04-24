import { useState } from "react";
import { Link } from "react-router-dom";
import Options from "./components/Options";

type Props = {
  url?: string;
  isDisable: boolean;
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>;
};

const Embed = ({ url }: Props) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <Link
        to="https://www.kindpng.com/imgv/iTTmxRm_white-globe-clip-art-at-clker-online-icon/"
        className="m-3 flex"
        target="_blank"
      >
        <div className="h-20 w-20 rounded-l-lg bg-white bg-contain p-2 invert">
          <img
            src="https://cdn.pixabay.com/photo/2016/09/20/03/22/earth-1681722_1280.png"
            alt=""
          />
        </div>
        <div className="flex w-1/5 justify-between rounded-r-lg bg-zinc-900 p-3 text-white">
          <div>
            <h1>title</h1>
            <p>site name</p>
          </div>

          <div className="z-10 text-white">
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowOptions((state) => !state);
              }}
            >
              ...
            </button>
            {showOptions && (
              <Options url="https://www.kindpng.com/imgv/iTTmxRm_white-globe-clip-art-at-clker-online-icon/" />
            )}
          </div>
        </div>
      </Link>
    </>
  );
};

export default Embed;
