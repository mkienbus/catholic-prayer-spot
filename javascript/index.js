// Improved liturgical calendar functionality with error handling and better event management
function liturgicalClick() {
    const tbody = document.getElementById("tbody");
    const button = document.getElementById("liturgicalButton");
    
    // Disable button to prevent multiple clicks
    button.disabled = true;
    button.textContent = "Loading...";
    
    console.log("Fetching liturgical calendar data...");
    
    fetch("https://calapi.inadiutorium.cz/api/v0/en/calendars/default/today")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Clear any existing content
            tbody.innerHTML = "";
            
            // Add new row with data
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${data.date || 'N/A'}</td>
                <td>${data.season || 'N/A'}</td>
                <td>${data.season_week || 'N/A'}</td>
                <td>${data.celebrations && data.celebrations[0] ? data.celebrations[0].title : 'N/A'}</td>
            `;
            tbody.appendChild(row);
            
            // Update button text and remove click handler
            button.textContent = "Calendar Updated";
            button.removeEventListener('click', liturgicalClick);
            
            console.log("Liturgical calendar data loaded successfully");
        })
        .catch(error => {
            console.error("Error fetching liturgical calendar data:", error);
            
            // Show error message to user
            tbody.innerHTML = `
                <tr>
                    <td colspan="4" style="text-align: center; color: red;">
                        Error loading calendar data. Please try again later.
                    </td>
                </tr>
            `;
            
            // Re-enable button for retry
            button.disabled = false;
            button.textContent = "Try Again";
        });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    const liturgicalButton = document.getElementById("liturgicalButton");
    if (liturgicalButton) {
        liturgicalButton.addEventListener('click', liturgicalClick);
    }
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});