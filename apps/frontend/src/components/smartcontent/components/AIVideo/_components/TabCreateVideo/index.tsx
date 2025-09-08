import { useState } from 'react';
import Wrapper from '../ui/Wrapper';
import ScriptGenerator from './ScriptGenerator';
import VideoForm from './VideoForm';
import VideoSettings from './VideoSettings';

type TabCreateVideo = {
  setAlert: (msg: string | null) => void;
};

const industryOptions = [
  'Bất động sản',
  'Giáo dục',
  'Công nghệ',
  'Y tế',
  'Thời trang',
  'Ẩm thực',
  'Khác',
];

const genreOptions = [
  'Hài hước',
  'Truyền cảm hứng',
  'Giới thiệu sản phẩm',
  'Tin tức',
  'Phỏng vấn',
  'Khác',
];

const styleOptions = [
  'Thân thiện',
  'Chuyên nghiệp',
  'Nhiệt huyết',
  'Hài hước',
  'Trung lập',
  'Khác',
];

const defaultScript = {
  idea: '',
  industry: '',
  genre: '',
  style: '',
  generatedScript: '',
};

const defaultVideo = {
  title: '',
  script: '',
};

function TabCreateVideo({ setAlert }: TabCreateVideo) {
  const [scriptForm, setScriptForm] = useState({ ...defaultScript });
  const [videoForm, setVideoForm] = useState({ ...defaultVideo });
  const [scriptLoading, setScriptLoading] = useState(false);
  const [scriptList, setScriptList] = useState<any[]>([]);

  // Handlers for script creation
  const handleScriptChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setScriptForm({ ...scriptForm, [e.target.name]: e.target.value });
  };

  const handleGenerateScript = () => {
    if (!scriptForm.idea.trim()) {
      setAlert('Vui lòng nhập ý tưởng để tạo lời thoại.');
      return;
    }
    setAlert(null);
    setScriptLoading(true);
    // Simulate API
    setTimeout(() => {
      const newScript = {
        ...scriptForm,
        generatedScript: `Lời thoại mẫu cho ý tưởng: "${scriptForm.idea}"`,
        id: Date.now(),
        status: 'pending',
      };
      setScriptList([newScript, ...scriptList]);
      setScriptForm({
        ...defaultScript,
        generatedScript: newScript.generatedScript,
      });
      setScriptLoading(false);
    }, 1200);
  };

  // Handlers for video creation
  const handleVideoChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setVideoForm({ ...videoForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex-1 flex flex-col gap-4">
      {/* Step 1: Script Generation */}
      <Wrapper
        title="Bước 1 : Tạo lời thoại từ ý tưởng"
        className="bg-white border rounded-xl p-6 shadow-md"
      >
        <ScriptGenerator
          scriptForm={scriptForm}
          handleScriptChange={handleScriptChange}
          handleGenerateScript={handleGenerateScript}
          scriptLoading={scriptLoading}
          industryOptions={industryOptions}
          genreOptions={genreOptions}
          styleOptions={styleOptions}
        />
      </Wrapper>

      {/* Step 2: Video Creation */}
      <Wrapper title="Bước 2 : Tạo video từ lời thoại">
        <VideoForm
          videoForm={videoForm}
          handleVideoChange={handleVideoChange}
        />
      </Wrapper>

      {/* Video Settings Panel */}
      <VideoSettings />
    </div>
  );
}

export default TabCreateVideo;
