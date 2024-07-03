import { draftMode } from "next/headers";
import { Pump } from "basehub/react-pump";
import DraftHeader from "./components/draft-header";
import Intro from "./components/intro";
import HeroPost from "./components/hero-post";
import MoreStories from "./components/more-stories";
import { allPostsQuery } from "@/lib/queries";

export default async function Page() {
  return (
    <Pump
      next={{ revalidate: 60 }}
      draft={draftMode().isEnabled}
      queries={[allPostsQuery()]}
    >
      {async ([{ blog }]) => {
        "use server";
        const a=Math.floor(Math.random()*(blog.posts.items.length));

        const heroPost = blog.posts.items[a];
        const morePosts = blog.posts.items.slice(0,a).concat(blog.posts.items.slice(a+1));

        return (
          <main>
            <DraftHeader draft={draftMode().isEnabled} />
            <section className="container mx-auto px-5">
              <Intro />
              {heroPost && (
                <HeroPost
                  title={heroPost._title}
                  coverImage={heroPost.coverImage}
                  date={heroPost.date}
                  author={heroPost.author}
                  slug={heroPost._slug}
                  excerpt={heroPost.excerpt}
                />
              )}
              <MoreStories morePosts={morePosts} />
              <div>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/0gLr-pBIPhI?si=BnHfKDFl8hrxbyyo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  ></iframe>
              </div>
            </section>
          </main>
        );
      }}
    </Pump>
  );
}
