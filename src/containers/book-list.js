import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    onClick={() => this.props.selectBook(book)}
                    key={book.title} 
                    className="list-group-item">
                        {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // whatever returned will show up as props inside of BookList
    return {
        books: state.books
    }
}

// Anything returned from this function will end up as props on the Booklist container
function mapDispatchToProps(dispatch) {
    // whatever is returned will show up as props inside of booklist
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote Booklist form a component to a container - it need to know about this new dispatch method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Booklist);