// Fact Battles - Poll pairs
const factBattles = [
    {
        question: "Which fact is creepier?",
        optionA: "Shrimp hearts are in their heads",
        optionB: "You shed 40lbs of skin in your lifetime"
    },
    {
        question: "Which fact is more surprising?",
        optionA: "A day on Venus is longer than a year on Venus",
        optionB: "The total weight of all ants equals the total weight of all humans"
    },
    {
        question: "Which fact is weirder?",
        optionA: "The inventor of the Pringles can was buried in one",
        optionB: "The dot over the letter 'i' is called a tittle"
    },
    {
        question: "Which fact is more mind-blowing?",
        optionA: "A bolt of lightning is six times hotter than the sun",
        optionB: "The heart of a blue whale is so large that a human could swim through its arteries"
    },
    {
        question: "Which fact is more unbelievable?",
        optionA: "The first ever photo on Instagram was of a dog's foot",
        optionB: "The smell of freshly cut grass is actually a plant distress call"
    },
    {
        question: "Which fact is more disturbing?",
        optionA: "The electric chair was invented by a dentist",
        optionB: "The average person has about 67 different types of bacteria in their belly button"
    },
    {
        question: "Which fact is stranger?",
        optionA: "Octopuses have three hearts",
        optionB: "A crocodile cannot stick its tongue out"
    },
    {
        question: "Which fact would surprise more people?",
        optionA: "Bananas are berries, but strawberries aren't",
        optionB: "The Great Wall of China is not visible from space with the naked eye"
    }
];

// DOM elements
const pollQuestion = document.getElementById('poll-question');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const pollOptions = document.querySelectorAll('.poll-option');
const voteButton = document.getElementById('vote-button');
const showResultsButton = document.getElementById('show-results');
const resultsDiv = document.getElementById('results');
const resultA = document.getElementById('result-a');
const resultB = document.getElementById('result-b');
const percentA = document.getElementById('percent-a');
const percentB = document.getElementById('percent-b');
const totalVotes = document.getElementById('total-votes');
const newPollButton = document.getElementById('new-poll');
const labelA = document.getElementById('label-a');
const labelB = document.getElementById('label-b');

// Current poll and selected option
let currentPollIndex = 0;
let selectedOption = null;

// Load polls from localStorage or initialize
let polls = JSON.parse(localStorage.getItem('factBattlePolls')) || initializePolls();

// Initialize poll data structure
function initializePolls() {
    return factBattles.map((battle, index) => {
        return {
            id: index,
            votesA: 0,
            votesB: 0,
            voted: false
        };
    });
}

// Display current poll
function displayPoll(index) {
    const battle = factBattles[index];
    const poll = polls[index];
    
    pollQuestion.textContent = battle.question;
    optionA.textContent = battle.optionA;
    optionB.textContent = battle.optionB;
    labelA.textContent = battle.optionA;
    labelB.textContent = battle.optionB;
    
    // Reset UI
    pollOptions.forEach(option => option.classList.remove('selected'));
    selectedOption = null;
    resultsDiv.style.display = 'none';
    
    // If user already voted, show results
    if (poll.voted) {
        updateResults(index);
        resultsDiv.style.display = 'block';
    }
}

// Handle option selection
pollOptions.forEach(option => {
    option.addEventListener('click', () => {
        // Don't allow selection if already voted
        if (polls[currentPollIndex].voted) return;
        
        // Clear previous selection
        pollOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Set new selection
        option.classList.add('selected');
        selectedOption = option.dataset.option;
    });
});

// Handle vote button click
voteButton.addEventListener('click', () => {
    if (!selectedOption || polls[currentPollIndex].voted) return;
    
    const poll = polls[currentPollIndex];
    
    // Update votes
    if (selectedOption === 'A') {
        poll.votesA++;
    } else {
        poll.votesB++;
    }
    
    // Mark as voted
    poll.voted = true;
    
    // Save to localStorage
    localStorage.setItem('factBattlePolls', JSON.stringify(polls));
    
    // Show results
    updateResults(currentPollIndex);
    resultsDiv.style.display = 'block';
});

// Show results without voting
showResultsButton.addEventListener('click', () => {
    updateResults(currentPollIndex);
    resultsDiv.style.display = 'block';
});

// Load new poll
newPollButton.addEventListener('click', () => {
    currentPollIndex = (currentPollIndex + 1) % factBattles.length;
    displayPoll(currentPollIndex);
});

// Update results display
function updateResults(index) {
    const poll = polls[index];
    const totalVoteCount = poll.votesA + poll.votesB;
    
    let percentageA = 0;
    let percentageB = 0;
    
    if (totalVoteCount > 0) {
        percentageA = Math.round((poll.votesA / totalVoteCount) * 100);
        percentageB = Math.round((poll.votesB / totalVoteCount) * 100);
    }
    
    // Update DOM
    resultA.style.width = percentageA + '%';
    resultB.style.width = percentageB + '%';
    percentA.textContent = percentageA + '%';
    percentB.textContent = percentageB + '%';
    totalVotes.textContent = totalVoteCount;
}

// Initial display
displayPoll(currentPollIndex);
