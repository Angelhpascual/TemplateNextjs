import { addition } from './addition'
import { expect } from '@jest/globals'

describe('addition dummy test', () => {
  it('adds two numbers', () => {
    expect(addition(1, 2)).toBe(3)
  })
})
