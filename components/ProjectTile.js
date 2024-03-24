import Link from "next/link";
export default function ProjectTile({ id, title, summary }) {
  return (
    <div className="box-border h-fit w-64 p-4 border-2 border-black rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <div className="text-center">
        <Link
          className="text-2xl font-semibold text-gray-700 my-5"
          href={`/posts/${id}`}
        >
          {title}
        </Link>
      </div>
      <p className="my-5 text-center">{summary}</p>
    </div>
  );
}
