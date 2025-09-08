import InputField from '../components/FormHandle/InputField';
import VideoCard from '../components/VideoCard';

function SEOMetatags() {
  return (
    <div className="flex-1 max-w-xl mx-auto">
      {/* Screenshot */}
      <div className="max-w-[340px] mb-4">
        <VideoCard
          src="https://www.youtube.com/embed/BUqoV8TdkKw?list=PLEpY4e8tcdVW1ib_iaBqvnDYV5DPL6Y4T"
          height={250}
          controls
          className="h-[210px] md:h-[240px]"
        />
      </div>

      {/* Form */}
      <form className="flex flex-col gap-4 rounded-xl">
        <div className="flex flex-row gap-3">
          <div className="flex-1">
            <InputField
              type="input"
              label="Company name"
              placeholder="e.g. Coffeemakers"
              className="w-full text-sm max-h-[42px]"
            />
          </div>
          <div className="flex-1">
            <InputField
              type="input"
              label="Page URL"
              placeholder="e.g. https://Coffeemakers.com"
              className="w-full text-sm max-h-[42px]"
            />
          </div>
        </div>
        <div>
          <InputField
            type="textarea"
            label="Title"
            placeholder="e.g. Coffeemakers sells highest quality blends."
            className="w-full text-sm py-2"
          />
        </div>
        <div>
          <InputField
            type="input"
            label="Target Keywords"
            placeholder="e.g. Top Coffee Blends"
            className="w-full text-sm max-h-[42px]"
          />
          <p className="text-xs text-gray-500 mt-1">
            To add multiple keywords, separate them with Comma or SHIFT + Enter
          </p>
        </div>
        <button
          type="submit"
          className="max-w-36 bg-[#8456B3] hover:bg-[#6d4696] text-white font-medium rounded px-4 py-2 transition"
        >
          Generate Ideas
        </button>
      </form>
    </div>
  );
}

export default SEOMetatags;
