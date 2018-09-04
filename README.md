
# Modal Component

Modal component for React

Install and save component as a dependency

```

npm install --save library-modal-component

```

Import component into your app

```

import ModalComponent from 'library-modal-component'

```

Create the function that will handle the modal confirm

```

handleModalConfirm (event, modalId) {
	document.getElementById(modalId).click()
}

```

Render the component with the functions we created as well as any other props that are needed

```

render () {
	return (
		<ModalComponent
			modalTheme="light"
			modalId="modalId"
			modalTitle="Modal title"
			modalBody="Modal body"
      modalCloseText="Close"
			modalClose="closeModal"
      modalConfirmText="Confirm"
			handleModalConfirm={this.handleModalConfirm.bind(this)} />
	)
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