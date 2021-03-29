import CommentList from './CommentList'
import AddComment from './AddComment'

const CommentArea = (props) => {
  console.log(props)

  return (
    <div className="mx-5">
    <CommentList bookComments={props.bookDetails}/>
    <AddComment asin={props.bookDetails.asin}/>
    </div>
  )
}

export default CommentArea