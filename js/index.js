

 const wrapper = document.querySelector('.carousel-wrapper');
 document.querySelector('.btn-next').addEventListener('click', () => {
   wrapper.scrollBy({ left: 200, behavior: 'smooth' });
 });
document.querySelector('.btn-prev').addEventListener('click', () => {
   wrapper.scrollBy({ left: -200, behavior: 'smooth' });
 });


 document.querySelectorAll('.product-card').forEach(card => {
   card.addEventListener('click', () => {
     window.location = card.getAttribute('data-href');
   });
 });
