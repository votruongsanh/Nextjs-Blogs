import fs from 'fs'
import path from 'path'

const bookDir = path.join(process.cwd(), 'books')

export const getBooks = () => {
  const bookFileNames = fs.readdirSync(bookDir)
  const bookData = bookFileNames.map(bookFileName => {
    const fullBookPath = path.join(bookDir, bookFileName)
    const bookContent = fs.readFileSync(fullBookPath, 'utf-8')
    return {
      bookName: bookFileName.replace(/\.txt$/, ''),
      bookContent
    }
  })
  return bookData
}
