import { describe, it } from 'mocha'
import { expect } from 'chai'
import { machine, solve } from '../src'
import printConfig from '../src/configurations/print'

describe('#print', () => {
  const message = { string: 'Hello' }

  describe('direction: left', () => {
    const options = {
      ...printConfig({
        ...message,
        reverse: true
      })
    }

    describe('automated solution', () => {
      it('should automatically print a message from right to left', () => {
        expect(
          solve(options)
        ).to.deep.equal(
          ['o', 'l', 'l', 'e', 'H']
        )
      })
    })

    describe('discrete steps', () => {
      it('should manually print a message from right to left', () => {
        const res = machine(options)
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
    const options = {
      ...printConfig({
        ...message
      })
    }

    describe('automated solution', () => {
      it('should automatically print a message from left to right', () => {
        expect(
          solve(options)
        ).to.deep.equal(
          ['H', 'e', 'l', 'l', 'o']
        )
      })
    })

    describe('discrete steps', () => {
      it('should manually print a message from left to right', () => {
        const res = machine(options)
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
