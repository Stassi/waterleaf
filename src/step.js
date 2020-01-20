import cardinality from './utilities/cardinality'
import conditional from './utilities/conditional'
import createArray from './utilities/createArray'
import identity from './utilities/identity'
import minimumZero from './utilities/minimumZero'
import negate from './utilities/negate'
import spliceOne from './utilities/spliceOne'
import sum from './utilities/sum'

const step = ({
  states,
  instructionDefault = identity,
  moveDefault = () => 0,
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

  const position = sum(
    positionInput,
    prependCellsCount,
    conditional({
      ifFalse: () => moveDefault(symbol),
      ifTrue: () => move(symbol),
      predicate: () => move
    })
  )

  const state = conditional({
    ifFalse: () => false,
    ifTrue: () => nextState(symbol),
    predicate: () => nextState
  })

  const tape = spliceOne({
    data: extendedTape,
    item: conditional({
      ifFalse: () => instructionDefault(symbol),
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
      ifTrue: () => step({
        instructionDefault,
        moveDefault,
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

export default step