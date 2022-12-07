import sume from './addition'
import { expect } from '@jest/globals'

describe('addition dummy test', () => {
  it('adds two numbers', () => {
    expect(sume(1, 2)).toBe(3)
  })
})
