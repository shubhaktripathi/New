import { createElement } from 'lwc';
import SalesForceMapMyLocation from 'c/salesForceMapMyLocation';

describe('c-sales-force-map-my-location', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('TODO: test case generated by CLI command, please fill in test logic', () => {
        // Arrange
        const element = createElement('c-sales-force-map-my-location', {
            is: SalesForceMapMyLocation
        });

        // Act
        document.body.appendChild(element);

        // Assert
        // const div = element.shadowRoot.querySelector('div');
        expect(1).toBe(1);
    });
});