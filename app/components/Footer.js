export function Footer() {
 const $footer = document.createElement('footer');
 $footer.classList.add('footer');

 $footer.innerHTML = `
  <footer class="footer">
    <span class="footer-name">Newman Ferrer</span>
    <a href="https://github.com/newmanferrer" target="_blank" rel="noopener" class="footer-link">
      <img class="footer-img" src="./app/assets/img/github-brands.svg" alt="github-brands">
    </a>
    <span class="footer-copyright">Copyright &#169; 2021</span>
  </footer>
 `;

 const $styles = document.getElementById('dinamic-styles');
 $styles.innerHTML += `
  .footer {
   width: 100%;
   height: 5%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: fixed;
   bottom: 0;
   background-color: #4169e1;
  }

  .footer-name,
  .footer-copyright {
   font-size: 1rem;
   font-weight: bold;
   color: #ffffff;
  }

  .footer-img {
   width: 1.7rem;
   height: 1.7rem;
   margin-left: 1rem;
  }

  .footer-copyright {
    margin-left: 1rem;
  }
 `;

 return $footer;
}
