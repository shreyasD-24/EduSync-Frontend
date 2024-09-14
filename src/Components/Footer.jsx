const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl lg:items-start lg:justify-start md:items-start md:justify-start flex items-center justify-center flex-col">
          <a className="block md:mx-auto mb-5 max-w-max text-center" href="#">
            <div className="font-spacegroteskbold lg:text-5xl md:text-4xl text-3xl text-left">
              Edusync
            </div>
          </a>
          <div className="flex flex-wrap text-center justify-center w-full">
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                href="/terms"
              >
                Terms
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                href="/privacy"
              >
                Privacy
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                href=""
              >
                Contact Us
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                href="/careers"
              >
                Careers
              </a>
            </div>
            <div className="w-full md:w-auto p-3 md:px-6">
              <a
                className="inline-block text-lg text-gray-500 hover:text-gray-600 font-spacegroteskmedium"
                href="/pricing"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-100" />
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-gray-400 font-spacegroteskmedium text-center">
          Copyright Edusync 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
