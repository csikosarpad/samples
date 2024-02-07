import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DataTable, {
  TableProps,
  ExpanderComponentProps,
} from 'react-data-table-component';
import { fetchData } from '../redux/dataSlice.ts';

type DataRow = {
  postId: string;
  id: string;
  name: string;
  email: string;
  body: string;
};

const tableColumns = [
  {
    name: 'PostID',
    selector: (row) => row.postId,
    sortable: true,
    minWidth: '80px',
    maxWidth: '3%',
  },
  {
    name: 'ID',
    selector: (row) => row.id,
    sortable: true,
    minWidth: '60px',
    maxWidth: '3%',
  },
  {
    name: 'Name',
    selector: (row) => row.name,
    sortable: true,
    minWidth: '10%',
    maxWidth: '15%',
  },
  {
    name: 'E-mail',
    selector: (row) => row.email,
    sortable: true,
    minWidth: '10%',
    maxWidth: '15%',
  },
  {
    name: 'Body',
    selector: (row) => row.body,
    sortable: true,
    minWidth: '30%',
    maxWidth: '45%',
  },
  {
    name: 'Words in body',
    selector: (row) => row.body.trim().split(/\s+/).length,
    sortable: true,
    minWidth: '4%',
    maxWidth: '140px',
  },
];

const DashboardPage = () => {
  const options = {};
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state);
  const [dataLoading, setDataLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  useEffect(() => {
    switch (status) {
      case 'failed':
        setFetchError(error);
        break;
      case 'loading':
        setDataLoading(true);
        break;
      case 'succeeded':
        setDataLoaded(true);
        break;
    }
  }, [status]);

  const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({
    data,
  }) => {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  };

  //const TableComponent = () => {
  function TableComponent<T>(props: TableProps<T>): JSX.Element {
    return (
      <DataTable
        columns={tableColumns}
        data={data}
        pagination
        fixedHeader
        theme="dark"
        highlightOnHover
        pointerOnHover
        expandableRows
        expandableRowsComponent={ExpandedComponent}
        {...props}
      />
    );
  }

  return (
    <main>
      {dataLoading && !dataLoaded && (
        <div className="loading-content">
          <p>Please wait, data is being retrieved</p>
          <div className="loader"></div>
        </div>
      )}
      {dataLoaded && (
        <>
          <h2>Dashboard</h2>
          <TableComponent />
        </>
      )}
      {fetchError && <div>{JSON.stringify(fetchError, null, 2)}</div>}
    </main>
  );
};

export default DashboardPage;
