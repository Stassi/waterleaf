import add from './add'
import negate from './negate'

const subtractOne = x => add(
  x,
  negate(1)
)

export default subtractOne
