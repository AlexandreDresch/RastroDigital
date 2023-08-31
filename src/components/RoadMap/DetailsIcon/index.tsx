export default function DetailsIcon() {

  return (
    <figure className="absolute left-0 stroke-light dark:stroke-dark">
      <svg width="75" height="75" viewBox="0 0 100 100" className="-rotate-90">
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-transparent dark:stroke-light"
        />
        <circle
          cx="75"
          cy="50"
          r="20"
          className="stroke-[3px] fill-light dark:fill-dark"
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className="stroke-1 fill-primary animate-pulse dark:fill-primaryDark"
        />
      </svg>
    </figure>
  );
}
