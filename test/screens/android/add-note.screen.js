class AddNote {
	get skipButton() {
		return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]');
	}

	get addNoteText() {
		return $('//*[@text="Add note"]');
	}

	get selectTextType() {
		return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/text"]');
	}

	get editTitle() {
		return $('//*[@text="Editing"]');
	}

	get addNoteTitle() {
		return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]');
	}

	get addNoteText() {
		return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]');
	}

	get editButton() {
		return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]');
	}

	get getNoteText() {
		return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]');
	}

	get selectNoteFromList() {
		return $('//*[@id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
	}

	get getNoteMoreActions() {
		return $('~More');
	}

	get deleteNote() {
		return $('//*[@text="Delete"]');
	}
}

export default new AddNote();
