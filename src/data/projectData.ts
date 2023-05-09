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
        description: `
            <p class="project-text-inner">
            A downloadable plugin for
            <a href="https://www.rocketleague.com/">RocketLeague</a> that allows the direct
            manipulation
            of
            in-game servers. Written in C/C++, users use a built-in GUI that provides additional
            functionality
            within Rocket League.
            </p>
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
        description: `
      <p class="text-lg text-white">
                        <ul class="text-white">
                            <li>Syncing traces with externally captured GPIO events.</li>
                            <li> Plotting: animated, 2D and 3D scatter, regression, skree, heatmap and
                                correlation
                                matrix.</li>
                            <li> Dimensionality reduction with variance filters and principal component
                                analysis.
                            </li>

                        </ul>
                        </p>
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
        description: `
      <p class="ml-8 mr-8 text-lg text-white">
                                Classification of neural signals into 5 categories: <br>

                            <ul>
                                <li>
                                    Artificial Salive
                                </li>
                                <li>
                                    Sucrose
                                </li>
                                <li>
                                    Quinine
                                </li>
                                <li>
                                    Citric Acid
                                </li>
                                <li>
                                    NaCl
                                </li>

                                Support vector machine, Recurrent NN, and Concurrent NN.
                            </ul>

                            </p>
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
        description: `
     <p class="text-lg text-white"> </p>
                            Locally hosted web server for data sharing, visualization, and analysis. <br>

                            Built with Python, Flask, and Plotly.js. <br>
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
        description: `
    <p class="ml-8 mr-8 text-lg text-white">
                            <h3> Source code for this Website Portfolio </h3>
                            </p>
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


