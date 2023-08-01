import { test, expect } from '@playwright/test';
import LoginPage from '../pages/login';
const data = require('../testData/testDate.json');
import HomePage from '../pages/homePage';

//const Login = new LoginPage(page);

test('Test LoginPage with Valid credentionals', async ({ page }) => {
   const Login = new LoginPage(page);
   await Login.navigate();
   await Login.login(data[0].username, data[0].password);
   expect(Login.successMessage).toBeTruthy();


}),

test('test logout', async({page})=>{
   const Login = new LoginPage(page);
   await Login.navigate();
   await Login.login(data[0].username, data[0].password);
   //Log out
   const Home = new HomePage(page);
   await Home.logout();
   expect(Login.logout_successMessage).toBeTruthy();

})




