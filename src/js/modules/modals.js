const modals = () => {
	/**
	 *
	 * @param trigger string button to show modal
	 * @param modal string modal block
	 * @param close string button close
	 */
	function bindTrigger(triggerSelector, modalSelector, closeSelector){
		const trigger = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalSelector);
		const close = document.querySelector(closeSelector);

		trigger.forEach((item) => {
			item.addEventListener('click', (e) => {
				if (e.target) {
					e.preventDefault();
				}
				modal.style.display = 'block';
				document.body.style.overflow = 'hidden';
			})
		});

		close.addEventListener('click', function (e) {
			if (e.target) {
				e.preventDefault();
			}
			modal.style.display = 'none';
			document.body.style.overflow = '';
		});

		modal.addEventListener('click', function (e) {
			if(e.target === modal){
				modal.style.display = 'none';
				document.body.style.overflow = '';
			}
		});
	}

	function showModalByTime(selector, time){
		setTimeout(function (){
			document.querySelector(selector).style.display = 'block';
		}, time);
	}

	bindTrigger('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
	bindTrigger('.phone_link', '.popup', '.popup .popup_close');
	showModalByTime('.popup', 3000);
};

export default modals;