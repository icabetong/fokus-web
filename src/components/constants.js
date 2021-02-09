
const Colors = {
    primary50: "#e3f2ff",
    primary100: "#bcdeff",
    primary200: "#90cbff",
    primary300: "#63b6fe",
    primary400: "#41a6ff",
    primary500: "#2197fe",
    primary600: "#2289ef",
    primary700: "#2076dc",
    primary800: "#1e65ca",
    primary900: "#1a46aa",

    textOnPrimary: "white",

    shadow: "#69888888",
}

const Spaces = {
    tiny: "0.25em", 
    small: "0.5em",
    medium: "1em",
    large: "2.5em"
}

const Size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

const Device = {
    mobileS: `(min-width: ${Size.mobileS})`,
    mobileM: `(min-width: ${Size.mobileM})`,
    mobileL: `(min-width: ${Size.mobileL})`,
    tablet: `(min-width: ${Size.tablet})`,
    laptop: `(min-width: ${Size.laptop})`,
    laptopL: `(min-width: ${Size.laptopL})`,
    desktop: `(min-width: ${Size.desktop})`
}

export { Colors, Spaces, Size, Device };