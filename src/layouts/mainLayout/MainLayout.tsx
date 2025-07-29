import Block from "@/components/block/Block";
import DonutChart from "@/components/donutChart/DonutChart";
import LineChart from "@/components/lineChart/LineChart";

const MainLayout = () => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left column - Summary cards */}
        <div className="flex flex-col gap-4">
          <Block>
            <div className="flex flex-col">
              <span className="text-gray-600 text-sm">Income</span>
              <span className="text-2xl font-bold">$5500</span>
            </div>
          </Block>
          <Block>
            <div className="flex flex-col">
              <span className="text-gray-600 text-sm">Expenses</span>
              <span className="text-2xl font-bold">$3200</span>
            </div>
          </Block>
          <Block>
            <div className="flex flex-col">
              <span className="text-gray-600 text-sm">Balance</span>
              <span className="text-2xl font-bold text-green-500">$2300</span>
            </div>
          </Block>
        </div>

        {/* Middle column - Donut Chart */}
        <div>
          <Block className="flex justify-center items-center">
            <DonutChart />
          </Block>
        </div>

        {/* Right column - Line Chart */}
        <div>
          <Block>
            <LineChart
              data={[12, 19, 3, 5, 2, 3]}
              labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
            />
          </Block>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
