config.routes = {
	'/users/login': ['users', 'login'],
	'/users/welcome': ['users', 'welcome'],
	'/users/join': ['users', 'join'],
	'/users/logout': ['users', 'logout'],

	'/spaces/([0-9a-f]+)': ['spaces', 'load'],

	'/boards': ['boards', 'index'],
	'/boards/([0-9a-f]+)/notes': ['boards', 'notes'],
	'/boards/share/([0-9a-f]+)': ['boards', 'sharing'],

	'/settings': ['settings', 'index'],
	'/settings/password': ['settings', 'password'],
	'/settings/delete-account': ['settings', 'delete_account'],

	'/sync': ['sync', 'index'],

	'/feedback': ['feedback', 'index'],

	'/': ['notes', 'index']
};

