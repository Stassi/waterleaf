import addOne from './addOne'
import strictlyEquals from './strictlyEquals'
import subtractOne from './subtractOne'
import tail from './tail'
import until from './until'

const range = ({
  maximum,
  minimum = 0
}) => until({
  initialValue: [minimum],
  predicate: x => strictlyEquals(
    subtractOne(maximum),
    tail(x)
  ),
  transform: x => [
    ...x,
    addOne(
      tail(x)
    )
  ]
})

export default range
