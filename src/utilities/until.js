import not from './not'

const until = ({
  initialValue,
  predicate,
  transform
}) => {
  let value = initialValue

  do {
    value = transform(value)
  } while (
    not(
      predicate(value)
    )
  )

  return value
}

export default until
