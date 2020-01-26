import conditional from './conditional'

const spliceOne = ({
  data,
  item,
  start,
  withRemoved
}) => {
  const removed = data.splice(
    start,
    1,
    item
  )

  return conditional({
    ifFalse: () => data,
    ifTrue: () => ({
      data,
      removed
    }),
    predicate: () => withRemoved
  })
}

export default spliceOne
