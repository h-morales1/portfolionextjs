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
      <div className="flex items-center justify-center h-screen ">
        <Image className="" src="/main icon.svg" width={200} height={200} />
        <h1 className="ml-24">Herbert Morales</h1>
      </div>
      <div>
        <h1 className="ml-24">Projects</h1>
      </div>
      <div className="h-fit ml-24">
        <ProjectTile title={"Android Java Inventory App"}></ProjectTile>
      </div>
      <div>
        <ul>
          {allTilesData.map(({ id, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              {id}
              <br />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
