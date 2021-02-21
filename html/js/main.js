
// making an AJAX request to get data from a file called "menu.json"
fetch('/data/menu.json', {
    method: 'GET'
})  // then if we get a response, we will tell our app that it's JSON
    .then(response => response.json())
    // if that works, we will put our JSON into a variable called "data". Now, we can use it!
    .then(data => {
        // I have helped you with one section of your menu. Finish the rest

        // find the section in our HTML & turn it into a variable so we can control it with JavaScript
        const soupSection = document.querySelector('#soups-section');

        // In our data file we have many objects for each section. We will loop through an read each object in the soup section.
        // This is a "forEach" loop that will help me perform an action everytime we read an object in the soups section.
        data.soups.forEach(item => {
            // since soup section is an unordered list, we create a list item for each soup object we read
            // put the same html that is on your page here. We will inject the data into it before it shows on the page
            soupSection.innerHTML += `
            <li class="list-group-item">
                <p>${item.title}</p>
                <span class="small badge">$${item.price}</span>
            </li>
            `;
        });
    });
