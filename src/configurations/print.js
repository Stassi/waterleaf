import conditional from '../utilities/conditional'
import negate from '../utilities/negate'
import linearStates from './linearStates'

const print = ({
  reverse,
  string,
  state = 0
} = {}) => ({
  state,
  moveDefault: conditional({
    ifFalse: () => () => 1,
    ifTrue: () => () => negate(1),
    predicate: () => reverse
  }),
  states: linearStates({
    state,
    string
  })
})

export default print
