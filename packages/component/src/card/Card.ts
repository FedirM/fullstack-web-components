

export class CardComponent extends HTMLElement {

    private html: string = `
    <style>
        :host {
            display: block;
            background: var(--color-white);
            border-radius: var(--radius-md);
            box-shadow: var(--shadow);
            overflow: hidden;
            max-width: 320px;
        }
        
        ::slotted(*) {
            padding: 0 var(--padding-lg);
        }
        ::slotted(a:link), ::slotted(a:visited) {
            display: block;
        }
        ::slotted(:last-child) {
            padding-bottom: var(--margin-lg);
        }
        ::slotted(img) {
            width: 100%;
            padding: 0;
        }
        
    </style>
    
    
    <header><slot name="header"></slot></header>
    <section><slot name="content"></slot></section>
    <footer><slot name="footer"></slot></footer>
    `;

    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = this.html;
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}


customElements.define('in-card', CardComponent);