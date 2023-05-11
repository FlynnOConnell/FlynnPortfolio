
<template>
    <v-app>
        <v-toolbar>
            <v-spacer></v-spacer>
            <a :href="linkedinUrl" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <v-icon size="x-large">mdi-linkedin</v-icon>
            </a>
            <v-spacer></v-spacer>
            <a :href="githubUrl" aria-label="GitHub" target="_blank" rel="noreferrer">
                <v-icon size="x-large">mdi-github</v-icon>
            </a>
            <v-spacer></v-spacer>
            <a :href="twitterUrl" aria-label="Twitter" target="_blank" rel="noreferrer">
                <v-icon size="x-large">mdi-twitter</v-icon>
            </a>
            <v-spacer></v-spacer>
        </v-toolbar>
        <v-container fluid class="fill-height">
            <v-row align="center" justify="center" class="fill-height">
                <v-col cols="12" sm="8" md="6">
                    <div class="text-center">
                        <h1 class="my-10">Hi!</h1>
                        <v-spacer></v-spacer>
                        <p class="my-4"> I notice you're on a smartphone.</p>
                        <p class="my-4">
                            Unfortunately, this site is not yet optimized for mobile devices.
                        </p>
                        <v-spacer></v-spacer>
                        <p class="my-4">
                            However, you can still view the desktop version of the site by
                            clicking the button below.
                        </p>
                        <v-spacer></v-spacer>
                        <v-btn color="blue" @click="$router.push('/home')" class="my-4">
                            <p class="font-semibold">View Desktop Site</p>
                        </v-btn>
                        <v-spacer></v-spacer>
                        <p class="my-4">I'm working on it!</p>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>


<script>
export default {
    data() {
        return {
            linkedinUrl: "https://www.linkedin.com/in/flynnoconnell/",
            githubUrl: "https://github.com/NeuroPyPy",
            twitterUrl: "https://twitter.com/FlynnNeuro",
        };
    },
};
</script>
