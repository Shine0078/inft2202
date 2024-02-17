console.log('xhr_script.js loaded')

let url_photos = 'https://jsonplaceholder.typicode.com/photos';

let xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            let responseData = JSON.parse(xhr.responseText);

            console.log(responseData);

            // Assuming the response data is an array of images
            for (let i = 0; i < responseData.length; i++) {
                // Create a new image container
                let imgContainer = document.createElement('div');
                imgContainer.className = 'img-container';
                imgContainer.id = 'fakeImg_' + (i + 1);

                // Create an image element
                let imgElement = document.createElement('img');
                imgElement.src = responseData[i].url;
                imgElement.alt = 'Image ' + (i + 1);

                // Create a figcaption element
                let figcaptionElement = document.createElement('figcaption');
                figcaptionElement.innerText = responseData[i].title;

                // Append the image and figcaption to the image container
                imgContainer.appendChild(imgElement);
                imgContainer.appendChild(figcaptionElement);

                // Append the image container to the 'images' div in your HTML
                document.getElementById('images').appendChild(imgContainer);
            }
        } else {
            console.error('Request failed with status:', xhr.status);
        }
    }
};

xhr.open('GET', url_photos, true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
