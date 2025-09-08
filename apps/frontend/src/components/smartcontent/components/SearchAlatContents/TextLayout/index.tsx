import React from 'react';
import Title from '../components/Title';
import VideoCard from '../components/VideoCard';
import TableBox from '../components/TableWrapper/TableBox';
import { Icons } from '../../../icons';
import FormHandle from '../components/FormHandle';
import { SearchAlatIcons } from '../components/icon';
import SearchAlatLayout from '../SearchAlatLayout';
import Alert from '../components/ui/Alert';

const OnpageAudit = () => {
  return (
    <SearchAlatLayout
      // 🔹 HEADER SLOT
      header={
        <Title
          title="Scholar"
          subtitle="Analyze your page's content through advanced metrics, evaluating relevance, structure, and depth 
            around a targeted keyword. Gain actionable insights to optimize for clarity, engagement, and search 
            performance."
          gradientFrom="#2ecc71"
          gradientTo="#3a8bfd"
        />
      }
      // 🔹 MAIN SLOT (search + filters)
      main={
        <FormHandle
          keywordPlaceholder="Enter Target Keyword"
          urlPlaceholder="Enter Target Page URL"
          buttonText="Analyze page"
          buttonClassName="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold px-6 py-2.5 rounded-lg text-[15px] transition"
        />
      }
      isTableView
      showOverlay
      footer=""
    />
  );
};

export default OnpageAudit;
