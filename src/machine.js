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
  const createCells = length => createArray({
    length,
    value: symbolDefault
  })

  const prependCellsCount = minimumZero(
    negate(positionInput)
  )
  const appendCellsCount = sum(
    1,
    positionInput,
    negate(
      cardinality(tapeInput)
    )
  )

  const extendedTape = [
    ...createCells(prependCellsCount),
    ...tapeInput,
    ...createCells(appendCellsCount)
  ]

  const index = minimumZero(positionInput)
  const symbol = extendedTape[index]

  const {
    instruction,
    move,
    nextState
  } = states[stateInput]

  const state = conditional({
    ifFalse: () => undefined,
    ifTrue: () => nextState(symbol),
    predicate: () => nextState
  })

  const position = sum(
    positionInput,
    prependCellsCount,
    move(symbol)
  )

  const tape = spliceOne({
    data: extendedTape,
    item: conditional({
      ifFalse: () => symbol,
      ifTrue: () => instruction(symbol),
      predicate: () => instruction
    }),
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
