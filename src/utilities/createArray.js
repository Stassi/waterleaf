const createArray = ({ length, value }) => Array.from(
  { length },
  () => value
)

export default createArray
