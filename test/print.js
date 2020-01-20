import { describe, it } from 'mocha'
import { expect } from 'chai'
import { machine } from '../src'
import printConfig from '../src/configurations/print'

describe('#print', () => {
  const message = { string: 'Hello' }

  describe('direction: left', () => {
    it('should print a message from right to left', () => {
      const res = machine({
        ...printConfig({
          ...message,
          reverse: true
        })
      })
      const res2 = res.step()
      const res3 = res2.step()
      const res4 = res3.step()
      const res5 = res4.step()

      expect(res5).to.deep.include({
        position: -1,
        state: false,
        tape: ['o', 'l', 'l', 'e', 'H']
      })
    })
  })

  describe('direction: right', () => {
    it('should print a message from left to right', () => {
      const res = machine({
        ...printConfig({
          ...message
        })
      })
      const res2 = res.step()
      const res3 = res2.step()
      const res4 = res3.step()
      const res5 = res4.step()

      expect(res5).to.deep.include({
        position: 5,
        state: false,
        tape: ['H', 'e', 'l', 'l', 'o']
      })
    })
  })
})
