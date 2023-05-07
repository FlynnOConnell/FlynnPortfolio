export var sidebarObserver = function (
    toChange: HTMLElement,
    toWatch: any
): IntersectionObserverCallback {
    let direction = 'up';
    let prevYPosition = 0;

    const smallheader: any = toChange;
    const sections: any = toWatch;

    const changeHighlight = (selector: string): void => {
        const activelink = smallheader.querySelector(
            `[data-status="active"]`
        ) as HTMLElement;
        const currentlink = smallheader.querySelector(
            `[data-id="${selector}"]`
        ) as HTMLElement;
        activelink.dataset.status = 'inactive';
        currentlink.dataset.status = 'active';
        return;
    };

    const getTargetSection = (entry: any) => {
        const index = sections.findIndex(
            (section: any) => section == entry.target
        );

        if (index >= sections.length - 1) {
            return entry.target;
        } else {
            return sections[index + 1];
        }
    };

    const shouldUpdate = (entry: any) => {
        if (direction === 'down' && !entry.isIntersecting) {
            return true;
        }

        if (direction === 'up' && entry.isIntersecting) {
            return true;
        }
        return false;
    };

    const onIntersect = (entries: any[]) => {
        entries.forEach((entry: any) => {
            if (window.scrollY > prevYPosition) {
                direction = 'down';
            } else {
                direction = 'up';
            }
            prevYPosition = window.scrollY;

            const target =
                direction === 'down' ? getTargetSection(entry) : entry.target;

            if (shouldUpdate(entry)) {
                changeHighlight(target.dataset.id);
                console.log('changeHighlight', target.dataset.id);
            }
        });
    };
    return onIntersect;
};
