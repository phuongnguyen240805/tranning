export const dynamic = 'force-dynamic';
import CobaltComponent from '@gitroom/frontend/components/cobalt/CobaltComponent';
import KeywordResearchComponent from '@gitroom/frontend/components/keyword/keyword.component';
import { Metadata } from 'next';

export default async function Index() {
  return <KeywordResearchComponent />;
}
