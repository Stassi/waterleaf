import { toString } from 'neida'
import solve from './solve'
import step from './step'

const machine = x => ({
  solve: () => toString(
    solve(x)
  ),
  step: () => step(x)
})

export default machine
