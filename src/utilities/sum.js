import reduce from './reduce'

const sum = (...args) => reduce({
  data: args,
  initialValue: 0,
  reducer: (accumulator, value) => accumulator + value
})

export default sum
