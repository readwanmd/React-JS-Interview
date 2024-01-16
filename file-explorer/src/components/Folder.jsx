import { useState } from 'react';

/* eslint-disable react/prop-types */
const Folder = ({ explorer, handleInsertNode }) => {
	const [expand, setExpand] = useState(false);
	const [showInput, setShowInput] = useState({
		visible: false,
		isFolder: null,
	});

	const handleNewFolder = (e, isFolder) => {
		e.stopPropagation();
		setExpand(true);
		setShowInput({ visible: true, isFolder });
	};

	const onAddFolder = (e) => {
		if (e.keyCode === 13 && e.target.value) {
			handleInsertNode(explorer.id, e.target.value, showInput.isFolder);

			setShowInput({ ...showInput, visible: false });
		}
	};

	if (explorer.isFolder) {
		return (
			<div style={{ marginTop: '5px' }}>
				<div className="folder" onClick={() => setExpand((prev) => !prev)}>
					<span>
						{expand ? '📂' : '📁'} {explorer.name}
					</span>

					<div className="actions">
						<button onClick={(e) => handleNewFolder(e, true)}>Add 📁</button>
						<button onClick={(e) => handleNewFolder(e, false)}>Add 📄</button>
					</div>
				</div>

				<div
					style={{ display: expand ? 'block' : 'none', paddingLeft: '27px' }}
				>
					{showInput.visible && (
						<div className="inputContainer">
							<span>{showInput.isFolder ? '📁' : '📄'}</span>
							<input
								type="text"
								className="inputContainer__input"
								onBlur={() => setShowInput({ ...showInput, visible: false })}
								onKeyDown={onAddFolder}
								autoFocus
							/>
						</div>
					)}
					{explorer.items.map((exp) => (
						<Folder
							key={exp.id}
							explorer={exp}
							handleInsertNode={handleInsertNode}
						/>
					))}
				</div>
			</div>
		);
	} else {
		return <span className="file">📄 {explorer.name}</span>;
	}
};
export default Folder;
