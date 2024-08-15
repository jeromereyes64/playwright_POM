import { test, expect } from '@playwright/test';
import LoginPage from '../../pages/loginPage/loginPage';
 
test('Sign in to Sauce Demo Website', async ({page}) => {
   const loginPage = new LoginPage(page);
   await loginPage.signInValidUser();
});