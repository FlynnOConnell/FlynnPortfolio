import { defineStore, acceptHMRUpdate } from 'pinia';
import { shallowRef, ref, computed } from 'vue';

export const useExperienceContentStore = defineStore('experienceSidebarContent', () =>
{
    const isComponentLoaded = ref(false);
    const sidebarContent = shallowRef(null);

    const sidebarProps = ref({});
    const sidebarEventHandlers = ref({});
    const activeProjectId = ref("PremierSuite");

    function setActiveId (id: string) {
        activeProjectId.value = id;
    }

    async function loadComponent(componentName: string, props?: {}, eventHandlers?: {}) {
        try {
        // Load the component dynamically from the components directory
        const component = await import(`@/components/navigation/${componentName}.vue`);
            sidebarContent.value = component.default;
            sidebarProps.value = props || {};
            sidebarEventHandlers.value = eventHandlers || {};
            isComponentLoaded.value = true;
        } catch (error) {
        console.error(`Error loading component ${componentName}`, error);
        }
    }

     const loadedComponent = computed(() => {
         return sidebarContent.value || null;
     });
    
    const props = computed(() => { return sidebarProps.value || {}; });
    const eventHandlers = computed(() => { return sidebarEventHandlers.value || {}; });
    const getActiveId = computed(() => { return activeProjectId.value || ""; });

    acceptHMRUpdate(this, import.meta.hot);

     return {  isComponentLoaded, loadComponent, loadedComponent, props, eventHandlers, getActiveId, setActiveId }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useExperienceContentStore, import.meta.hot))
}