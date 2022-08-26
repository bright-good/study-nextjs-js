import Head from "next/head";
import { usePost } from "src/hooks/usePost";

export const Post = () => {
  const { post, user, error, isLoading } = usePost();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div>Created by {user.name}</div> : null}
    </div>
  );
};
