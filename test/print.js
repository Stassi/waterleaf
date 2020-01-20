import { describe, it } from 'mocha'
import { expect } from 'chai'
import { print, printReverse } from '../src'

describe('#print', () => {
  describe('direction: left', () => {
    const { solve, step } = printReverse('Hello')

    describe('solution', () => {
      it('should automatically print a message from right to left', () => {
        expect(solve()).to.equal('olleH')
      })
    })

    describe('steps', () => {
      it('should manually print a message from right to left', () => {
        const res = step()
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
  })

  describe('direction: right', () => {
    const { solve, step } = print('Hello')

    describe('solution', () => {
      it('should automatically print a message from left to right', () => {
        expect(solve()).to.equal('Hello')
      })
    })

    describe('steps', () => {
      it('should manually print a message from left to right', () => {
        const res = step()
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
})
