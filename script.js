document.addEventListener("DOMContentLoaded", function() {
    AOS.init();

    function updateFeatures() {
        const scrollPercentage = (featuresContainer.scrollLeft / (featuresContainer.scrollWidth - featuresContainer.clientWidth)) * 100;
        // Update the appearance of the scroll dots
        featuresDots.forEach((dot, index) => {
            if (index * (100 / (featuresDots.length - 1)) <= scrollPercentage) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    // Features
    const featuresContainer = document.getElementById("commentsContainer")
    const featuresScrollbar = document.getElementById("commentsScrollbar")
    const featuresDots = []
    if (featuresContainer) {
        
        for (let i = 0; i < featuresContainer.children.length; i++) {
            const dot = document.createElement('div');
            dot.classList.add('scroll-dot');
            featuresDots.push(dot);
            featuresScrollbar.appendChild(dot);
        }
        
        // Update scroll dots based on the scroll position
        featuresContainer.addEventListener('scroll', updateFeatures);
    }

})

function toggleMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    var body = document.body

    if(mobileMenu.style.height === '0px') {
        mobileMenu.style.height = '100vh'
    } else {
        mobileMenu.style.height = '0px'
    }
}