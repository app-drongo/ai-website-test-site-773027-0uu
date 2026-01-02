'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Play, Star, Users, Zap } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  logoUrl:
    'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=40&fit=crop&crop=center',
  logoAlt: 'Company Logo',
  badge: 'New Release',
  title: 'Build the Future with AI-Powered Development',
  subtitle:
    'Transform your ideas into production-ready applications with our cutting-edge platform. Ship faster, scale better, innovate continuously.',
  primaryCtaText: 'Start Building',
  primaryCtaHref: '/signup',
  secondaryCtaText: 'Watch Demo',
  secondaryCtaHref: '/demo',
  heroImageUrl:
    'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center',
  heroImageAlt: 'Development platform dashboard',
  stats: [
    { icon: 'Users', value: '50K+', label: 'Developers' },
    { icon: 'Star', value: '4.9', label: 'Rating' },
    { icon: 'Zap', value: '99.9%', label: 'Uptime' },
  ],
  features: ['AI-powered code generation', 'Real-time collaboration', 'Enterprise security'],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePrimaryAction = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryAction = () => {
    setIsPlaying(true);
    navigate(config.secondaryCtaHref);
  };

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="h-5 w-5" />;
      case 'Star':
        return <Star className="h-5 w-5" />;
      case 'Zap':
        return <Zap className="h-5 w-5" />;
      default:
        return <Zap className="h-5 w-5" />;
    }
  };

  return (
    <section id="hero" className="bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo */}
        <div className="pt-8 pb-4">
          <div className="flex items-center justify-center sm:justify-start">
            <Image
              src={config.logoUrl}
              alt={config.logoAlt}
              width={120}
              height={40}
              className="h-10 w-auto"
              data-editable-src="logoUrl"
            />
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="py-20 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <div className="mb-6">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors"
                >
                  <span data-editable="badge">{config.badge}</span>
                </Badge>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                <span data-editable="title">{config.title}</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  onClick={handlePrimaryAction}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  data-editable-href="primaryCtaHref"
                  data-href={config.primaryCtaHref}
                >
                  <span data-editable="primaryCtaText">{config.primaryCtaText}</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleSecondaryAction}
                  className="border-border hover:bg-accent hover:text-accent-foreground transition-colors"
                  data-editable-href="secondaryCtaHref"
                  data-href={config.secondaryCtaHref}
                >
                  <Play className={`mr-2 h-4 w-4 ${isPlaying ? 'animate-pulse' : ''}`} />
                  <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                </Button>
              </div>

              {/* Features List */}
              <div className="hidden sm:block">
                <ul className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
                  {config.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      <span data-editable={`features[${idx}]`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <Card className="bg-card border-border overflow-hidden">
                <CardContent className="p-0">
                  <Image
                    src={config.heroImageUrl}
                    alt={config.heroImageAlt}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    data-editable-src="heroImageUrl"
                    priority
                  />
                </CardContent>
              </Card>

              {/* Floating Stats */}
              <div className="absolute -bottom-6 left-4 right-4">
                <Card className="bg-card/95 backdrop-blur-sm border-border shadow-lg">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-3 gap-4">
                      {config.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="flex justify-center mb-1 text-primary">
                            {getStatIcon(stat.icon)}
                          </div>
                          <div className="font-bold text-foreground">
                            <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
