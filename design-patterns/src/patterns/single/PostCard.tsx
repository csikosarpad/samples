import Card from "@components/ui/Card";
import Post "@types/entities/Post";

interface PostCardProps {
    post: Post
}

const PostCard = ({ post }: PostCardProps) => {
    return (
        <Card>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
        </Card>
    )
}

export default PostCard;
