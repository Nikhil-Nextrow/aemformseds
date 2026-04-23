export default async function decorate(block) {
    console.log(block);

    fetch('/graphql/execute.json/wknd-shared/adventures-all')
        .then(response => {
            // if (!response.ok) throw new Error('Network error');
            return response.json(); // Parses JSON response
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Fetch Error:', error));

}