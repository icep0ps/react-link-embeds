import React, { useState } from 'react';

interface LinkEmbedProps {
  url: string;
}

const LinkEmbed = (props: LinkEmbedProps) => {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      <a
        href="https://www.kindpng.com/imgv/iTTmxRm_white-globe-clip-art-at-clker-online-icon/"
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

          <div className="relative z-10 text-white">
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowOptions((state) => !state);
              }}
            >
              ...
            </button>
            {showOptions && (
              <Options
                url="https://www.kindpng.com/imgv/iTTmxRm_white-globe-clip-art-at-clker-online-icon/"
                setShowOptions={setShowOptions}
              />
            )}
          </div>
        </div>
      </a>
    </>
  );
};

interface OptionsProps {
  url: string;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
}

const Options = ({ url, setShowOptions }: OptionsProps) => {
  const copyURLToClipboard = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    e.preventDefault();
    navigator.clipboard.writeText(url);
    setShowOptions(false);
  };

  return (
    <span className="absolute left-0 top-8 min-w-fit rounded-lg bg-zinc-900 p-2 px-3 text-sm">
      <ul className="whitespace-nowrap">
        <li>Remove link </li>
        <li onClick={copyURLToClipboard}>Copy URL</li>
      </ul>
    </span>
  );
};

export default LinkEmbed;
