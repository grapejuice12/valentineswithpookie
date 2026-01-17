// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Ashly",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? >_< 💗",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['💗', '<3', '>_<', 'xoxo', '💐', '💝' ],
        bears: ['rawr', ':3']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "May I ask you a question?",                          // First interaction
            yesBtn: "Hmmm",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "Of course my loving pookie wookems! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "I KNEW IT I KNEW IT I LOVE YOU TOOOOOO 💖",
                        // Shows when they go past 5000%
        high: "WOW, like I knew I was lucky but omgggg EEEEEEE 💖",              // Shows when they go past 1000%
        normal: ":3 :3 :3 Im going to nom youu"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yayayayaya! I'm the luckiest person in the world! ",
        message: "YIPPIEEE SMOOCH INCOMING, Thank you for being my Valentine!",
        emojis: " 💗 💖 💫 💌 🌹",  //these will bounce around 
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#d8bdd8",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#FFA6C9",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#a2c8a2",     // Button color (should stand out against the background)
        buttonHover: "#DBEFE2",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#d48166"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 2.0         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://soundcloud.com/brunomars/just-the-way-you-are-2?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
