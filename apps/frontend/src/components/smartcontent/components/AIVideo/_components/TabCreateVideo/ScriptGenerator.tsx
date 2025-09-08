import Button from '../ui/Button';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';
import { Textarea } from '../ui/Textarea';

type ScriptGeneratorProps = {
  scriptForm: any;
  scriptLoading: boolean;
  handleScriptChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleGenerateScript: () => void;
  industryOptions: string[];
  genreOptions: string[];
  styleOptions: string[];
};

export default function ScriptGenerator({
  scriptForm,
  scriptLoading,
  handleScriptChange,
  handleGenerateScript,
  industryOptions,
  genreOptions,
  styleOptions,
}: ScriptGeneratorProps) {
  return (
    <>
      <div className="flex flex-col gap-3 mb-3 md:flex-row md:flex-wrap">
        <div className="flex flex-col gap-3 w-full md:flex-row md:gap-3 md:w-auto flex-1">
          <Input
            type="text"
            name="idea"
            value={scriptForm.idea}
            onChange={handleScriptChange}
            placeholder="Ý tưởng"
            className="w-full min-w-0 md:min-w-[140px] flex-1"
          />
          <Select
            name="industry"
            value={scriptForm.industry}
            onChange={handleScriptChange}
            className="w-full min-w-0 md:min-w-[140px]"
          >
            <option value="">Ngành nghề thoại</option>
            {industryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
          <Select
            name="genre"
            value={scriptForm.genre}
            onChange={handleScriptChange}
            className="w-full min-w-0 md:min-w-[140px]"
          >
            <option value="">Thể loại</option>
            {genreOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
          <Select
            name="style"
            value={scriptForm.style}
            onChange={handleScriptChange}
            className="w-full min-w-0 md:min-w-[140px]"
          >
            <option value="">Phong cách lời thoại</option>
            {styleOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </Select>
        </div>
        <div className="w-full md:w-auto flex items-end">
          <Button
            active
            onClick={handleGenerateScript}
            loading={scriptLoading}
            variant="primary"
            fullWidth
            className="w-full md:w-auto"
          >
            Tạo lời thoại
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1 flex flex-col">
          <label
            className="text-xs text-[rgb(66,67,254)] mb-1 font-semibold"
            style={{ fontFamily: 'Inter, Arial, sans-serif' }}
          >
            Lời thoại mẫu
          </label>
          <Textarea
            value={scriptForm.generatedScript}
            placeholder="Lời thoại sẽ xuất hiện ở đây sau khi tạo."
            readOnly
            className="w-full min-h-[120px]"
          />
        </div>
      </div>
    </>
  );
}
