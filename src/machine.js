import cardinality from './utilities/cardinality'
import conditional from './utilities/conditional'
import createArray from './utilities/createArray'
import minimumZero from './utilities/minimumZero'
import negate from './utilities/negate'
import spliceOne from './utilities/spliceOne'
import sum from './utilities/sum'

const machine = ({
  states,
  position: positionInput = 0,
  state: stateInput,
  symbolDefault = 0,
  tape: tapeInput = [symbolDefault]
}) => {
  const prependCells = minimumZero(
    negate(positionInput)
  )
  const appendCells = sum(
    1,
    positionInput,
    negate(
      cardinality(tapeInput)
    )
  )

  const index = minimumZero(positionInput)
  const symbol = tapeInput[index]

  const {
    instruction,
    move,
    nextState: state
  } = states[stateInput]

  const position = sum(
    positionInput,
    prependCells,
    move(symbol)
  )

  const createCells = length => createArray({
    length,
    value: symbolDefault
  })

  const tape = spliceOne({
    data: [
      ...createCells(prependCells),
      ...tapeInput,
      ...createCells(appendCells)
    ],
    item: instruction(symbol),
    start: index
  })

  return {
    position,
    state,
    tape,
    step: () => conditional({
      ifFalse: () => {
        throw new Error('Halting due to empty state queue.')
      },
      ifTrue: () => machine({
        position,
        state,
        states,
        symbolDefault,
        tape
      }),
      predicate: () => state
    })
  }
}

export default machine
