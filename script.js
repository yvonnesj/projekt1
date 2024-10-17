// Hämta formuläret och hantera formulärskick
const form = document.getElementById('questionForm');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Förhindra att formuläret skickas iväg direkt

    // Hämta formulärdata
    const formData = new FormData(form);

    // Exempel på att visa användardata i konsolen (du kan byta ut detta mot en serverförfrågan)
    console.log('Namn:', formData.get('name'));
    console.log('E-post:', formData.get('email'));
    console.log('Meddelande:', formData.get('message'));

    // Visa ett meddelande till användaren (kan bytas ut mot annan logik)
    alert('Tack för ditt meddelande!');

    // Återställ formuläret efter inskick
    form.reset();
});
