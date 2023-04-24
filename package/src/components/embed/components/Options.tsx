type Props = {
  url: string;
  setShowOptions: React.Dispatch<React.SetStateAction<boolean>>;
};

const Options = ({ url, setShowOptions }: Props) => {
  const copyURLToClipboard = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
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

export default Options;
