import { SearchAlatIcons } from '../components/icon';

function InstallAppCTA() {
  return (
    <div className='flex flex-col items-center justify-center max-w-2xl w-full mx-auto rounded-2xl shadow-md bg-[#18486b] px-4 py-14 text-center'>
      {/* Shopify Icon */}
      <div className="flex justify-center my-4">
        <div className="bg-[#2d5c7f] rounded-full p-4 flex items-center justify-center">
          <SearchAlatIcons.Shopify width={22} height={22} />
        </div>
      </div>
      {/* Title */}
      <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
        1 - Click Publish to Shopify
      </h1>
      {/* Description */}
      <p className="text-white text-base mb-2">
        Install the SearchAtlas app to your Shopify store and Start Publishing
        content directly from the SEO Content Assistant editor.
      </p>
      <p className="text-white text-sm mb-6">
        Click the button below to install the Shopify App:
      </p>
      {/* Install App Button */}
      <a
        href="https://apps.shopify.com/searchatlas" // Replace with actual app link
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center bg-[#4CAF50] hover:bg-[#388e3c] transition-colors text-white font-medium rounded-lg px-10 py-3 text-base mb-4"
      >
        Install the App
        <svg
          className="ml-2 w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </a>
      {/* Support Link */}
      <div className="mt-2">
        <span className="text-white text-sm">
          Need help installing the app?
        </span>
        <br />
        <a
          href="mailto:support@searchatlas.com"
          className="text-[#8ec6ff] underline text-sm hover:text-[#b3e0ff]"
        >
          Contact Support
        </a>
      </div>
    </div>
  );
}

export default InstallAppCTA;
