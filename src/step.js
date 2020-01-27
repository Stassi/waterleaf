import {
  addOne,
  cardinality,
  conditional,
  createArray,
  identity,
  minimum,
  negate,
  spliceOne,
  sum
} from 'neida'

const minimumZero = value => minimum({ value, lowest: 0 })

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
  const appendCellsCount = addOne(
    sum(
      positionInput,
      negate(
        cardinality(tapeInput)
      )
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
    index,
    data: extendedTape,
    item: conditional({
      ifFalse: () => instructionDefault(symbol),
      ifTrue: () => instruction(symbol),
      predicate: () => instruction
    })
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
