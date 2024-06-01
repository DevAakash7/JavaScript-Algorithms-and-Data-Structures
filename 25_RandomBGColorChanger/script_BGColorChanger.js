document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");
    const btn = document.querySelector("#btn");

    // Generate a random hexadecimal color code
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Calculate the brightness of a color
    function getBrightness(hex) {
        const r = parseInt(hex.slice(1, 3), 16);
        const g = parseInt(hex.slice(3, 5), 16);
        const b = parseInt(hex.slice(5, 7), 16);
        // Using the formula for perceived brightness
        return (r * 0.299 + g * 0.587 + b * 0.114);
    }

    // Update background color and display hex code
    function changeBackgroundColor() {
        const color = getRandomColor();
        bgHexCodeSpanElement.innerText = color;
        body.style.backgroundColor = color;

        // Adjust text color for readability
        const brightness = getBrightness(color);
        if (brightness > 186) { // 186 is a threshold for brightness
            body.style.color = "#000"; // black text for light background
        } else {
            body.style.color = "#fff"; // white text for dark background
        }
    }

    btn.addEventListener("click", changeBackgroundColor);
});