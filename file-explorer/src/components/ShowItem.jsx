import { useState } from 'react';
import addFile from '/public/add-file.png';
import addFolder from '/public/add-folder.png';
import removeFile from '/public/delete-file.png';
import removeFolder from '/public/delete-folder.png';

/* eslint-disable react/prop-types */
const ShowItem = ({ id, folderById, onDelete, parentId, handleAdd }) => {
	const [expand, setExpand] = useState(false);
	const [showInput, setShowInput] = useState({
		visible: false,
		isFolder: null,
	});

	const item = folderById[id];

	const handleExpand = (e) => {
		e.stopPropagation();
		setExpand((prev) => !prev);
	};

	const handleNewFolder = (e, isFolder) => {
		e.stopPropagation();
		setExpand(true);
		setShowInput({ visible: true, isFolder });
	};

	const onAddFolder = (e) => {
		handleAdd(
			e,
			crypto.randomUUID(),
			item.id,
			showInput.isFolder,
			setShowInput
		);
	};

	if (item.isFolder) {
		return (
			<>
				<div className="folder" onClick={(e) => handleExpand(e)}>
					<span style={{ cursor: item.isFolder ? 'pointer' : '' }}>
						{expand ? '📂' : '📁'} {item.name}
					</span>

					<div className="actions">
						<button onClick={(e) => handleNewFolder(e, true)}>
							<img src={addFolder} width={20} />
						</button>
						<button onClick={(e) => handleNewFolder(e, false)}>
							<img src={addFile} width={20} />
						</button>
						<button onClick={(e) => onDelete(e, parentId, item.id)}>
							<img src={removeFolder} width={20} />
						</button>
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
					{item?.items.map((id) => (
						<ShowItem
							key={id}
							id={id}
							parentId={item.id}
							folderById={folderById}
							onDelete={onDelete}
							handleAdd={handleAdd}
						/>
					))}
				</div>
			</>
		);
	} else {
		return (
			<div className="file-group">
				<span className="file">📄 {item.name}</span>
				<button onClick={(e) => onDelete(e, parentId, item.id)}>
					<img src={removeFile} width={20} />
				</button>
			</div>
		);
	}
};
export default ShowItem;
