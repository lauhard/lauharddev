<script>
    import { dev } from "$app/environment";
    import { codepen, github, twitter } from "$lib/project.config";
    import { Github, GithubIcon, LucideGithub } from "lucide-svelte";
</script>

<footer class="footer">
    <div class="footer-content">
        <div class="social-buttons">
            <a
                href={github}
                target="_blank"
                class="social-button hp-facebook"
                aria-label="Github"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-github"
                    ><path
                        d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
                    /><path d="M9 18c-4.51 2-5-2-7-2" /></svg
                >
            </a>
            <a
                href={codepen}
                target="_blank"
                class="social-button hp-instagram"
                aria-label="Codepen"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-codepen"
                    ><polygon
                        points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
                    /><line x1="12" x2="12" y1="22" y2="15.5" /><polyline
                        points="22 8.5 12 15.5 2 8.5"
                    /><polyline points="2 15.5 12 8.5 22 15.5" /><line
                        x1="12"
                        x2="12"
                        y1="2"
                        y2="8.5"
                    /></svg
                >
            </a>
            <a
                href={twitter}
                target="_blank"
                class="social-button hp-linkedin"
                aria-label="X (Twitter)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 90 90"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-twitter"
                >
                    <path
                        d="M 0.219 2.882 l 34.748 46.461 L 0 87.118 h 7.87 l 30.614 -33.073 l 24.735 33.073 H 90 L 53.297 38.043 L 85.844 2.882 h -7.87 L 49.781 33.341 L 27.001 2.882 H 0.219 z M 11.793 8.679 h 12.303 L 78.425 81.32 H 66.122 L 11.793 8.679 z"
                        style="stroke-width: 4;  stroke-linecap: round; stroke-linejoin: round; opacity: 1;"
                        transform=" matrix(1 0 0 1 0 0) "
                        stroke-linecap="round"
                    />
                </svg>
            </a>
        </div>
        <p>&copy; Lauhard.dev. All rights reserved.</p>
    </div>
</footer>

<style lang="scss">
    .footer {
        color: #fff;
        text-align: center;
        position: relative;
        justify-content: center;
        align-items: center;
        display: flex;
        width: 100vw;
        height: 14rem;
        background-color: var(--surface-1);
        margin-top: 6rem;
    }

    .footer-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 5rem;
        gap: 1rem;
        margin-top: 2.5rem;
    }

    .social-buttons {
        display: flex;
        gap: 2rem;
        justify-content: center;
        align-items: center;
    }

    .lucide {
        width: 3rem;
        height: 2rem;
    }

    .social-button:hover {
        opacity: 0.8;
    }
</style>
