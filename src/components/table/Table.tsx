import React from "react";

interface TableProps {
  headers: string[];
  data: Array<Record<string, string | number>>;
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
        <thead className="bg-white-100 text-gray-900">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-2 border-b border-gray-200">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {headers.map((header) => (
                <td key={header} className="px-4 py-2 border-b border-gray-100">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
