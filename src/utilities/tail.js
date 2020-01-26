import flatten from './flatten'
import negate from './negate'

const tail = x => flatten(
  x.slice(
    negate(1)
  )
)

export default tail
