import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSuggestion} = props
  const {suggestion} = suggestionDetails

  const addSuggestion = () => {
    updateSuggestion(suggestion)
  }

  return (
    <li className="suggestion-list">
      <div className="suggestion-item">
        <p className="suggestion">{suggestion}</p>
        <button className="button" type="button" onClick={addSuggestion}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
            alt="arrow"
            className="arrow"
          />
        </button>
      </div>
    </li>
  )
}

export default SuggestionItem
