import BasePage from '../../base/basePage';

class LoginPage extends BasePage {

    constructor(page) {
        super(page);
        this.userNameField = '//input[@id="user-name"]';
        this.passwordField = '//input[@id="password"]';
        this.loginButton = '//input[@id="login-button"]';
    };

    async login(username, password) {
        await this.inputValue(this.userNameField, username);
        await this.inputValue(this.passwordField, password);
        await this.clickElement(this.loginButton);
    };

    async signInValidUser() {
        await this.openUrl();
        await this.login(process.env.STANDARD_USER, process.env.PASSWORD);
    };

}
export default LoginPage;