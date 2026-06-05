// 4. Fixtures
// “I used fixtures for reusable setup and object initialization to reduce repeated code.”
// Example:
// •	Browser/page setup 
// •	Login before tests 
// •	Common test data 
// •	request



import { test as base } from '@playwright/test';
import { LoginPage} from '../pages/Loginpage';

type MyFixtures = {
  loginPage: LoginPage;
};

export const test = base.extend<MyFixtures>({
  loginPage: async ({page}, use) => {
    await use(new LoginPage(page));
  }
});

export { expect } from '@playwright/test';