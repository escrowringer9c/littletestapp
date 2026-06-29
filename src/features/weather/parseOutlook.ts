interface OutlookFeature {
    properties: {
        DN: number
        LABEL: string
        LABEL2: string
        fill: string
        stroke: string
        VALID_ISO: string
        EXPIRE_ISO: string
        FORECASTER: string
    }
}

interface OutlookCollection {
    features: OutlookFeature[]
}

interface ParsedOutlook {
    highestRisk: {
        label: string
        label2: string
        fill: string
        stroke: string
        validISO: string
        expireISO: string
        forecaster: string
    }
}

export function parseOutlook(data: OutlookCollection): ParsedOutlook {
    if (data.features.length === 0) {
        return {
            highestRisk: {
                label: 'NONE',
                label2: 'No Severe Weather',
                fill: '#ffffff',
                stroke: '#ffffff',
                validISO: '',
                expireISO: '',
                forecaster: '',
            }
        }
    }
    const sorted = [...data.features].sort(
        (a,b) => b.properties.DN - a.properties.DN
    )

    const highest = sorted[0]

    return {
        highestRisk: {
            label: highest.properties.LABEL,
            label2: highest.properties.LABEL2,
            fill: highest.properties.fill,
            stroke: highest.properties.stroke,
            validISO: highest.properties.VALID_ISO,
            expireISO: highest.properties.EXPIRE_ISO,
            forecaster: highest.properties.FORECASTER,
        }
    }
}