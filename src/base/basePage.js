class BasePage {

    constructor(page) {
        this.page = page;
    }

    /**
     * Open base url from configfile.
     */
    async openUrl() {
        await this.page.goto('/');
    };

    /**
     * Clicks an element on the page.
     */
    async clickElement(selector) {
        try {
            await this.page.waitForSelector(selector);  // Wait until the element is available
            await this.page.click(selector);            // Click the element
            console.log(selector + ' successfully clicked.');
        
        } catch (error) {
            console.log(error);
            console.log("Element not clicked " + selector);
        }
    };

    /**
     * Inputs a value into an input field. 
     */
    async inputValue(selector, value) {
        try {
            await this.page.waitForSelector(selector);  // Wait until the element is available
            await this.page.fill(selector, value);      // Fill the input field with the value
            console.log("Successfully to enter value " + value + " in element " + selector);

        } catch (error) {
            console.log(Error);
            console.log("Failed to enter value " + value + " in element " + selector);
        }
    };

    // Add more reusable methods as needed
}
export default BasePage;