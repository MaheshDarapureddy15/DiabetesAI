"use client"

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, User, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TextShimmer } from '@/components/text-shimmer'

interface CarouselProps {
  children: React.ReactNode[]
  className?: string
  options?: any
}

export function Carousel({ children, className = '', options = {} }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, ...options })
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(false)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  // Auto-play functionality
  useEffect(() => {
    if (!emblaApi || isHovered) return

    const autoplay = setInterval(() => {
      emblaApi.scrollNext()
    }, 2500) // Move every 2 seconds

    return () => clearInterval(autoplay)
  }, [emblaApi, isHovered])

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {children.map((child, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 pl-2 md:pl-4 first:pl-0">
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="sm"
        className="absolute -left-3 md:-left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 border-blue-200 text-blue-600 hover:text-blue-700 z-20 w-8 h-8 md:w-10 md:h-10"
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        className="absolute -right-3 md:-right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white/90 border-blue-200 text-blue-600 hover:text-blue-700 z-20 w-8 h-8 md:w-10 md:h-10"
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {children.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-blue-600 w-6'
                : 'bg-blue-200 hover:bg-blue-300'
            }`}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

// Developer Carousel Component
export function DeveloperCarousel() {
  const developers = [
    {
      id: 1,
      name: "Mahesh Darapureddy",
      role: "Lead AI/ML Engineer",
      content: "Expert in healthcare technology and machine learning algorithms. Passionate about creating intelligent applications that make healthcare accessible and accurate.",
      avatar: "/developers/mahesh.jpg",
      skills: ["Python", "TensorFlow", "Healthcare AI"],
    },
    {
      id: 2,
      name: "Male Krishnadeepika", 
      role: "Frontend Developer",
      content: "Specializes in React and Next.js with focus on user experience design. Creates intuitive interfaces that make complex health data easy to understand.",
      avatar: "/developers/deepika.jpg",
      skills: ["React", "Next.js", "UI/UX"],
    },
    {
      id: 3,
      name: "Surneedi Tejaswi",
      role: "Medical Advisor",
      content: "Ensures clinical accuracy and evidence-based recommendations for all features. Bridges medical expertise with cutting-edge AI technology for better outcomes.",
      avatar: "/developers/tejaswi.jpg",
      skills: ["Clinical Research", "Medical AI", "Data Analysis"],
    },
    {
      id: 4,
      name: "Siddina Manikanta",
      role: "Backend Engineer", 
      content: "Specializes in secure APIs and data processing infrastructure. Ensures robust and secure handling of sensitive health data with enterprise-grade security.",
      avatar: "/developers/manikanta.jpg",
      skills: ["Flask", "Authentication", "Cloud Architecture"],
    }
  ]

  return (
    <Card className="border-blue-200 shadow-lg mb-8">
      <CardHeader className="bg-blue-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <Users className="w-6 h-6" />
          Meet the Developers
        </CardTitle>
        <CardDescription className="text-blue-100">
          The talented minds behind DiabetesAI's cutting-edge health technology
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8">
        <Carousel className="max-w-full mx-auto">
          {developers.map((developer) => (
            <div key={developer.id} className="px-2 md:px-4">
              <div className="bg-blue-50 rounded-xl p-4 md:p-6 border border-blue-100 hover:shadow-md transition-all duration-300 min-h-[250px] md:min-h-[300px] w-full max-w-none mx-auto">
                {/* Mobile Layout: Vertical (Profile top, Content bottom) */}
                <div className="flex flex-col md:hidden gap-4 h-full">
                  {/* Mobile - Image on Top */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg bg-white">
                        <img
                          src={developer.avatar}
                          alt={developer.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden w-full h-full flex items-center justify-center bg-blue-100">
                          <User className="w-12 h-12 text-blue-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile - Content Below */}
                  <div className="flex flex-col text-center">
                    {/* Developer Info */}
                    <div className="mb-3">
                      <h3 className="font-bold text-xl mb-1 leading-tight">
                        <TextShimmer
                          duration={1.2}
                          className='font-bold text-4xl developer-name [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
                        >
                          {developer.name}
                        </TextShimmer>
                      </h3>
                      <div className="inline-flex items-center px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-2 mx-auto">
                        {developer.role}
                      </div>
                    </div>

                    {/* Developer Description */}
                    <p className="text-blue-700 text-xs leading-relaxed mb-3">
                      {developer.content}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1 justify-center">
                      {developer.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-white text-blue-600 rounded-full text-xs font-medium border border-blue-200 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Desktop Layout: Horizontal (Image Left, Content Right) */}
                <div className="hidden md:flex gap-8 h-full items-center">
                  {/* Desktop - Image Left */}
                  <div className="flex-none flex items-center justify-center mt-4">
                    <div className="relative">
                      <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg bg-white">
                        <img
                          src={developer.avatar}
                          alt={developer.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.nextElementSibling?.classList.remove('hidden');
                          }}
                        />
                        <div className="hidden w-full h-full flex items-center justify-center bg-blue-100">
                          <User className="w-12 h-12 text-blue-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop - Content Right */}
                  <div className="flex-1 flex flex-col justify-center pl-4 mt-4">
                    {/* Developer Info */}
                    <div className="mb-4">
                      <h3 className="font-bold text-5xl mb-2 leading-tight">
                        <TextShimmer
                          duration={1.2}
                          className='font-bold text-5xl developer-name [--base-color:theme(colors.blue.600)] [--base-gradient-color:theme(colors.blue.200)] dark:[--base-color:theme(colors.blue.700)] dark:[--base-gradient-color:theme(colors.blue.400)]'
                        >
                          {developer.name}
                        </TextShimmer>
                      </h3>
                      <div className="inline-flex items-center px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3">
                        {developer.role}
                      </div>
                    </div>

                    {/* Developer Description */}
                    <p className="text-blue-700 text-xs leading-relaxed mb-4">
                      {developer.content}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1">
                      {developer.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="px-2 py-0.5 bg-white text-blue-600 rounded-full text-xs font-medium border border-blue-200 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </CardContent>
    </Card>
  )
}