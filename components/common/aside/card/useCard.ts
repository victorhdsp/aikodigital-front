export function onMouseEnter(id: string) {
    const marks = document.querySelectorAll(`.mark-item`);
    const selectedMark = document.querySelector(`.mark-item-${id}`);

    marks.forEach((mark) => {
        if (mark !== selectedMark) {
            mark.classList.add('mark-item-unselected');
        }
    });
}

export function onMouseLeave() {
    const marks = document.querySelectorAll(`.mark-item`);
    marks.forEach((mark) => mark.classList.remove('mark-item-unselected'));
}