import configuration from '../configurations/print'
import machine from '../machine'

const print = string => machine(
  configuration({ string })
)

export default print
