const testimonials = [
    {
        text: "Shopping here was so easy and convenient! My order was exactly what I needed and the customer service team was incredibly helpful.",
        author: "Wambui Joseph"
    },
    {
        text: "The quality of the products amazed me. Delivery was super fast and the packaging was neat. Highly recommend to everyone!",
        author: "Mwangi Peter"
    },
    {
        text: "I had an issue with my order and it was resolved within hours. Amazing support and friendly staff.",
        author: "Jane Muthoni"
    },
    {
        text: "Great deals and a wide variety to choose from. My go-to place for shopping online.",
        author: "Brian Otieno"
    },
    {
        text: "The website is user-friendly and the checkout process is seamless. Will shop again!",
        author: "Achieng Grace"
    },
    {
        text: "I appreciate the detailed product descriptions. Helped me make the right choice every time.",
        author: "Samuel Kariuki"
    },
    {
        text: "Fantastic experience! I got regular updates about my order and it arrived earlier than expected.",
        author: "Stacy Wanja"
    },
    {
        text: "Trustworthy store with genuine products. My family loves what we got.",
        author: "Kevin Oduor"
    },
    {
        text: "Customer service is top-notch. They answered all my queries quickly and professionally.",
        author: "Linda Njeri"
    },
    {
        text: "I keep coming back for more! Consistently excellent service and quality products.",
        author: "George Kimani"
    }
];

let currentTestimonial = 0;

function renderTestimonial(index) {
    const card = document.getElementById('testimonialCard');
    const testimonial = testimonials[index];
    card.innerHTML = `
        <div class="testimonial-content">
            <span class="quote">&ldquo;</span>
            ${testimonial.text}
            <span class="quote">&rdquo;</span>
            <div class="testimonial-author">${testimonial.author}</div>
        </div>
    `;
}

document.getElementById('prevTestimonial').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    renderTestimonial(currentTestimonial);
});
document.getElementById('nextTestimonial').addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    renderTestimonial(currentTestimonial);
});


renderTestimonial(currentTestimonial);