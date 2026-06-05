
// In automation frameworks using Playwright or Selenium, a Base Page is a common parent class 
// that contains reusable methods shared by all page classes.
// Instead of writing common actions again and again in every page, we keep them in one 
// central class called BasePage.
// Base Page helps to:
// •	Reduce duplicate code 
// •	Reuse common methods 
// •	Improve framework maintenance 
// •	Keep Page Object Model clean 
// •	Centralize browser actions 
// ________________________________________
// Common Methods Inside Base Page
// Usually contains methods like:
// •	click() 
// •	fill() 
// •	waitForElement() 
// •	getText() 
// •	scroll() 
// •	selectDropdown() 
// •	takeScreenshot() 
// •	hover() 
// •	page navigation methods



import { Page } from '@playwright/test';

export class BasePage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async click(locator: string) {
    await this.page.locator(locator).click();
  }

  async type(locator: string, value: string) {
    await this.page.locator(locator).fill(value);
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}