import { useState } from 'react';
import './App.css';
import Folder from './components/Folder';
import explorer from './data/folderData';
import useTraverseTree from './hooks/useTraverseTree';

function App() {
	const [explorerData, setExplorerData] = useState(explorer);

	const { insertNode } = useTraverseTree();

	const handleInsertNode = (folderId, item, isFolder) => {
		const finalTree = insertNode(explorerData, folderId, item, isFolder);

		setExplorerData(finalTree);
	};

	return (
		<>
			<h1>File Explorer</h1>
			<Folder explorer={explorerData} handleInsertNode={handleInsertNode} />
		</>
	);
}

export default App;
