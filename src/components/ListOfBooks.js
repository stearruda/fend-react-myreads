import React from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import { Link } from 'react-router-dom'
import Bookshelf from './Bookshelf.js'

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

	changeShelf= (book, shelf) => {
		BooksAPI.update(book, shelf)

		BooksAPI.getAll().then((books) => {
			this.collectBooks(books)
		})
	}

	render() {
		if (this.state.currentlyReadingBooks.length === 0) {
			return (<div/>)
		}

		return (
			<div className='list-books'>
				<div className='list-books-title'>
					<h1>MyReads</h1>
				</div>
				<div className='list-books-content'>
					<div>
						<Bookshelf
							books={this.state.currentlyReadingBooks}
							shelfTitle='Currently Reading'
							shelfCode='currentlyReading'
							changeShelf={this.changeShelf}
						/>
						<Bookshelf
							books={this.state.wantToReadBooks}
							shelfTitle='Want to Read'
							shelfCode='wantToRead'
							changeShelf={this.changeShelf}
						/>
						<Bookshelf
							books={this.state.readBooks}
							shelfTitle='Read'
							shelfCode='read'
							changeShelf={this.changeShelf}
						/>
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