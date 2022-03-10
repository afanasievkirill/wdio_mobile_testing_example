import { AddNote } from '../../screens/android/add-note.screen';
import { HomeScreen } from '../../screens/android/home.screen';

describe('Add Notes', () => {
	it('Skip tutorial', async () => {
		await AddNote.skipButton.click();
		await expect(AddNote.addNoteText).toBeDisplayed();
	});

	it('Add note, save changes, verify note', async () => {
		await AddNote.addNoteText.click();
		await AddNote.selectTextType.click();
		await expect(AddNote.editTitle).toBeDisplayed();

		await AddNote.addNoteTitle.addValue('Title');
		await AddNote.addNoteText.addValue('First element\nSecond element');

		await driver.back();
		await driver.back();

		await expect(AddNote.editButton).toBeDisplayed;
		await expect(AddNote.getNoteText).toHaveText('First element\nSecond element');
	});

	it('Delete note, check note in the trash can', async () => {
		const expectedText = await AddNote.selectNoteFromList.getText();
		await AddNote.selectNoteFromList.click();
		await AddNote.getNoteMoreActions.click();
		await AddNote.deleteNote.click();
		await driver.acceptAlert();
		await HomeScreen.getOptions.click();
		await $('//*[@text="Trash Can"]').click();
		const actualText = HomeScreen.getTrashCanElement.getText();
		expect(actualText).toHaveText(expectedText);
	});
});
