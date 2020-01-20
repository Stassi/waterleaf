import configuration from '../configurations/print'
import machine from '../machine'

const printReverse = string => machine(
  configuration({
    string,
    reverse: true
  })
)

export default printReverse
