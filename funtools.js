document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const tabId = tab.dataset.tab;
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });

    // Banana Height Calculator
    document.getElementById('calculate-bananas')?.addEventListener('click', function() {
        const height = parseFloat(document.getElementById('height').value);
        const unit = document.getElementById('unit').value;
        
        if (isNaN(height)) {
            alert('Please enter a valid height');
            return;
        }
        
        const bananaLength = unit === 'cm' ? 17.78 : 7; // cm or inches
        const bananaCount = (height / bananaLength).toFixed(1);
        
        document.getElementById('banana-text').textContent = `You are ${bananaCount} bananas tall!`;
        
        const visual = document.getElementById('banana-visual');
        visual.innerHTML = '';
        for (let i = 0; i < Math.min(Math.floor(bananaCount), 50); i++) {
            visual.innerHTML += '🍌';
        }
        
        document.getElementById('banana-result').style.display = 'block';
    });

    // Flamingo Name Generator
    document.getElementById('generate-flamingo')?.addEventListener('click', function() {
        const firstName = document.getElementById('first-name').value.trim();
        const birthMonth = document.getElementById('birth-month').value;
        
        if (!firstName || !birthMonth) {
            alert('Please enter both your name and birth month');
            return;
        }
        
        const colorMap = {
            'January': 'Pink', 'February': 'Coral', 'March': 'Fuchsia',
            'April': 'Rose', 'May': 'Salmon', 'June': 'Blush',
            'July': 'Ruby', 'August': 'Magenta', 'September': 'Peach',
            'October': 'Cerise', 'November': 'Bubblegum', 'December': 'Flamingo'
        };
        
        const nameParts = [
            'Fluffy', 'Graceful', 'Elegant', 'Fancy', 'Pretty', 'Tall',
            'Dancing', 'Prancing', 'Twirling', 'Sassy', 'Regal', 'Majestic'
        ];
        
        const color = colorMap[birthMonth];
        const namePart = nameParts[Math.floor(Math.random() * nameParts.length)];
        const firstInitial = firstName.charAt(0).toUpperCase();
        
        const flamingoName = `${color} ${namePart} ${firstInitial}`;
        document.getElementById('flamingo-text').textContent = flamingoName;
        document.getElementById('flamingo-result').style.display = 'block';
    });

    // Fortune Cookie Generator
    document.getElementById('generate-fortune')?.addEventListener('click', function() {
        const fortunes = [
            "A beautiful, smart, and loving person will be coming into your life.",
            "Your creativity will lead to great success this week.",
            "The greatest risk is not taking one.",
            "A dubious friend may be an enemy in camouflage.",
            "A foolish man listens to his heart. A wise man listens to cookies.",
            "You will receive a fortune cookie.",
            "Ignore previous cookie.",
            "Help! I'm being held prisoner in a fortune cookie factory!",
            "You will find a thing. It may be important.",
            "The fortune you seek is in another cookie."
        ];
        
        const luckyNumbers = Array.from({length: 5}, () => Math.floor(Math.random() * 100) + 1);
        
        const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
        const fortuneText = `${fortune}\n\nLucky numbers: ${luckyNumbers.join(', ')}`;
        
        document.getElementById('fortune-text').textContent = fortuneText;
        document.getElementById('fortune-result').style.display = 'block';
    });

    // Nonsense Word Generator
    document.getElementById('generate-nonsense')?.addEventListener('click', function() {
        const prefixes = ['Flib', 'Snork', 'Glob', 'Wibble', 'Zonk', 'Quirky', 'Blorp', 'Fizzle'];
        const suffixes = ['ington', 'oodle', 'snap', 'wobble', 'tron', 'zilla', 'puff', 'meister'];
        
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
        const nonsenseWord = prefix + suffix;
        
        const definitions = [
            "The act of walking while thinking about cheese",
            "A small, furry creature that only exists on Tuesdays",
            "The sound a jellyfish makes when it's happy",
            "A unit of measurement equal to three and a half giggles",
            "The feeling you get when you remember something but forget what you remembered",
            "A mythical creature that feeds on misplaced socks",
            "The art of folding paper into shapes that look nothing like what you intended"
        ];
        
        const examples = [
            "I was so flibsnap yesterday, I forgot my own name!",
            "Careful not to step on the globwobble - they're nesting this time of year.",
            "According to legend, the last person to see a blorpzilla became instantly famous for 15 minutes."
        ];
        
        document.getElementById('nonsense-word').textContent = nonsenseWord;
        document.getElementById('nonsense-definition').textContent = definitions[Math.floor(Math.random() * definitions.length)];
        document.getElementById('nonsense-example').textContent = examples[Math.floor(Math.random() * examples.length)];
        document.getElementById('nonsense-result').style.display = 'block';
    });

    // Excuse Generator
    document.getElementById('generate-excuse')?.addEventListener('click', function() {
        const excuseType = document.getElementById('excuse-type').value;
        
        const workExcuses = [
            "My dog ate my homework... I mean, my laptop.",
            "I was abducted by aliens who needed help with their PowerPoint.",
            "I accidentally time-traveled to the 1800s and had to invent the internet to get back.",
            "My cat scheduled a meeting with my goldfish and I had to mediate."
        ];
        
        const socialExcuses = [
            "I'm stuck in an elevator with a mime - send help!",
            "I got lost in IKEA and they just now found me.",
            "My clone showed up instead of me and I had to deal with the identity crisis.",
            "I was busy teaching my Roomba to do the cha-cha."
        ];
        
        const choreExcuses = [
            "The dishes formed a union and went on strike.",
            "I was going to do it, but then I remembered I'm actually a hologram.",
            "My laundry basket developed consciousness and refused to cooperate.",
            "I was busy training my houseplants to do household chores."
        ];
        
        const allExcuses = [...workExcuses, ...socialExcuses, ...choreExcuses];
        
        let excuse;
        if (excuseType === 'work') excuse = workExcuses[Math.floor(Math.random() * workExcuses.length)];
        else if (excuseType === 'social') excuse = socialExcuses[Math.floor(Math.random() * socialExcuses.length)];
        else if (excuseType === 'chore') excuse = choreExcuses[Math.floor(Math.random() * choreExcuses.length)];
        else excuse = allExcuses[Math.floor(Math.random() * allExcuses.length)];
        
        document.getElementById('excuse-text').textContent = excuse;
        document.getElementById('excuse-result').style.display = 'block';
    });

    // Share buttons functionality
    document.querySelectorAll('.btn-share').forEach(btn => {
        btn.addEventListener('click', function() {
            const toolId = this.id.replace('share-', '');
            const resultText = document.getElementById(`${toolId}-text`)?.textContent || 
                              document.getElementById(`${toolId}-visual`)?.textContent;
            
            if (navigator.share) {
                navigator.share({
                    title: `My ${toolId.replace('-', ' ')} result`,
                    text: resultText
                }).catch(err => console.log('Error sharing:', err));
            } else {
                navigator.clipboard.writeText(resultText)
                    .then(() => alert('Copied to clipboard!'))
                    .catch(err => console.error('Could not copy text: ', err));
            }
        });
    });
});
