import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    colors: initialContainerBackgroundClassNames[0],
    commentsList: [{id: '', userName: '', comment: '', time: ''}],
    userName: '',
    comment: '',
  }

  addComment = event => {
    event.preventDefault()

    const {userName, comment} = this.state

    const randomColor = Math.ceil(
      Math.random() * initialContainerBackgroundClassNames.length - 1,
    )
    this.setState({colors: initialContainerBackgroundClassNames[randomColor]})

    const newComment = {
      id: uuidv4(),
      userName,
      comment,
      time: formatDistanceToNow(new Date()),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
    }))
  }

  render() {
    const {colors, userName, comment, commentsList} = this.state

    return (
      <div className="comments-app">
        <div className="cont">
          <form className="comments-input-container">
            <h1 className="comments-name-heading">Comments</h1>
            <p className="description">Say something about 4.0 Technologies</p>
            <input
              placeholder="Your Name"
              className="input-cont"
              type="text"
              onChange={this.userName}
              value={userName}
            />
            <textarea
              placeholder="Your Comment"
              className="text-area-cont"
              type="text"
              onChange={this.onComment}
              value={comment}
            />
            <button
              type="button"
              className="custom-btn"
              onClick={this.addComment}
            >
              Add Comment
            </button>
          </form>
          <img
            alt="comments"
            className="comments-image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <hr className="hr-line" />
        <div className="comments-count">
          <div className="count-cont">
            <p className="count">0</p>
          </div>
          <p className="comments-count-text">Comments</p>
        </div>
        <ul className="comments-list">
          {commentsList.map(each => (
            <CommentItem
              backgroundColorClassName={colors}
              key={each.id}
              cpmmentDetails={each}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
