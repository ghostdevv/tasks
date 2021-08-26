<script>
    import { Modal } from 'polykit';
    import { installPWAModal } from '@/config';

    let open = false;
    let prompt;

    function opener() {
        if (isNaN($installPWAModal)) $installPWAModal = Date.now();

        if ($installPWAModal < Date.now()) {
            open = true;
            $installPWAModal = Date.now() + 1200000;
        }
    }

    function beforeInstallPrompt(e) {
        prompt = e;
        opener();
    }

    function install() {
        prompt.prompt();

        prompt.userChoice.then(({ outcome }) => {
            if (outcome == 'accepted') {
                open = false;
                $installPWAModal = Date.now();
            }
        });
    }
</script>

<svelte:window on:beforeinstallprompt|preventDefault={beforeInstallPrompt} />

<Modal bind:open let:close>
    <card class="no-hover col center g32">
        <div class="col">
            <h4>Would you like to install Tasks?</h4>
            <p>
                Tasks installs as a web app, and can be uninstalled at any time
                without loosing data!
            </p>
        </div>

        <div class="row center g32">
            <button class="green" on:click={install}>Yes</button>
            <button class="red" on:click={close}> No </button>
        </div>
    </card>
</Modal>
