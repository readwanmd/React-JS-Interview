import ShowItem from './ShowItem';

/* eslint-disable react/prop-types */
const Folder_ = ({ explorerData, onDelete, parentId, handleAdd }) => {
	const rootFolder = explorerData[0];
	const items = rootFolder.items;

	return (
		<div>
			{items.map((itemId) => (
				<ShowItem
					key={itemId}
					id={itemId}
					folderById={explorerData}
					onDelete={onDelete}
					parentId={parentId}
					handleAdd={handleAdd}
				/>
			))}
		</div>
	);
};
export default Folder_;
