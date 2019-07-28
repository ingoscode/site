window.onload = () => {
    const switchPage = (contentHtml) => {

        const content_container = document.querySelector('#content');

        content_container.innerHTML = contentHtml;

        setTimeout(() => loadUsers())
    };


    document.querySelectorAll('.dynamicRouter').forEach(link => {
        link.onclick = event => {
            event.preventDefault();

            fetch(event.target.href)
                .then(response => response.text())
                .then(html => {
                    console.log('html', html);

                    const parser = new DOMParser();

                    // Parse the text
                    const doc = parser.parseFromString(html, "text/html");

                    // You can now even select part of that html as you would in the regular DOM
                    // Example:
                    const contentHtml = doc.querySelector('#content').innerHTML;

                    switchPage(contentHtml)
                })
        }
    })
};