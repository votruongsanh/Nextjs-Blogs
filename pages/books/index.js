import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Link from 'next/link'
import { getBooks } from '../../lib/book'

const Books = ({ books }) => {
  return (
    <>
      {
        books.map(book => (
          <Card className="mb-3 shadow p-2" key={book.bookName}>
            <Card.Body>
              <Card.Title>{book.bookName}</Card.Title>
              <Card.Text>{book.bookContent}</Card.Text>
              <Link href={`/`} passHref>
                <Button variant='dark'> go Back </Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      }

    </>
  )
}

export const getStaticProps = async () => {
  const books = await getBooks()
  return {
    props: {
      books
    }
  }
}

export default Books