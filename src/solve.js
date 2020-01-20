import not from './utilities/not'
import until from './utilities/until'
import initialStep from './step'

const solve = x => until({
  initialValue: initialStep(x),
  predicate: ({ state }) => not(state),
  transform: ({ step }) => step()
}).tape

export default solve
