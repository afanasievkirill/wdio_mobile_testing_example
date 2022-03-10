class HomeScreen {
	get getOptions() {
		return $('//android.widget.FrameLayout[@content-desc="More"]/android.widget.ImageView');
	}

	get getTrashCan() {
		return $('//*[@text="Trash Can"]');
	}

	get getTrashCanElement() {
		return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]');
	}
}

export default new HomeScreen();
