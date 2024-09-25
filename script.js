const display = document.getElementById('display');

let apiKey = '87fee39a7ecf4d8e844f8c48094667c4';

async function displayBlogs() {
    try {
        const res = await fetch(`https://newsapi.org/v2/everything?q=apple&from=2024-09-27&to=2024-09-27&sortBy=popularity&apiKey=${apiKey}`);
        
        // Check if the response is OK
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        // Parse the response JSON
        const data = await res.json();
        console.log(data);

        display.innerHTML = '';
        data.articles.forEach((article,i) => {
            // const {} = everything;
            display.innerHTML+=`
                <div class="card col" style="width: 18rem;">
                    <img src="${article.urlToImage}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${article.title}</h5>
                        <p class="card-text">${article.description}</p>
                        <a href="${article.url}" target="_blank" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            `
        });
        
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

displayBlogs();

function navigate(){
    window.location.href = `./addBlog/index.html`;    
}
