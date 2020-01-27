import { not, until } from 'neida'
import step from './step'

const solve = x => until({
  initialValue: step(x),
  predicate: ({ state }) => not(state),
  transform: ({ step: nextStep }) => nextStep()
}).tape

export default solve
