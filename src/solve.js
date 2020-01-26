import not from './utilities/not'
import until from './utilities/until'
import step from './step'

const solve = x => until({
  initialValue: step(x),
  predicate: ({ state }) => not(state),
  transform: ({ step: nextStep }) => nextStep()
}).tape

export default solve
