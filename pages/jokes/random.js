import { Button, Card } from "react-bootstrap"
import { getRandomJokes } from "../../lib/jokes"
import Link from "next/link"

const JokesRandom = ({ jokes }) => {
  return (
    <>
      <Card className="my-3 shadow">
        <Card.Body>
          <Card.Title>Here is your random joke for today</Card.Title>
          <Card.Text>{jokes.value}</Card.Text>
          <Link href="/" passHref>
            <Button variant='dark'>go Back</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}

// du lieu phu thuoc vao moi request, nhung ma van tao ra html tinh cho front-end, nen van tot cho SEO
export const getServerSideProps = async () => {
  const jokes = await getRandomJokes()
  // jokes = false
  if (!jokes) {
    return {
      notFound: true //404 page
    }
    // return {
    //   redirect: {
    //     destination: '/posts',
    //     permanent: false
    //   }
    // }
  }

  return {
    props: { jokes }
  }
}

export default JokesRandom