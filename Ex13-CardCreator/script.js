function createCard(title, cName, Acviews, monthsOld, duration, thumbnail) {
    title = prompt('Enter title');
    cName = prompt('Enter Channel name')
    Acviews = parseInt(prompt('Enter no. of views'))
    monthsOld = prompt('Enter Months')
    duration = prompt('Enter duration')
    thumbnail = prompt('Enter the thumbnail src')
    let viewStr
    if (Acviews < 1000) {
        viewStr = Acviews;
    }
    else if (Acviews > 1000000) {
        viewStr = Acviews / 1000000 + "M";
    }
    else {
        viewStr = Acviews / 1000 + "K";
    }
    let viewApx = Math.floor(viewStr)
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="" />
                <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h4>${title}</h4>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>`

    document.querySelector('.container').innerHTML += html
}


// createCard("Introductiv video #2", "CWH", 5600000000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
