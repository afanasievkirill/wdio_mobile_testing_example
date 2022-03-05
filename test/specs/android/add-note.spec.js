describe('Add Notes', () => {
	it('Skip tutorial', async () => {
		await $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]',
		).click();
		await expect($('//*[@text="Add note"]')).toBeDisplayed;
	});

	it('Add note, save changes, verify note', async () => {
		await $('//*[@text="Add note"]').click();
		await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]').click();
		await expect($('//*[@text="Editing"]')).toBeDisplayed;

		await $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]',
		).addValue('Title');
		await $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]',
		).addValue('First element\nSecond element');

		await driver.back();
		await driver.back();

		await expect($('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]'))
			.toBeDisplayed;
		await expect(
			$('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]'),
		).toHaveText('First element\nSecond element');
	});
});
