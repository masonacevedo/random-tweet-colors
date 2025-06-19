function getRandomColor () {
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    return `rgb(${r}, ${g}, ${b})`;
}

function ColorFirstTime () {
    let tweets = document.querySelectorAll("article");
    tweets.forEach(tweet => {
        tweet.querySelectorAll("*").forEach(el => {
            el.style.setProperty('color', getRandomColor(), 'important');
        });
    });
}

const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0){
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === "1" && node.nodeMatches && node.nodeMatches("article")){
                    node.querySelectorAll("*").forEach(el => {
                        el.style.setProperty('color', getRandomColor(), 'important');
                    })
                }
                node.querySelectorAll("article").forEach(article => {
                    article.querySelectorAll("*").forEach(el => {
                        el.style.setProperty('color', getRandomColor(), 'important');
                    })
                })
            })
        }
    }
});

ColorFirstTime();

// const timeline = document.querySelector('')
observer.observe(document.body, {childList: true, subtree: true})