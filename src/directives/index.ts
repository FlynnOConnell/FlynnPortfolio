import tooltipDirective from './Tooltip/';

// register all directives
const directives = (app: {
    directive: (
        arg0: string,
        arg1: {
            mounted(el: any, binding: any): void;
            updated(el: any, binding: any): void;
        }
    ) => void;
}) => {
    tooltipDirective(app);
};

export default directives;
