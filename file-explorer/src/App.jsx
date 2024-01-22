import { useState } from 'react';
import './App.css';
import Folder_ from './components/Folder_';
import explorer from './data/normalizeFolderData';

const App = () => {
	const [explorerData, setExplorerData] = useState(explorer);

	const handleDelete = (e, pId, cId) => {
		e.stopPropagation();

		const folderContainer = explorerData[pId];
		const nextParent = {
			...folderContainer,
			items: folderContainer.items.filter((id) => id != cId),
		};

		setExplorerData({
			...explorerData,
			[pId]: nextParent,
		});
	};

	const handleAdd = (e, id, parentId, isFolder, setShowInput) => {
		const folderContainer = explorerData[parentId];

		if (e.keyCode === 13 && e.target.value) {
			const newFolder = {
				id,
				name: e.target.value,
				isFolder,
				items: [],
			};

			const newExplorerData = {
				...explorerData,
				[id]: newFolder,
				[folderContainer.id]: {
					...folderContainer,
					items: [...folderContainer.items, id],
				},
			};

			setExplorerData(newExplorerData);

			setShowInput({
				visible: false,
				isFolder: null,
			});
		}
	};

	return (
		<div>
			<h1>File Explorer</h1>
			<Folder_
				explorerData={explorerData}
				onDelete={handleDelete}
				parentId={0}
				handleAdd={handleAdd}
			/>
		</div>
	);
};
export default App;
