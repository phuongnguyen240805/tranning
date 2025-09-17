export const dynamic = 'force-dynamic';
import KeywordComponent from '@gitroom/frontend/components/keyword/keyword.component';
import { Metadata } from 'next';

export default async function Index() {
  return <KeywordComponent />;
}
