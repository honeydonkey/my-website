/**
 * Main JavaScript file for Cybersecurity Portfolio
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  'use strict';

  // Initialize all animations and interactive elements
  initPortfolio();

  // Main initialization function
  function initPortfolio() {
    setupPreloader();
    setupNavigation();
    setupScrollEffects();
    setupTerminalEffect();
    setupSkillBars();
    setupMatrixEffect();
    setupThreatMap();
    setupPortfolioFilter();
    setupContactForm();
    setupBackToTop();
    setupGlitchEffects();
    setupCyberSecurityEffects();
  }

  // Preloader
  function setupPreloader() {
    const preloader = document.querySelector('.preloader');
    if (!preloader) return;

    const preloaderProgressBar = document.querySelector('.preloader-progress-bar');
    let progress = 0;
    
    const interval = setInterval(() => {
      progress += Math.random() * 10;
      if (progress > 100) progress = 100;
      
      if (preloaderProgressBar) {
        preloaderProgressBar.style.width = `${progress}%`;
      }
      
      if (progress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          preloader.classList.add('hidden');
          document.body.classList.remove('overflow-hidden');
        }, 500);
      }
    }, 200);
  }

  // Navigation
  function setupNavigation() {
    // Mobile Navigation Toggle
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navList = document.querySelector('.nav-list');
    
    if (mobileNavToggle && navList) {
      mobileNavToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
        document.body.classList.toggle('overflow-hidden');
      });
    }

    // Header Scroll Effect
    const header = document.querySelector('.header');
    
    if (header) {
      window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        
        if (targetId.startsWith('#') && targetId !== '#') {
          e.preventDefault();
          
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            // Close mobile menu if open
            if (navList && navList.classList.contains('active')) {
              navList.classList.remove('active');
              document.body.classList.remove('overflow-hidden');
            }
            
            // Scroll to target
            window.scrollTo({
              top: targetElement.offsetTop - 80, // Adjust for header height
              behavior: 'smooth'
            });
            
            // Update active link
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
          }
        }
      });
    });
  }

  // Scroll Effects
  function setupScrollEffects() {
    // Update active navigation link on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      
      document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    });

    // Animate elements on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
      animatedElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('animated');
        }
      });
    }
    
    // Check on initial load
    checkIfInView();
    
    // Check on scroll
    window.addEventListener('scroll', checkIfInView);
  }

  // Terminal Typing Effect
  function setupTerminalEffect() {
    const terminalOutput = document.querySelector('.terminal-body');
    
    if (!terminalOutput) return;
    
    const commands = [
      { 
        command: 'whoami', 
        output: 'Marianne Wong - Junior Cybersecurity Analyst' 
      },
      { 
        command: 'cat /etc/profile', 
        output: '# Junior Security Analyst with 2+ years of experience\n# Specializing in Security Awareness, Governance, Risk & Compliance (GRC), and Incident Response' 
      }
    ];
    
    let currentCommandIndex = 0;
    let charIndex = 0;
    let isTypingCommand = true;
    let currentLine;
    
    function typeNextCharacter() {
      const currentCommand = commands[currentCommandIndex];
      
      if (isTypingCommand) {
        // If this is the first character of the command, create a new line
        if (charIndex === 0) {
          currentLine = document.createElement('div');
          currentLine.className = 'terminal-line';
          
          const prompt = document.createElement('span');
          prompt.className = 'terminal-prompt';
          prompt.textContent = '$ ';
          
          const commandSpan = document.createElement('span');
          commandSpan.className = 'terminal-command';
          
          currentLine.appendChild(prompt);
          currentLine.appendChild(commandSpan);
          terminalOutput.appendChild(currentLine);
        }
        
        const commandSpan = currentLine.querySelector('.terminal-command');
        commandSpan.textContent = currentCommand.command.substring(0, charIndex + 1);
        
        charIndex++;
        
        if (charIndex < currentCommand.command.length) {
          setTimeout(typeNextCharacter, 50 + Math.random() * 50);
        } else {
          charIndex = 0;
          isTypingCommand = false;
          setTimeout(typeNextCharacter, 500);
        }
      } else {
        // Output the result
        const outputDiv = document.createElement('div');
        outputDiv.className = 'terminal-output';
        
        // Format the output with syntax highlighting
        const formattedOutput = currentCommand.output
          .replace(/\b(error|warning|critical|alert|danger)\b/gi, '<span style="color: #ff1744;">$1</span>')
          .replace(/\b(success|completed|secure|encrypted)\b/gi, '<span style="color: #00e676;">$1</span>')
          .replace(/\b(0x[0-9a-f]+)\b/gi, '<span style="color: #ff69b4;">$1</span>')
          .replace(/\b(\d+\.\d+\.\d+\.\d+)\b/g, '<span style="color: #8a2be2;">$1</span>');
        
        outputDiv.innerHTML = formattedOutput;
        terminalOutput.appendChild(outputDiv);
        
        // Move to next command
        currentCommandIndex++;
        isTypingCommand = true;
        
        if (currentCommandIndex < commands.length) {
          setTimeout(typeNextCharacter, 1000);
        } else {
          // Restart the sequence after a longer pause
          currentCommandIndex = 0;
          setTimeout(typeNextCharacter, 5000);
        }
      }
      
      // Auto-scroll to bottom
      terminalOutput.scrollTop = terminalOutput.scrollHeight;
    }
    
    // Start typing
    setTimeout(typeNextCharacter, 1000);
  }

  // Skill Progress Bars
  function setupSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
      const progressBar = item.querySelector('.skill-progress');
      if (!progressBar) return;
      
      const progressValue = progressBar.getAttribute('data-progress') || '0';
      progressBar.style.width = '0';
      
      // Add observer to animate when in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              progressBar.style.width = `${progressValue}%`;
            }, 200);
            observer.unobserve(item);
          }
        });
      }, { threshold: 0.2 });
      
      observer.observe(item);
    });
  }

  // Matrix Rain Effect
  function setupMatrixEffect() {
    const matrixContainers = document.querySelectorAll('.matrix-rain-container');
    
    matrixContainers.forEach(container => {
      const containerWidth = container.offsetWidth;
      const numDrops = Math.floor(containerWidth / 20); // One drop every ~20px
      
      for (let i = 0; i < numDrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'matrix-rain';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${Math.random() * 10 + 5}s`;
        drop.style.animationDelay = `${Math.random() * 5}s`;
        
        // Random binary/hex characters with purple/pink color variations
        const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
        let text = '';
        const length = Math.floor(Math.random() * 20) + 10;
        
        for (let j = 0; j < length; j++) {
          text += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        // Random purple/pink hue
        const hue = Math.random() > 0.5 ? '320' : '280'; // Pink or Purple
        const saturation = 80 + Math.floor(Math.random() * 20);
        const lightness = 50 + Math.floor(Math.random() * 30);
        drop.style.color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        drop.textContent = text;
        container.appendChild(drop);
      }
    });
    
    // Add matrix rain to the background for cybersecurity aesthetic
    const body = document.querySelector('body');
    if (body) {
      const bgMatrix = document.createElement('div');
      bgMatrix.className = 'matrix-rain-container background-matrix';
      bgMatrix.style.opacity = '0.05';
      bgMatrix.style.pointerEvents = 'none';
      bgMatrix.style.position = 'fixed';
      bgMatrix.style.top = '0';
      bgMatrix.style.left = '0';
      bgMatrix.style.width = '100%';
      bgMatrix.style.height = '100%';
      bgMatrix.style.zIndex = '-1';
      body.appendChild(bgMatrix);
      
      // Add fewer drops for background to avoid performance issues
      const numBgDrops = 20;
      for (let i = 0; i < numBgDrops; i++) {
        const drop = document.createElement('div');
        drop.className = 'matrix-rain';
        drop.style.left = `${Math.random() * 100}%`;
        drop.style.animationDuration = `${Math.random() * 15 + 10}s`;
        drop.style.animationDelay = `${Math.random() * 5}s`;
        drop.style.position = 'absolute';
        drop.style.top = '-100px';
        drop.style.fontSize = '1.2rem';
        drop.style.textShadow = '0 0 5px rgba(255, 105, 180, 0.7)';
        
        const chars = '01';
        let text = '';
        const length = Math.floor(Math.random() * 30) + 20;
        
        for (let j = 0; j < length; j++) {
          text += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        // Purple/pink hue for the background matrix
        const hue = Math.random() > 0.5 ? '320' : '280';
        drop.style.color = `hsl(${hue}, 80%, 60%)`;
        
        drop.textContent = text;
        bgMatrix.appendChild(drop);
        
        // Add animation
        drop.style.animation = `matrix-rain-fall ${15 + Math.random() * 10}s linear infinite`;
      }
    }
  }

  // Threat Map
  function setupThreatMap() {
    const threatMap = document.querySelector('.threat-map');
    
    if (!threatMap) return;
    
    // Create random threat points
    for (let i = 0; i < 30; i++) {
      const point = document.createElement('div');
      point.className = 'threat-point';
      point.style.position = 'absolute';
      point.style.left = `${Math.random() * 100}%`;
      point.style.top = `${Math.random() * 100}%`;
      point.style.width = '6px';
      point.style.height = '6px';
      point.style.borderRadius = '50%';
      point.style.animationDelay = `${Math.random() * 5}s`;
      
      // Size variation
      const size = 4 + Math.floor(Math.random() * 8);
      point.style.width = `${size}px`;
      point.style.height = `${size}px`;
      
      // Determine threat level (color)
      const threatLevel = Math.random();
      if (threatLevel < 0.3) {
        point.classList.add('threat-high');
        point.style.backgroundColor = 'rgba(255, 23, 68, 0.8)';
        point.style.boxShadow = '0 0 10px 2px rgba(255, 23, 68, 0.7)';
      } else if (threatLevel < 0.7) {
        point.classList.add('threat-medium');
        point.style.backgroundColor = 'rgba(255, 171, 0, 0.8)';
        point.style.boxShadow = '0 0 8px 2px rgba(255, 171, 0, 0.6)';
      } else {
        point.classList.add('threat-low');
        point.style.backgroundColor = 'rgba(0, 230, 118, 0.8)';
        point.style.boxShadow = '0 0 6px 2px rgba(0, 230, 118, 0.5)';
      }
      
      // Add pulse animation
      point.style.animation = 'pulse 2s infinite';
      
      threatMap.appendChild(point);
      
      // Add connection lines between some points for network effect
      if (i > 0 && Math.random() > 0.7) {
        const line = document.createElement('div');
        line.className = 'threat-connection';
        line.style.position = 'absolute';
        line.style.height = '1px';
        line.style.transformOrigin = 'left center';
        
        // Connect to a random previous point
        const targetIndex = Math.floor(Math.random() * i);
        const targetPoint = threatMap.querySelectorAll('.threat-point')[targetIndex];
        
        // Calculate position and angle
        const x1 = parseFloat(point.style.left);
        const y1 = parseFloat(point.style.top);
        const x2 = parseFloat(targetPoint.style.left);
        const y2 = parseFloat(targetPoint.style.top);
        
        const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
        
        line.style.width = `${length}%`;
        line.style.left = `${x1}%`;
        line.style.top = `${y1}%`;
        line.style.transform = `rotate(${angle}deg)`;
        
        // Line color based on threat level
        if (point.classList.contains('threat-high') || targetPoint.classList.contains('threat-high')) {
          line.style.backgroundColor = 'rgba(255, 23, 68, 0.3)';
        } else if (point.classList.contains('threat-medium') || targetPoint.classList.contains('threat-medium')) {
          line.style.backgroundColor = 'rgba(255, 171, 0, 0.2)';
        } else {
          line.style.backgroundColor = 'rgba(0, 230, 118, 0.2)';
        }
        
        threatMap.appendChild(line);
      }
    }
    
    // Add pulsing effect for active threats
    setInterval(() => {
      const randomPoint = threatMap.querySelectorAll('.threat-point')[Math.floor(Math.random() * 30)];
      if (randomPoint) {
        randomPoint.classList.add('pulse');
        setTimeout(() => {
          randomPoint.classList.remove('pulse');
        }, 1000);
      }
    }, 2000);
    
    // Update threat stats with random increments
    const activeThreats = document.querySelector('.threat-stat-value.high');
    const blockedAttacks = document.querySelector('.threat-stat-value:not(.high):not(.medium):not(.low)');
    
    if (activeThreats && blockedAttacks) {
      let activeCount = parseInt(activeThreats.textContent.replace(/,/g, ''));
      let blockedCount = parseInt(blockedAttacks.textContent.replace(/,/g, ''));
      
      setInterval(() => {
        // Random increment
        activeCount += Math.floor(Math.random() * 3);
        blockedCount += Math.floor(Math.random() * 10);
        
        activeThreats.textContent = activeCount.toLocaleString();
        blockedAttacks.textContent = blockedCount.toLocaleString();
      }, 3000);
    }
  }

  // Portfolio Filter
  function setupPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.portfolio-filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (!filterButtons.length || !portfolioItems.length) return;
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        const filterValue = this.getAttribute('data-filter');
        
        // Show/hide portfolio items based on filter
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.classList.contains(filterValue)) {
            item.style.display = 'block';
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0)';
            }, 50);
          } else {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
              item.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }

  // Contact Form
  function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      let isValid = true;
      const formElements = contactForm.elements;
      
      for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i];
        
        if (element.type !== 'submit' && element.hasAttribute('required') && !element.value.trim()) {
          isValid = false;
          element.classList.add('error');
        } else {
          element.classList.remove('error');
        }
      }
      
      if (isValid) {
        // Show success message (in a real app, you would send the form data to a server)
        const successMessage = document.querySelector('.form-success');
        if (successMessage) {
          contactForm.reset();
          successMessage.style.display = 'block';
          
          setTimeout(() => {
            successMessage.style.display = 'none';
          }, 5000);
        }
      }
    });
  }

  // Back to Top Button
  function setupBackToTop() {
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (!backToTopButton) return;
    
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });
    
    backToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
  
  // Glitch Effects
  function setupGlitchEffects() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(element => {
      // Store the original text
      const text = element.textContent;
      element.setAttribute('data-text', text);
      
      // Random glitch effect
      setInterval(() => {
        if (Math.random() > 0.99) { // Rare glitch
          const originalText = element.textContent;
          
          // Create glitched text
          let glitchedText = '';
          for (let i = 0; i < originalText.length; i++) {
            if (Math.random() > 0.7) {
              const chars = '01!@#$%^&*()_+-=[]{}|;:,.<>?';
              glitchedText += chars.charAt(Math.floor(Math.random() * chars.length));
            } else {
              glitchedText += originalText[i];
            }
          }
          
          element.textContent = glitchedText;
          
          // Restore original text after a short delay
          setTimeout(() => {
            element.textContent = originalText;
          }, 100);
        }
      }, 100);
    });
  }
  
  // Additional Cybersecurity Effects
  function setupCyberSecurityEffects() {
    // Add binary background to sections
    const sections = document.querySelectorAll('.section-cyber');
    
    sections.forEach(section => {
      const binaryBg = document.createElement('div');
      binaryBg.className = 'binary-bg';
      section.appendChild(binaryBg);
      
      // Add random binary digits
      for (let i = 0; i < 50; i++) {
        const digit = document.createElement('span');
        digit.textContent = Math.random() > 0.5 ? '0' : '1';
        digit.style.position = 'absolute';
        digit.style.left = `${Math.random() * 100}%`;
        digit.style.top = `${Math.random() * 100}%`;
        digit.style.opacity = '0.05';
        digit.style.fontSize = `${Math.random() * 1 + 0.5}rem`;
        digit.style.color = Math.random() > 0.5 ? 'var(--color-primary)' : 'var(--color-secondary)';
        binaryBg.appendChild(digit);
      }
    });
    
    // Add typing effect to elements with typing-effect class
    const typingElements = document.querySelectorAll('.typing-effect');
    
    typingElements.forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      
      let i = 0;
      const typeWriter = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      };
      
      // Start typing when element is in view
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            typeWriter();
            observer.unobserve(element);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(element);
    });
    
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        // Add glow effect
        this.style.boxShadow = '0 0 20px rgba(255, 105, 180, 0.3)';
        
        // Highlight icon
        const icon = this.querySelector('.service-icon');
        if (icon) {
          icon.style.backgroundColor = 'rgba(138, 43, 226, 0.2)';
          icon.style.transform = 'scale(1.1)';
          icon.style.transition = 'all 0.3s ease';
        }
      });
      
      card.addEventListener('mouseleave', function() {
        // Remove glow effect
        this.style.boxShadow = '';
        
        // Reset icon
        const icon = this.querySelector('.service-icon');
        if (icon) {
          icon.style.backgroundColor = '';
          icon.style.transform = '';
        }
      });
    });
    
    // Add cybersecurity-themed cursor
    const customCursor = document.createElement('div');
    customCursor.className = 'custom-cursor';
    customCursor.style.position = 'fixed';
    customCursor.style.width = '20px';
    customCursor.style.height = '20px';
    customCursor.style.borderRadius = '50%';
    customCursor.style.border = '2px solid var(--color-primary)';
    customCursor.style.pointerEvents = 'none';
    customCursor.style.zIndex = '9999';
    customCursor.style.transform = 'translate(-50%, -50%)';
    customCursor.style.transition = 'width 0.2s, height 0.2s, border-color 0.2s';
    document.body.appendChild(customCursor);
    
    // Add inner dot
    const cursorDot = document.createElement('div');
    cursorDot.style.position = 'absolute';
    cursorDot.style.top = '50%';
    cursorDot.style.left = '50%';
    cursorDot.style.width = '4px';
    cursorDot.style.height = '4px';
    cursorDot.style.borderRadius = '50%';
    cursorDot.style.backgroundColor = 'var(--color-primary)';
    cursorDot.style.transform = 'translate(-50%, -50%)';
    customCursor.appendChild(cursorDot);
    
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
    });
    
    // Change cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .btn, .portfolio-item, .social-link, .back-to-top');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        customCursor.style.width = '30px';
        customCursor.style.height = '30px';
        customCursor.style.borderColor = 'var(--color-secondary)';
      });
      
      element.addEventListener('mouseleave', () => {
        customCursor.style.width = '20px';
        customCursor.style.height = '20px';
        customCursor.style.borderColor = 'var(--color-primary)';
      });
    });
  }
});

// Add CSS for new animations
document.addEventListener('DOMContentLoaded', function() {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% {
        transform: scale(1);
        opacity: 1;
      }
      50% {
        transform: scale(1.5);
        opacity: 0.7;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }
    
    @keyframes matrix-rain-fall {
      0% {
        transform: translateY(-100%);
      }
      100% {
        transform: translateY(100vh);
      }
    }
    
    .threat-point.pulse {
      animation: pulse 1s ease-in-out;
    }
    
    .background-matrix {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    }
  `;
  document.head.appendChild(style);
});
