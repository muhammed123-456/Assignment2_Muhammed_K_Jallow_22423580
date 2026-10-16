// Set dynamic date in utility bar
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('current-date').innerText = new Date().toLocaleDateString('en-US', options);

        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenu = document.getElementById('nav-menu');
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('hidden');
        });

        // Category Filtering Function
        function filterCategory(category) {
            const cards = document.querySelectorAll('.article-card');
            const heading = document.getElementById('section-heading');
            
            if (category === 'all') {
                heading.innerText = 'Latest Publications';
            } else {
                heading.innerText = category + ' Articles';
            }

            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                if (category === 'all' || cardCat === category) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });

            // Smooth scroll to articles section if filtered
            if(category !== 'all') {
                document.getElementById('articles').scrollIntoView({ behavior: 'smooth' });
            }
        }

        // Article Reader Modal Functions
        function openArticleModal(title, author, date, category, text) {
            const modal = document.getElementById('article-modal');
            const content = document.getElementById('modal-content');
            
            content.innerHTML = `
                <div class="space-y-3">
                    <div class="flex items-center gap-2 text-xs text-gray-500 font-medium">
                        <span class="bg-journal-accent text-white uppercase text-[10px] px-2.5 py-0.5 rounded">${category}</span>
                        <span>•</span>
                        <span>${date}</span>
                    </div>
                    <h2 class="font-serif text-2xl md:text-3xl font-bold text-journal-900">${title}</h2>
                    <div class="flex items-center gap-3 py-2 border-y border-gray-100 text-xs text-gray-600">
                        <span class="font-bold text-journal-900">By ${author}</span>
                        <span>•</span>
                        <span>Published in The Global Echo</span>
                    </div>
                    <div class="text-sm text-gray-700 leading-relaxed space-y-4 pt-2">
                        <p>${text}</p>
                        <p>As discussions around this topic continue to evolve, experts emphasize the importance of grassroots engagement combined with robust institutional support. Stakeholders are invited to share their feedback and join upcoming panel sessions.</p>
                        <p><em>Stay tuned to The Global Echo for follow-up investigative reports and exclusive interviews on this developing story.</em></p>
                    </div>
                </div>
            `;
            modal.classList.remove('hidden');
        }

        function closeArticleModal() {
            document.getElementById('article-modal').classList.add('hidden');
        }

        // Project Note Modal Functions
        function openProjectNote() {
            document.getElementById('project-note-modal').classList.remove('hidden');
        }

        function closeProjectNote() {
            document.getElementById('project-note-modal').classList.add('hidden');
        }

        // Newsletter Subscription Handler
        function handleNewsletter(event) {
            event.preventDefault();
            const toast = document.getElementById('toast');
            document.getElementById('toast-message').innerText = 'Thank you for subscribing to The Global Echo Dispatch!';
            toast.classList.remove('translate-y-20', 'opacity-0');
            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 4000);
            event.target.reset();
        }

        // Close modals when clicking outside
        window.addEventListener('click', (e) => {
            const articleModal = document.getElementById('article-modal');
            const noteModal = document.getElementById('project-note-modal');
            if (e.target === articleModal) closeArticleModal();
            if (e.target === noteModal) closeProjectNote();
        });