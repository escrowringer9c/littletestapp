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



    it('ignores features with missing DN when finding highest risk', () => {
        const malformedOutlook = {
            features: [
                {
                    properties: {
                        DN: 3,
                        LABEL: 'MRGL',
                        LABEL2: 'Marginal Risk',
                        fill: '#66A366',
                        stroke: '#005500',
                        VALID_ISO: '2026-06-19T20:00:00+00:00',
                        EXPIRE_ISO: '2026-06-20T12:00:00+00:00',
                        FORECASTER: 'Lyons',
                    }
                },
                {
                    properties: {
                        LABEL: 'TSTM',
                        LABEL2: 'General Thunderstorms Risk',
                        fill: '#C1E9C1',
                        stroke: '#55BB55',
                        VALID_ISO: '2026-06-19T20:00:00+00:00',
                        EXPIRE_ISO: '2026-06-20T12:00:00+00:00',
                        FORECASTER: 'Lyons',
                    }
                }
            ]
        }
        const result = parseOutlook(malformedOutlook)
        expect(result.highestRisk.label).toBe('MRGL')
    })
})