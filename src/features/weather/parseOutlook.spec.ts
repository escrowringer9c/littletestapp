import { describe, it, expect } from "vitest"
import { parseOutlook } from './parseOutlook'
import fixture from './__fixtures__/day1otlk_cat.json'

describe('parseOutlook', () => {
    it('returns the highest risk level present in the outlook', () => {
        const result = parseOutlook(fixture)
        expect(result.highestRisk.label).toBe('SLGT')
        expect(result.highestRisk.label2).toBe('Slight Risk')
    })

    it('returns a default "no severe weather" result when features array is empty', () => {
        const emptyOutlook = { features: [] }
        const result = parseOutlook(emptyOutlook)
        expect(result.highestRisk.label).toBe('NONE')
        expect(result.highestRisk.label2).toBe('No Severe Weather')
    })
})