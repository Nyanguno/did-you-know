// Tab functionality
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding content
        tab.classList.add('active');
        document.getElementById(`${tab.dataset.tab}-tab`).classList.add('active');
    });
});

// Banana Height Calculator
const bananaHeight = 7.5; // Average banana length in inches
const calculateBtn = document.getElementById('calculate-bananas');
const heightInput = document.getElementById('height');
const unitSelect = document.getElementById('unit');
const bananaResult = document.getElementById('banana-result');
const bananaText = document.getElementById('banana-text');
const bananaVisual = document.getElementById('banana-visual');
const shareBanana = document.getElementById('share-banana');

calculateBtn.addEventListener('click', () => {
    const height = parseFloat(heightInput.value);
    
    // Validate input
    if (isNaN(height) || height <= 0) {
        alert('Please enter a valid height!');
        return;
    }
    
    // Convert to inches if necessary
    let heightInInches = height;
    if (unitSelect.value === 'cm') {
        heightInInches = height / 2.54;
    }
    
    // Calculate bananas
    const bananas = heightInInches / bananaHeight;
    const roundedBananas = Math.round(bananas * 10) / 10;
    
    // Display result
    bananaText.textContent = `You are approximately ${roundedBananas} bananas tall!`;
    
    // Create visual representation
    const wholeBananas = Math.floor(bananas);
    let visualText = '';
    for (let i = 0; i < wholeBananas; i++) {
        visualText += '🍌';
        // Add line break every 8 bananas for better display
        if ((i + 1) % 8 === 0) {
            visualText += '<br>';
        }
    }
    
    // Add partial banana if needed
    const fraction = bananas - wholeBananas;
    if (fraction >= 0.25 && fraction < 0.75) {
        visualText += '🍌💔';
    } else if (fraction >= 0.75) {
        visualText += '🍌';
    }
    
    bananaVisual.innerHTML = visualText;
    bananaResult.style.display = 'block';
});

// Share banana result
shareBanana.addEventListener('click', () => {
    const text = `I'm ${bananaText.textContent} Check your banana height at funfactgenerator.site`;
    
    // Try to use the Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: 'My Banana Height',
            text: text
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(text)
            .then(() => alert('Result copied to clipboard! Now you can paste it to share.'))
            .catch(err => console.error('Could not copy text: ', err));
    }
});

// Flamingo Name Generator
const flamingoPrefixes = [
    "Fabulous", "Feathery", "Fluorescent", "Flamboyant", "Fancy", 
    "Fuchsia", "Fluttering", "Frilly", "Fluffy", "Flashy", 
    "Fanciful", "Fantastic", "Florid", "Festive", "Floral",
    "Frolicking", "Frisky", "Flirty", "Fiery", "Flaunting",
    "Freewheeling", "Funky", "Fruity", "Fizzy", "Floating"
];

const flamingoSuffixes = {
    "January": "Plume",
    "February": "Feathers",
    "March": "Wader",
    "April": "Dancer",
    "May": "Strutter",
    "June": "Glider",
    "July": "Sparkle",
    "August": "Shimmer",
    "September": "Twirler",
    "October": "Splash",
    "November": "Flourish",
    "December": "Dazzle"
};

const generateFlamingoBtn = document.getElementById('generate-flamingo');
const firstNameInput = document.getElementById('first-name');
const birthMonthSelect = document.getElementById('birth-month');
const flamingoResult = document.getElementById('flamingo-result');
const flamingoText = document.getElementById('flamingo-text');
const shareFlamingo = document.getElementById('share-flamingo');

generateFlamingoBtn.addEventListener('click', () => {
    const firstName = firstNameInput.value.trim();
    const birthMonth = birthMonthSelect.value;
    
    // Validate input
    if (!firstName || !birthMonth) {
        alert('Please enter your name and select your birth month!');
        return;
    }
    
    // Get first letter of name
    const firstLetter = firstName.charAt(0).toUpperCase();
    
    // Find prefix starting with same letter if possible
    let prefix = flamingoPrefixes.find(p => p.charAt(0) === firstLetter);
    
    // If no matching prefix, choose random one
    if (!prefix) {
        const randomIndex = Math.floor(Math.random() * flamingoPrefixes.length);
        prefix = flamingoPrefixes[randomIndex];
    }
    
    // Get suffix based on birth month
    const suffix = flamingoSuffixes[birthMonth];
    
    // Create flamingo name
    const flamingoName = `${prefix} ${suffix}`;
    
    // Display result
    flamingoText.textContent = flamingoName;
    flamingoResult.style.display = 'block';
});

// Share flamingo name
shareFlamingo.addEventListener('click', () => {
    const text = `My flamingo name is ${flamingoText.textContent}! Find yours at funfactgenerator.site`;
    
    // Try to use the Web Share API if available
    if (navigator.share) {
        navigator.share({
            title: 'My Flamingo Name',
            text: text
        })
        .catch(error => console.log('Error sharing:', error));
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(text)
            .then(() => alert('Name copied to clipboard! Now you can paste it to share.'))
            .catch(err => console.error('Could not copy text: ', err));
    }
});
