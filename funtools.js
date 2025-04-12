// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
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
    
    if (calculateBtn) {
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
    }
    
    // Share banana result
    if (shareBanana) {
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
    }
    
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
    
    if (generateFlamingoBtn) {
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
    }
    
    // Share flamingo name
    if (shareFlamingo) {
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
    }
    
    // Fortune Cookie Generator
    const fortunes = [
        "An unexpected opportunity will knock on your door this month.",
        "Your creativity will lead you to amazing places.",
        "The fortune you seek is in another cookie.",
        "A dubious friend may be an enemy in camouflage.",
        "You will receive a surprising message from someone in your past.",
        "Your sense of humor will be appreciated by more people than you imagine.",
        "Embrace the glorious mess that you are.",
        "Someone is looking up to you. Don't let them down.",
        "Your mind is creative, original and alert.",
        "A lifetime of happiness awaits you if you can find the joke in everything.",
        "You will stumble upon a curious fact that changes your perspective.",
        "Adventure awaits; take the first step when the time feels right.",
        "Do not fear what you don't know, embrace the chance to learn.",
        "The greatest risk is not taking one.",
        "A small act of kindness will return to you tenfold.",
        "You will find a precious object you thought was lost forever.",
        "Your path may wander, but your heart always knows the way home.",
        "The next full moon brings an unexpected revelation.",
        "A book you read soon will change your worldview.",
        "The best way to predict your future is to create it."
    ];
    
    const generateFortuneBtn = document.getElementById('generate-fortune');
    const fortuneResult = document.getElementById('fortune-result');
    const fortuneText = document.getElementById('fortune-text');
    const shareFortune = document.getElementById('share-fortune');
    
    if (generateFortuneBtn) {
        generateFortuneBtn.addEventListener('click', () => {
            // Get random fortune
            const randomIndex = Math.floor(Math.random() * fortunes.length);
            const fortune = fortunes[randomIndex];
            
            // Display result
            fortuneText.textContent = fortune;
            fortuneResult.style.display = 'block';
        });
    }
    
    // Share fortune
    if (shareFortune) {
        shareFortune.addEventListener('click', () => {
            const text = `My fortune cookie says: "${fortuneText.textContent}" Get your fortune at funfactgenerator.site`;
            
            // Try to use the Web Share API if available
            if (navigator.share) {
                navigator.share({
                    title: 'My Fortune Cookie',
                    text: text
                })
                .catch(error => console.log('Error sharing:', error));
            } else {
                // Fallback - copy to clipboard
                navigator.clipboard.writeText(text)
                    .then(() => alert('Fortune copied to clipboard! Now you can paste it to share.'))
                    .catch(err => console.error('Could not copy text: ', err));
            }
        });
    }
    
    // Nonsense Word Generator
    const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'qu', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', 'ch', 'sh', 'th', 'ph', 'wh', 'br', 'cr', 'dr', 'fr', 'gr', 'pr', 'tr', 'bl', 'cl', 'fl', 'gl', 'pl', 'sl', 'sc', 'sk', 'sm', 'sn', 'sp', 'st', 'sw', 'tw'];
    const vowels = ['a', 'e', 'i', 'o', 'u', 'ae', 'ai', 'ao', 'au', 'ea', 'ee', 'ei', 'eo', 'eu', 'ia', 'ie', 'io', 'iu', 'oa', 'oe', 'oi', 'oo', 'ou', 'ua', 'ue', 'ui', 'uo', 'uu', 'y'];
    const endings = ['', '', '', 'tion', 'sion', 'ism', 'ity', 'ment', 'ness', 'ance', 'ence', 'er', 'or', 'ing', 'ology', 'ify', 'ize', 'ise', 'ly', 'ful', 'ish', 'esque', 'able', 'ible', 'al', 'ial', 'ic', 'ical', 'ous', 'eous', 'ious'];
    
    const nounDefinitions = [
        "A peculiar sensation of %s felt primarily on Tuesdays",
        "A specialized tool used for %s in difficult-to-reach places",
        "A rare type of cloud that forms only during %s",
        "The sound made when %s unexpectedly",
        "A dessert typically served after %s in northern regions",
        "The distance one can %s without stopping for breath",
        "A collection of items arranged for optimal %s",
        "The result of excessive %s over a long weekend",
        "A method of transportation powered entirely by %s",
        "The scientific study of %s in its natural habitat"
    ];
    
    const verbDefinitions = [
        "To frantically %s when no one is watching",
        "To accidentally %s while trying to do something else entirely",
        "To %s precisely three times in rapid succession",
        "To methodically organize items by their tendency to %s",
        "To communicate using only %s and hand gestures",
        "To prepare food using unconventional %s techniques",
        "To travel in a manner suggesting one might %s at any moment",
        "To solve problems through creative %s approaches",
        "To dramatically exaggerate the extent to which one can %s",
        "To decorate using principles based on %s patterns"
    ];
    
    const adjectiveDefinitions = [
        "Describing something so %s that it defies conventional measurement",
        "Having the quality of %s, especially early in the morning",
        "Possessing an uncanny ability to %s without apparent effort",
        "Characterized by unexpected bursts of %s enthusiasm",
        "More %s than absolutely necessary for the situation",
        "Capable of %s under extreme pressure",
        "Exhibiting the specific shade of emotion associated with %s",
        "Showing signs of having been repeatedly %s",
        "Pleasantly reminiscent of %s on a rainy afternoon",
        "So extraordinarily %s that it borders on supernatural"
    ];
    
    const fillWords = [
        "delight", "confusion", "enthusiasm", "anticipation", "joy",
        "vibration", "spinning", "twirling", "jumping", "whispering",
        "bubbling", "floating", "dancing", "glowing", "twinkling",
        "humming", "buzzing", "shimmering", "wobbling", "tingling"
    ];
    
    const exampleTemplates = [
        "\"I can't make it to dinner tonight because I'm feeling quite %s.\"",
        "\"That was the most %s presentation I've ever seen!\"",
        "\"Could you %s this for me before tomorrow?\"",
        "\"I found a %s in the back of my closet yesterday.\"",
        "\"Nobody knows how to %s quite like my grandmother.\"",
        "\"The recipe calls for three tablespoons of %s.\"",
        "\"Every time I visit that cafe, the staff starts to %s.\"",
        "\"That painting has a distinct sense of %s about it.\"",
        "\"After the storm, the entire garden was completely %s.\"",
        "\"I've never seen someone %s with such enthusiasm before.\""
    ];
    
    const generateNonsenseBtn = document.getElementById('generate-nonsense');
    const nonsenseResult = document.getElementById('nonsense-result');
    const nonsenseWord = document.getElementById('nons
