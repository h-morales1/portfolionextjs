//import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
//import styles from "../../styles/t.module.css";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <div className="my-5 bg-white">
      <div className="my-10">{postData.id}</div>
      <br />
      <div
        className="bg-white text-gray-700 pt-24 max-w-5xl mx-auto"
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      ></div>
    </div>
  );
}
