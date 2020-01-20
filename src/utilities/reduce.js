const reduce = ({
  data,
  initialValue,
  reducer
}) => data.reduce(
  reducer,
  initialValue
)

export default reduce
