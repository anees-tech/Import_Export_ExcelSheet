import ExportCSVdata from './ExportCSVdata';
import ImportCSVdata from './ImportCSVdata';
import Sidebar from './Sidebar'
const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "Arham ALI",
    job: "Manager",
    date: "23/04/18",
    id:1,
  },
  {
    name: "Arham ALI",
    job: "Manager",
    date: "23/04/18",
    id:2,
  },  {
    name: "Arham ALI",
    job: "Manager",
    date: "23/04/18",
    id:3,
  },  {
    name: "Arham ALI",
    job: "Manager",
    date: "23/04/18",
    id:4,
  },  {
    name: "Arham ALI",
    job: "Manager",
    date: "23/04/18",
    id:5,
  }, 
  
];

function Table() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-full w-full overflow-scroll flex-1 ml-60 p-6">
        <div className="flex"> 
          <h2 className=' text-3xl'>Users</h2>
          <div className="ml-auto">
            <ImportCSVdata />
            <ExportCSVdata data={TABLE_ROWS} filename={'exported-Data.csv'} />
          </div>
        </div>
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <h2 className=" font-bold leading-none opacity-70">{head}</h2>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(({ name, job, date, id }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={id}>
                  <td className={classes}>
                    <p className="font-normal">{name}</p>
                  </td>
                  <td className={classes}>
                    <p variant="small" color="blue-gray" className="font-normal">
                      {job}
                    </p>
                  </td>
                  <td className={classes}>
                    <p variant="small" color="blue-gray" className="font-normal">
                      {date}
                    </p>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>

  );
}

export default Table;