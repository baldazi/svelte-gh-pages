<script lang="ts">
    import {locales, setLocale, getLocale} from "$lib/paraglide/runtime";
    import {m} from "$lib/paraglide/messages";
    let lang = getLocale();
</script>

<div class="flex justify-between">
    <div>Hello</div>
    <nav>
        <ul class="flex gap-1.5 items-center">
            <li><a href="#Home">{m["header.navigator.home"]()}</a></li>
            <li><a href="#About">{m["header.navigator.about"]()}</a></li>
            <li><a href="#Contact">{m["header.navigator.contact"]()}</a></li>
        </ul>
    </nav>
    <select bind:value={lang} onchange={() => {setLocale(lang); console.log("eeeee");
    }}>
        {#each locales as local}
            <option value={local}>{local.toUpperCase()}</option>
        {/each}
    </select>
</div>