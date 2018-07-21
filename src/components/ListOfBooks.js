import React from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class ListOfBooks extends React.Component {
	state = {

		currentlyReadingBooks: [],

		wantToReadBooks: [],

		readBooks: []
	}

	collectBooks(books) {
		const currentlyReadingBooksTmp = []
		const wantToReadBooksTmp = []
		const readBooksTmp = []
		for (let i = 0; i < books.length; i++) {
			const book = books[i]
			const shelf = book.shelf
			if (shelf === 'currentlyReading') {
				currentlyReadingBooksTmp.push(book)
			} else if (shelf === 'wantToRead') {
				wantToReadBooksTmp.push(book)
			} else if (shelf === 'read') {
				readBooksTmp.push(book)
			}
		}
		this.setState({
			currentlyReadingBooks: currentlyReadingBooksTmp,
			wantToReadBooks: wantToReadBooksTmp,
			readBooks: readBooksTmp
		})
	}

	componentDidMount() {
		BooksAPI.getAll().then((books) => {
			this.collectBooks(books)
		})
	}

	render() {
		if (this.state.currentlyReadingBooks.length === 0) {
			return (<div/>)
		}

		const currentlyReadingShelfDivs = this.state.currentlyReadingBooks.map(
			(book) => (
				<Book key={book.title} book={book} />
			)
		)

		const wantToReadShelfDivs = this.state.wantToReadBooks.map((book) => (
			<Book key={book.title} book={book} />
		))

		const readShelfDivs = this.state.readBooks.map((book) => (
			<Book key={book.title} book={book} />
		))

		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<div className='list-books-content'>
					<div>
						<div className='bookshelf'>
							<h2 className='bookshelf-title'>Currently Reading</h2>
							<div className='bookshelf-books'>
								<ol className='books-grid'>
									{currentlyReadingShelfDivs}
								</ol>
							</div>
						</div>
						<div className='bookshelf'>
							<h2 className='bookshelf-title'>Want to Read</h2>
							<div className='bookshelf-books'>
								<ol className='books-grid'>
									{wantToReadShelfDivs}
								</ol>
							</div>
						</div>
						<div className='bookshelf'>
							<h2 className='bookshelf-title'>Read</h2>
							<div className='bookshelf-books'>
								<ol className='books-grid'>
									{readShelfDivs}
								</ol>
							</div>
						</div>
					</div>
				</div>
				<div className='open-search'>
					<Link
						to='/search'
					>Add a book</Link>
				</div>
			</div>
		)
	}
}

export default ListOfBooks