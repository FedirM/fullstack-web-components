
import { CardComponent } from "./Card";

export default {
    title: 'Components/Card',
    argTypes: {
        image: {
            control: { type: 'text' }
        },
        headline: {
            control: { type: 'text' }
        },
        content: {
            control: { type: 'text' }
        },
        link: {
            control: { type: 'text' }
        }
    }
}

const PrimaryTemplate = ({image, headline, content, link}) => `
<in-card>
    <img slot="header" src="${image}" />
    <h4 slot="header">${headline}</h4>
    <p slot="content">${content}</p>
    <a href="#" slot="footer">${link}</a>
</in-card>`;
export const ImageCard = PrimaryTemplate.bind({});



ImageCard.args = {
    image: "https://www.woodenspools.com/wp-content/uploads/2022/08/Screen-Shot-2022-08-27-at-10.39.47-AM-300x300.png",
    headline: 'Reader-b',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, qu is nostrud exercitation ullamco laboris nisi ut a liquip ex ea commodo consequat.',
    link: 'Read'
}