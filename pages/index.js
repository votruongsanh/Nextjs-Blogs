import Link from "next/link"

export default function Home() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">My Next app</h1>
      <p className="lead">This is my Next.JS App</p>
      <hr className="my-4" />
      <p className="lead">
        <Link href='/posts' passHref>
          <a className="btn btn-primary btn-lg" href="#" role="button">Posts</a>
        </Link>
      </p>
    </div>
  )
}
