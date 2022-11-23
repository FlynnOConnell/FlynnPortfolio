export const observeMutations = (
    targetNode: HTMLElement,
    callback: MutationCallback
) => {
    const config = { attributes: true, childList: true, subtree: true };
    const observer = new MutationObserver(callback);
    observer.observe(targetNode, config);
    return observer;
};
