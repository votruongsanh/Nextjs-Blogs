import { Card } from "react-bootstrap"
import { getPosts } from "../../lib/post"
import Link from "next/link"

const Posts = ({ posts }) => {

  return (
    <>
      {posts.map(post => (
        <Card key={post.id} className="my-2 shadow p-2">
          <Card.Body>
            <Card.Title>{post.id} --- {post.title}</Card.Title>
          </Card.Body>
          <Card.Text>{post.body}</Card.Text>
          <Link href={`/posts/${post.id}`} passHref>
            <Card.Link>See more</Card.Link>
          </Link>
        </Card>
      ))}
    </>
  )
}

//get static data from backend /db /api
// lay du lieu tinh 
export const getStaticProps = async () => {
  const posts = await getPosts(10)
  return {
    props: {
      posts
    }
  }
}

export default Posts