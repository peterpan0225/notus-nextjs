import Link from "next/link";

type LinkProps = {
  url?: string
  title?: string
}

export default function IndexItem({url = "", title}: LinkProps) {
  return (
    <>
      <Link href={url} legacyBehavior>
        <a
          href="#pablo"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
        >
          {title}
        </a>
      </Link>
    </>
  );
}