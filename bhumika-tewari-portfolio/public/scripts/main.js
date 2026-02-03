// Small parallax for background letters
document.addEventListener('mousemove', function(e){
  const bg = document.querySelector('.hero-bg');
  if(!bg) return;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const x = (e.clientX - w/2) / w;
  const y = (e.clientY - h/2) / h;
  // move the whole background slightly
  bg.style.transform = `translate(${x * 30}px, ${y * 20}px)`;
});

// Reduce motion for users who prefer reduced motion
const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
if(mq && mq.matches){
  const letters = document.querySelectorAll('.bg-letter');
  letters.forEach(l => l.style.animation = 'none');
}
