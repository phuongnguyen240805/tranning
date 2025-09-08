export const dynamic = 'force-dynamic';
import GraphiteComponent from '@gitroom/frontend/components/graphite/GraphiteComponent';
import { Metadata } from 'next';

export default async function Index() {
    return <GraphiteComponent />;
}