import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TikTokIntegration = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const tiktokVideos = [
    {
      id: 'video1',
      title: 'Understanding Neural Networks in 60 Seconds',
      description: 'Breaking down how neural networks learn patterns, explained with simple analogies that anyone can understand.',
      thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=600&fit=crop',
      views: '125.4K',
      likes: '8.2K',
      comments: '342',
      duration: '0:58',
      topic: 'Neural Networks',
      hashtags: ['#AI', '#MachineLearning', '#NeuralNetworks', '#TechEducation'],
      uploadDate: '2024-09-18'
    },
    {
      id: 'video2',
      title: 'Computer Vision Magic: How AI Sees Images',
      description: 'Demonstrating how computer vision algorithms process and understand images, from pixels to meaningful insights.',
      thumbnail: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400&h=600&fit=crop',
      views: '89.7K',
      likes: '6.1K',
      comments: '278',
      duration: '1:12',
      topic: 'Computer Vision',
      hashtags: ['#ComputerVision', '#AI', '#ImageProcessing', '#TechTips'],
      uploadDate: '2024-09-15'
    },
    {
      id: 'video3',
      title: 'Natural Language Processing Explained Simply',
      description: 'How AI understands human language - from text processing to sentiment analysis, made easy to understand.',
      thumbnail: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=600&fit=crop',
      views: '156.8K',
      likes: '11.3K',
      comments: '445',
      duration: '1:05',
      topic: 'NLP',
      hashtags: ['#NLP', '#AI', '#LanguageProcessing', '#ChatGPT'],
      uploadDate: '2024-09-12'
    },
    {
      id: 'video4',
      title: 'Building Your First AI Model - Step by Step',
      description: 'Complete beginner guide to creating your first machine learning model with practical examples.',
      thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop',
      views: '203.2K',
      likes: '15.7K',
      comments: '612',
      duration: '2:34',
      topic: 'Tutorial',
      hashtags: ['#AITutorial', '#MachineLearning', '#Coding', '#BeginnerFriendly'],
      uploadDate: '2024-09-09'
    }
  ];

  const totalStats = {
    followers: '18.7k',
    totalViews: '?.?M',
    totalLikes: '2.1M',
    avgEngagement: '12.4%'
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % tiktokVideos?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000)?.toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000)?.toFixed(1) + 'K';
    return num?.toString();
  };

  const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center">
              <Icon name="Video" size={20} className="text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              AI Education on TikTok
            </h2>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Making AI accessible through bite-sized educational content that reaches thousands of learners worldwide
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-card border border-border rounded-brand-lg">
              <div className="text-2xl font-bold text-foreground mb-1">
                {totalStats?.followers}
              </div>
              <div className="text-sm text-text-secondary">Followers</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-brand-lg">
              <div className="text-2xl font-bold text-foreground mb-1">
                {totalStats?.totalViews}
              </div>
              <div className="text-sm text-text-secondary">Total Views</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-brand-lg">
              <div className="text-2xl font-bold text-foreground mb-1">
                {totalStats?.totalLikes}
              </div>
              <div className="text-sm text-text-secondary">Total Likes</div>
            </div>
            <div className="text-center p-6 bg-card border border-border rounded-brand-lg">
              <div className="text-2xl font-bold text-foreground mb-1">
                {totalStats?.avgEngagement}
              </div>
              <div className="text-sm text-text-secondary">Avg Engagement</div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Video Preview */}
            <div className="relative">
              <div className="relative bg-card border border-border rounded-brand-lg overflow-hidden shadow-brand-large">
                <div className="relative aspect-[9/16] max-h-96">
                  <Image
                    src={tiktokVideos?.[currentVideo]?.thumbnail}
                    alt={tiktokVideos?.[currentVideo]?.title}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Icon name="Play" size={24} className="text-gray-800 ml-1" />
                    </button>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {tiktokVideos?.[currentVideo]?.duration}
                  </div>

                  {/* Topic Badge */}
                  <div className="absolute top-4 left-4 bg-white/85 text-slate-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm backdrop-blur">
                    {tiktokVideos?.[currentVideo]?.topic}
                  </div>
                </div>

                {/* Video Stats */}
                <div className="p-4 bg-slate-100">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Icon name="Eye" size={16} className="text-gray-600" />
                        <span className="font-medium">{tiktokVideos?.[currentVideo]?.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Heart" size={16} className="text-slate-500" />
                        <span className="font-medium">{tiktokVideos?.[currentVideo]?.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="MessageCircle" size={16} className="text-slate-500" />
                        <span className="font-medium">{tiktokVideos?.[currentVideo]?.comments}</span>
                      </div>
                    </div>
                    <span className="text-text-secondary">
                      {getTimeAgo(tiktokVideos?.[currentVideo]?.uploadDate)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {tiktokVideos?.[currentVideo]?.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {tiktokVideos?.[currentVideo]?.description}
                </p>
              </div>

              {/* Hashtags */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  Hashtags:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tiktokVideos?.[currentVideo]?.hashtags?.map((hashtag) => (
                    <span
                      key={hashtag}
                      className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full hover:bg-slate-200 hover:text-foreground transition-colors cursor-pointer"
                    >
                      {hashtag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Engagement Metrics */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-muted rounded-brand">
                  <Icon name="TrendingUp" size={20} className="text-slate-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">
                    {tiktokVideos?.[currentVideo]?.views}
                  </div>
                  <div className="text-xs text-text-secondary">Views</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-brand">
                  <Icon name="Heart" size={20} className="text-slate-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">
                    {tiktokVideos?.[currentVideo]?.likes}
                  </div>
                  <div className="text-xs text-text-secondary">Likes</div>
                </div>
                <div className="text-center p-4 bg-muted rounded-brand">
                  <Icon name="MessageCircle" size={20} className="text-slate-500 mx-auto mb-2" />
                  <div className="text-lg font-bold text-foreground">
                    {tiktokVideos?.[currentVideo]?.comments}
                  </div>
                  <div className="text-xs text-text-secondary">Comments</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  iconName="ExternalLink"
                  iconPosition="left"
                  onClick={() => window.open('https://tiktok.com/gerhardien', '_blank')}
                >
                  Watch on TikTok
                </Button>
                <Button
                  variant="outline"
                  iconName="UserPlus"
                  iconPosition="left"
                  onClick={() => window.open('https://tiktok.com/@gerhardien', '_blank')}
                >
                  Follow for More
                </Button>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            {tiktokVideos?.map((video, index) => (
              <div
                key={video?.id}
                onClick={() => setCurrentVideo(index)}
                className={`
                  cursor-pointer bg-card border rounded-brand-lg overflow-hidden 
                  transition-all duration-300 hover:shadow-brand-medium hover:-translate-y-1
                  ${index === currentVideo ? 'border-slate-400/60 shadow-brand-medium' : 'border-border'}
                `}
              >
                <div className="relative aspect-[9/16] max-h-48">
                  <Image
                    src={video?.thumbnail}
                    alt={video?.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 right-2">
                    <h4 className="text-white text-sm font-semibold line-clamp-2">
                      {video?.title}
                    </h4>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video?.duration}
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center justify-between text-xs text-text-secondary">
                    <span>{video?.views} views</span>
                    <span>{getTimeAgo(video?.uploadDate)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TikTokIntegration;
