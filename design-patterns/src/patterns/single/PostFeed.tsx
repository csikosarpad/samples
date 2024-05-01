import { Post } from '@types/entities/Post';
import PostCard from './PostCard';

interface PostFeedProps {
  posts: Post[];
}

const PostFeed = ({ posts }: PostFeedProps) => {
  return (
    <div>
      {posts.map((post) => {
        <PostCard key={post.id} post={post} />;
      })}
    </div>
  );
};

export default PostFeed;
