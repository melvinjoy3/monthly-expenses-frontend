import Block from "@/components/block/Block";

const MainLayout = () => {
  return (
    <Block>
      <div className="grid grid-flow-col grid-rows-4 gap-4">
        <div className="max-w-64">
          <Block>
            <div className="flex flex-col">
              <span>Income</span>
              <span>$5500</span>
            </div>
          </Block>
        </div>
        <div className="max-w-64">
          <Block>
            <div className="flex flex-col">
              <span>Expenses</span>
              <span>$5500</span>
            </div>
          </Block>
        </div>
        <div className="max-w-64">
          <Block>
            <div className="flex flex-col">
              <span>Balance</span>
              <span className="text-green-500">$5500</span>
            </div>
          </Block>
        </div>
        <div className="row-span-3">
          <div className="row-start-2">
            <Block />
          </div>
        </div>
        <div className="row-span-3">
          <Block />
        </div>
      </div>
    </Block>
  );
};

export default MainLayout;
