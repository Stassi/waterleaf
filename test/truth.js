import { describe, it } from 'mocha'
import { expect } from 'chai'
import { truth } from '../src'

describe('#truth', () => {
  it('is truth', () => {
    expect(truth()).to.equal(true)
  })
})
