import Title from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/components/Title';
import SearchAlatLayout from '@gitroom/frontend/components/smartcontent/components/SearchAlatContents/SearchAlatLayout';
import RankTrackerForm from './RankTrackerForm';
import RankTrackerTable from './RankTrackerTable';

const RankTracker = () => {
  return (
    <>
      <SearchAlatLayout
        className="justify-start"
        // 🔹 HEADER SLOT
        header={
          <div className="flex justify-start">
            <Title
              title="Keyword Rank Tracker"
              subtitle={
                <>
                  <span>
                    Track positions, traffic, and search visibility for the
                    target keywords that matter most to your SEO strategy.
                  </span>
                  <span>
                    For more accurate tracking, select the city or state you
                    want to rank in.
                  </span>
                </>
              }
              gradientFrom="#2ecc71"
              gradientTo="#3a8bfd"
            />
          </div>
        }
        main={<RankTrackerForm />}
        table={<RankTrackerTable />}
        isTableView
        showOverlay
        footer={<></>}
      />
    </>
  );
};

export default RankTracker;
