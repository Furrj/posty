import { h } from "start-dom-jsx";

function render(root: HTMLElement, ...els: JSX.Element[]): void {
    for (const el of els) {
        root.appendChild(el);
    }
}

export default render;
