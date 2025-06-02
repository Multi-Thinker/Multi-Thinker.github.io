const timelineEvents = [
    {
        date: "2010",
        title: "Saying Hi to Computers",
        description: "I've been born into Computers arond me, from all the way to watching my uncle play game to opening their conf files with notepad and changing values to see what happens, i've stepped into a domain that still feels like sparkle to my eyes!",
        type: "gaming"
    },

    {
        date: "2012-2016",
        title: "Step into the world of Programming",
        description: `Around this time i've already had a large portfolia of my C++ games and interactive exe like calculators, age based prints and formulas, I graduated from university with 4 years experience because i've already been working a year early i started my bachelors.
        <br>
        Companies: I've worked with:<br><br>
         <div class='flex'>
            <img src='./assets/images/jkgroup.jpg' width='48px' alt='JKGroup.net' class='px-2' />
            <img src='./assets/images/ranksol.jpg' width='48px' alt='Ranksol.com' class='px-2' />
        </div>
        `,
        type: "tech"
    },
    {
        date: "2016-2019",
        title: "Golden Times",
        description: `Post Covid Days, the life, years and time feels different to collectively everyone, for me these were high times for me to be productive, i've joined multi-cultured and semi-government Orgs where i have had fortune to hone my skills, knowing my competetive nature, i've been the most growthful observing and soakig myself with knowledge around me
        <br>
        Companies: I've worked with:<br><br>
        <div class='flex'>
            <img src='./assets/images/jkgroup.jpg' width='48px' alt='JKGroup.net' class='px-2' />
            <img src='./assets/images/lighthouse.jpg' width='48px' alt='Lighthouse.app' class='px-2' />
            <img src='./assets/images/pixako.jpg' width='48px' alt='Pixako.com' class='px-2' />
        </div>`,
        type: "tech"
    },
    {
        date: "2019-2023",
        title: "Growth and acceleration",
        description: `From being featured in docker, microsoft and raising tons of startups, I've had earn a name and got into big elite communities like TopTal, CrossOver, SuperCoder and one after another kept nailing assignments.
        <br>
        Companies: I've worked with:<br><br>
        <div class='flex'>
            <img src='./assets/images/dirayah.jpg' width='48px' alt='Dirayaah.com' class='px-2' />
            <img src='./assets/images/hotelengine.webp' width='48px' alt='hotelengine.com' class='px-2' />
            <img src='./assets/images/toptal.jpg' width='48px' alt='Toptal.com' class='px-2' />
            <img src='./assets/images/zadgroup.jpg' width='48px' alt='ZadGroup.net' class='px-2' />
            <img src='./assets/images/andela.jpg' width='48px' alt='Andela.com' class='px-2' />
            <img src='./assets/images/jdv.jpg' width='48px' alt='jeweldv.com' class='px-2' />
        </div>
        `,
        type: "music"
    },
    {
        date: "2023+",
        title: "Unleash the Crazy: AI Era",
        description: `AI had been a long-term dream for any person who spend most of his time with his computer, this era has been fasinating with empowring and adapting AI into startups and mega Corps as Grab
        <br>
        Companies: I've worked with:<br><br>
         <div class='flex'>
            <img src='./assets/images/grab.jpg'  width='48px' alt='Grab.com' class='px-2' />
            <img src='./assets/images/inovo.jpg' width='48px' alt='www.tribesocial.io' class='px-2' />
            <img src='./assets/images/arc.jpg' width='48px' alt='arc.dev' class='px-2' />
            <img src='./assets/images/supercoder.jpg' width='48px' alt='SuperCoder.co' class='px-2' />
            <img src='./assets/images/relate.jpg' width='48px' alt='Relate.so' class='px-2' />
            <img src='./assets/images/swipey.jpg' width='48px' height='36px' alt='swipey.co' class='px-2' />
        </div>
        `,
        type: "milestone"
    }
];

 // Create timeline elements
        const timelineContainer = document.querySelector('.timeline-container');
        // Function to render timeline
        function renderTimeline() {
            // Clear existing timeline items
            timelineContainer.innerHTML = '<div class="center-line"></div>';
            
            // Create timeline items
            timelineEvents.forEach((event, index) => {
                const timelineItem = document.createElement('div');
                timelineItem.className = 'timeline-item';
                
                const dot = document.createElement('div');
                dot.className = `dot ${event.type}`;
                
                const content = document.createElement('div');
                content.className = 'timeline-content';
                
                // Use template literal correctly
                content.innerHTML = `
                    <div class="timeline-date">${event.date}</div>
                    <h3 class="timeline-title">${event.title}</h3>
                    <p class="timeline-description">${event.description}</p>
                `;
                
                timelineItem.appendChild(dot);
                timelineItem.appendChild(content);
                timelineContainer.appendChild(timelineItem);
                
                // Delayed animation for staggered appearance
                setTimeout(() => {
                    timelineItem.classList.add('visible');
                }, index * 100);
            });
        }
        
        // Initialize timeline
        renderTimeline();
        
        // Neural background effect
        const background = document.getElementById('background');
        const numNodes = 50;
        const nodes = [];
        
        // Create neural nodes
        for (let i = 0; i < numNodes; i++) {
            const node = document.createElement('div');
            node.className = 'neural-node';
            
            // Random position
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            
            node.style.left = `${x}px`;
            node.style.top = `${y}px`;
            
            // Random size
            const size = Math.random() * 3 + 1;
            node.style.width = `${size}px`;
            node.style.height = `${size}px`;
            
            // Random opacity
            node.style.opacity = Math.random() * 0.5 + 0.2;
            
            background.appendChild(node);
            nodes.push({
                element: node,
                x: x,
                y: y,
                speedX: Math.random() * 0.3 - 0.15,
                speedY: Math.random() * 0.3 - 0.15
            });
        }
        
        // Animate neural nodes
        function animateNodes() {
            nodes.forEach(node => {
                node.x += node.speedX;
                node.y += node.speedY;
                
                // Bounce off edges
                if (node.x < 0 || node.x > window.innerWidth) {
                    node.speedX *= -1;
                }
                if (node.y < 0 || node.y > window.innerHeight) {
                    node.speedY *= -1;
                }
                
                node.element.style.left = `${node.x}px`;
                node.element.style.top = `${node.y}px`;
            });
            
            requestAnimationFrame(animateNodes);
        }
        
        animateNodes();
        
        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        // Observe all timeline items
        setTimeout(() => {
            document.querySelectorAll('.timeline-item').forEach(item => {
                observer.observe(item);
            });
        }, 100);