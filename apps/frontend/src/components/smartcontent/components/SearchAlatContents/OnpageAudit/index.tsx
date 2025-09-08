import React, { useState } from 'react';
import Title from '../components/Title';
import VideoCard from '../components/VideoCard';
import { Icons } from '../../../icons';
import FormHandle from '../components/FormHandle';
import SearchAlatLayout from '../SearchAlatLayout';
import { ModalWrapper } from '../components/ModalWrapper';
import WriteAIBulk from '../components/WriteBox/WriteAIBulk';
import OnpageAuditTable from './OnpageAuditTable';

const OnpageAudit = () => {
  const [dialogOpened, setDialogOpened] = useState(false);

  return (
    <>
      <ModalWrapper
        opened={dialogOpened}
        onClose={() => setDialogOpened(!dialogOpened)}
        width="570px"
        height="100vh"
        showCloseButton={false}
        className="p-0"
        padding="0px 0px"
      >
        <div className="flex max-w-[570px] p-0">
          <WriteAIBulk />
        </div>
      </ModalWrapper>

      <SearchAlatLayout
        // 🔹 HEADER SLOT
        header={
          <Title
            title="Onpage Audit"
            subtitle="Elevate your website's performance with the Onpage Audit Tool, the ultimate solution for a 
                holistic SEO strategy. Analyze the four critical pillars of SEO—Authority, Content, Technicals, and 
                Page Experience—and gain detailed insights on how to enhance your web page's organic visibility. 
                Unlock the secret to superior rankings and start reaching your target audience online."
            gradientFrom="#2ecc71"
            gradientTo="#3a8bfd"
          />
        }
        // 🔹 SIDEBAR SLOT
        sidebar={
          <div className="w-full flex flex-col items-end">
            <div className="flex items-center gap-2 mb-4 mt-2">
              <Icons.InfoCircle />
              <span className="text-black text-sm font-normal">
                How to Whitelist our Crawler?
              </span>
            </div>
            <VideoCard
              src="https://www.youtube.com/embed/BUqoV8TdkKw?list=PLEpY4e8tcdVW1ib_iaBqvnDYV5DPL6Y4T"
              height={250}
              controls
              className="h-[210px] md:h-[240px]"
            />
          </div>
        }
        // 🔹 MAIN SLOT (search + filters)
        main={
          <FormHandle
            keywordPlaceholder="Add up to 3 keywords, separate by comma"
            urlPlaceholder="Enter Page URL"
            buttonText="Run Audit"
            buttonClassName="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-semibold px-6 py-2.5 rounded-lg text-[15px] transition"
            extraAction={
              <button
                onClick={() => setDialogOpened(true)}
                className="flex items-center gap-2 text-[#3a8bfd] hover:text-[#2563eb] text-[15px] font-semibold transition cursor-pointer"
              >
                Audit Pages in Bulk
              </button>
            }
          />
        }
        // 🔹 TABLE SLOT
        table={<OnpageAuditTable />}
        isTableView
        showOverlay
        footer={<></>}
      />
    </>
  );
};

export default OnpageAudit;
