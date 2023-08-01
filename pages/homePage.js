class HomePage {
    constructor(page) {

        //Locators
        this.page = page;
        this.username_textbox = page.getByLabel('Username');
        this.password_textbox = page.getByLabel('Password');
        this.login_button = page.getByRole('button', { name: 'Login' });
        this.successMessage = page.getByText('You logged into a secure area!');
        this.logout_button = page.locator("//a[@class='button secondary radius']");
        this.logout_successMessage = page.getByText('You logged out of the secure area!');
    }

        //Methods
    async navigate (){
        await this.page.goto('https://the-internet.herokuapp.com/login');

    }

    async login (username, password){

        await this.username_textbox.type(username);
        await this.password_textbox.type(password);
        await this.login_button.click();
        
        
    }

    async logout (){
        await this.logout_button.click();
    }

} 
export default HomePage