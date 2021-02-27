import { FaTimes } from 'react-icons/fa'

function Feedback({feedback, setFeedback}) {
  return (
    <div className="feedback">
      <p>{feedback}</p>
      <FaTimes onClick={() => setFeedback(null)}/>
    </div>
  );
}

export default Feedback