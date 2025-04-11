function downloadContent(elementId) {
    const contentElement = document.getElementById(elementId);
    if (!contentElement || contentElement.textContent === "Click the button for inspiration!") {
        alert("Generate a quote/fact first!");
        return;
    }

    // ====== MISSING LINE ======
    const content = contentElement.textContent; // ADD THIS
    // ==========================

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
    const lines = wrapText(ctx, content, canvas.width - 40); // NOW USES "content"
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
