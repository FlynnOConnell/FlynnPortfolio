import { Octokit } from 'octokit';

// Define the function that gets a repository
export async function getRepository(repoName: string) {
    try {
        // Create a new Octokit instance
        const octokit = new Octokit({
            auth: import.meta.env.VITE_GITHUB_API,
        });
        // Get the repository data
        const repository = await octokit.request(
            `GET /repos/${import.meta.env.VITE_GITHUB_OWNER}/${repoName}`,
            {
                owner: import.meta.env.VITE_GITHUB_OWNER,
                repo: repoName,
            }
        );
        // Return the repository data
        return repository.data;
    } catch (error) {
        // If there was an error, log it to the console and return null
        console.error(error);
        return null;
    }
}
