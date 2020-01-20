import cardinality from '../utilities/cardinality'
import conditional from '../utilities/conditional'
import lessThan from '../utilities/lessThan'
import reduce from '../utilities/reduce'
import sum from '../utilities/sum'
import toArray from '../utilities/toArray'

const linearStates = ({ string, state = 0 }) => {
  const symbols = toArray(string)

  const { states } = reduce({
    data: symbols,
    initialValue: {
      count: state,
      states: {}
    },
    reducer: (
      {
        states,
        count: prevCount
      },
      symbol
    ) => {
      const count = sum(prevCount, 1)

      return {
        count,
        states: {
          ...states,
          [prevCount]: {
            instruction: () => symbol,
            ...conditional({
              ifFalse: () => null,
              ifTrue: () => ({
                nextState: () => count
              }),
              predicate: () => lessThan({
                highest: sum(
                  state,
                  cardinality(symbols)
                ),
                value: count
              })
            })
          }
        }
      }
    }
  })

  return states
}

export default linearStates
