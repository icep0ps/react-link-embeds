type Props = {
  url: string;
};

const Options = ({ url }: Props) => {
  return (
    <span>
      <ul>
        <li>Remove link </li>
        <li
          onClick={(e) => {
            e.preventDefault();
            console.log(url);
            navigator.clipboard.writeText(url.url);
          }}
        >
          Copy URL{' '}
        </li>
      </ul>
    </span>
  );
};

export default Options;
