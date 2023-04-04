// Write your code here

import './index.css'

const CommentItem = props => {
  const {backgroundColorClassName, cpmmentDetails} = props

  const {userName, comment, time} = cpmmentDetails

  const picWord = userName.slice(0, 1)

  return (
    <li className="list-item">
      <div className="container">
        <div className={backgroundColorClassName}>
          <p className="pic-name">{picWord}</p>
        </div>
        <p className="commenter-name">{userName}</p>
        <p className="commented-time">{time}</p>
      </div>
      <p className="comment-text">{comment}</p>
      <div className="like-and-delete-button-container">
        <button type="button" className="btn">
          <img
            alt="like"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            className="like-img"
          />
          Like
        </button>
        <button type="button" className="btn">
          <img
            className="delete-img"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
