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
      <div className="flex flex-col items-center justify-center md:flex-row h-fit my-32 ">
        <Image
          className="h-max w-max"
          src="/main icon.svg"
          width={200}
          height={200}
        />
        <h1 className="md:ml-24">Herbert Morales</h1>
      </div>
      <div className="flex flex-col items-center">
        <div>
          <h1 className="md:ml-24">Projects</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-10 h-fit md:ml-24">
          {allTilesData.map(({ id, title, summary }) => (
            <ProjectTile
              key={id}
              id={id}
              title={title}
              summary={summary}
            ></ProjectTile>
          ))}
        </div>
      </div>
    </main>
  );
}
