<template>
    <div class="publication-container">
        <div orientation="left" class="side-absolute">
            <ul class="side-absolute-inner fade-enter-done">
                <li>
                    <GitHubIcon aria-label="GitHub" tooltip="" />
                </li>
                <li>
                    <TwitterIcon aria-label="Twitter" tooltip="" />
                </li>
                <li>
                    <LinkedInIcon aria-label="LinkedIn" tooltip="" />
                </li>
            </ul>
        </div>
        <div class="outer  flex flex-col justify-center align-items">
            <div class="links">
                <SmallHeader id="smallheader">
                    <router-link :to="{ name: 'publications', hash: '#Pub1' }" data-status="active" data-id="Publication1"
                        class="animation-underline activelink">Publication One</router-link>
                    <router-link :to="{ name: 'publications', hash: '#Pub2' }" data-status="inactive" data-id="Publication2"
                        class="animation-underline">Publication Two</router-link>
                    <router-link :to="{ name: 'publications', hash: '#Pub3' }" data-status="inactive" data-id="Publication2"
                        class="animation-underline">Publication Two</router-link>
                </SmallHeader>
            </div>
            <v-card class="mx-auto pa-2" width="100%" rounded="4x">
                <v-toolbar rounded="2x">
                    <v-toolbar-title rounded="2x">Publications</v-toolbar-title>
                    <v-spacer></v-spacer>

                    <v-btn variant="text" icon="mdi-magnify"></v-btn>

                    <v-btn variant="text" icon="mdi-view-module"></v-btn>
                </v-toolbar>
                <v-list lines="three">
                    <v-list-subheader>Papers</v-list-subheader>
                    <v-list-item v-for="(item, index) in publications" :key="index" :value="item" active-color="primary"
                        rounded="x2">

                        <template v-slot:prepend>
                            <LinkIcon :link="item.link" aria-label="External Link" />
                        </template>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.description"></v-list-item-subtitle>

                    </v-list-item>
                </v-list>
            </v-card>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SmallHeader from '@/components/maincomponents/SmallHeader.vue';
import GitHubIcon from '@/components/icons/social/GitHubIcon.vue';
import TwitterIcon from '@/components/icons/social/TwitterIcon.vue';
import LinkedInIcon from '@/components/icons/social/LinkedInIcon.vue';
import LinkIcon from '@/components/icons/nav/LinkIcon.vue';

export default defineComponent({
    name: "Publications",
    data() {
        return {
            publications: [
                {
                    title: "Neural population responses to taste and food in the parabrachial nucleus of the pons in the awake unrestrained rat using in vivo one- photon Ca2 + imaging",
                    type: "Conference Presentation",
                    description: "We used one-photon in vivo Ca2+ imaging to track the activity of a population of PbN cells as they licked tastants, smelled food and ate solid food.",
                    date: "July. 2023",
                    link: "public/pdf/SFN_FinalPoster.pdf",
                    hash: "#Pub1"
                },
                {
                    title: "Long term in vivo one-photon Ca2+ imaging of taste-responsive cells in the parabrachial pons in the awake freely licking rat",
                    type: "Conference Presentation",
                    description: "We used one-photon in vivo Ca2+ imaging to track the activity of a single population of parabrachial neurons over months.",
                    date: "July. 2022",
                    link: "/public/pdf/SFN_FinalPoster.pdf",
                    hash: "#Pub2"

                },
                {
                    title: "Sprague Dawley Rats Gaining Weight on a High Energy Diet Exhibit Damage to Taste Tissue Even after Return to a Healthy Diet",
                    type: "Journal Article",
                    description: "Collectively, this paper argues that DIO has lasting deleterious effects on the peripheral taste system, despite a change from a HED to a healthy diet, underscoring the idea that obesity rather than diet predicts damage to the taste system.",
                    date: "Aug. 2021",
                    link: "https://pubmed.ncbi.nlm.nih.gov/34578940/",
                    hash: "#Pub3"
                },
            ],
        };
    },
    components: { SmallHeader, GitHubIcon, TwitterIcon, LinkedInIcon, LinkIcon }
});
</script>

<style scoped>
.publication-container {
    max-width: 75vw;
    margin-top: 5rem;
    margin-bottom: 16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    align-self: center;
}

.links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.publications {
    padding: 2rem;
}

.title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
}

.publication-list {
    overflow-y: auto;
    max-height: calc(100vh - 4rem);
    max-width: calc(100vw - 20rem);
    padding-right: 1rem;
}

.publication-item {
    margin-bottom: 2rem;
    margin-top: 2rem;
}
</style>
