<script setup lang="ts">
const props = defineProps({
    context: Object,
});

function handleInput(e: any) {
    props.context?.node.input(e.target.value);
}

function handleFocus(e: any) {
    e.target.select();
}

function handlePaste(this: any, e: any) {
    const paste = e.clipboardData.getData('text');
    if (typeof paste === 'string') {
        const inputs = e.target.parentElement.querySelectorAll('input');
        // Focus on the last character
        inputs.item(this).focus();
    }
}
</script>

<template>
    <input
        @input="handleInput"
        :value="props.context?._value"
        @focus="handleFocus"
        :class="context?.classes.digit"
        @paste="handlePaste"
    />
</template>
