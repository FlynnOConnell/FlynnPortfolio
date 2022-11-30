// path: ../src/directives/Tooltip/index.ts
const tooltipDirective = (app: {
    directive: (
        arg0: string,
        arg1: {
            mounted(el: any, binding: any): void;
            updated(el: any, binding: any): void;
        }
    ) => void;
}) => {
    app.directive('tooltip', {
        mounted(el: any, binding: any) {
            init(el, binding);
        },
        updated(el: any, binding: any) {
            init(el, binding);
        },
    });
};

function init(
    el: { setAttribute: (arg0: string, arg1: any) => void },
    binding: { arg: string; value: string }
) {
    let position = binding.arg || 'top';
    let tooltipText = binding.value || 'Tooltip text';
    el.setAttribute('position', position);
    el.setAttribute('tooltip', tooltipText);
}

export default tooltipDirective;
