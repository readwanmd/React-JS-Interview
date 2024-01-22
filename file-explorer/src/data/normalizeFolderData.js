const explorer = {
	0: { id: '0', name: 'root', isFolder: true, items: [1, 2, 4, 6] },
	1: { id: '1', name: 'public', isFolder: true, items: [] },
	2: { id: '2', name: 'src', isFolder: true, items: [3, 5, 10, 7] },
	3: { id: '3', name: 'App.js', isFolder: false, items: [] },
	4: { id: '4', name: 'Index.js', isFolder: false, items: [] },
	5: { id: '5', name: 'app.css', isFolder: false, items: [] },
	6: { id: '6', name: 'package.json', isFolder: false, items: [] },
	7: { id: '7', name: 'hooks', isFolder: true, items: [8, 9] },
	8: { id: '8', name: 'useSomething.js', isFolder: false, items: [] },
	9: { id: '9', name: 'useXyz.js', isFolder: false, items: [] },
	10: { id: '10', name: 'components', isFolder: true, items: [11, 12, 13] },
	11: { id: '11', name: 'Layout.js', isFolder: false, items: [] },
	12: { id: '12', name: 'Hero.js', isFolder: false, items: [] },
	13: { id: '13', name: 'Footer.js', isFolder: false, items: [] },
};

export default explorer;
