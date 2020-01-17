import { describe, it } from 'mocha'
import { expect } from 'chai'
import { machine } from '../src'

describe('#machine', () => {
  const options = {
    state: 's0',
    states: {
      s0: {
        instruction: () => 'β',
        move: () => 1,
        nextState: () => 's1'
      },
      s1: {
        instruction: () => 'α',
        move: () => 1,
        nextState: () => 's2'
      },
      s2: {
        instruction: () => 'β',
        move: () => 1,
        nextState: () => 's3'
      },
      s3: {
        instruction: () => 'α',
        move: () => 0
      }
    },
    symbolDefault: 'α',
    tape: ['α']
  }

  describe('position: -2', () => {
    const position = -2

    it('needs a name', () => {
      const res = machine({ position, ...options })
      const res2 = res.step()
      const res3 = res2.step()
      const res4 = res3.step()

      expect(res4).to.deep.include({
        position: 3,
        state: undefined,
        tape: ['β', 'α', 'β', 'α']
      })
    })
  })

  describe('position: 0', () => {
    const position = 0

    it('needs a name', () => {
      const res = machine({ position, ...options })
      const res2 = res.step()
      const res3 = res2.step()
      const res4 = res3.step()

      expect(res4).to.deep.include({
        position: 3,
        state: undefined,
        tape: ['β', 'α', 'β', 'α']
      })
    })
  })

  describe('position: 2', () => {
    const position = 2

    it('needs a name', () => {
      const res = machine({ position, ...options })
      const res2 = res.step()
      const res3 = res2.step()
      const res4 = res3.step()

      expect(res4).to.deep.include({
        position: 5,
        state: undefined,
        tape: ['α', 'α', 'β', 'α', 'β', 'α']
      })
    })
  })
})
