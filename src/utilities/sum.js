import add from './add'
import reduce from './reduce'

const sum = (...args) => reduce({
  data: args,
  initialValue: 0,
  reducer: add
})

export default sum
