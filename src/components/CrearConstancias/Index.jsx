import Botones from "./Botones";
import SectionTitle from "./SectionTitle";
import FiltradorDC3 from "./FiltradorDC3";
import FiltradorIKTAN from "./FiltradorIKTAN";
import ListDC3 from "./ListDC3";
import ListIKTAN from "./ListIKTAN";

const Index = () => {
  return (
    <>
      <SectionTitle />
      <Botones />
      <div className="mx-auto ">
        {/* Main 3 column grid */}
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-8">
          {/* Left column */}
          <div className="grid lg:col-span-1">
            <FiltradorDC3 />
            <ListIKTAN />
          </div>
          <div className="grid grid-cols-1 ">
            <FiltradorIKTAN />
            <ListDC3 />
            {/* Right column */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
