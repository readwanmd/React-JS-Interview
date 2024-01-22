# File Explorer [`🔗Live`](https://file-explorer-alpha.vercel.app/)

<details><summary>first approach with nested explorer data</summary>

```js
const explorer = {
	id: '1',
	name: 'root',
	isFolder: true,
	items: [
		{
			id: '2',
			name: 'public',
			isFolder: true,
			items: [
				{
					id: '3',
					name: 'public nested 1',
					isFolder: true,
					items: [
						{
							id: '4',
							name: 'index.html',
							isFolder: false,
							items: [],
						},
						{
							id: '5',
							name: 'hello.html',
							isFolder: false,
							items: [],
						},
					],
				},
				{
					id: '6',
					name: 'public_nested_file',
					isFolder: false,
					items: [],
				},
			],
		},
		{
			id: '7',
			name: 'src',
			isFolder: true,
			items: [
				{
					id: '8',
					name: 'App.js',
					isFolder: false,
					items: [],
				},
				{
					id: '9',
					name: 'Index.js',
					isFolder: false,
					items: [],
				},
				{
					id: '10',
					name: 'styles.css',
					isFolder: false,
					items: [],
				},
			],
		},
		{
			id: '11',
			name: 'package.json',
			isFolder: false,
			items: [],
		},
	],
};

export default explorer;
```

</details>
    
<details><summary>current approach with nested explorer data</summary>

```js
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
```

</details>
    
  


in first approach I use DFS algo to modify nested elements

with normalize data no complex algo is required to modify elements

1st approach is on <a href="[/src/old_App.jsx](/blob/main/file-explorer/src/old_App.jsx)">Here [old_App.jsx]</a>,
<a href="/src/components\Folder.jsx">Here [Folder.jsx]</a> & <a href="/src/hooks/useTraverseTree.js">Here [useTraverseTree.js]</a>

![Screenshot](/public/Screenshot.png)
