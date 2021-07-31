<svg
    on:click|stopPropagation
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 24 25">
    <g class="Trash / 24 Outline">
        <g class="bin">
            <path
                fill="currentColor"
                d="M21.3 6.1a.4.4 0 000-.9v1zM2.7 5.2a.4.4 0 100 1v-1zm2.1.5v-.5.5zm4.6 0V6v-.4zm0-1.4h.4-.4zm5.1 0h.4-.4zm4.8 1.8h2v-.9h-2v1zm-.5-.4v14.2h.9V5.7h-.9zm-2 16.2H7.3v.9h9.5v-.9zM2.8 6.1h2v-.9h-2v1zM5.2 20V5.7h-.9v14.2h.9zM4.8 6.1h4.6v-.9H4.8v1zm5-.4V4.3h-.9v1.4h.9zm.8-2.2h2.7v-.9h-2.7v.9zM9.4 6.1h5.1v-.9H9.4v1zm5.1 0h4.8v-.9h-4.8v1zm-.4-1.8v1.4h.8V4.3h-.8zm-4.3 0c0-.4.4-.8.8-.8v-.9c-1 0-1.7.8-1.7 1.7h.9zM7.3 21.9a2 2 0 01-2-2h-.9a2.9 2.9 0 002.9 2.9v-.9zm6-18.4c.4 0 .8.4.8.8h.8c0-1-.7-1.7-1.6-1.7v.9zm5.5 16.4a2 2 0 01-2 2v.9a2.9 2.9 0 002.9-2.9h-.9z" />
            <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.1"
                d="M9.5 10.4v7.7m5-7.7v7.7"
                class="lid" />
        </g>
    </g>
</svg>

<style lang="scss">
    svg {
        color: var(--text);
        cursor: pointer;
        transition: color 0.2s;

        &:hover {
            color: var(--red);
            pointer-events: all;
        }
    }
</style>
