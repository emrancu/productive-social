import React, {useState} from 'react';
import {Layout, Tabs, Card, Row, Col, Avatar, Typography, Space, Image, message, Switch} from 'antd';
import {
    UserOutlined,
    HeartOutlined,
    TeamOutlined,
    GlobalOutlined,
    PlayCircleFilled, PlusOutlined
} from '@ant-design/icons';
import {updateMode} from "@/InstantDB/index.js";
import {mainStore} from "@/Store/main.js";

const { Header, Content } = Layout;
const { Title, Text } = Typography;

const postData = [
    {
        id: 1,
        name: "Sarah Parker",
        time: "2h",
        message: "Spent 3 hours mindlessly scrolling through reels today. These endless video loops are seriously affecting my productivity. Time to take control of my social media habits! 😤",
        type: 'text',
        engagement: {
            reactions: 45,
            comments: 6
        }
    },
    {
        id: 2,
        name: "Michael Thompson",
        time: "3h",
        withPerson: "David Chen",
        message: "The amount of sponsored content in my feed is ridiculous! Every third post is an ad. Facebook has become more of an advertising platform than a social network. Look at this screenshot of my feed from just 5 minutes of scrolling...",
        type: 'image',
        media: "https://pub-f091aa110d8a404eae2809211dc7f591.r2.dev/productive-social/test-post-thumbnail-1.png",
        engagement: {
            reactions: 188,
            comments: 17
        }
    },
    {
        id: 3,
        name: "Emily Wilson",
        time: "5h",
        message: "Here's a quick tutorial on how to make your Facebook feed more meaningful. Learn how to filter out distracting elements and focus on what really matters - connecting with friends and family.",
        type: 'video',
        media: "https://pub-f091aa110d8a404eae2809211dc7f591.r2.dev/productive-social/test-post-thumbnail-2.png",
        duration: "5:23",
        engagement: {
            reactions: 342,
            comments: 28
        }
    }
];

const PostList = () => {
    const [isBasicMode, setIsBasicMode] = useState(false);
    const settings = mainStore(state => state.settings);

    const renderMedia = (post) => {
        switch (post.type) {
            case 'image':
                return (
                    <Image
                        src={post.media}
                        alt="Post image"
                        style={{
                            width: '100%',
                            borderRadius: 8,
                            marginTop: 16
                        }}
                    />
                );
            case 'video':
                return (
                    <div style={{ position: 'relative', marginTop: 16 }}>
                        <Image
                            src={post.media}
                            alt="Video thumbnail"
                            style={{
                                width: '100%',
                                borderRadius: 8
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            bottom: 12,
                            right: 12,
                            background: 'rgba(0, 0, 0, 0.75)',
                            color: 'white',
                            padding: '2px 8px',
                            borderRadius: 4,
                            fontSize: 12
                        }}>
                            {post.duration}
                        </div>
                        <PlayCircleFilled
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                fontSize: 48,
                                color: 'white'
                            }}
                        />
                    </div>
                );
            default:
                return null;
        }
    };

    const renderPosts = (posts) => (
        <Row gutter={[16, 16]}>
            {posts.map(post => (
                <Col key={post.id} xs={24}>
                    <Card
                        bordered={false}
                        style={{
                            borderRadius: 8,
                            boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
                        }}
                    >
                        <Space direction="vertical" style={{ width: '100%' }} size="large">
                            <Space>
                                <Avatar size="large" icon={<UserOutlined />} />
                                <div>
                                    <Text strong>{post.name}</Text>
                                    {post.withPerson && (
                                        <Text> is with {post.withPerson}</Text>
                                    )}
                                    <br />
                                    <Text type="secondary">{post.time}</Text>
                                </div>
                            </Space>
                            <Text>{post.message}</Text>
                            {renderMedia(post)}
                            <Space size="large">
                                <Space>
                                    <HeartOutlined />
                                    <Text>{post.engagement.reactions}</Text>
                                </Space>
                                <Space>
                                    <Text>💬 {post.engagement.comments}</Text>
                                </Space>
                            </Space>
                        </Space>
                    </Card>
                </Col>
            ))}
        </Row>
    );

    const items = [
        {
            key: '1',
            label: (
                <span>
                    <HeartOutlined />
                    <Text style={{ marginLeft: 8 }}>Special Person(10)</Text>
                </span>
            ),
            children: renderPosts(postData),
        },
        {
            key: '2',
            label: (
                <span>
                    <TeamOutlined />
                    <Text style={{ marginLeft: 8 }}>Islamic Scholars(15)</Text>
                </span>
            ),
            children: renderPosts(postData),
        },
        {
            key: '3',
            label: (
                <span>
                    <GlobalOutlined />
                    <Text style={{ marginLeft: 8 }}>Political Analyst(5) </Text>
                </span>
            ),
            children: renderPosts(postData),
        },
        {
            key: '4',
            label: (
                <span>
                    <PlusOutlined />
                </span>
            ),
            children: renderPosts(postData),
        },
    ];

    const switchToBasicMode = async ()=>{

        // Update in database
        await updateMode('basic', settings.id);

        setTimeout(()=>{
            window.location.reload()
        }, 300)

    }

    return (
        <Layout>
            <Header style={{
                background: '#fff',
                padding: '10px 20px',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                boxShadow: '10px 2px 8px rgba(0,0,0,0.06)',
                display: 'flex',                     // Added
                justifyContent: 'space-between',     // Added
                alignItems: 'center'                 // Added
            }}>
                <Title level={3}>Social Feed</Title>

                <Space align="center">
                    <Text strong>Switch to Basic Mode</Text>
                    <Switch
                        checked={isBasicMode}
                        onChange={switchToBasicMode}
                    />
                </Space>
            </Header>
            <Content style={{ padding: '24px', background: '#f0f2f5', position: 'relative', minHeight: '100vh' }}>
                {/* Watermark */}
                <div
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) rotate(-30deg)',
                        fontSize: '84px',
                        fontWeight: 'bold',
                        color: 'rgba(0, 0, 0, 0.08)',
                        pointerEvents: 'none',
                        zIndex: 2,
                        whiteSpace: 'nowrap',
                        userSelect: 'none',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial'
                    }}
                >
                    Coming Soon
                </div>
                <Tabs
                    defaultActiveKey="1"
                    items={items}
                    style={{ position: 'relative', zIndex: 1 }}
                />
            </Content>
        </Layout>
    );
};

export default PostList;