// 'use client';
// import React, { useEffect, useState } from 'react';
// import { Grid, Card, Image, Text, Group, Stack, Checkbox } from '@mantine/core';
// import { IconHeart, IconMessageCircle2, IconShare } from '@tabler/icons-react';
// import SocialManagementBase from './SocialManagementBase';
// import { useSocialManagement } from './context';

// interface TikTokPost {
//     id: string;
//     thumbnail: string;
//     title: string;
//     author: {
//         name: string;
//         avatar: string;
//     };
//     stats: {
//         likes: number;
//         comments: number;
//         shares: number;
//     };
//     selected?: boolean;
// }

// interface TikTokApiVideo {
//     id: string;
//     cover: string;
//     title: string;
//     author: {
//         name: string;
//         avatar: string;
//     };
//     stats: {
//         likes: number;
//         comments: number;
//         shares: number;
//     };
// }

// const fetchTikTokVideos = async (accessToken: string): Promise<TikTokApiVideo[]> => {
//     const res = await fetch('https://open.tiktokapis.com/v2/video/list/?fields=id,cover_image_url,description,author,stats', {
//         headers: {
//             'Authorization': `Bearer ${accessToken}`
//         }
//     });
//     const data = await res.json();
//     return (data.data?.videos || []).map((v: any) => ({
//         id: v.id,
//         cover: v.cover_image_url,
//         title: v.description,
//         author: {
//             name: v.author?.unique_id || '',
//             avatar: v.author?.avatar_thumb_url || ''
//         },
//         stats: {
//             likes: v.stats?.digg_count || 0,
//             comments: v.stats?.comment_count || 0,
//             shares: v.stats?.share_count || 0
//         }
//     }));
// };

// const formatNumber = (num: number): string => {
//     if (num >= 1000000) {
//         return (num / 1000000).toFixed(1) + 'M';
//     }
//     if (num >= 1000) {
//         return (num / 1000).toFixed(1) + 'K';
//     }
//     return num.toString();
// };

// const TikTokPost = ({ post }: { post: TikTokPost }) => {
//     const { selectedPosts, togglePostSelection } = useSocialManagement();
//     const isSelected = selectedPosts.has(post.id);

//     return (
//         <Card shadow="sm" p="lg" radius="md" withBorder>
//             <Card.Section pos="relative">
//                 <Group position="right" style={{ position: 'absolute', top: 10, right: 10, zIndex: 1 }}>
//                     <Checkbox
//                         checked={isSelected}
//                         onChange={() => togglePostSelection(post.id)}
//                         styles={{
//                             input: {
//                                 backgroundColor: 'rgba(255, 255, 255, 0.9)',
//                                 borderColor: 'rgba(0, 0, 0, 0.1)'
//                             }
//                         }}
//                     />
//                 </Group>
//                 <Image
//                     src={post.thumbnail}
//                     height={280}
//                     alt={post.title}
//                     style={{ objectFit: 'cover' }}
//                 />
//             </Card.Section>

//             <Stack mt="md" spacing="xs">
//                 <Group>
//                     <Image
//                         src={post.author.avatar}
//                         width={24}
//                         height={24}
//                         radius="xl"
//                         alt={post.author.name}
//                     />
//                     <Text size="sm" weight={500}>
//                         {post.author.name}
//                     </Text>
//                 </Group>

//                 <Text size="sm" lineClamp={2}>
//                     {post.title}
//                 </Text>

//                 <Group spacing="xl" mt="md">
//                     <Group spacing="xs">
//                         <IconHeart size={18} />
//                         <Text size="sm">{formatNumber(post.stats.likes)}</Text>
//                     </Group>
//                     <Group spacing="xs">
//                         <IconMessageCircle2 size={18} />
//                         <Text size="sm">{formatNumber(post.stats.comments)}</Text>
//                     </Group>
//                     <Group spacing="xs">
//                         <IconShare size={18} />
//                         <Text size="sm">{formatNumber(post.stats.shares)}</Text>
//                     </Group>
//                 </Group>
//             </Stack>
//         </Card>
//     );
// };

// const TikTok = () => {
//     const [videos, setVideos] = useState<TikTokApiVideo[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState<string | null>(null);
//     useEffect(() => {
//         const accessToken = 'awd5jljw2lo8f83y';
//         setLoading(true);
//         fetchTikTokVideos(accessToken)
//             .then(setVideos)
//             .catch((e) => setError('Không lấy được video từ TikTok'))
//             .finally(() => setLoading(false));
//     }, []);
//     return (
//         <SocialManagementBase platform="tiktok">
//             {loading && <Text>Đang tải video...</Text>}
//             {error && <Text color="red">{error}</Text>}
//             <Grid>
//                 {videos.map((post) => (
//                     <Grid.Col key={post.id} span={3}>
//                         <TikTokPost post={{
//                             id: post.id,
//                             thumbnail: post.cover,
//                             title: post.title,
//                             author: post.author,
//                             stats: post.stats
//                         }} />
//                     </Grid.Col>
//                 ))}
//             </Grid>
//         </SocialManagementBase>
//     );
// };

// export default TikTok;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Card,
    Text,
    Title,
    TextInput,
    Button,
    Group,
    Avatar,
    Image,
    Stack,
    Divider,
    Badge,
    ActionIcon,
    Paper,
    Grid,
    Flex,
    Box,
    Modal
} from '@mantine/core';
import { IconSearch, IconHeart, IconMessage, IconShare, IconPlayerPlay } from '@tabler/icons-react';

interface TikTokData {
    message: string;
    data: {
        collection_time: string;
        id: string;
        desc: string;
        create_timestamp: number;
        create_time: string;
        text_extra: string[];
        type: string;
        height: number;
        width: number;
        downloads: string;
        duration: string;
        uri: string;
        dynamic_cover: string;
        static_cover: string;
        uid: string;
        sec_uid: string;
        unique_id: string;
        signature: string;
        user_age: number;
        nickname: string;
        mark: string;
        music_author: string;
        music_title: string;
        music_url: string;
        digg_count: number;
        comment_count: number;
        collect_count: number;
        share_count: number;
        play_count: number;
        tag: string[];
        extra: string;
        share_url: string;
    };
    params: {
        cookie: string;
        proxy: string;
        source: boolean;
        detail_id: string;
    };
    time: string;
}

interface TextExtra {
    aweme_id: string;
    hashtag_name: string;
    type: number;
}

const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('en-US').format(num);
};

const TikTok = () => {
    const [detailId, setDetailId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [tiktokData, setTiktokData] = useState<any>(null);
    const [videoModalOpen, setVideoModalOpen] = useState(false);

    const fetchTikTokDetail = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('http://localhost:3000/api/smartcontent/tiktok/detail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    cookie: '',
                    proxy: '',
                    source: false,
                    detail_id: detailId
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }

            setTiktokData(data);
        } catch (err: any) {
            console.error('Error fetching TikTok data:', err);
            setError(err.message || 'Failed to fetch TikTok data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (detailId) {
            fetchTikTokDetail();
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (detailId.trim()) {
            fetchTikTokDetail();
        }
    };

    return (
        <div className="p-4">
            <div className="mb-4">
                <input
                    type="text"
                    value={detailId}
                    onChange={(e) => setDetailId(e.target.value)}
                    placeholder="Enter TikTok Video ID"
                    className="border p-2 rounded mr-2"
                />
                <button
                    onClick={fetchTikTokDetail}
                    disabled={loading || !detailId}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
                >
                    {loading ? 'Loading...' : 'Fetch Details'}
                </button>
            </div>

            {error && (
                <div className="text-red-500 mb-4">
                    Error: {error}
                </div>
            )}

            {tiktokData && tiktokData.data && (
                <>
                    <Card
                        shadow="sm"
                        p="lg"
                        radius="md"
                        withBorder
                        style={{ cursor: 'pointer' }}
                        onClick={() => setVideoModalOpen(true)}
                    >
                        <Card.Section>
                            <Group p="md" position="apart">
                                <Group>
                                    <Avatar
                                        src={tiktokData.data.static_cover}
                                        radius="xl"
                                        size="lg"
                                    />
                                    <Stack spacing={0}>
                                        <Title order={4}>{tiktokData.data.nickname}</Title>
                                        <Text size="sm" color="dimmed">{tiktokData.data.signature}</Text>
                                    </Stack>
                                </Group>
                                <Group spacing="xl">
                                    <Stack spacing={0} align="center">
                                        <ActionIcon color="red" variant="transparent">
                                            <IconHeart size={20} />
                                        </ActionIcon>
                                        <Text size="sm">{formatNumber(tiktokData.data.digg_count)}</Text>
                                    </Stack>
                                    <Stack spacing={0} align="center">
                                        <ActionIcon color="blue" variant="transparent">
                                            <IconMessage size={20} />
                                        </ActionIcon>
                                        <Text size="sm">{formatNumber(tiktokData.data.comment_count)}</Text>
                                    </Stack>
                                    <Stack spacing={0} align="center">
                                        <ActionIcon color="green" variant="transparent">
                                            <IconShare size={20} />
                                        </ActionIcon>
                                        <Text size="sm">{formatNumber(tiktokData.data.share_count)}</Text>
                                    </Stack>
                                    <Stack spacing={0} align="center">
                                        <ActionIcon variant="transparent">
                                            <IconPlayerPlay size={20} />
                                        </ActionIcon>
                                        <Text size="sm">{formatNumber(tiktokData.data.play_count)}</Text>
                                    </Stack>
                                </Group>
                            </Group>
                            <Divider />
                        </Card.Section>

                        <Grid gutter="md" mt="sm">
                            <Grid.Col span={12} md={5}>
                                <Paper radius="md" style={{ overflow: 'hidden' }}>
                                    <Image
                                        src={tiktokData.data.dynamic_cover}
                                        alt="Video cover"
                                        height={355}
                                        withPlaceholder
                                    />
                                </Paper>
                            </Grid.Col>
                            <Grid.Col span={12} md={7}>
                                <Stack spacing="sm">
                                    <Text size="md" style={{ lineHeight: 1.5 }}>
                                        {tiktokData.data.desc}
                                    </Text>

                                    <Paper p="sm" radius="md" style={{ backgroundColor: '#f8f9fa' }}>
                                        <Group>
                                            <Text color="blue">🎵</Text>
                                            <Stack spacing={0}>
                                                <Text weight={500}>{tiktokData.data.music_title}</Text>
                                                <Text size="sm" color="dimmed">{tiktokData.data.music_author}</Text>
                                            </Stack>
                                        </Group>
                                    </Paper>

                                    <Group spacing="xs">
                                        <Badge variant="outline">{tiktokData.data.type}</Badge>
                                        <Badge variant="outline">{tiktokData.data.duration}</Badge>
                                        <Badge variant="outline">
                                            {tiktokData.data.width}x{tiktokData.data.height}
                                        </Badge>
                                        <Badge variant="outline">
                                            {new Date(tiktokData.data.create_time).toLocaleString()}
                                        </Badge>
                                    </Group>

                                    <Flex wrap="wrap" gap="sm" mt="sm">
                                        {tiktokData.data.text_extra && tiktokData.data.text_extra.map((tag: TextExtra, index: number) => (
                                            <Badge
                                                key={index}
                                                color="blue"
                                                variant="light"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                #{tag.hashtag_name}
                                            </Badge>
                                        ))}
                                    </Flex>

                                    <Button
                                        component="a"
                                        href={tiktokData.data.downloads}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        fullWidth
                                        mt="md"
                                        style={{ backgroundColor: '#25f4ee', color: '#000' }}
                                    >
                                        Download Video
                                    </Button>
                                </Stack>
                            </Grid.Col>
                        </Grid>
                    </Card>

                    <Modal
                        opened={videoModalOpen}
                        onClose={() => setVideoModalOpen(false)}
                        title={<Text size="lg" weight={500}>{tiktokData.data.desc}</Text>}
                        // size="lg"
                        centered
                    >
                        <div style={{ position: 'relative', paddingTop: '177.77%', width: '100%' }}>
                            <iframe
                                src={`https://www.tiktok.com/embed/v2/${tiktokData.data.id}`}
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    border: 'none'
                                }}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </Modal>
                </>
            )}
        </div>
    );
};

export default TikTok;