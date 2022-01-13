function showModal(titleHtml, contentHtml, buttons) {

}

showModal("JustStreamIt", document.querySelector("modal_content"), [{

	label: "Close",
	onClick: () => {
		console.log("The button was clicked!");
	},
	triggerClose: true
}]);