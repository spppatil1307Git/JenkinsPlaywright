// import { BasePage } from './BasePage';

// export class LoginPage extends BasePage {

//   login_register_cta = '//span[text()="Login/Register"]'
//   username = "//input[@name='username_welcome_page']";
//   continuebtn1 = '//*[@id="start-login"]/button/span[1]'
//   password = "//input[@name='password_welcome_login']";
//   continuebtn2 = '//*[@id="user-login"]/div[2]/div/button'
// //   loginBtn = "//input[@name='Submit']";


//  async login(user: string, pass: string) {

//   await this.page.waitForSelector(this.login_register_cta);
//   await this.click(this.login_register_cta);

//   await this.page.waitForSelector(this.username);
//   await this.type(this.username, user);

//   await this.click(this.continuebtn1);

//   await this.page.waitForSelector(this.password);
//   await this.type(this.password, pass);

//   await this.click(this.continuebtn2);
// }
// }
import { expect } from '@playwright/test';
import { BasePage} from './BasePage';

export class LoginPage extends BasePage{

    // Locators using Playwright recommended methods

    loginRegisterBtn = this.page.getByRole('button', {
        name: 'Login/Register'
    });

    usernameInput = this.page.getByRole('textbox', {
        name: /Your Email id or Phone no/i
    });
    // i is case insensitive match, so it will match "Your Email id or Phone no", "your email id or phone no", etc.
    continueBtn = this.page.getByRole('button', {
        name: /^Continue$/
    });
//     // Why use ^ and $ ?
// /^Continue$/

// Means EXACT match only.

// Will match:
// ✔ Continue

    passwordInput = this.page.getByLabel(/Enter Password/i);

    closePopupBtn = this.page.getByRole('button', {
        name: /close/i
    });

    async login(username: string, password: string) {

        await this.loginRegisterBtn.click();

        await this.usernameInput.fill(username);

        await this.continueBtn.click();

        await this.passwordInput.fill(password);

        await this.continueBtn.click();

        // Optional popup close
        if (await this.closePopupBtn.isVisible()) {
            await this.closePopupBtn.click();
        }
    }

    async verifyHomePageTitle() {

        await expect(this.page).toHaveTitle(
            'Online Courses with Certifications For Your Career Development'
        );
    }
}