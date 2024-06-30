document.getElementById('submitButton').addEventListener('click', async () => {
    const script = document.getElementById('codeInput').value;
    const language = document.getElementById('languageSelect').value;

    try {
        const response = await axios.post('http://localhost:3000/api/execute/', {
            script,
            language
        });

        document.getElementById('output').textContent = response.data.output;
    } catch (error) {
        console.error('Error executing code:', error);
        document.getElementById('output').textContent = 'An error occurred while executing the code.';
    }
});
