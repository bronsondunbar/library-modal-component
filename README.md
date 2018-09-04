
# Modal Component

Modal component for React

Install and save component as a dependency

```

npm install --save library-modal-component

```

Import component into your app

```

import Modal from 'library-modal-component'

```

Create the function that will handle the modal confirm

```

handleButtonClick(event) {
	this.setState ({
		buttonAction: 'Click'
	});
}

```



| Prop             | Values                      |
| :--------------- | :-------------------------- |
| modalTheme       | light or dark               |
| modalId          | String                      |
| modalTitle       | String                      |
| modalBody        | String                      |
| modalCloseText   | String                      |
| modalClose       | String                      |
| modalConfirmText | String                      |
| modalConfirm     | handleModalConfirm function |