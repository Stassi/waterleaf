import conditional from './conditional'

const minimum = ({ lowest, value }) => conditional({
  ifFalse: () => lowest,
  ifTrue: () => value,
  predicate: () => lowest < value
})

export default minimum
