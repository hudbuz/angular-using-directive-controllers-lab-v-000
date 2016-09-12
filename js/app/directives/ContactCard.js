function ContactCard() {
	return {
		scope: {
			name: '=',
			email: '=',
			phone: '=',
			username: '='
		},
		controller: 'ContactController as ctrl',
		template: [
			'<div>',
				'<h4>Contact Card</h4>',
				'<label>Name:</label>',
				'{{ name }}',
				'<label>Email:</label>',
				'{{ email }}',
				'<label>Phone:</label>',
				'{{ phone }}',
				'<label>Username:</label>',
				'<span class="username">{{ username.split(" ").join("").toLowerCase() }}</span>',
			'</div>'
		].join(''),
		
		restrict: 'E'
	};
}

angular
	.module('app')
	.directive('contactCard', ContactCard);