const currentTime = new Date();
const year = currentTime.getFullYear();

const Footer = () => {
  return (
    <footer className="bg-[#232427] border-t border-[#3d3d3d]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
        <div className="py-8 text-sm text-[#cfcfcf] text-center sm:text-left">
          <span className="block sm:inline">&copy; {year} IKTAN Training.</span>{" "}
          <span className="block sm:inline">
            Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
