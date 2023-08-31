import { Layout } from "@/components/Layout";
import { Post } from "@/pages/api/interface";
import { client } from "@/pages/api/sanity";
import PortableText from "react-portable-text";
import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { urlFor } from "../api/sanityImageUrl";

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
      current
    }
  }`;

  const posts = await client.fetch(query);

  const paths = posts.map((post: Post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == "${params?.slug}"][0]`;

  const post = await client.fetch(query);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

interface Props {
  post: Post;
}

export default function SlugPage({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.overview} />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout>
          <header className="pt-6 xl:pb-6">
            <div className="space-y-1 text-center">
              <div className="space-y-10">
                <div>
                  <p className="text-base font-medium leading-6 text-primary dark:text-primaryDark">
                    {new Date(post._createdAt).toLocaleDateString('pt-BR')}
                  </p>
                </div>
              </div>

              <div>
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                  {post.title}
                </h1>
              </div>
            </div>
          </header>
          <div className="divide-y divide-gray-200 pb-7 dark:divide-gray-700 xl:divide-y-0">
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg mx-80 lg:mx-0 2xl:mx-52">
                <div className="w-full flex justify-center">
                  <Image
                    src={urlFor(post.content[1]).url()}
                    alt="post image"
                    className="rounded-lg mb-10 w-full h-72 object-cover"
                    width={1920}
                    height={1280}
                    priority
                  />
                </div>
                <PortableText
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  content={post.content}
                  serializers={{
                    h4: (props: any) => (
                      <h4 className="text-xl font-bold my-5" {...props} />
                    ),
                    li: ({ children }: any) => (
                      <li className="ml-4 list-disc">{children}</li>
                    ),
                    image: () => <></>,
                  }}
                />
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
