import Block from "@/components/block/Block";
import DonutChart from "@/components/donutChart/DonutChart";
import LineChart from "@/components/lineChart/LineChart";
import Table from "@/components/table/Table";
import {
  Tableheaders,
  Tabledata,
  monthOption,
  paymentOption,
  categoryOpion,
} from "@/constants/Constants";
import Dropdown from "@/components/dropDown/DropDown";

const MainLayout = () => {
  return (
    <div className="p-6 flex flex-col gap-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <Dropdown
          placeHolder="Select Month"
          options={monthOption}
          title={"Month"}
        />
        <Dropdown
          placeHolder="All"
          options={categoryOpion}
          title={"Category"}
        />
        <Dropdown placeHolder="All" options={paymentOption} title={"Payment"} />
      </div>
      <Block className="bg-[#faf9fb]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left column - Summary cards */}
          <div className="flex flex-col gap-4">
            <Block className="bg-[#fffeff]">
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm">Income</span>
                <span className="text-2xl font-bold">$5500</span>
              </div>
            </Block>
            <Block className="bg-[#fffeff]">
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm">Expenses</span>
                <span className="text-2xl font-bold">$3200</span>
              </div>
            </Block>
            <Block className="bg-[#fffeff]">
              <div className="flex flex-col">
                <span className="text-gray-600 text-sm">Balance</span>
                <span className="text-2xl font-bold text-green-500">$2300</span>
              </div>
            </Block>
          </div>
          {/* Middle column - Donut Chart */}
          <div>
            <Block className="bg-[#fffeff]">
              <DonutChart />
            </Block>
          </div>
          {/* Right column - Line Chart */}
          <div>
            <Block className="bg-[#fffeff]">
              <LineChart
                data={[12, 19, 3, 5, 2, 3]}
                labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
              />
            </Block>
          </div>
        </div>
      </Block>
      <div className="mt-10">
        <Block className="bg-[#faf9fb]">
          <h3 className="text-xl font-bold mb-4">Expenses list</h3>
          <Table headers={Tableheaders} data={Tabledata} />
        </Block>
      </div>
    </div>
  );
};

export default MainLayout;
