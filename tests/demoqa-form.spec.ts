import {test, expect} from '@playwright/test';

test('Playwright E2E UI Automation - Demoqa form' , async ({  page}) => {

    //Step 1: Launch demoqa.com
    await page.goto('https://demoqa.com/qutomation-practice-form');

    //Step 2: Enter required details
    await page.fill('#firstName' , 'Varshitha');
    await page.fill('#lastName' , 'Govada');
    await page.fill('#userEmail' , 'varshitha@test.com');

    await page.locator('label[for="gender-radio-2"]').click(); //Female
    await page.fill('#userNumber' , '9876543210');

    //Date of Birth
    await page.click('#dateOfBirthInput');
    await page.selectOption('.react-datepicker__month-select' , 'May');
    await page.selectOption('.react-datepicker__year-select' , '2026');
    await page.click('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)');

    //Subject
    await page.fill('#subjectInput' , 'Maths');
    await page.keyboard.press('Enter');

    //Hobby
    await page.locator('label[for="hobbies-checkbox-2"]').click(); //Reading

    //Address
    await page.fill('#currentAddress', 'Hyderabad, Telangana');

    //State and City
    await page.click('#state');
    await page.click('text = NCR');
    await page.click('#city');
    await page.click('text = Delhi');

    //Submit
    await page.click('#submit');

    //Validations
    const modal = page.locator('.modal-content');
    await expect(modal).toBeVisible();

    const resultText = await modal.innerText();

    //Console page
    console.log('----- PLAYWRIGHT TASK RESULT -----');
    console.log(resultText);
    console.log('-----------------------------------');

    //Assertions
    await expect(resultText).toContain('Varshitha Govada');
    await expect(resultText).toContain('varshitha@test.com');
    await expect(resultText).toContain('Female');
    await expect(resultText).toContain('9876543210');
    await expect(resultText).toContain('28 May,2026');
    await expect(resultText).toContain('Maths');
    await expect(resultText).toContain('Reading');
    await expect(resultText).toContain('NCR Delhi');
});