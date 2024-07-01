const helloText = document.getElementById('hello-text');
        const textToType = 'Let me Cook...';
        let charIndex = 0;

        function startCookingEffect() {
            const typingInterval = setInterval(() => {
            helloText.textContent += textToType[charIndex];
            charIndex++;

            if (charIndex >= textToType.length) {
                clearInterval(typingInterval);
            }
            }, 100); 
        }

        window.addEventListener('load', startCookingEffect);









window.addEventListener('load', () => {
            
            setTimeout(() => {
                document.getElementById('main-content').classList.add('show');
                startTypingEffect();
            }, 3000); 
        });
        const phrases = ["Developer..", "ML Enthusiast..", "Passionate Learner.."];
        let currentPhraseIndex = 0;
        let currentCharIndex = 0;

        function startTypingEffect() {
            const dynamicText = document.getElementById('dynamic-text');
            dynamicText.textContent = '';

            function type() {
                if (currentCharIndex < phrases[currentPhraseIndex].length) {
                    dynamicText.textContent += phrases[currentPhraseIndex].charAt(currentCharIndex);
                    currentCharIndex++;
                    setTimeout(type, 100); 
                } else {
                    setTimeout(erase, 2000);
                }
            }

            function erase() {
                if (currentCharIndex > 0) {
                    dynamicText.textContent = phrases[currentPhraseIndex].substring(0, currentCharIndex - 1);
                    currentCharIndex--;
                    setTimeout(erase, 50); 
                } else {
                    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
                    setTimeout(type, 500); 
                }
            }

            type();
        }

        let cards = document.querySelectorAll(".card");
        let stackArea = document.querySelector(".stack-area");
  
        function rotateCards() {
          let angle = 0;
          cards.forEach((card) => {
            if (card.classList.contains("active")) {
              card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`;
            } else {
              card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
              angle = angle - 10;
            }
          });
        }
  
        rotateCards();
  
        window.addEventListener("scroll", () => {
          let proportion =
            stackArea.getBoundingClientRect().top / window.innerHeight;
          if (proportion <= 0) {
            let n = cards.length;
            let index = Math.ceil((proportion * n) / 2);
            index = Math.abs(index) - 1;
            for (let i = 0; i < n; i++) {
              if (i <= index) {
                cards[i].classList.add("active");
              } else {
                cards[i].classList.remove("active");
              }
            }
            rotateCards();
          }
        });
  

  
        function adjust() {
          let windowWidth = window.innerWidth;
          let left = document.querySelector(".left");
          left.remove();
          if (windowWidth < 800) {
            stackArea.insertAdjacentElement("beforebegin", left);
          } else {
            stackArea.insertAdjacentElement("afterbegin", left);
          }
        }
        adjust();
  
 
  
        window.addEventListener("resize", adjust);