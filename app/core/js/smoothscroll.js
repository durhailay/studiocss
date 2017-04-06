export default function smoothScroll(scrollContainer: HTMLElement, scrollToEl: HTMLElement): void {
    let currentIteration: number = 0,
      from: number = scrollContainer.scrollTop,
      by: number = scrollToEl.offsetTop - scrollContainer.scrollTop;

    if (from > scrollToEl.offsetTop) {
        if (scrollToEl.offsetTop > scrollContainer.scrollHeight - scrollContainer.clientHeight) {
            by = (scrollContainer.scrollHeight - scrollContainer.clientHeight) - scrollContainer.scrollTop;
        }
    }
    let animIterations = Math.round(60 * 0.5);

    (function scroll(): void {
        let value = easeOutCubic(currentIteration, from, by, animIterations);
        scrollContainer.scrollTop = value;
        currentIteration++;
        if (currentIteration < animIterations) {
            requestAnimationFrame(scroll);
        }
    })();
}

function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
}
