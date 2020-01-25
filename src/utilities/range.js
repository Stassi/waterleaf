import negate from './negate'
import strictlyEquals from './strictlyEquals'
import sum from './sum'
import tail from './tail'
import until from './until'

const range = ({
  maximum,
  minimum = 0
}) => until({
  initialValue: [minimum],
  transform: x => [
    ...x,
    sum(
      tail(x),
      1
    )
  ],
  predicate: x => strictlyEquals(
    tail(x),
    sum(
      maximum,
      negate(1)
    )
  )
})

export default range
