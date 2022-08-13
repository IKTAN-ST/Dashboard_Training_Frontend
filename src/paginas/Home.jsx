import Announcements from "../components/Announcements";
import Hires from "../components/Hires";
import ListadoPanelEv from "../components/ListadoPanelEv";
import PanelUser from "../components/PanelUser";

function Home() {
  return (
    <>
      <main className="bg-[#1e1f22] border-t-2 border-[#333333] -mt-24 pb-8">
        <div className="md:mt-10 max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="sr-only">Perfil</h1>
          {/* Main 3 column grid */}
          <div className="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 lg:gap-8">
            {/* Left column */}
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              {/* PRIMER PANEL */}
              <PanelUser />
              {/* Actions PANEL EDITABLE */}
              <ListadoPanelEv />
            </div>

            {/* Right column */}
            <div className="grid grid-cols-1 gap-4">
              {/* Announcements */}

              <Announcements />

              {/* Recent Hires */}

              <Hires />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
