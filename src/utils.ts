export const generateRandomDarkColor = () => {
    const randomRed = Math.floor(Math.random() * 100) + 30;
    const randomGreen = Math.floor(Math.random() * 100) + 30;
    const randomBlue = Math.floor(Math.random() * 100) + 30;
    return rgbToHex(randomRed, randomGreen, randomBlue);
}

export const rgbToHex = (r: number, g: number, b: number) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export const componentToHex = (c: number) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
export const setRandomGradientBackground = () => {
    const [colorOne, colorTwo] = [generateRandomDarkColor(), generateRandomDarkColor()];
    document.body.style.background = `linear-gradient(90deg, ${colorOne} 0%, ${colorTwo} 100%)`;
};

export const mockArticleData = () => {
    return [
        {
            id: 1,
            title: "Case for rust",
            description: "Rust is one of the most famous programming languages. Because it offers, innovative system of memory management like borrow checker. It allows us to program without worrying about the memory related errors.",
            image: "",
            date: "2020-April-01",
            link: "https://www.google.com"
        },
        {
            id: 1,
            title: "Best ways for software engineering",
            description: "Rust is one of the most famous programming languages. Because it offers, innovative system of memory management like borrow checker. It allows us to program without worrying about the memory related errors.",
            image: "",
            date: "2020-April-01",
            link: "https://www.google.com"
        },

    ]
}
