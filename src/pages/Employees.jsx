import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective,Search ,Resize, Sort,Toolbar, ContextMenu, Filter, Page, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        width='auto'
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={ ['Search']}
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort,Toolbar, Search,ContextMenu, Filter, Page, Edit]} />
      </GridComponent>
    </div>
  );
};
export default Employees;