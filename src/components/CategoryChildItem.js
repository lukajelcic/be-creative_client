import React from 'react';
import TreeItem from '@material-ui/lab/TreeItem';

const CategoryChildItem = ({ ideas }) => {
    return (
        <div>
            <TreeItem label={ideas}></TreeItem>
        </div>
    )
}
export default CategoryChildItem;