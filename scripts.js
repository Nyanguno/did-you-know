function generateContent(array, elementId) {
    const randomIndex = Math.floor(Math.random() * array.length);
    document.getElementById(elementId).innerText = array[randomIndex];
}

function downloadContent(elementId) {
    const content = document.getElementById(elementId).innerText;
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    canvas.width = 600;
    canvas.height = 200;
    
    // Canvas styling
    ctx.fillStyle = "#1e1e1e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    
    // Wrap text
    const lines = wrapText(ctx, content, canvas.width - 40);
    const yPosition = (canvas.height - (lines.length * 24)) / 2;
    
    lines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, yPosition + (index * 24));
    });
    
    // Download
    const image = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = image;
    a.download = `${elementId}.png`;
    a.click();
}

// Text wrapping helper
function wrapText(context, text, maxWidth) {
    const words = text.split(" ");
    const lines = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
        const testLine = currentLine + " " + words[i];
        const metrics = context.measureText(testLine);
        if (metrics.width < maxWidth) {
            currentLine = testLine;
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    lines.push(currentLine);
    return lines;
}