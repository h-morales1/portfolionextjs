import Image from "next/image";
import { Inter } from "next/font/google";
import { getAllTileData } from "@/lib/posts";
import Link from "next/link";
import ProjectTile from "@/components/ProjectTile";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
  const allTilesData = getAllTileData();
  return {
    props: {
      allTilesData,
    },
  };
}

export default function Home({ allTilesData }) {
  return (
    <main className={`${inter.className}`}>
      <div className="flex items-center justify-center h-fit my-32 ">
        <Image className="" src="/main icon.svg" width={200} height={200} />
        <h1 className="ml-24">Herbert Morales</h1>
      </div>
      <div>
        <h1 className="ml-24">Projects</h1>
      </div>
      <div className="flex flex-row gap-10 h-fit ml-24">
        {allTilesData.map(({ id, title, summary }) => (
          <ProjectTile
            key={id}
            id={id}
            title={title}
            summary={summary}
          ></ProjectTile>
        ))}
      </div>
    </main>
  );
}
