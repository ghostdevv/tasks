<script>
    export let active;
</script>

<svg
    on:click|stopPropagation
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="25"
    viewBox="0 0 58 58"
    class:active>
    <g>
        <path
            d="M16.8 30.3a3.5 3.5 0 00-4.5 5.4l4.5-5.4zM26.5 47l-3 1.8A3.5 3.5 0 0030 48l-3.4-1zm19.9-34.6a3.5 3.5 0 10-6-3.8l6 3.8zM33.4 28l3.2 1.4-3.1-1.4zM21 39l2.7-2.3L21 39zm5.5 8l3.4 1a102.4 102.4 0 01.2-.5 249.8 249.8 0 012-6.2c1.3-3.9 3-8.5 4.5-11.9l-6.3-3c-1.8 3.8-3.5 8.7-4.9 12.6a257 257 0 00-2.2 6.8v.1l3.3 1zm10.1-17.6c1.6-3.4 4-7.6 6-11a250.4 250.4 0 013.7-5.9 8037.5 8037.5 0 01-5.8-3.9v.2a140 140 0 00-1.1 1.6 257.8 257.8 0 00-2.7 4.4c-2.1 3.5-4.7 8-6.4 11.7l6.3 3zm-22 3.6l-2.3 2.7.2.1a89.8 89.8 0 012.1 1.8l3.8 3.7 5.3-4.6c-1.3-1.5-3-3.1-4.4-4.3a96.6 96.6 0 00-2.5-2v-.1L14.6 33zm3.8 8.3c1 1.2 2.3 3 3.4 4.7a90 90 0 011.7 2.7l3-1.7 3-1.8a42.5 42.5 0 000-.3 97.2 97.2 0 00-1.9-2.8c-1-1.6-2.5-3.8-4-5.4l-5.2 4.6z"
            fill="currentColor" />
    </g>
</svg>

<style lang="scss">
    svg {
        color: var(--text);
        opacity: 0.5;
        transition: color 0.2s;

        &:hover,
        &.active {
            color: var(--green);
            opacity: 1;
        }
    }
</style>
