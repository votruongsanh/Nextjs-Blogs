import React from 'react'
import { Card, Button, Spinner } from 'react-bootstrap'
import { getPostById, getPostIds } from '../../lib/post'
import Link from 'next/link'
import { useRouter } from 'next/router'
import spinnerStyles from '../../styles/Spinner.module.css'

const Post = ({ post }) => {
  const router = useRouter()
  //neu trang chua tao ra, isFallback cua router === true
  //va trang tam thoi sau day se duoc render
  if (router.isFallback) {
    return (
      <div className={spinnerStyles.center}>
        <Spinner animation='border' role='status' variant='dark' className={spinnerStyles.spinnerLg}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  //khi getStaticProps() chay xong lan dau tien
  //cac lan sau thi trang tiep theo se duoc dua vao danh sach prerender
  return (
    <>
      <Card className="mt-3 shadow p-2">
        <Card.Body>
          <Card.Title>{post.id} --- {post.title}</Card.Title>
          <Card.Text>{post.body}</Card.Text>
          <Link href={`/posts`} passHref>
            <Button variant='dark'> go Back </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  )
}

//lay du lieu tinh, nhung ma du lieu tinh nao thi con phu thuoc vao path params
export const getStaticPaths = async () => {
  const paths = await getPostIds(5)
  console.log(paths);
  return {
    paths,
    //fallback: false //bat ki path nao k returned boi getStaticPaths se toi trang 404
    fallback: true //path nao k returned ngay lap tuc se show trang "tam thoi"
    //=> doi getStaticProps chay => getStaticProps chay xong => return trang hoan chinh
  }
}
export const getStaticProps = async ({ params }) => {
  const post = await getPostById(params.id)
  return {
    props: {
      post
    },
    revalidate: 1
  }
}

export default Post