import { describe, it } from 'mocha'
import { expect } from 'chai'
import { truth } from '../src'

describe('#truth', () => {
  it("isn't truth", () => {
    expect(truth()).to.not.equal(true)
  })
})