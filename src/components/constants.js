const font = {
    header: 'Work Sans',
    body: 'Source Sans Pro'
}

const color = {
    primary50: '#e3f2ff',
    primary100: '#bcdeff',
    primary200: '#90cbff',
    primary300: '#63b6fe',
    primary400: '#41a6ff',
    primary500: '#2197fe',
    primary600: '#2289ef',
    primary700: '#2076dc',
    primary800: '#1e65ca',
    primary900: '#1a46aa',

    textOnPrimary: 'white',

    shadow: '#69888888',
}

const dimen = {
    tiny: '0.25em', 
    small: '0.5em',
    medium: '1em',
    large: '2.5em'
}

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`
}

export { font, color, dimen, size, device };