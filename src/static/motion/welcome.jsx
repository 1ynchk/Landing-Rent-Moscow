
export const photosVars = {
    initial: {
        opacity: 0,
        y: 30
    },
    visible: custom => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: custom * 0.1,
        },
    }),
}

export const inscriptionsVars = {
    initial: {
        opacity: 0,
    },
    visible: custom => ({
        opacity: 1,
        transition: {
            delay: 0.15 * custom
        }
    })
}

export const ScaleVars = {
    initial: {
        scale: 0
    },
    visible: {
        scale: 1,
        transition: {
            delay: 1.25
        }
    },
    
}

export const ScaleBG = {
    initial: {
        opacity: 0
    },
    visible: custom => ({
        opacity: 1,
        transition: {
            delay: custom * 0.3
        }
    })
}

export const widthUL = {
    initial: {
        opacity: 0,
        width: 0
    },
    visible: {
        opacity: 1,
        width: '100%',
        transition: {
            delay: 0.3
        }
    }
}