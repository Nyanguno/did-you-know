function downloadContent(elementId) {
    const contentElement = document.getElementById(elementId);
    if (!contentElement || contentElement.textContent === "Click the button for inspiration!") {
        alert("Generate a quote/fact first!");
        return;
    }

    // This line was missing - it grabs the text content from the element
    const content = contentElement.textContent;
    
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    
    // Clear and redraw
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#1e1e1e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Styling
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    
    // Text wrapping
    const lines = wrapText(ctx, content, canvas.width - 40);
    const yPosition = (canvas.height - (lines.length * 24)) / 2;
    
    lines.forEach((line, index) => {
        ctx.fillText(line, canvas.width / 2, yPosition + (index * 24));
    });
    
    // Create download
    const image = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = image;
    a.download = `${elementId}_${Date.now()}.png`;
    a.click();
}

// This function appears to be missing from your scripts.js
// Adding it to handle text wrapping on the canvas
function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    const lines = [];
    let currentLine = '';

    for (let i = 0; i < words.length; i++) {
        const testLine = currentLine + words[i] + ' ';
        const metrics = ctx.measureText(testLine);
        const testWidth = metrics.width;
        
        if (testWidth > maxWidth && i > 0) {
            lines.push(currentLine.trim());
            currentLine = words[i] + ' ';
        } else {
            currentLine = testLine;
        }
    }
    
    lines.push(currentLine.trim());
    return lines;
}

// Function to generate content (this should also be in your scripts.js)
function generateContent(contentArray, elementId) {
    const randomIndex = Math.floor(Math.random() * contentArray.length);
    document.getElementById(elementId).textContent = contentArray[randomIndex];
}
