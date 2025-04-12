document.addEventListener('DOMContentLoaded', function() {
    const historicalEvents = {
        // January
        "1-1": [{ year: "45 BC", event: "Julian calendar takes effect as the civil calendar of the Roman Empire" }],
        "1-2": [{ year: "1492", event: "Reconquista completes as the last Moorish leader surrenders Granada to Ferdinand and Isabella" }],
        // ... (more dates)
        "4-12": [
            { year: "1961", event: "Yuri Gagarin becomes the first human in space" },
            { year: "1981", event: "First launch of the Space Shuttle (Columbia)" }
        ],
        "4-13": [
            { year: "1743", event: "Thomas Jefferson, third U.S. president, is born" },
            { year: "2029", event: "Apophis asteroid will make a close approach to Earth (predicted)" }
        ],
        // ... (more dates)
        "12-31": [
            { year: "1999", event: "Boris Yeltsin resigns as Russian president, making Vladimir Putin acting president" },
            { year: "1907", event: "First New Year's Eve celebration held in Times Square (then Longacre Square)" }
        ]
    };

    const currentDateElement = document.getElementById('current-date');
    const eventsContainer = document.getElementById('events-container');
    const prevDayButton = document.getElementById('prev-day');
    const nextDayButton = document.getElementById('next-day');
    const todayButton = document.getElementById('today');
    const randomDayButton = document.getElementById('random-day');
    const shareButton = document.getElementById('share-event');
    
    let currentDate = new Date();
    
    // Initialize
    displayEventsForDate(currentDate);
    
    // Event listeners
    prevDayButton.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() - 1);
        displayEventsForDate(currentDate);
    });
    
    nextDayButton.addEventListener('click', () => {
        currentDate.setDate(currentDate.getDate() + 1);
        displayEventsForDate(currentDate);
    });
    
    todayButton.addEventListener('click', () => {
        currentDate = new Date();
        displayEventsForDate(currentDate);
    });
    
    randomDayButton.addEventListener('click', () => {
        const randomMonth = Math.floor(Math.random() * 12);
        const randomDay = Math.floor(Math.random() * 28) + 1;
        currentDate = new Date();
        currentDate.setMonth(randomMonth);
        currentDate.setDate(randomDay);
        displayEventsForDate(currentDate);
    });
    
    shareButton.addEventListener('click', () => {
        const formattedDate = formatDate(currentDate);
        const monthDay = `${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        let shareText = `On ${formattedDate} in history:\n\n`;
        
        const events = historicalEvents[monthDay] || [];
        events.forEach(event => {
            shareText += `${event.year}: ${event.event}\n\n`;
        });
        
        if (navigator.share) {
            navigator.share({
                title: `Historical Events for ${formattedDate}`,
                text: shareText
            }).catch(err => console.log('Error sharing:', err));
        } else {
            navigator.clipboard.writeText(shareText)
                .then(() => alert('Copied to clipboard!'))
                .catch(err => console.error('Could not copy text: ', err));
        }
    });
    
    function displayEventsForDate(date) {
        const formattedDate = formatDate(date);
        currentDateElement.textContent = formattedDate;
        
        eventsContainer.innerHTML = '';
        const monthDay = `${date.getMonth() + 1}-${date.getDate()}`;
        const events = historicalEvents[monthDay] || [];
        
        if (events.length === 0) {
            eventsContainer.innerHTML = `
                <div class="event-container">
                    <div class="event-description">
                        No weird historical events found for this date... yet!
                    </div>
                </div>
            `;
        } else {
            events.forEach(event => {
                const eventElement = document.createElement('div');
                eventElement.className = 'event-container';
                eventElement.innerHTML = `
                    <div class="event-year">${event.year}</div>
                    <div class="event-description">${event.event}</div>
                    <div class="source-note">*Some historical details may be slightly embellished for entertainment.</div>
                `;
                eventsContainer.appendChild(eventElement);
            });
        }
    }
    
    function formatDate(date) {
        const months = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return `${months[date.getMonth()]} ${date.getDate()}`;
    }
});
