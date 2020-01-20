import not from './utilities/not'
import until from './utilities/until'
import machine from './machine'

const solve = x => until({
  initialValue: machine(x),
  predicate: ({ state }) => not(state),
  transform: ({ step }) => step()
}).tape

export default solve
