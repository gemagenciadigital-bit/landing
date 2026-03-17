document.addEventListener('DOMContentLoaded', () => {
    
    // --- POPUP CONFIGURATION ---
    const popups = {
        exit: {
            id: 'exit-popup',
            trigger: 'exit-intent', // Logic handled below
            shown: false
        },
        scroll: {
            id: 'scroll-popup',
            trigger: 'scroll-50',
            shown: false
        },
        time: {
            id: 'time-popup',
            trigger: 'timer-45s',
            shown: false
        }
    };

    // Global state to prevent overlap
    let isAnyPopupOpen = false;
    // Helper to check if user already closed/converted (for real app, would be more complex)
    const getStorage = (key) => localStorage.getItem(`gem_${key}`);
    const setStorage = (key, value) => localStorage.setItem(`gem_${key}`, value);

    // --- POPUP FUNCTIONS ---

    const showPopup = (type) => {
        const popupConfig = popups[type];
        if (!popupConfig) return;

        // RULES:
        // 1. If any popup is currently open -> Don't show.
        // 2. If this specific popup was already closed by user (localStorage) -> Don't show.
        // 3. If user converted (e.g., filled form) -> Don't show any (simulated here).
        
        if (isAnyPopupOpen) return;
        if (getStorage(`${type}_closed`)) return;

        // Specific conflict rule: If Scroll closed, don't show Time
        if (type === 'time' && getStorage('scroll_closed')) return;

        const el = document.getElementById(popupConfig.id);
        if (!el) return;

        // Animation classes
        el.classList.remove('hidden');
        // Small delay to allow display:block to apply before opacity transition
        setTimeout(() => {
            el.classList.remove('opacity-0', 'translate-y-20', 'scale-95');
        }, 10);
        
        isAnyPopupOpen = true;
        popupConfig.shown = true;
    };

    const closePopup = (type) => {
        const popupConfig = popups[type];
        if (!popupConfig) return;

        const el = document.getElementById(popupConfig.id);
        if (!el) return;

        // Animation out
        el.classList.add('opacity-0', 'translate-y-20', 'scale-95');
        
        setTimeout(() => {
            el.classList.add('hidden');
        }, 300); // Match transition duration

        isAnyPopupOpen = false;
        setStorage(`${type}_closed`, 'true');
    };

    // --- SETUP TRIGGERS ---

    // 1. Exit Intent (Desktop) & Scroll Up Speed (Mobile - simplified)
    let lastScrollPosition = window.scrollY;
    
    const handleExitIntent = (e) => {
        // Desktop: Mouse leaves top of viewport
        if (e.clientY < 0) {
            showPopup('exit');
            document.removeEventListener('mouseleave', handleExitIntent);
        }
    };

    // 2. Scroll Depth (50%)
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.offsetHeight;
        
        const scrollPercentage = (scrollPosition + windowHeight) / fullHeight * 100;

        if (scrollPercentage > 50 && !popups.scroll.shown) {
            showPopup('scroll');
            // We don't remove listener because we might need to track other things
        }
    };

    // 3. Time Delay (45s)
    setTimeout(() => {
        if (!popups.time.shown && !isAnyPopupOpen) {
            showPopup('time');
        }
    }, 45000); 

    // --- EVENT LISTENERS ---

    document.addEventListener('mouseleave', handleExitIntent);
    document.addEventListener('scroll', handleScroll);

    // Close Button Logic
    document.querySelectorAll('.close-popup').forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Find parent popup id
            const popupEl = e.target.closest('[id$="-popup"]');
            if (popupEl) {
                // Determine type from ID (exit-popup -> exit)
                const type = popupEl.id.split('-')[0];
                closePopup(type);
            }
        });
    });

    // Close on click outside (Modal)
    window.addEventListener('click', (e) => {
        if (e.target.id === 'exit-popup') closePopup('exit');
        if (e.target.id === 'time-popup') closePopup('time');
    });

    console.log('GEM Scripts Loaded. Tracking Active.');
});
