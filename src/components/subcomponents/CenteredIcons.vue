<template>
    <v-container fluid class="fill-height">
        <v-row align="center" justify="center" class="fill-height">
            <v-col cols="12" sm="8" md="6">
                <div class="text-center">
                    <p>Hi! I've noticed you're on a smartphone.</p>
                    <v-spacer></v-spacer>
                    <p>Unfortunately, this site is not yet optimized for mobile devices.</p>
                    <v-spacer></v-spacer>
                    <p>However, you can still view the desktop version of the site by clicking the button below.</p>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="$router.push('/homepage')">View Desktop Site</v-btn>
                    <v-spacer></v-spacer>
                    <p>I'm working on it!</p>
                    <div>
                        <a :href="linkedinUrl" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                            <v-icon size="x-large">mdi-linkedin</v-icon>
                        </a>
                        <a :href="githubUrl" aria-label="GitHub" target="_blank" rel="noreferrer">
                            <v-icon size="x-large">mdi-github</v-icon>
                        </a>
                        <a :href="twitterUrl" aria-label="GitHub" target="_blank" rel="noreferrer">
                            <v-icon size="x-large">mdi-twitter</v-icon>
                        </a>
                    </div>
                </div>
            </v-col>
        </v-row>
    </v-container>
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
