<script setup lang="ts">
import { ref } from 'vue';
import { createInput } from '@formkit/vue';
import EmailInput from '../components/contactforms/EmailInput.vue';

const values = ref({});
const EmailInputComponent = createInput(EmailInput);
</script>

<template>
    <div class="flex justify-center mt-5">
        <div class="bordered flex justify-between">
            <div class="">
                <h1>Lets talk!</h1>
                <h2>Email, slack or discord.</h2>
                <h3>Lets have a virtual coffee.</h3>
                <button @click="$router.push('/')" class="text-white">
                    Back
                </button>
            </div>
            <div class="flex flex-col gap-4">
                <FormKit type="form" v-model="values">
                    <FormKit
                        :type="EmailInputComponent"
                        label="Email:"
                        :classes="{
                            outer: 'mb-5',
                            label: 'block mb-1 font-bold text-sm',
                            help: 'text-xs text-gray-500',
                        }"
                        name="email_address"
                        validation-visibility="live"
                    />
                </FormKit>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bordered {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 95vw;
    height: 65vh;
    min-height: 400px;
    color: var(--text-color);
    border: 1px solid var(--border-color-blue);
    padding: 4rem;
    border-radius: 25px;
}

.bordered h1 {
    font-size: 2rem;
    font-weight: 400;
    margin: 2rem;
}
</style>
