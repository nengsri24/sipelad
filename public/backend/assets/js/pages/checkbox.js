/* ------------------------------------------------------------------------------
 *
 *  # Checkboxes and radios
 *
 *  Demo JS code for form_checkboxes_radios.html page
 *
 * ---------------------------------------------------------------------------- */


// Setup module
// ------------------------------

var InputsCheckboxesRadios = function () {


	//
	// Setup components
	//

	// Uniform
	var _componentUniform = function () {
		if (!$().uniform) {
			console.warn('Warning - uniform.min.js is not loaded.');
			return;
		}

		// Default initialization
		$('.form-check-input-styled').uniform();


		//
		// Contextual colors
		//

		// Primary
		$('.form-check-input-styled-primary').uniform({
			wrapperClass: 'border-primary-600 text-primary-800'
		});

		// Danger
		$('.form-check-input-styled-danger').uniform({
			wrapperClass: 'border-danger-600 text-danger-800'
		});

		// Success
		$('.form-check-input-styled-success').uniform({
			wrapperClass: 'border-success-600 text-success-800'
		});

		// Warning
		$('.form-check-input-styled-warning').uniform({
			wrapperClass: 'border-warning-600 text-warning-800'
		});

		// Info
		$('.form-check-input-styled-info').uniform({
			wrapperClass: 'border-info-600 text-info-800'
		});

		// Custom color
		$('.form-check-input-styled-custom').uniform({
			wrapperClass: 'border-indigo-600 text-indigo-800'
		});
	};

	// Bootstrap switch
	var _componentBootstrapSwitch = function () {
		if (!$().bootstrapSwitch) {
			console.warn('Warning - switch.min.js is not loaded.');
			return;
		}

		// Initialize
		$('.form-check-input-switch').bootstrapSwitch();
	};


	//
	// Return objects assigned to module
	//

	return {
		initComponents: function () {
			_componentUniform();
			_componentBootstrapSwitch();
		}
	}
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function () {
	InputsCheckboxesRadios.initComponents();
});
