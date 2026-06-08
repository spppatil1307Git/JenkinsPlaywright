// import { test, expect } from '@playwright/test';
// import { LoginPage } from '../pages/LoginPage';
// import testData from '../utils/testData.json';

// test('TC001_login', async ({ page }) => {

//   const loginPage = new LoginPage(page);
//   await loginPage.navigate(testData.url);
//   await loginPage.login(testData.username, testData.password);
//   await expect(page).toHaveTitle('Online Courses with Certifications For Your Career Development');
// });

import { expect, test } from '@playwright/test';
import {LoginPage} from '../pages/Loginpage'  ;
import testData from '../utils/testData.json';

test.describe('Login Module', () => 

    test('TC001 - Verify user login', async ({ page }) => {

        const loginPage = new LoginPage(page);

        // Navigate to application
        await loginPage.navigate(testData.url);

        // Login
        await loginPage.login(
            testData.username,
            testData.password
        );

        // Verification
        await expect(page).toHaveTitle(
            'Time Dashboard'
        );
    })
);

  