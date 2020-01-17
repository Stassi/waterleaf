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
  return withRemoved ? {
    data,
    removed
  } : data
}

export default spliceOne
