import { AnimatedText } from "@/components/AnimatedText";
import ArticleCard from "@/components/ArticleCard";
import { ArticleListCard } from "@/components/ArticleListCard";
import { Layout } from "@/components/Layout";
import Head from "next/head";
import { client } from "./api/sanity";
import { Post } from "./api/interface";
import { useEffect, useState } from "react";
import { urlFor } from "./api/sanityImageUrl";
import { SkeletonArticleCard } from "@/components/Skeletons/SkeletonArticleCard";
import { SkeletonArticleCardList } from "@/components/Skeletons/SkeletonArticleCardList";

async function getData() {
  const query = `*[_type == "post"]`;

  const data = await client.fetch(query);

  return data;
}

export default function Articles() {
  const [posts, setPosts] = useState<Post[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setPosts(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <>
      <Head>
        <title>Rastro Digital | Artigos</title>

        <meta name="Artigos" content="Lista de artigos" />
      </Head>

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout>
          <AnimatedText
            text="Mantenha-se informado"
            className="mb-16 xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
          />

          {loading ? (
            <ul className="grid grid-cols-2 gap-16 sm:grid-cols-1">
              <SkeletonArticleCard />
              <SkeletonArticleCard />
            </ul>
          ) : (
            <ul className="grid grid-cols-2 gap-16 sm:grid-cols-1">
              {posts &&
                posts
                  .slice(0, 2)
                  .map((post) => (
                    <ArticleCard
                      key={post._id}
                      title={post.title}
                      image={urlFor(post.content[1]).url()}
                      description={post.overview}
                      link={post.slug.current}
                      date={
                        new Date(post._createdAt).toLocaleDateString('pt-BR')
                      }
                    />
                  ))}
            </ul>
          )}

          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32 text-dark dark:text-light">
            Veja os nossos outros artigos
          </h2>

          {loading ? (
            <ul className="mb-20">
              {Array.from({ length: 6 }).map((_, index) => (
                <SkeletonArticleCardList key={index} />
              ))}
            </ul>
          ) : (
            <ul className="mb-20">
              {posts &&
                posts
                  .slice(2)
                  .map((post) => (
                    <ArticleListCard
                      key={post._id}
                      title={post.title}
                      image={urlFor(post.content[1]).url()}
                      link={post.slug.current}
                      date={
                        new Date(post._createdAt).toLocaleDateString('pt-BR')
                      }
                    />
                  ))}
            </ul>
          )}
        </Layout>
      </main>
    </>
  );
}
