document.addEventListener('DOMContentLoaded', function() {
    const queryInput = document.getElementById('queryInput');
    const submitButton = document.getElementById('submitButton');
    const responseContainer = document.getElementById('responseContainer');

    submitButton.addEventListener('click', async function() {
        const query = queryInput.value;
        const response = await fetchChatGPTResponse(query);
        responseContainer.innerText = response;
    });

    async function fetchChatGPTResponse(query) {
        const apiKey = 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; // Replace with your actual API key
        const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                prompt: query,
                max_tokens: 150
            })
        });

        const data = await response.json();
        return data.choices[0].text;
    }
});