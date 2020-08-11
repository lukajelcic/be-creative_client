import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';


const CategoryParentItem = ({ categoryId }) => {
    return (
        <div>
            <TreeItem nodeId="1" label={categoryId}>
            </TreeItem>
        </div>
    )
}
export default CategoryParentItem;