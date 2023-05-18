import { ref, computed } from 'vue'
import type { Ref } from 'vue';

export interface ProjectFile {
    path: string;
    filename?: string;
    language?: string;
    type: string,
    title: string,
    content?: Ref<string>;
}

export interface Project {
    repo: string;
    abbrev: string;
    description: string;
    shortlink?: string | null;
    fulllink?: string | null;
    source: string;
    sourcetype: string;
    activeTab: Ref<number>;
    languages: string[];
    subfolder: string[];
    files: ProjectFile[];
}

const allProjects: Project[] = [
    {
        repo: "PremierSuite",
        abbrev: "Ps",
        description: `
            A downloadable plugin for
            <a href="https://www.rocketleague.com/">RocketLeague</a> that allows the direct
            manipulation
            of
            in-game servers. Written in C/C++, users use a built-in GUI that provides additional
            functionality
            within Rocket League.
        `,
        languages: ["cpp", "c"],
        source: "/movies/PremierSuiteExample.mp4",
        sourcetype: "video",
        subfolder: ["languages", "languages"],
        activeTab: ref(0),
        files: [
            {
                path: "PremierSuite/PremierSuite.cpp",
                title: "Main Logic",
                type: "Class"
            },
            {
                path: "PremierSuite/Helpers.cpp",
                title: "Parsers and Helpers",
                type: "Functions"
            },
            {
                path: "PremierSuite/logging.h",
                title: "Logging Utility",
                type: "Struct"
            },
        ],
    },
    {
        repo: "canalysis",
        abbrev: "Ca",
        description: `
        <p>Syncing calcium traces with externally captured events.</p>
        <p class=my-4>
        Plotting: animated, 2D and 3D scatter, regression, skree, 2D and surface heatmap, correlation matrix, and many more.
        Data analysis: PCA, variance filtering, spectrogram, spike rate, spike inference, regression, and many more.
        </p>
        This Python package is very object oriented and modular.    
    `,
        languages: ["py", "cpp", "c"],
        source: "https://i.imgur.com/SPok8sB.gif",
        sourcetype: "image",
        subfolder: ["languages", "languages", "languages"],
        activeTab: ref(0),
        files: [
            {
                path: "canalysis/__init__.py",
                title: "Initialization",
                type: "Module"
            },
            {
                path: "canalysis/data/containers/calcium_data.py",
                title: "Data Container",
                type: "Class"
            },
            {
                path: "canalysis/data/data_utils/file_handler.py",
                title: "Directory Management",
                type: "Class"
            },
            {
                path: "canalysis/helpers/funcs.py",
                title: "Helper Functions",
                type: "Module"
            },
        ],
    },
    {
        repo: "time-series-network",
        abbrev: "tsn",
        description: `
            Primary classification of neural signals into 5 event categories. <br />
            Our goal here was to take neural signals, and see if they elicit a response that can be detected by a machine learning algorithm.
            We used a support vector machine, recurrent neural network, and a concurrent neural network to classify the signals into 5 event categories.
            <br />
            The concurrent neural network was the most successful, with an accuracy of 0.98.
            The recurrent neural network was the least successful, with an accuracy of 0.78.
            The support vector machine was in the middle, with an accuracy of 0.88.
             <br >
            All of these models were trained on the same data, and tested on the same data. <br />
            The data was split into 80% training, 20% testing. <br />
            The code shown is mostly templates for the SVM, the rest will be added after publication. 
            <br />
    `,
        languages: ["py"],
        source: "",
        sourcetype: "",
        subfolder: ["languages"],
        activeTab: ref(0),
        files: [
            {
                path: "tsn/SVM.py",
                title: "SVM",
                type: "Class"
            },
            {

                path: "tsn/datahandler.py",
                title: "Data Container",
                type: "Class"
            },
            {
                path: "tsn/scores.py",
                title: "Accuracy Scores",
                type: "Class"
            },
            {
                path: "tsn/utils/_validate.py",
                title: "Data Validation",
                type: "Module"
            },
        ],
    },
    {
        repo: "web-dataviewer",
        abbrev: "w-dv",
        description: `
            Locally hosted web server for data sharing, visualization, and analysis. <br>
            Built with Python, Flask, and Plotly.js. <br>
            This tool allows users to upload data, and view it in a variety of ways. <br>
            The data can be viewed as a heatmap, scatter plot, 3D scatter plot or in its raw form. <br>
            The data can also be analyzed with a variety of tools, including PCA, variance filters, spectrogram, and displayed in an interactively embedded figure. <br>
    `,
        languages: ["py", "ts"],
        source: "",
        sourcetype: "",
        activeTab: ref(0),
        subfolder: ["languages", "languages"],
        files: [
            {
                path: "app/app.py",
                title: "Application",
                type: "Module"
            },
            {
                path: "app/static/js/canvas.js",
                title: "Canvas",
                type: "Composable"
            },
            {
                path: "app/static/js/sliders.js",
                title: "Sliders",
                type: "Component"
            },
        ],
    },
    {
        repo: "FlynnPortfolio",
        abbrev: "FP",
        description: `

        Source code for this Website Portfolio. <br>
        Made with Vue3, Typescript, TailwindCSS and Vuetify3. <br>
        This website is a single page application, with a variety of components. <br>
        The components are dynamically loaded, and the page is (lazily) rendered. <br>
        Not ideally responsive yet, but it's getting there. <br>
    `,
        languages: ["vue", "ts", "py", "html", "css"],
        source: "",
        subfolder: ["frameworks", "languages", "languages", "languages", "languages"],
        sourcetype: "",
        activeTab: ref(0),
        files: [
            {
                path: "src/composables/observers.ts",
                title: "Intersection Observers",
                type: "Composable"
            },
            {
                path: "src/firebase/firebase.ts",
                title: "Firebase",
                type: "Authentication"
            },
            {
                path: "src/api/openai.ts",
                title: "OpenAI API",
                type: "API"
            },
        ],
    },{
        repo: "neuroexplore",
        abbrev: "NX",
        description: `

        Electrophyiological time-series analysis tool. 
        Made with Python, this package runs statistical analysis on time-series data.
        The nature of the data is primarily neural signals with external stimuli.
        Heavily utilizes pandas, numpy, and scipy.
        Additionally provides a variety of visualization tools, including a heatmaps, spectrograms, and scatter plots.
    `,
        languages: ["py"],
        source: "",
        subfolder: ["frameworks"],
        sourcetype: "",
        activeTab: ref(0),
        files: [
            {
                path: "data_utils/neuron.py",
                title: "neuron",
                type: "Class"
            },
            {
                path: "data_utils/signals_stimuli.py",
                title: "signals",
                type: "Class"
            },
            {
                path: "data_utils/data_collection.py",
                title: "collector",
                type: "Class"
            },
            {
                path: "helpers/plot.py",
                title: "plotter",
                type: "Module"
            },{
                path: "helpers/ax_helpers.py",
                title: "axe helpers",
                type: "Module"
            },
        ],
    },
    {
        repo: "web-dataviewer",
        abbrev: "w-dv",
        description: `
            Locally hosted web server for data sharing, visualization, and analysis. <br>
            Built with Python, Flask, and Plotly.js. <br>
            This tool allows users to upload data, and view it in a variety of ways. <br>
            The data can be viewed as a heatmap, scatter plot, 3D scatter plot or in its raw form. <br>
            The data can also be analyzed with a variety of tools, including PCA, variance filters, spectrogram, and displayed in an interactively embedded figure. <br>
    `,
        languages: ["py", "ts"],
        source: "",
        sourcetype: "",
        activeTab: ref(0),
        subfolder: ["languages", "languages"],
        files: [
            {
                path: "app/app.py",
                title: "Application",
                type: "Module"
            },
            {
                path: "app/static/js/canvas.js",
                title: "Canvas",
                type: "Composable"
            },
            {
                path: "app/static/js/sliders.js",
                title: "Sliders",
                type: "Component"
            },
        ],
    },
    {
        repo: "FlynnPortfolio",
        abbrev: "FP",
        description: `

        Source code for this Website Portfolio. <br>
        Made with Vue3, Typescript, TailwindCSS and Vuetify3. <br>
        This website is a single page application, with a variety of components. <br>
        The components are dynamically loaded, and the page is (lazily) rendered. <br>
        Not ideally responsive yet, but it's getting there. <br>
    `,
        languages: ["vue", "ts", "py", "html", "css"],
        source: "",
        subfolder: ["frameworks", "languages", "languages", "languages", "languages"],
        sourcetype: "",
        activeTab: ref(0),
        files: [
            {
                path: "src/composables/observers.ts",
                title: "Intersection Observers",
                type: "Composable"
            },
            {
                path: "src/firebase/firebase.ts",
                title: "Firebase",
                type: "Authentication"
            },
            {
                path: "src/api/openai.ts",
                title: "OpenAI API",
                type: "API"
            },
        ],
    },{
        repo: "metric-space-analysis",
        abbrev: "msa",
        description: `

        Analysis of the metric spaces occupied by neural recordings, and their properties.
        People think of an "active brain" as one with many neurons with high firing rates.
        This aims to quantify the distance between "spikes"/action-potentials or neuronal firing. 
        This is an adaptation of the <a href=https://pubmed.ncbi.nlm.nih.gov/?Db=pubmed&Cmd=ShowDetailView&TermToSearch=9705450> Victor Purpura Method </a> for multi-neuron spike-train metrics. 

        See: <a href=https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2782407/> A new multi-neuron spike train metric </a>

        Victor, J. D., and Purpura, K. P. (1998). doi: 10.1152/jn.1998.80.2.554
        Adapted from original work by Alex Denmen. 
    `,
        languages: ["py", "c"],
        source: "",
        subfolder: ["frameworks"],
        sourcetype: "",
        activeTab: ref(0),
        files: [
            {
                path: "data_utils/neuron.py",
                title: "neuron",
                type: "Class"
            },
            {
                path: "data_utils/signals_stimuli.py",
                title: "signals",
                type: "Class"
            },
            {
                path: "data_utils/data_collection.py",
                title: "collector",
                type: "Class"
            },
            {
                path: "helpers/plot.py",
                title: "plotter",
                type: "Module"
            },{
                path: "helpers/ax_helpers.py",
                title: "axe helpers",
                type: "Module"
            },
        ],
    },
];

function extractNameAndType(str: string) {
  const segments = str.split('/');
  const filename = segments[segments.length - 1];
  const parts = filename.split('.');
  const name = parts[0];
    let ext = parts[parts.length - 1];
    if (ext === 'h') { 
        ext = 'cpp';
    }
  return { name, ext };
}

const get_shortlink = computed(() => (repo: string) => ( `NeuroPyPy/${repo}`));
const get_longlink = computed(() => (repo: string) => (`https://github.com/NeuroPyPy/${repo}`));

export const projects: Project[] = (() => {
    allProjects.forEach((project) => {
    
        (project as Project).shortlink = get_shortlink.value(project.repo);
        (project as Project).fulllink = get_longlink.value(project.repo);

        (project as Project).files.forEach((file) => {
            const { name, ext } = extractNameAndType(file.path);
            file.language = ext;
            file.filename = name;
            file.content = ref('');
        });
  });
  return allProjects as Project[];
})();


