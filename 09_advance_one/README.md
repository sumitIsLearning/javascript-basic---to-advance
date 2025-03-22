🛠️ Getting Started with GitPeek

So, you want to try out this app? Great! But before you jump in, there are a few things you need to know to avoid running into issues. 🚀
📌 Instructions to Set It Up

    Download or Copy the Code

        Save the HTML, CSS, and JavaScript files in a project folder.

        Open the index.html file in a browser.

    Replace the API Key

        In the fetchData function, you’ll see this line:

        xhr.setRequestHeader("Authorization", `Bearer <YOUR_API_KEY>`);

        Replace <YOUR_API_KEY> with your actual GitHub API token.

        You can get a token by going to GitHub → Settings → Developer Settings → Personal Access Tokens.

        Select permissions like read:user for basic profile access.

    Avoid Public Exposure of Your API Key

        Never share your API key in public repositories (e.g., GitHub).

        A safer approach is to store the key in a backend server or a .env file.

    Run and Test

        Open your project in a browser.

        Enter a GitHub username in the input field.

        You should see the user's profile picture, name, and follower count appear in a card.

⚠️ Warnings & Important Notes

🔴 DO NOT hardcode your API key in a frontend app. Anyone can inspect your code and steal it.
🔴 GitHub has rate limits on API requests. Too many requests in a short time may block you temporarily.
🔴 If you get a "403 Forbidden" error, check if your API key is missing or if you’ve hit the rate limit.
🟢 A better approach is to make API requests from a backend server (Node.js, Python, etc.), keeping your API key secure.