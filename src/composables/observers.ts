/**
 * @function onIntersect
 * @param  {HTMLElement} elementToWatch     //elementToWatch
 * @param  {function} callback              //callback once element is intersecting
 * @param  {Boolen} once                    //if callback only run one time
 * @param  {Object} options                 //Intersection Observer API options
 * @return {type} observer
 */

interface onIntersect {
    elementToWatch: HTMLElement;
    callback: Function;
    once?: boolean;
    options?: number;
    outCallback: (el: HTMLElement) => void;
}

export const onIntersect = (
    elementToWatch: HTMLElement,
    elementToCross: HTMLElement,
    callback: Function,
    once = true
) => {
    const options = { threshold: 1.0, root: elementToCross };
    const observer = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            callback(entry.target);
            if (once) {
                observer.unobserve(entry.target);
            }
        }
    }, options);

    observer.observe(elementToWatch);
    return observer;
};
