document.addEventListener('DOMContentLoaded', function() {
    const currentDateElement = document.getElementById('current-date');
    const eventsContainer = document.getElementById('events-container');
    const prevDayButton = document.getElementById('prev-day');
    const nextDayButton = document.getElementById('next-day');
    const todayButton = document.getElementById('today');
    const randomDayButton = document.getElementById('random-day');
    const shareButton = document.getElementById('share-event');
    
    let currentDate = new Date();
    
    // Initialize with today's date
    displayEventsForDate(currentDate);
    
    // Event listeners for navigation buttons
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
        // Generate a random month (0-11) and day (1-28 to avoid issues with month lengths)
        const randomMonth = Math.floor(Math.random() * 12);
        const randomDay = Math.floor(Math.random() * 28) + 1;
        
        currentDate = new Date();
        currentDate.setMonth(randomMonth);
        currentDate.setDate(randomDay);
        
        displayEventsForDate(currentDate);
    });
    
    shareButton.addEventListener('click', () => {
        const monthDay = `${currentDate.getMonth() + 1}-${currentDate.getDate()}`;
        const formattedDate = formatDate(currentDate);
        let shareText = `Today in Weird History (${formattedDate}):\n\n`;
        
        const events = historicalEvents[monthDay] || [];
        events.forEach(event => {
            shareText += `${event.year}: ${event.event}\n\n`;
        });
        
        shareText += "Find more at funfactgenerator.site!";
        
        // Try to use Web Share API if available
        if (navigator.share) {
            navigator.share({
                title: 'Today in Weird History',
                text: shareText
            })
            .catch(error => console.log('Error sharing:', error));
        } else {
            // Fallback - copy to clipboard
            navigator.clipboard.writeText(shareText)
                .then(() => alert('Historical events copied to clipboard! Now you can paste to share.'))
                .catch(err => console.error('Could not copy text: ', err));
        }
    });
    
    function displayEventsForDate(date) {
        // Format date for display
        const formattedDate = formatDate(date);
        currentDateElement.textContent = formattedDate;
        
        // Clear previous events
        eventsContainer.innerHTML = '';
        
        // Get month-day format for lookup
        const monthDay = `${date.getMonth() + 1}-${date.getDate()}`;
        
        // Get events for this date
        const events = historicalEvents[monthDay] || [];
        
        if (events.length === 0) {
            // No events for this date
            const noEventsElement = document.createElement('div');
            noEventsElement.className = 'event-container';
            noEventsElement.innerHTML = `
                <div class="event-description">No weird historical events found for this date... yet!</div>
            `;
            eventsContainer.appendChild(noEventsElement);
        } else {
            // Display each event
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
