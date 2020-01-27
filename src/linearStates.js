import {
  addOne,
  cardinality,
  map,
  negate,
  range,
  sum,
  tail,
  toArray,
  toObject,
  withoutTail
} from 'neida'

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
