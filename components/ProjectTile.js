export default function ProjectTile({ id, title }) {
  return (
    <div className="box-border h-fit w-64 p-4 border-2 border-black rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <h2 className="text-center">{title}</h2>
      <p>
        This is just a quick summary of an android project, which i worked on
        for almost a year
      </p>
    </div>
  );
}
