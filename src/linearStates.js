import addOne from './utilities/addOne'
import cardinality from './utilities/cardinality'
import map from './utilities/map'
import negate from './utilities/negate'
import range from './utilities/range'
import sum from './utilities/sum'
import tail from './utilities/tail'
import toArray from './utilities/toArray'
import toObject from './utilities/toObject'
import withoutTail from './utilities/withoutTail'

const linearStates = ({ string, state = 0 }) => {
  const symbols = toArray(string)

  const pairs = map({
    data: range({
      maximum: sum(
        state,
        cardinality(symbols)
      ),
      minimum: state
    }),
    transform: index => [
      index,
      {
        instruction: () => symbols[
          sum(
            index,
            negate(state)
          )
        ],
        nextState: () => addOne(index)
      }
    ]
  })

  const [
    index,
    { instruction }
  ] = tail(pairs)

  return toObject([
    ...withoutTail(pairs),
    [
      index,
      { instruction }
    ]
  ])
}

export default linearStates
