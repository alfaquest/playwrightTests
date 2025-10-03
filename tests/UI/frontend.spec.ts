
import { test, expect } from '../../fixtures'

  test('Check Main page has expected title', async ({ testPageMain }) => {
    await testPageMain.goto();
    await expect(testPageMain.page).toHaveTitle('React App');
  });

    test('Check Main page has expected heading', async ({ testPageMain }) => {
    await testPageMain.goto();
    await expect(testPageMain.pageHeading).toHaveText('Charts');
  });

  test('Select Create a chart button, ensure resulting url is correct', async ({ testPageMain, testPageTwo }) => {
    await testPageMain.goto();
    await testPageMain.createChartButton.click();
    await expect(testPageTwo.page).toHaveURL('/Page2');
  });

  test('Select Create a chart button, ensure resulting message is correct', async ({ testPageMain, testPageTwo }) => {
    await testPageMain.goto();
    await testPageMain.createChartButton.click();
    await expect(testPageTwo.pageTwoInfo).toHaveText('This is chart creation page - nothing to see here though');
  });

  test('Select Create a chart button, ensure go back button contains expected text', async ({ testPageMain, testPageTwo }) => {
    await testPageMain.goto();
    await testPageMain.createChartButton.click();
    await expect(testPageTwo.goBackButton).toHaveText('Go back');
  });

  test('Select Create a chart button, ensure go back button is visible and on click returns user to Main page', async ({ testPageMain, testPageTwo }) => {
    await testPageMain.goto();
    await testPageMain.createChartButton.click();
    await testPageTwo.goBackButton.click();
    await expect(testPageMain.pageHeading).toHaveText('Charts');
  });

  test('Sort by Name, ensure list displays in ascending order', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.dateCreatedSort.click()
    await testPageMain.nameSort.click()
    await expect(testPageMain.listNameLineOne).toHaveText('Chart 1')
    await expect(testPageMain.listNameLineTwo).toHaveText('Chart 2')
    await expect(testPageMain.listNameLineThree).toHaveText('Chart 5')
    await expect(testPageMain.listNameLineFour).toHaveText('My awesome test 4')
    await expect(testPageMain.listNameLineFive).toHaveText('Test 3')
  });

  test('Sort by Name, ensure list displays in descending order', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.dateCreatedSort.click()
    await testPageMain.nameSort.click()
    await testPageMain.nameSort.click()
    await expect(testPageMain.listNameLineOne).toHaveText('Chart 1')
    await expect(testPageMain.listNameLineTwo).toHaveText('Chart 2')
    await expect(testPageMain.listNameLineThree).toHaveText('Chart 5')
    await expect(testPageMain.listNameLineFour).toHaveText('My awesome test 4')
    await expect(testPageMain.listNameLineFive).toHaveText('Test 3')
  });

  test('Sort by Date created, ensure list displays in ascending order', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.dateCreatedSort.click()
    await expect(testPageMain.listDateModifiedLineOne).toHaveText('29 Mar 2021')
    await expect(testPageMain.listDateModifiedLineTwo).toHaveText('31 May 2021')
    await expect(testPageMain.listDateModifiedLineThree).toHaveText('31 May 2021')
    await expect(testPageMain.listDateModifiedLineFour).toHaveText('13 Jul 2021')
    await expect(testPageMain.listDateModifiedLineFive).toHaveText('13 Sep 2021')
  });

  test('Sort by Date modified, ensure list displays in ascending order', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.dateModifiedSort.click()
    await expect(testPageMain.listDateModifiedLineOne).toHaveText('29 Mar 2021')
    await expect(testPageMain.listDateModifiedLineTwo).toHaveText('31 May 2021')
    await expect(testPageMain.listDateModifiedLineThree).toHaveText('31 May 2021')
    await expect(testPageMain.listDateModifiedLineFour).toHaveText('13 Jul 2021')
    await expect(testPageMain.listDateModifiedLineFive).toHaveText('13 Sep 2021')
  });

    test('Sort by Date created, ensure list displays in descending order', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.dateCreatedSort.click()
    await testPageMain.dateCreatedSort.click()
    await expect(testPageMain.listDateModifiedLineOne).toHaveText('13 Sep 2021')
    await expect(testPageMain.listDateModifiedLineTwo).toHaveText('13 Jul 2021')
    await expect(testPageMain.listDateModifiedLineThree).toHaveText('31 May 2021')
    await expect(testPageMain.listDateModifiedLineFour).toHaveText('31 May 2021')
    await expect(testPageMain.listDateModifiedLineFive).toHaveText('29 Mar 2021')
  });

  test('Sort by Date modified, ensure list displays in descending order', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.dateModifiedSort.click()
    await testPageMain.dateModifiedSort.click()
    await expect(testPageMain.listDateModifiedLineOne).toHaveText('13 Sep 2021')
    await expect(testPageMain.listDateModifiedLineTwo).toHaveText('13 Jul 2021')
    await expect(testPageMain.listDateModifiedLineThree).toHaveText('31 May 2021')
    await expect(testPageMain.listDateModifiedLineFour).toHaveText('31 May 2021')
    await expect(testPageMain.listDateModifiedLineFive).toHaveText('29 Mar 2021')
  });

  test('Search for "Chart", ensure list displays expected results', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.searchField.click()
    await testPageMain.searchField.fill('Chart')
    await expect(testPageMain.listNameLineOne).toHaveText('Chart 1')
    await expect(testPageMain.listNameLineTwo).toHaveText('Chart 2')
    await expect(testPageMain.listNameLineThree).toHaveText('Chart 5')
    await expect(testPageMain.listNameLineFour).not.toBeVisible()
    await expect(testPageMain.listNameLineFive).not.toBeVisible()
  });

  test('Search for "Test", ensure list displays expected results', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.searchField.click()
    await testPageMain.searchField.fill('Test')
    await expect(testPageMain.listNameLineOne).toHaveText('My awesome test 4')
    await expect(testPageMain.listNameLineTwo).toHaveText('Test 3')
    await expect(testPageMain.listNameLineThree).not.toBeVisible()
    await expect(testPageMain.listNameLineFour).not.toBeVisible()
    await expect(testPageMain.listNameLineFive).not.toBeVisible()
  });

  test('Search for "Awesome", ensure list displays expected results', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.searchField.click()
    await testPageMain.searchField.fill('Awesome')
    await expect(testPageMain.listNameLineOne).toHaveText('My awesome test 4')
    await expect(testPageMain.listNameLineTwo).not.toBeVisible()
    await expect(testPageMain.listNameLineThree).not.toBeVisible()
    await expect(testPageMain.listNameLineFour).not.toBeVisible()
    await expect(testPageMain.listNameLineFive).not.toBeVisible()
  });

  test('Search for "Tesst", ensure list displays expected results', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.searchField.click()
    await testPageMain.searchField.fill('Tesst')
    await expect(testPageMain.listNameLineOne).not.toBeVisible()
    await expect(testPageMain.listNameLineTwo).not.toBeVisible()
    await expect(testPageMain.listNameLineThree).not.toBeVisible()
    await expect(testPageMain.listNameLineFour).not.toBeVisible()
    await expect(testPageMain.listNameLineFive).not.toBeVisible()
  });

  test('Remove search text from input field, ensure list displays expected results', async ({ testPageMain }) => {
    await testPageMain.goto();
    await testPageMain.searchField.click()
    await testPageMain.searchField.fill('Tesst')
    await testPageMain.searchField.fill('')
    await expect(testPageMain.listNameLineOne).toBeVisible()
    await expect(testPageMain.listNameLineTwo).toBeVisible()
    await expect(testPageMain.listNameLineThree).toBeVisible()
    await expect(testPageMain.listNameLineFour).toBeVisible()
    await expect(testPageMain.listNameLineFive).toBeVisible()
  });
