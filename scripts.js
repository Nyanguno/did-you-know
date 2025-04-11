// Generalized functions
function generateContent(array, elementId) {
    if (!array || !array.length) {
        console.error('Content array is empty or undefined');
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * array.length);
    const element = document.getElementById(elementId);
    
    if (element) {
        element.textContent = array[randomIndex];
    } else {
        console.error(`Element with ID ${elementId} not found`);
    }
}

function downloadContent(elementId) {
    const contentElement = document.getElementById(elementId);
    if (!contentElement) {
        console.error(`Element with ID ${elementId} not found`);
        return;
    }

    const content = contentElement.textContent;
    const canvas = document.getElementById("canvas");
    if (!canvas) {
        console.error('Canvas element not found');
        return;
    }

    const ctx = canvas.getContext("2d");
    canvas.width = 600;
    canvas.height = 200;
    
    // Reset canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Styling
    ctx.fillStyle = "#1e1e1e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
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

// Helper function (no changes needed)
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
