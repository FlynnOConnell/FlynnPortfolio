<script setup lang="ts">
import { ref } from 'vue';
import { createInput } from '@formkit/vue';
import EmailInput from './EmailInput.vue';

const values = ref({});
const email = createInput(EmailInput);
</script>

<template>
    <FormKit type="form" v-model="values">
        <FormKit
            :type="email"
            label="Email"
            name="email_address"
            validation-visibility="live"
        />
    </FormKit>

    <!-- This is just to help us visualize the data in our form: -->
    <pre wrap>{{ values }}</pre>
</template>
