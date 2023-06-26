import React, { use } from "react";
import { getAllPosts } from "@/lib/api";
import Post from "./Post";

function Main() {
  const allPosts = use(
    getAllPosts([
      "title",
      "date",
      "slug",
      "author",
      "coverImage",
      "excerpt",
      "content",
    ])
  );

  return (
    <main>
      <div>
        {allPosts
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
          .map(
            ({
              title,
              postType,
              imageSrc,
              imageAlt,
              imageWidth,
              imageHeight,
              content,
            }) => (
              <Post
                key={title}
                title={title}
                content={content}
                postType={postType}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                imageWidth={parseInt(imageWidth) || 200}
                imageHeight={parseInt(imageHeight) || 200}
              />
            )
          )}
      </div>
    </main>
  );
}

export default Main;
