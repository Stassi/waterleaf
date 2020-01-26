import negate from './negate'
import sum from './sum'

const subtractOne = x => sum(
  x,
  negate(1)
)

export default subtractOne
