import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';

type VideoFormProps = {
  videoForm: any;
  handleVideoChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export default function VideoForm({
  videoForm,
  handleVideoChange,
}: VideoFormProps) {
  return (
    <div
      className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-md flex flex-col gap-4 md:flex-row 
    md:gap-4"
    >
      <div className="flex-1 flex flex-col gap-3">
        <Input
          name="title"
          value={videoForm.title}
          onChange={handleVideoChange}
          placeholder="Tiêu đề video"
          maxLength={120}
          className="w-full"
        />
        <div className="flex justify-between text-xs text-gray-500 px-1">
          <span>{videoForm.title.length}/130</span>
          <span>{videoForm.script.length}/1000</span>
        </div>
        <Textarea
          name="script"
          value={videoForm.script}
          onChange={handleVideoChange}
          placeholder="Nội dung kịch bản..."
          maxLength={1000}
          className="w-full"
          rows={6}
        />
      </div>
      <div className="w-full md:w-48 flex-shrink-0 flex flex-col gap-2">
        <div
          className="bg-[#f8f9ff] border border-[rgb(66,67,254)] rounded-lg p-3 flex flex-col items-center 
        shadow-sm min-h-[100px] md:min-h-[120px] w-full"
        >
          <div className="font-semibold text-[rgb(66,67,254)] mb-2 text-sm text-center">
            Tỉ lệ và bố cục
          </div>
          <button className="btn-yellow mt-auto w-full md:w-auto">
            Phụ đề
          </button>
        </div>
      </div>
    </div>
  );
}
